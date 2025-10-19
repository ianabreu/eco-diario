import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" draggable={false}>
      <div draggable={false} className="flex flex-row items-center gap-2">
        <Image
          draggable={false}
          src={"/imagens/logo.svg"}
          width={0}
          height={0}
          sizes="100vw"
          alt="Eco Diário Logotipo"
          className="object-contain w-full h-full max-w-[180px]"
        />
      </div>
    </Link>
  );
}
