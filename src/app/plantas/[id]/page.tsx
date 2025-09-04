export const dynamic = "force-dynamic";
import { Section } from "@/components/section";
import { Title } from "@/components/title";
import { prismaClient } from "@/lib/prisma";
import Image from "next/image";
import { redirect, RedirectType } from "next/navigation";

interface PlantPageProps {
  params: Promise<{ id: string }>;
}
export default async function PlantPage({ params }: PlantPageProps) {
  const id: number = Number((await params).id);
  if (isNaN(id)) {
    redirect("/plantas", RedirectType.replace);
  }
  const plant = await prismaClient.plant.findUnique({
    where: { id },
    include: { qualities: true, steps: true },
  });
  if (plant === null) {
    redirect("/plantas", RedirectType.replace);
  }
  return (
    // <Section>
    //   {plant.image && (
    //     <Image
    //       src={plant.image}
    //       alt={plant.name}
    //       width={0}
    //       height={0}
    //       sizes="100vw"
    //       className="object-contain w-full h-full max-h-64"
    //     />
    //   )}
    //   <Title as="h1" className="text-center">
    //     {plant.name}
    //   </Title>
    //   <Title as="h2" size="small" className="font-medium italic text-center">
    //     {plant.scientificName}
    //   </Title>
    //   <p className="">{plant.shortDescription}</p>
    //   <Title as="h3" size="medium">
    //     Por que é Ideal para Sua Horta:
    //   </Title>
    //   <ul className="list-disc ml-4">
    //     {plant.qualities.map((quality) => (
    //       <li key={quality.id}>
    //         <strong>{quality.title}</strong>: {quality.description}
    //       </li>
    //     ))}
    //   </ul>
    //   <Title as="h3" size="medium">
    //     Como Plantar (Dicas Práticas):
    //   </Title>
    //   <ul className="list-disc ml-4">
    //     {plant.steps.map((step) => (
    //       <li key={step.id}>
    //         <strong>{step.title}</strong>: {step.description}
    //       </li>
    //     ))}
    //   </ul>
    //   <h3 className="font-bold text-lg">Curiosidade / Dica Extra: </h3>
    //   <p className="">{plant.tip}</p>
    // </Section>
    <Section>
      {plant.image && (
        <Image
          src={plant.image}
          alt={plant.name}
          width={800}
          height={400}
          className="object-cover w-full h-64 rounded-xl shadow"
        />
      )}

      <div className="text-center mt-4">
        <Title as="h1">{plant.name}</Title>
        <p className="italic text-gray-600">{plant.scientificName}</p>
        <p className="mt-2 text-lg">{plant.shortDescription}</p>
      </div>

      {/* Ficha técnica */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6 bg-gray-50 p-4 rounded-xl">
        <div className="flex items-center gap-2">
          <span>☀️</span> <span>4h+ de sol</span>
        </div>
        <div className="flex items-center gap-2">
          <span>💧</span> <span>Rega frequente</span>
        </div>
        <div className="flex items-center gap-2">
          <span>⏳</span> <span>Colheita contínua</span>
        </div>
      </div>

      {/* Qualidades */}
      <Title as="h3" className="mt-8">
        Por que é ideal para sua horta
      </Title>
      <div className="grid gap-4 sm:grid-cols-2">
        {plant.qualities.map((quality) => (
          <div key={quality.id} className="bg-white p-4 rounded-xl shadow">
            <strong>{quality.title}</strong>
            <p className="text-sm text-gray-600">{quality.description}</p>
          </div>
        ))}
      </div>

      {/* Como plantar */}
      <Title as="h3" className="mt-8">
        Como plantar (dicas práticas)
      </Title>
      <ol className="relative border-l border-gray-200 ml-4">
        {plant.steps.map((step) => (
          <li key={step.id} className="mb-6 ml-4">
            <div className="absolute w-3 h-3 bg-green-600 rounded-full -left-1.5 mt-1.5" />
            <strong>{step.title}</strong>
            <p className="text-sm text-gray-600">{step.description}</p>
          </li>
        ))}
      </ol>

      {/* Curiosidade */}
      {plant.tip && (
        <div className="mt-8 bg-green-50 p-4 rounded-xl border-l-4 border-green-600">
          <h3 className="font-bold">🌿 Curiosidade / Dica Extra</h3>
          <p>{plant.tip}</p>
        </div>
      )}
    </Section>
  );
}
