"use server";
import prisma from "@/lib/prisma";

export async function getPlantsSummary() {
  const plants = await prisma.plant.findMany({
    select: { id: true, image_url: true, name: true },
  });
  return plants;
}
export async function getPlantDetails(plantId: string) {
  const plant = await prisma.plant.findUnique({
    where: { id: plantId },
    include: { plantInfo: true },
  });

  return plant;
}
