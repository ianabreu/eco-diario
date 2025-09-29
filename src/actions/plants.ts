"use server";
import { Plant } from "@/generated/prisma";
import prisma from "@/lib/prisma";
export type PlantsSummary = Pick<Plant, "id" | "name" | "image_url">;
export async function getPlantsSummary(
  query: string,
  limit: number = 8,
  offset: number = 0
): Promise<PlantsSummary[]> {
  try {
    const plants = await prisma.plant.findMany({
      where: { name: { contains: query, mode: "insensitive" } },
      orderBy: { name: "asc" },
      skip: offset,
      take: limit,
      select: { id: true, image_url: true, name: true },
    });
    return plants;
  } catch (error) {
    console.log(error);
    return [];
  }
}
export async function getPlantDetails(plantId: string) {
  const plant = await prisma.plant.findUnique({
    where: { id: plantId },
    include: { plantInfo: true },
  });

  return plant;
}
