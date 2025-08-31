import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" draggable={false}>
      <div draggable={false} className="flex flex-row items-center gap-2">
        <Image
          draggable={false}
          src={"/icon.png"}
          width={48}
          height={48}
          alt="Logo do site"
        />
        <span draggable={false} className="font-bold text-base select-none">
          EcoDiário
        </span>
      </div>
    </Link>
  );
}
