import { PrismaClient } from "../src/generated/prisma";
import { plantsSeed } from "./plantData";
import { questionsSeed } from "./questionsData";

const prisma = new PrismaClient();
export async function main() {
  for (const plant of plantsSeed) {
    await prisma.plant.create({ data: plant });
  }
  for (const question of questionsSeed) {
    await prisma.question.create({ data: question });
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
