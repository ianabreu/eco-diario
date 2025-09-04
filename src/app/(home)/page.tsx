import { Section } from "@/components/section";
import { Card, LinkType } from "./_components/card";
import { Title } from "@/components/title";

export default function Home() {
  const links: LinkType[] = [
    {
      href: "/quiz",
      label: "Teste seus conhecimentos",
      content: "Quiz interativo para aprender sobre sustentabilidade",
      color: "green",
    },
    {
      href: "/como-construir-sua-horta",
      label: "Como construir sua Horta",
      content:
        "Criar uma horta é mais simples do que parece. Siga estes passos para começar seu espaço verde.",
      color: "blue",
    },
    {
      href: "/plantas",
      label: "Plantas Ideais",
      content:
        "Vegetais e ervas que são fáceis de cuidar, crescem rapidamente e produzem bem.",
      color: "red",
    },
  ];
  return (
    <Section>
      <Title as="h1">Bem Vindo ao EcoDiário!</Title>
      <p className="text-sm">Seu guia diário para um futuro mais verde.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {links.map((link) => (
          <Card key={link.content} link={link} />
        ))}
      </div>
    </Section>
  );
}
