"use client";

import { Home, Menu, Leaf, GraduationCap, LandPlot } from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "./ui/sheet";
import { Logo } from "./logo";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Início", icon: Home },
  { href: "/plantas", label: "Guia de Plantas", icon: Leaf },
  { href: "/quiz", label: "Quiz de Aprendizado", icon: GraduationCap },
  {
    href: "/como-construir-sua-horta",
    label: "Criando sua Horta",
    icon: LandPlot,
  },
];

export function Siderbar() {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant={"ghost"}
          size={"icon"}
          className="hover:bg-gray-100"
          aria-label="Abrir menu lateral com links de navegação"
        >
          <Menu className="h-6 w-6 text-gray-700" />
        </Button>
      </SheetTrigger>

      <SheetContent>
        <SheetTitle className="flex items-center mt-4 justify-center border-b pb-4 mb-4">
          <Logo />
        </SheetTitle>

        <nav className="mx-4">
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <SheetClose asChild>
                    <Link
                      aria-label={"Ir para " + link.label}
                      href={link.href}
                      className={`
                        rounded-lg p-3 flex items-center gap-4 transition-all duration-200 
                        font-medium text-lg
                        ${
                          isActive
                            ? "bg-green-100 text-green-800 shadow-sm"
                            : "text-gray-700 hover:bg-gray-50 hover:text-green-700"
                        }
                      `}
                    >
                      <link.icon
                        className={`
                          ${
                            isActive
                              ? "h-6 w-6 text-green-600"
                              : "h-5 w-5 text-gray-500"
                          }
                          flex-shrink-0
                        `}
                      />
                      <span>{link.label}</span>
                    </Link>
                  </SheetClose>
                </li>
              );
            })}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
