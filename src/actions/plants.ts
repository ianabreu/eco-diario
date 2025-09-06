"use server";
import prisma from "@/lib/prisma";
import { PlantSummary, PlantWithQualitiesAndSteps } from "@/types";

export async function getPlantsSummary(): Promise<PlantSummary[]> {
  const plants = await prisma.plant.findMany({
    select: { id: true, image: true, name: true },
  });
  return plants;
}
export async function getPlantDetails(
  plantId: string
): Promise<PlantWithQualitiesAndSteps | null> {
  const plant = await prisma.plant.findUnique({
    where: { id: plantId },
    include: { qualities: true, steps: true },
  });
  return plant;
}
