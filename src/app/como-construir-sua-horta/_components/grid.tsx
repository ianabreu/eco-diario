import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export function Grid({
  children,
  className,
  ...rest
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <div
      className={cn("grid grid-cols-1 lg:grid-cols-2 gap-2", className)}
      {...rest}
    >
      {children}
    </div>
  );
}
