import { contactInfo } from "@/constant/constant";
import React from "react";
import CardContact from "../CardContact";
import Form from "../Form";

const Contact = () => {
  return (
    <div
      id="contact"
      className="bg-[var(--color-primary)] space-y-8 justify-between items-center w-full max-lg:pl-10 max-lg:pr-10 pl-20 pr-20 text-[var(--color-text-primary)] pb-7 pt-8"
    >
      <div className="flex justify-between gap-24">
        <div className="space-y-5 xl:flex xl:flex-col w-full xl:w-auto">
          <h3 className="text-3xl max-lg:text-2xl">Entre em Contato</h3>
          <p className="text-xl max-lg:text-lg">
            Precisa de ajuda jurídica? Entre em contato e agende sua consulta
            gratuita.
          </p>
          <Form />
        </div>
        <div className="max-xl:hidden flex-shrink-0">
            <img src="/contact/adv-contact.png" alt="" className="rounded "/>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-5 justify-center items-center">
        {contactInfo.map((contact) => {
          return <CardContact key={contact.id} contact={contact} />;
        })}
      </div>
    </div>
  );
};

export default Contact;
