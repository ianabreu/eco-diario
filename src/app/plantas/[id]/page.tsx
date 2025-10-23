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
    <Section className="p-4 md:p-8 min-h-screen">
      <div className="flex flex-col md:flex-row-reverse md:gap-8 gap-6 items-start mb-10">
        {plant.image_url && (
          <div className="w-full md:w-1/3 flex-shrink-0">
            <div className="aspect-square w-full rounded-2xl shadow-xl overflow-hidden">
              <Image
                src={plant.image_url}
                alt={plant.name}
                width={500}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        )}

        <div className="w-full md:w-2/3 flex flex-col justify-start items-start">
          <Title
            as="h1"
            className="text-3xl md:text-4xl font-extrabold mb-1 text-gray-800"
          >
            {plant.name}
          </Title>
          <p className="italic text-lg text-green-700 font-medium mb-4">
            {plant.scientificName}
          </p>

          <h3 className="text-xl font-semibold mb-2 mt-4 text-gray-700">
            Descrição
          </h3>
          <p className="text-base leading-relaxed text-gray-600">
            {plant.description}
          </p>
        </div>
      </div>

      <div className="my-8 p-6 bg-green-50 rounded-xl border-l-4 border-green-500 shadow-md">
        <Title as="h2" className="text-2xl font-bold mb-4 text-green-700">
          🌱 Como Plantar
        </Title>
        <p className="text-base leading-relaxed text-gray-700 whitespace-pre-line">
          {plant.howToPlant}
        </p>
      </div>

      <div className="mt-8">
        <Title as="h2" className="text-2xl font-bold mb-6 text-gray-800">
          Informações Gerais
        </Title>
        <PlantDetailCard info={plant.plantInfo} />
      </div>

      {plant.tips && (
        <div className="mt-10 bg-yellow-50 p-5 rounded-xl border-l-4 border-yellow-500 text-gray-800 shadow-md">
          <h3 className="font-bold text-xl mb-1 text-yellow-800">
            💡 Dica Rápida
          </h3>
          <p className="text-base">{plant.tips}</p>
        </div>
      )}
    </Section>
  );
}
