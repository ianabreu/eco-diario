import { Section } from "@/components/section";
import Link from "next/link";
import { ImageCard } from "@/components/image-card";
import { prismaClient } from "@/lib/prisma";
import { Title } from "@/components/title";

export default async function PlantsPage() {
  const plants = await prismaClient.plant.findMany({
    orderBy: { id: "asc" },
    select: { id: true, name: true, image: true },
  });

  return (
    <Section>
      <Title>Plantas Ideais</Title>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
        {plants.map((plant) => (
          <Link
            key={plant.id}
            href={`/plantas/${plant.id}`}
            className="hover:scale-105 transition-all bg-white hover:bg-primary/30 shadow-lg rounded-lg flex flex-col p-2 gap-2 items-center"
          >
            {plant.image && (
              <ImageCard alt={plant.name} src={plant.image} aspectRatio={1} />
            )}
            <p className="font-medium text-base">{plant.name}</p>
          </Link>
        ))}
      </div>
    </Section>
  );
}
