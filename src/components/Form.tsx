import React, { useState } from "react";
import { Button } from "./ui/button";
import { Send } from "lucide-react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você implementaria o envio do email
    // Por exemplo, usando um serviço como EmailJS ou uma API própria
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col xl:h-full space-y-6 bg-[var(--color-secondary)] p-5 rounded-md w-full"
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-lg md:text-xl font-medium mb-2">
            Nome Completo *
          </label>
          <input
            id="name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Seu nome completo"
            className="bg-[#F6F6F6] text-[#565656] rounded-md p-1 w-full pl-4"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-lg md:text-xl font-medium mb-2">
            Telefone *
          </label>
          <input
            id="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            placeholder="(11) 99999-9999"
            className="bg-[#F6F6F6] text-[#565656] rounded-md p-1 w-full pl-4"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-lg md:text-xl font-medium mb-2">
          Email *
        </label>
        <input
          id="email"
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="seu@email.com"
          className="bg-[#F6F6F6] text-[#565656] rounded-md p-1 w-full  pl-4"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-lg md:text-xl font-medium mb-2">
          Assunto *
        </label>
        <input
          id="subject"
          type="text"
          required
          value={formData.subject}
          onChange={(e) =>
            setFormData({ ...formData, subject: e.target.value })
          }
          placeholder="Qual o assunto do seu caso?"
          className="bg-[#F6F6F6] text-[#565656] rounded-md p-1 w-full pl-4"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-lg md:text-xl font-medium mb-2">
          Mensagem *
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          placeholder="Descreva seu caso com detalhes..."
          className="bg-[#F6F6F6] text-[#565656] rounded-md p-1 w-full pl-4 resize-none"
        />
      </div>

      <p className="text-sm text-gray-500">
        * Campos obrigatórios.
      </p>

      <Button
        type="submit"
        className="w-full bg-[var(--color-accent-dark)] hover:cursor-pointer text-white py-3 space-x-1"
        size="lg"
      >
        <Send />
        <span>Enviar Mensagem</span>
      </Button>
    </form>
  );
};

export default Form;
