import { NextResponse } from "next/server";
import { prismaClient } from "@/lib/prisma";
import { PlantWithQualitiesAndSteps } from "@/types/plant";

export async function GET() {
  const products = await prismaClient.plant.findMany({
    orderBy: { id: "asc" },
    include: { qualities: true, steps: true },
  });

  return NextResponse.json(products);
}

export async function POST(request: Request) {
  try {
    const data = (await request.json()) as PlantWithQualitiesAndSteps;

    const plant = await prismaClient.plant.create({
      data: {
        name: data.name,
        image: data.image,
        scientificName: data.scientificName,
        shortDescription: data.shortDescription,
        tip: data.tip,
        qualities: { createMany: { data: data.qualities } },
        steps: { createMany: { data: data.steps } },
      },
      include: { qualities: true, steps: true },
    });
    return NextResponse.json(plant);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 400 }
    );
  }
}
