import { skills } from "@/constant/constant";
import React from "react";

const About = () => {
  return (
    <section id="about" className="mt-8 space-y-8 grid grid-cols-1 justify-center items-center w-full max-lg:pl-10 max-lg:pr-10 pl-20 pr-20 min-h-[40vh] xl:min-h-[50vh] bg-[var(--color-primary)] xl:grid-cols-2 text-[var(--color-text-primary)] pb-7 pt-8">
      <div className="space-y-4">
        <h1 className="text-3xl max-lg:text-2xl">Sobre Dra. Mitiele Lopes</h1>
        <p className="text-xl max-lg:text-lg">
          Advogada formada pela UniRitter, com formação especializada em Gestão
          Judicial de Conflitos, Direito do Trabalho e Processo do Trabalho.
        </p>
        <p className="text-xl max-lg:text-lg">
          Com ampla experiência em processos judiciais e extrajudiciais na área
          Trabalhista, garantimos a proteção e a defesa dos seus direitos.
        </p>
      </div>
      <ul className="xl:flex xl:flex-col space-y-6 items-center grid grid-cols-2 max-md:grid-cols-1 text-justify md:text-start ">
        {skills.map((skill) => {
          return (
            <li key={skill.id} className="flex gap-6 items-center xl:w-3/5">
              <img src={skill.image} alt="" className="w-10 h-12 object-contain flex-shrink-0"/>
              <div>
                <h3 className="text-xl max-lg:text-lg">{skill.title}</h3>
                <p className="max-sm:text-start">{skill.description}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default About;
