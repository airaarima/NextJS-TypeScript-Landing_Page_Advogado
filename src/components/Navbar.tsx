import React from "react";
import { navLinks } from "../../constant/constant";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button"

const Navbar = () => {
  return (
    <nav className="w-full h-[10vh] z-[100] border-b border-b-[#2B2B2B] pl-20 pr-20">
      <div className="flex items-center h-full justify-between">
        {/* Logo */}
        <div className="flex items-center ">
            <Image
                aria-hidden
                src="/navbar/law.png"
                alt="Logo icon"
                width={48}
                height={48}
              />
              <h1 className="ml-[10px] text-2xl font-[--font-playfair] font-semibold ">Dra. Mitiele Lopes</h1>
        </div>
        {/* NavLinks */}
        <div className="text-sm flex items-center space-x-10">
          {navLinks.map((link) => {
            return (
              <Link href={link.url} key={link.id} className="">
                <p>{link.label}</p>
              </Link>
            );
          })}
        </div>
        {/* Button */}
        <Button variant="outline" h>Consulta Gratuita</Button>
      </div>
    </nav>
  );
};

export default Navbar;
