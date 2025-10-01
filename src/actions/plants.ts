"use server";
import { Plant } from "@/generated/prisma";
import prisma from "@/lib/prisma";
export type PlantsSummary = Pick<Plant, "id" | "name" | "image_url">;

interface GetPlantSummaryProps {
  search?: string;
  limit?: number;
  page?: number;
}
export async function getPlantsSummary({
  search,
  limit = 8,
  page = 1,
}: GetPlantSummaryProps) {
  if (page < 1) page = 1;
  if (limit < 1) limit = 8;
  if (limit > 32) limit = 32;
  const offset = (page - 1) * limit;

  try {
    const [plants, total] = await Promise.all([
      prisma.plant.findMany({
        where: { name: { contains: search, mode: "insensitive" } },
        orderBy: { name: "asc" },
        skip: offset,
        take: limit,
        select: { id: true, image_url: true, name: true },
      }),

      prisma.plant.count({
        where: { name: { contains: search, mode: "insensitive" } },
      }),
    ]);

    const last_page = Math.ceil(total / limit);
    return {
      data: plants,
      meta: {
        total,
        last_page,
        current_page: page,
        has_next_page: page < last_page,
        has_previous_page: page > 1,
      },
    };
  } catch (error) {
    console.log(error);
    throw new Error("Erro ao buscar dados");
  }
}
export async function getPlantDetails(plantId: string) {
  const plant = await prisma.plant.findUnique({
    where: { id: plantId },
    include: { plantInfo: true },
  });

  return plant;
}
