import React, { useRef, useState } from "react";
import { Button } from "./ui/button";
import { CheckCircle, Send, X } from "lucide-react";
import { FormErrors } from "@/types/FormErrors";
import { formatPhone, validateEmail, validatePhone } from "@/utils/formUtils";
import emailjs from "@emailjs/browser";

const Form = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Limites de caracteres
  const LIMITS = {
    name: 100,
    subject: 150,
    message: 1000,
  };

  const DEFAULT_PLACEHOLDERS = {
    name: "Seu nome completo",
    email: "seu@email.com",
    phone: "(11) 99999-9999",
    subject: "Qual o assunto do seu caso?",
    message: "Descreva seu caso com detalhes...",
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Validação do nome (apenas limite de caracteres e campo obrigatório)
    if (!formData.name.trim()) {
      newErrors.name = "Nome é obrigatório";
    } else if (formData.name.length > LIMITS.name) {
      newErrors.name = `Nome deve ter no máximo ${LIMITS.name} caracteres`;
    }

    // Validação do email
    if (!formData.email.trim()) {
      newErrors.email = "Email é obrigatório";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Email inválido";
    }

    // Validação do telefone
    if (!formData.phone.trim()) {
      newErrors.phone = "Telefone é obrigatório";
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "Telefone inválido (ex: (11) 99999-9999)";
    }

    // Validação do assunto
    if (!formData.subject.trim()) {
      newErrors.subject = "Assunto é obrigatório";
    } else if (formData.subject.length > LIMITS.subject) {
      newErrors.subject = `Assunto deve ter no máximo ${LIMITS.subject} caracteres`;
    }

    // Validação da mensagem
    if (!formData.message.trim()) {
      newErrors.message = "Mensagem é obrigatória";
    } else if (formData.message.length > LIMITS.message) {
      newErrors.message = `Mensagem deve ter no máximo ${LIMITS.message} caracteres`;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = async (): Promise<boolean> => {
    if (!formRef.current) return false;

    try {
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
        }
      );

      console.log("Email enviado com sucesso!", result.text);
      return true;
    } catch (error) {
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      try {
        const emailSent = await sendEmail();

        if (emailSent) {
          // Limpa o formulário
          setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          });
          setErrors({});

          // Mostra mensagem de sucesso
          setShowSuccessMessage(true);

          // Remove a mensagem após 5 segundos
          setTimeout(() => {
            setShowSuccessMessage(false);
          }, 5000);
        }
      } catch (error) {
        console.error("Erro ao enviar formulário:", error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handlePhoneChange = (value: string) => {
    const formatted = formatPhone(value);
    setFormData({ ...formData, phone: formatted });

    if (errors.phone) {
      setErrors({ ...errors, phone: undefined });
    }
  };

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData({ ...formData, [field]: value });

    if (errors[field]) {
      setErrors({ ...errors, [field]: undefined });
    }
  };

  const getPlaceholder = (field: keyof typeof DEFAULT_PLACEHOLDERS) => {
    return errors[field] || DEFAULT_PLACEHOLDERS[field];
  };

  const getInputClassName = (field: keyof FormErrors, hasValue: boolean) => {
    let baseClass = "bg-[#F6F6F6] rounded-md p-1 w-full pl-4";

    if (field === "message") {
      baseClass += " resize-none";
    }

    if (errors[field]) {
      // Se tem erro e não tem valor, placeholder fica vermelho
      if (!hasValue) {
        baseClass += " border-2 border-red-500 placeholder-red-500";
      } else {
        // Se tem erro mas tem valor, apenas a borda fica vermelha
        baseClass += " border-2 border-red-500 text-[#565656]";
      }
    } else {
      baseClass += " text-[#565656]";
    }

    return baseClass;
  };

  return (
    <div className="xl:h-full w-full">
      {/* Toast de Sucesso */}
      {showSuccessMessage && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-green-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center space-x-2 max-w-xs w-full mx-auto sm:max-w-md">
          <CheckCircle size={20} className="flex-shrink-0" />
          <span className="text-sm sm:text-base">
            Mensagem enviada com sucesso!
          </span>
          <button
            onClick={() => setShowSuccessMessage(false)}
            className="ml-auto hover:bg-green-600 rounded p-1 flex-shrink-0"
          >
            <X size={16} />
          </button>
        </div>
      )}
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col xl:h-full space-y-6 bg-[var(--color-secondary)] p-5 rounded-md w-full"
      >
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="name"
              className="block text-lg md:text-xl font-medium mb-2"
            >
              Nome Completo *
            </label>
            <input
              id="name"
              name="user_name"
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              placeholder={getPlaceholder("name")}
              maxLength={LIMITS.name}
              className={getInputClassName("name", !!formData.name)}
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-lg md:text-xl font-medium mb-2"
            >
              Telefone *
            </label>
            <input
              id="phone"
              name="user_phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handlePhoneChange(e.target.value)}
              placeholder={getPlaceholder("phone")}
              className={getInputClassName("phone", !!formData.phone)}
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-lg md:text-xl font-medium mb-2"
          >
            Email *
          </label>
          <input
            id="email"
            name="user_email"
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            placeholder={getPlaceholder("email")}
            className={getInputClassName("email", !!formData.email)}
          />
        </div>
        <div>
          <label
            htmlFor="subject"
            className="block text-lg md:text-xl font-medium mb-2"
          >
            Assunto *
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            value={formData.subject}
            onChange={(e) => handleInputChange("subject", e.target.value)}
            placeholder={getPlaceholder("subject")}
            maxLength={LIMITS.subject}
            className={getInputClassName("subject", !!formData.subject)}
          />
          <p className="text-xs text-gray-400 mt-1">
            {formData.subject.length}/{LIMITS.subject} caracteres
          </p>
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-lg md:text-xl font-medium mb-2"
          >
            Mensagem *
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={(e) => handleInputChange("message", e.target.value)}
            placeholder={getPlaceholder("message")}
            maxLength={LIMITS.message}
            className={getInputClassName("message", !!formData.message)}
          />
          <p className="text-xs text-gray-400 mt-1">
            {formData.message.length}/{LIMITS.message} caracteres
          </p>
        </div>
        <p className="text-sm text-gray-500">* Campos obrigatórios.</p>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[var(--color-accent-dark)] hover:cursor-pointer text-white py-3 space-x-1 disabled:opacity-50 disabled:cursor-not-allowed"
          size="lg"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
              <span>Enviando...</span>
            </>
          ) : (
            <>
              <Send />
              <span>Enviar Mensagem</span>
            </>
          )}
        </Button>
      </form>
    </div>
  );
};

export default Form;
