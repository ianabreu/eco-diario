-- CreateTable
CREATE TABLE "public"."plant" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "scientificName" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "howToPlant" TEXT NOT NULL,
    "tips" TEXT NOT NULL,
    "climate" TEXT NOT NULL,
    "germination" TEXT NOT NULL,

    CONSTRAINT "plant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."plant_info" (
    "id" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "plantId" TEXT NOT NULL,

    CONSTRAINT "plant_info_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."question" (
    "id" TEXT NOT NULL,
    "question" TEXT NOT NULL,

    CONSTRAINT "question_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."question_alternative" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "isCorrect" BOOLEAN NOT NULL DEFAULT false,
    "explanation" TEXT,
    "questionId" TEXT NOT NULL,

    CONSTRAINT "question_alternative_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."plant_info" ADD CONSTRAINT "plant_info_plantId_fkey" FOREIGN KEY ("plantId") REFERENCES "public"."plant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."question_alternative" ADD CONSTRAINT "question_alternative_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "public"."question"("id") ON DELETE CASCADE ON UPDATE CASCADE;
