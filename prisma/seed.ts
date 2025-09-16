import { PrismaClient } from "../src/generated/prisma";
import { plantsSeed } from "./plantData";

const prisma = new PrismaClient();
export async function main() {
  for (const plant of plantsSeed) {
    await prisma.plant.create({ data: plant });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
