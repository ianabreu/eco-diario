import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  size?: "md" | "lg";
}

export function Title({
  size = "lg",
  children,
  className,
  ...rest
}: TitleProps) {
  return (
    <h2
      className={cn(
        "font-bold text-center my-4",
        size === "md" ? "text-lg" : "text-xl",
        className
      )}
      {...rest}
    >
      {children}
    </h2>
  );
}
