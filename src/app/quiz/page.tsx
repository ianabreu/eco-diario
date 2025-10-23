"use client";
import { Section } from "@/components/section";
import { Title } from "@/components/title";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function QuizPage() {
  const router = useRouter();
  const MIN_QUESTIONS = 5;
  const MAX_QUESTIONS = 20;
  const DEFAULT_QUESTIONS = 10;

  const [numQuestions, setNumQuestions] = useState(DEFAULT_QUESTIONS);

  const handleStartQuiz = () => {
    router.push(`/quiz/perguntas?num=${numQuestions}`);
  };

  return (
    <div className="flex flex-col gap-6 p-4">
      <Section className="p-6 flex flex-col items-center text-center shadow-lg rounded-xl">
        <Title as="h2" className="mb-4 text-2xl font-bold">
          Teste Seus Conhecimentos
        </Title>

        <p className="text-gray-600 mb-6 max-w-sm">
          Acelere seu aprendizado com um quiz rápido e divertido sobre as
          plantas da horta!
        </p>

        <div className="w-full my-4">
          <p className="text-lg font-semibold mb-3 text-gray-700">
            Defina o número de perguntas:
          </p>

          <div className="bg-green-100 text-green-700 p-3 rounded-lg inline-block text-xl font-extrabold mb-6 min-w-[60px]">
            {numQuestions}
          </div>

          <Slider
            defaultValue={[DEFAULT_QUESTIONS]}
            max={MAX_QUESTIONS}
            min={MIN_QUESTIONS}
            step={1}
            value={[numQuestions]}
            onValueChange={(value) => setNumQuestions(value[0])}
            className="mb-8"
          />
        </div>

        <Button
          className="w-full max-w-xs py-3 text-lg font-semibold bg-primary hover:bg-green-600 transition-colors"
          onClick={handleStartQuiz}
        >
          Começar Quiz Agora!
        </Button>
      </Section>
    </div>
  );
}
