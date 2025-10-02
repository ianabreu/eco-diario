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
    <Section className="mt-4">
      <div className="flex gap-4 flex-col md:flex-row-reverse items-center ">
        {plant.image_url && (
          <div className="h-64 w-full rounded-xl shadow overflow-hidden max-w-96">
            <Image
              src={plant.image_url}
              alt={plant.name}
              width={0}
              height={0}
              sizes="100vw"
              className="object-cover w-full h-full"
            />
          </div>
        )}
        <div className="text-center flex flex-col justify-center items-center h-full gap-2">
          <Title as="h1">{plant.name}</Title>
          <p className="italic text-gray-600">{plant.scientificName}</p>
          <Title as="h3">Descrição</Title>
          <p className="text-lg">{plant.description}</p>
        </div>
      </div>
      <div className="flex flex-col gap-4 items-center mt-2">
        <Title as="h3" className="">
          Como Plantar
        </Title>
        <p className="mt-2 text-lg text-left">{plant.howToPlant}</p>
        <Title as="h3" className="">
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
