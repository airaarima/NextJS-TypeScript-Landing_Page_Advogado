import React from "react";
import { Button } from "../ui/button";
import { Phone } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="home"
      className="mt-4 flex justify-center xl:justify-between w-full max-lg:pl-10 max-lg:pr-10 pl-20 pr-20 max-sm:min-h-[30vh] min-h-[20vh] lg:min-h-[30vh]"
    >
      <div className="flex flex-col justify-center md:pr-4">
        {/* Info */}
        <div className="h-full xl:w-full flex flex-col justify-center max-xl:items-center">
          <h1 className="max-md:text-3xl  text-4xl lg:text-5xl font-[--font-playfair]">
            Advocacia com
          </h1>
          <h1 className="max-md:text-3xl text-4xl lg:text-5xl font-[--font-playfair] text-[var(--color-accent)]">
            Execelência e Ética
          </h1>
          <p className="text-lg lg:text-xl max-xl:text-center">
            Compromisso e especialização na defesa de direitos trabalhistas.
          </p>
        </div>

        {/* Botões */}
        <div className="flex justify-center md:space-x-6 max-md:space-x-2">
          <Button
            variant="outline"
            className="max-sm:w-[145px] w-[168px] max-sm:text-xs bg-[var(--color-accent-dark)]"
          >
            <Phone />
            <a href="#contact">Consulta Gratuita</a>
          </Button>
          <Button asChild className="max-sm:w-[145px] w-[168px] max-sm:text-xs bg-[var(--color-accent-dark)] hover:cursor-pointer">
            <a
              href="https://wa.me/5551993426635?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20hor%C3%A1rio%20para%20conversarmos%20sobre%20meu%20caso%21"
              target="_blank"
              rel="noopener noreferrer"
            >
            <Image
              src="/hero/whatsapp.png"
              alt="Logo icon"
              width={16}
              height={16}
              aria-hidden
            />
            WhatsApp
            </a>
          </Button>
        </div>
      </div>

      {/* Imagem */}
      <div className="max-xl:hidden self-center">
        <img src="/hero/adv.png" alt="Foto de perfil" className="rounded" />
      </div>
    </section>
  );
};

export default Hero;
