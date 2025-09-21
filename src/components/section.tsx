import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

type SectionProps = HTMLAttributes<HTMLElement>;
export function Section({ children, className, ...rest }: SectionProps) {
  return (
    <section
      className={cn("bg-white p-2 rounded-lg shadow-md", className)}
      {...rest}
    >
      {children}
    </section>
  );
}
