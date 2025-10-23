"use client";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

type SectionProps = HTMLAttributes<HTMLElement>;
export function Section({ children, className, ...rest }: SectionProps) {
  useScrollToTop();
  return (
    <section
      className={cn("bg-whites p-2 rounded-lg shadow-mds", className)}
      {...rest}
    >
      {children}
    </section>
  );
}
