import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export function Col({
  children,
  className,
  ...rest
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <div className={cn("flex flex-col gap-4", className)} {...rest}>
      {children}
    </div>
  );
}
