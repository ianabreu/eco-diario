import { z } from "zod";

export const plantSchema = z.object({
  name: z.string().min(3, "O nome deve ter pelo menos 3 caracteres."),
  scientificName: z
    .string()
    .min(3, "O Nome Científico deve ter pelo menos 3 caracteres.")
    .optional(),
  image: z.string().optional(),
  shortDescription: z
    .string()
    .min(10, "O Nome Científico deve ter pelo menos 10 caracteres.")
    .optional(),
  tip: z
    .string()
    .min(10, "O Nome Científico deve ter pelo menos 10 caracteres.")
    .optional(),
});
