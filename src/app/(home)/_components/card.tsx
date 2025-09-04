import { Title } from "@/components/title";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface CardProps {
  link: LinkType;
}
export interface LinkType {
  href: string;
  label: string;
  content: string;
  color: "green" | "blue" | "red";
}
export function Card({ link }: CardProps) {
  const borderColor =
    link.color === "green"
      ? "border-green-700"
      : link.color === "blue"
      ? "border-blue-700"
      : "border-red-700";
  const bgColor =
    link.color === "green"
      ? "bg-green-100"
      : link.color === "blue"
      ? "bg-blue-100"
      : "bg-red-100";
  const textColor =
    link.color === "green"
      ? "text-green-700"
      : link.color === "blue"
      ? "text-blue-700"
      : "text-red-700";
  return (
    <Link href={link.href}>
      <div
        className={cn(
          `rounded-lg min-h-28 flex flex-col items-center justify-center p-2 text-center border h-full`,
          `${bgColor} ${textColor} ${borderColor}`
        )}
      >
        <Title size="medium">{link.label}</Title>
        <p className="text-base">{link.content}</p>
      </div>
    </Link>
  );
}
