import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="py-10 lg:py-14 min-h-[200px] grid grid-cols-3 gap-6 items-center max-lg:pl-10 max-lg:pr-10 pl-20 pr-20 bg-[var(--color-accent-dark)] max-md:grid-cols-1">
        {/* 1ª coluna */}
        <div className="flex flex-col items-start space-y-1 max-md:justify-self-start">
          <div className="flex items-center flex-none">
            <div className="relative w-8 h-8 max-lg:w-6 max-lg:h-6">
              <Image src="/navbar/law.png" alt="Logo icon" fill aria-hidden />
            </div>
            <h1 className="ml-[10px] text-xl font-[--font-playfair] font-semibold max-lg:text-xl">
              Dra. Mitiele Lopes
            </h1>
          </div>
          <p>
            Compromisso e especialização na defesa de direitos trabalhistas.
          </p>
        </div>

        {/* 2ª coluna */}
        <div className="flex flex-col items-start space-y-1 justify-self-end max-md:justify-self-start">
            <h3>Contato</h3>
            <div className="flex justify-center space-x-2">
                <Phone/>
                <p>(51) 99342‑6635</p>
            </div>
            <div className="flex justify-center space-x-2">
                <Mail/>
                <p>mitiele.adv@gmail.com</p>
            </div>
        </div>

        {/* 3ª coluna */}
        <div className="flex flex-col items-start space-y-1 justify-self-end max-md:justify-self-start">
            <h3>Áreas de Atuação</h3>
            <ul className="list-disc pl-4">
                <li>Direito Civil</li>
                <li>Direito Trabalhista</li>
            </ul>
        </div>
    </footer>
  );
};

export default Footer;
