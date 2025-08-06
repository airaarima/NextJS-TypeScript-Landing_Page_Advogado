import React from "react";
import { Button } from "../ui/button";
import { Phone } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="home" className="mt-4 flex justify-center md:justify-between w-full max-lg:pl-10 max-lg:pr-10 pl-20 pr-20 min-h-[30vh] lg:min-h-[40vh]">
      <div className="flex flex-col justify-center md:pr-4">
        {/* Info */}
        <div className="h-full flex flex-col justify-center max-md:items-center">
          <h1 className="max-md:text-3xl  text-4xl lg:text-5xl font-[--font-playfair]">
            Advocacia com
          </h1>
          <h1 className="max-md:text-3xl text-4xl lg:text-5xl font-[--font-playfair] text-[var(--color-accent)]">
            Execelência e Ética
          </h1>
          <p className="text-lg lg:text-xl max-md:text-center">
            Compromisso e especialização na defesa de direitos trabalhistas.
          </p>
        </div>

        {/* Botões */}
        <div className="flex justify-center md:space-x-6 max-md:space-x-2">
          <Button variant="outline" className="max-sm:w-[145px] w-[168px] max-sm:text-xs bg-[var(--color-accent-dark)]">
            <Phone/>
            <a href="#contact">Consulta Gratuita</a>
            </Button>
          <Button className="max-sm:w-[145px] w-[168px] max-sm:text-xs bg-[var(--color-accent-dark)] hover:cursor-pointer">
            <Image
            src="/hero/whatsapp.png"
              alt="Logo icon"
              width={16}
              height={16}
              aria-hidden
            />
            WhatsApp
            </Button>
        </div>
      </div>

      {/* Imagem */}
      <div className="max-md:hidden self-center">
        <img src="/hero/adv.png" alt="Foto de perfil" className="rounded" />
      </div>
    </section>
  );
};

export default Hero;
