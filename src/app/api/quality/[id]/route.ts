import { NextResponse } from "next/server";
import { prismaClient } from "@/lib/prisma";

export async function GET() {
  const products = await prismaClient.plant.findMany({
    orderBy: { id: "asc" },
    include: { qualities: true, steps: true },
  });

  return NextResponse.json(products);
}
