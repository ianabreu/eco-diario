"use client";
import { Section } from "@/components/section";
import { Title } from "@/components/title";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function QuizPage() {
  const router = useRouter();
  const [numQuestions, setNumQuestions] = useState(10);

  const handleStartQuiz = () => {
    router.push(`/quiz/perguntas?num=${numQuestions}`);
  };

  return (
    <div className="flex flex-col gap-4">
      <Section className="p-4">
        <Title as="h2" className="mb-4">
          Monte Seu Quiz
        </Title>
        <p className="text-base mb-4">
          Número de perguntas: <span className="font-bold">{numQuestions}</span>
        </p>
        <Slider
          defaultValue={[numQuestions]}
          max={20}
          min={1}
          step={1}
          value={[numQuestions]}
          onValueChange={(value) => setNumQuestions(value[0])}
        />
        <Button className="w-full mt-6" onClick={handleStartQuiz}>
          Começar Quiz
        </Button>
      </Section>
    </div>
  );
}
