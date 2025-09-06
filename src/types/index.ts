import { Plant, Quality, Step } from "../generated/prisma";

type PlantSummary = Pick<Plant, "id" | "name" | "image">;

type PlantWithQualitiesAndSteps = Plant & {
  qualities: Quality[];
  steps: Step[];
};

export type { Plant, Quality, Step, PlantSummary, PlantWithQualitiesAndSteps };
