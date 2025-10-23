import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" draggable={false} aria-label="Voltar à Tela Inicial">
      <div draggable={false} className="flex flex-row items-center">
        <Image
          draggable={false}
          src={"/imagens/logo.svg"}
          width={200}
          height={40}
          alt="Eco Diário Logotipo"
          className="object-contain w-auto h-10"
        />
      </div>
    </Link>
  );
}
