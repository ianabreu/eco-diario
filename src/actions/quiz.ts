"use server";
import { Question, Alternative } from "@/generated/prisma";
import prisma from "@/lib/prisma";
export interface QuestionWithAlternativeProps extends Question {
  alternatives: Alternative[];
}
export async function getQuestions(
  numQuestions: number
): Promise<QuestionWithAlternativeProps[]> {
  const total = await prisma.question.count();
  if (total === 0) return [];
  const amount = Math.min(numQuestions, total);
  const allIds = await prisma.question.findMany({
    select: { id: true },
  });
  const shuffled = allIds.sort(() => 0.5 - Math.random());
  const selectedIds = shuffled.slice(0, amount).map((q) => q.id);
  const questions = await prisma.question.findMany({
    where: { id: { in: selectedIds } },
    include: { alternatives: true },
  });
  const result = questions.map((q) => ({
    ...q,
    alternatives: q.alternatives.sort(() => 0.5 - Math.random()),
  }));
  return result;
}
