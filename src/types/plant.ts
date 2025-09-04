import { Plant, Quality, Step } from "@/generated/prisma";

export interface PlantWithQualitiesAndSteps extends Omit<Plant, "id"> {
  qualities: Omit<Quality, "id">[];
  steps: Omit<Step, "id">[];
}
export type PlantSummary = Pick<Plant, "id" | "name" | "image">;
