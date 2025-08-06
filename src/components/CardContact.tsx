import { Copy, Mail, Phone, SquareArrowOutUpRight } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

type Props = {
  contact: Contact;
};

const CardContact: React.FC<Props> = ({ contact }) => {
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
        <p className="text-lg md:text-xl text-[var(--color-accent)]">{contact.subtitle}</p>
        <p className="text-sm">{contact.description}</p>
        <Button className="bg-[var(--color-accent-dark)] rounded-xl items-center justify-center h-6 text-sm">
          {contact.textButton}
        </Button>
      </div>
      <div className="max-[415px]:hidden flex gap-3 flex-shrink-0">
        <Copy className="max-sm:w-5 max-sm:h-5 hover:cursor-pointer"/>
        <SquareArrowOutUpRight className="max-sm:w-5 max-sm:h-5 hover:cursor-pointer"/>
      </div>
    </div>
  );
};

export default CardContact;
