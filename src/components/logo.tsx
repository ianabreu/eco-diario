import Image from "next/image";

export function Logo() {
  return (
    <div className="flex flex-row items-center gap-2">
      <Image src={"/icon.png"} width={48} height={48} alt="Logo do site" />
      <span className="font-bold text-base">EcoDiário</span>
    </div>
  );
}
