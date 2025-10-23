"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { Zap, Leaf, BookOpen } from "lucide-react";

interface CardProps {
  link: LinkType;
}

export interface LinkType {
  href: string;
  label: string;
  content: string;
  color: "green" | "blue" | "red";
}

const themeMap = {
  green: {
    icon: Leaf,
    bgColor: "bg-green-50",
    hoverBorder: "border-green-400",
    iconColor: "text-green-600",
  },
  blue: {
    icon: Zap,
    bgColor: "bg-green-50",
    hoverBorder: "border-green-400",
    iconColor: "text-green-600",
  },
  red: {
    icon: BookOpen,
    bgColor: "bg-green-50",
    hoverBorder: "border-green-400",
    iconColor: "text-green-600",
  },
};

export function Card({ link: { content, href, label, color } }: CardProps) {
  const theme = themeMap[color];
  const IconComponent = theme.icon;

  return (
    <Link href={href} className="w-full" aria-label={label}>
      <div
        className={cn(
          "rounded-xl border border-gray-100 p-6 shadow-md transition-all duration-300",
          "hover:shadow-lg hover:scale-[1.02] cursor-pointer",
          theme.bgColor,
          theme.hoverBorder,
          "group h-full flex flex-col justify-start gap-3"
        )}
      >
        <div
          className={cn(
            "p-2 rounded-full w-fit mb-2 transition-colors",
            theme.iconColor,
            "bg-white shadow-sm group-hover:bg-opacity-80"
          )}
        >
          <IconComponent size={24} />
        </div>

        <h2 className="text-xl font-bold text-gray-800 group-hover:text-primary transition-colors">
          {label}
        </h2>

        <p className="text-sm text-gray-600 flex-grow">{content}</p>

        <p className={cn("text-sm font-semibold mt-2", theme.iconColor)}>
          Acessar &rarr;
        </p>
      </div>
    </Link>
  );
}
