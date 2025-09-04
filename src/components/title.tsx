import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "small" | "medium" | "large";
}

export function Title({
  as: Tag = "h2",
  size = "large",
  children,
  className,
  ...rest
}: TitleProps) {
  return (
    <Tag
      className={cn(
        "font-bold",
        {
          small: "text-base",
          medium: "text-lg",
          large: "text-xl",
        }[size],
        className
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}
