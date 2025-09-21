import { getQuestions } from "@/actions/quiz";
import QuizClientComponent from "./_components/QuizClientComponent";

interface QuizPageProps {
  searchParams: Promise<{ num: string }>;
}
export default async function QuizPage({ searchParams }: QuizPageProps) {
  const { num } = await searchParams;
  const numQuestions = parseInt(num) || 10;
  const questions = await getQuestions(numQuestions);

  return <QuizClientComponent questions={questions} />;
}
