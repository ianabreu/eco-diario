import { NextResponse } from "next/server";
import { prismaClient } from "@/lib/prisma";

export async function GET() {
  const products = await prismaClient.plant.findMany({
    orderBy: { id: "asc" },
    include: { qualities: true, steps: true },
  });

  return NextResponse.json(products);
}
export async function POST(request: Request) {
  try {
    const { description, plantId, title } = (await request.json()) as {
      title: string;
      description: string;
      plantId: string;
    };

    if (title === "" || description === "") {
      return NextResponse.json(
        { error: "title e description são obrigatórios" },
        { status: 400 }
      );
    }
    const plant = await prismaClient.plant.findUnique({
      where: { id: parseInt(plantId) },
    });
    if (!plant) {
      return NextResponse.json(
        { error: "Planta não localizada" },
        { status: 400 }
      );
    }

    const quality = await prismaClient.quality.create({
      data: {
        title,
        description,
        plant: { connect: { id: parseInt(plantId) } },
      },
    });
    return NextResponse.json(quality);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 400 }
    );
  }
}
