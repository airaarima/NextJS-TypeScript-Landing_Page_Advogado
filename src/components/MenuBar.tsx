import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { AlignJustify } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {
  navLinks: NavLink[];
};

const MenuBar: React.FC<Props> = ({ navLinks }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <AlignJustify className="hover:cursor-pointer" size={35} />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        side="bottom"
        align="end"
        className="min-w-[180px] bg-[var(--color-primary)] text-[var(--color-text-primary)] mt-1 shadow-md rounded-md p-2 space-y-1 opacity-[.80]"
      >
        {navLinks.map((link) => {
          return (
            <DropdownMenuItem key={link.id} className="p-2 hover:bg-[var(--color-accent)] rounded-md focus:outline-none focus:ring-0">
              <Link href={link.url} className="w-full text-center block">
                <p>{link.label}</p>
              </Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MenuBar;
