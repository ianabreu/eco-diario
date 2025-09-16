import { getPlantDetails } from "@/actions/plants";
import { Section } from "@/components/section";
import { Title } from "@/components/title";
import Image from "next/image";
import { redirect, RedirectType } from "next/navigation";
import { PlantDetailHybrid as PlantDetailCard } from "../_components/PlantDetails";

interface PlantPageProps {
  params: Promise<{ id: string }>;
}
export default async function PlantPage({ params }: PlantPageProps) {
  const id = (await params).id;
  const plant = await getPlantDetails(id);
  if (plant === null) {
    redirect("/plantas", RedirectType.replace);
  }
  return (
    <Section>
      {plant.image_url && (
        <Image
          src={plant.image_url}
          alt={plant.name}
          width={800}
          height={400}
          className="object-cover w-full h-64 rounded-xl shadow"
        />
      )}
      <div className="text-center mt-4">
        <Title as="h1">{plant.name}</Title>
        <p className="italic text-gray-600">{plant.scientificName}</p>
        <Title as="h3" className="mt-8 mb-4">
          Descrição
        </Title>
        <p className="mt-2 text-lg">{plant.description}</p>
        <Title as="h3" className="mt-8 mb-4">
          Como Plantar
        </Title>
        <p className="mt-2 text-lg text-left">{plant.howToPlant}</p>
        <Title as="h3" className="mt-8 mb-4">
          Informações Gerais
        </Title>
        <PlantDetailCard info={plant.plantInfo} />
      </div>

      {plant.tips && (
        <div className="mt-8 bg-green-50 p-4 rounded-xl border border-green-700 text-green-700">
          <h3 className="font-bold">🌿 Curiosidade</h3>
          <p>{plant.tips}</p>
        </div>
      )}
    </Section>
  );
}
