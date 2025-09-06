-- CreateTable
CREATE TABLE "public"."plants" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "scientificName" TEXT,
    "image" TEXT,
    "shortDescription" TEXT,
    "tip" TEXT,

    CONSTRAINT "plants_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."qualities" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "plantId" TEXT NOT NULL,

    CONSTRAINT "qualities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."steps" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "plantId" TEXT NOT NULL,

    CONSTRAINT "steps_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."qualities" ADD CONSTRAINT "qualities_plantId_fkey" FOREIGN KEY ("plantId") REFERENCES "public"."plants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."steps" ADD CONSTRAINT "steps_plantId_fkey" FOREIGN KEY ("plantId") REFERENCES "public"."plants"("id") ON DELETE CASCADE ON UPDATE CASCADE;
