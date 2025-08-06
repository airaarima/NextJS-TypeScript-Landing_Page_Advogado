import { services } from "@/constant/constant";
import React from "react";
import CardService from "../CardService";

const Services = () => {
  return (
    <section
      id="services"
      className="space-y-8 justify-center items-center w-full max-lg:pl-10 max-lg:pr-10 pl-20 pr-20 text-[var(--color-text-primary)] pb-7 pt-8"
    >
      {/* Título e descrição */}
      <div className="flex flex-col items-center space-y-4">
        <h3 className="text-3xl text-[var(--color-accent)] max-lg:text-2xl">
          Áreas de Atuação
        </h3>
        <p className="text-xl max-lg:text-lg text-center">
          Oferecemos serviços jurídicos especializados com foco no atendimento humanizado e soluções práticas. Conhecimento atualizado e dedicação total ao seu caso.
        </p>
      </div>

      {/* Cards serviços */}
      <div className="flex flex-col lg:flex-row gap-5 justify-center items-center">
        {services.map((service) => {
          return <CardService infos={service} key={service.id}/>;
        })}
      </div>
    </section>
  );
};

export default Services;
