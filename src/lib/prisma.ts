import { PrismaClient } from "@/generated/prisma";

let prisma: PrismaClient;

if (process.env.NODE_ENV !== "production") {
  prisma = new PrismaClient();
} else {
  prisma = {} as PrismaClient;
}

export { prisma as prismaClient };
