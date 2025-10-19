import { Section } from "@/components/section";
import { Card, LinkType } from "./_components/card";
import { Title } from "@/components/title";
import { Zap } from "lucide-react";

export default function Home() {
  const links: LinkType[] = [
    {
      href: "/quiz",
      label: "Teste seu Conhecimento",
      content:
        "Descubra o quanto você sabe com nosso quiz interativo sobre sustentabilidade e práticas ecológicas.",
      color: "blue",
    },
    {
      href: "/como-construir-sua-horta",
      label: "Guia Rápido de Horta",
      content:
        "Passos essenciais para planejar e montar sua horta em casa, do zero, em qualquer espaço.",
      color: "red",
    },
    {
      href: "/plantas",
      label: "Catálogo de Plantas",
      content:
        "Conheça vegetais e ervas ideais para iniciantes, com dicas de cultivo e manejo.",
      color: "green",
    },
  ];

  return (
    <Section>
      <div className="text-center py-12 mb-8 bg-gray-100 rounded-xl shadow-inner">
        <Title
          as="h1"
          size="large"
          className="text-4xl font-extrabold text-gray-800"
        >
          Bem-vindo ao <span className="text-green-600">EcoDiário!</span>
        </Title>
        <p className="text-lg text-gray-600 mt-2">
          Seu guia para cultivar práticas sustentáveis, um passo de cada vez.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Explore as Principais Trilhas:
      </h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {links.map((link) => (
          <Card key={link.href} link={link} />
        ))}
      </div>

      <div className="mt-12 p-6 bg-blue-50 border-l-4 border-blue-400 rounded-lg shadow-sm flex items-center justify-center">
        <p className="text-lg font-medium text-blue-800 flex items-center">
          <Zap className="h-6 w-6 mr-3 text-blue-500" />
          Cada pequena ação conta. Comece sua jornada verde agora!
        </p>
      </div>
    </Section>
  );
}
