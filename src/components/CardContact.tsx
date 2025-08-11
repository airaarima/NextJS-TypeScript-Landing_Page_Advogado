import {
  CheckCircle,
  Copy,
  Mail,
  Phone,
  SquareArrowOutUpRight,
  X,
} from "lucide-react";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { openEmailClient } from "@/utils/emailUtils";

type Props = {
  contact: Contact;
};

const CardContact: React.FC<Props> = ({ contact }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(contact.subtitle);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

   const handleButtonClick = () => {
    if (contact.type === "email") {
      openEmailClient(
        contact.subtitle,
        "Consulta Jurídica",
        "Olá Dra. Mitiele,\n\nVim através do seu site e gostaria de agendar uma consulta.\n\nAguardo seu retorno.\n\nAtenciosamente."
      );
    } else if (contact.link) {
      window.open(contact.link, '_blank');
    }
  };

  return (
    <div className="flex items-start bg-[var(--color-secondary)] p-5 rounded-lg shadow-md w-full">
      <div className="flex-shrink-0 mr-5 max-md:mr-3">
        {contact.type === "phone" && (
          <Phone className="w-8 h-8 lg:w-10 lg:h-10" />
        )}
        {contact.type === "email" && (
          <Mail className="w-8 h-8 lg:w-10 lg:h-10" />
        )}
      </div>
      <div className="flex-1 space-y-3">
        <h4>{contact.title}</h4>
        <p className="text-lg md:text-xl text-[var(--color-accent)]">
          {contact.subtitle}
        </p>
        <p className="text-sm">{contact.description}</p>
        <Button className="bg-[var(--color-accent-dark)] rounded-xl items-center justify-center h-6 text-sm">
          {contact.textButton}
        </Button>
      </div>
      <div className="max-[415px]:hidden flex gap-3 flex-shrink-0">
        <div className="relative">
          <Copy
            className="max-sm:w-5 max-sm:h-5 hover:cursor-pointer"
            onClick={handleCopy}
          />
          {copied && (
            <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-green-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center space-x-2 max-w-xs w-full mx-auto sm:max-w-md">
              <CheckCircle size={20} className="flex-shrink-0" />
              <span className="text-sm sm:text-base text-start">
                Copiado para a área de transferência!
              </span>
              <button
                onClick={() => setCopied(false)}
                className="ml-auto hover:bg-green-600 rounded p-1 flex-shrink-0"
              >
                <X size={16} />
              </button>
            </div>
          )}
        </div>

        <button onClick={handleButtonClick}>
          <SquareArrowOutUpRight className="max-sm:w-5 max-sm:h-5 hover:cursor-pointer" />
        </button>
      </div>
    </div>
  );
};

export default CardContact;
