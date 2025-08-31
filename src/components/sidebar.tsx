"use client";

import { Home, Menu, Cherry, Carrot, Lightbulb } from "lucide-react";
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
  { href: "/", label: "Tela Inicial", icon: Home },
  { href: "/quiz", label: "Teste seus conhecimentos", icon: Lightbulb },
  {
    href: "/como-construir-sua-horta",
    label: "Como construir sua Horta",
    icon: Carrot,
  },
  { href: "/plantas", label: "Plantas Ideais", icon: Cherry },
];

export function Siderbar() {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={"ghost"} size={"icon"}>
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetTitle className="flex items-center mt-4 justify-center">
          <Logo />
        </SheetTitle>
        <nav className="mx-4">
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <SheetClose asChild>
                  <Link
                    onClick={() => {}}
                    href={link.href}
                    className={`rounded-sm p-2 flex items-center gap-2 transition-all ${
                      pathname === link.href
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-primary/20 hover:text-foreground"
                    }`}
                  >
                    <link.icon
                      className={`${
                        pathname === link.href ? "h-5 w-5" : "h-4 w-4"
                      }`}
                    />

                    <span>{link.label}</span>
                  </Link>
                </SheetClose>
              </li>
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
