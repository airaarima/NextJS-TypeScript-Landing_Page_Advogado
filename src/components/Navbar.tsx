import React from "react";
import { navLinks } from "../constant/constant";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import MenuBar from "./MenuBar";

const Navbar = () => {
  return (
    <nav className="w-full max-lg:pl-10 max-lg:pr-10 h-[10vh] z-[100] border-b border-b-[#2B2B2B] pl-20 pr-20">
      <div className="flex items-center h-full justify-between">
        {/* Logo */}
        <div className="flex items-center flex-none">
          <div className="relative w-12 h-12 max-lg:w-10 max-lg:h-10">
            <Image
              src="/navbar/law.png"
              alt="Logo icon"
              fill
              aria-hidden
            />
          </div>
          <h1 className="ml-[10px] text-2xl font-[--font-playfair] font-semibold max-lg:text-xl">
            Dra. Mitiele Lopes
          </h1>
        </div>
        <div className="hidden lg:flex items-center space-x-10 flex-grow">
          {/* NavLinks */}
          <div className="flex justify-center w-full items-center space-x-10 text-sm">
            {navLinks.map((link) => {
              return (
                <Link href={link.url} key={link.id} className="">
                  <p className="relative group">
                    <span>{link.label}</span>
                    <span className="absolute -bottom-1 left-0 w-0 h-1 bg-[var(--color-accent)] transition-all group-hover:w-full rounded"></span>
                    </p>
                </Link>
              );
            })}
          </div>
          {/* Button */}
          <Button variant="outline">Consulta Gratuita</Button>
        </div>
        {/* Menu Mobile*/}
        <div className="hidden max-lg:flex">
          <MenuBar navLinks={navLinks} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
