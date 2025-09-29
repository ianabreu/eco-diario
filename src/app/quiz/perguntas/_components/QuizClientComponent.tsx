"use client";

import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import {
  CheckCheckIcon,
  CheckIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  XIcon,
} from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { QuestionWithAlternativeProps } from "@/actions/quiz";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { ResultData, ResultPage } from "./Results";
import { Dialog } from "@/components/ui/dialog";
import { redirect, RedirectType } from "next/navigation";

interface QuizClientComponentProps {
  questions: QuestionWithAlternativeProps[];
}
interface UserAnswer {
  questionId: string;
  questionStatus: QuestionStatus;
  selectedAlternativeIndex: number | null;
  isCorrect: boolean | null;
}
type QuestionStatus = "answered" | "unanswered";

export default function QuizClientComponent({
  questions,
}: QuizClientComponentProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [result, setResult] = useState<ResultData | null>(null);

  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>(
    questions.map((q) => ({
      questionId: q.id,
      selectedAlternativeIndex: null,
      isCorrect: null,
      questionStatus: "unanswered",
    }))
  );
  const [questionStatus, setQuestionStatus] = useState<QuestionStatus>(
    userAnswers[currentQuestionIndex].questionStatus
  );

  const [selectedAlternativeIndex, setSelectedAlternativeIndex] = useState<
    number | null
  >(null);

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  function handleSelectAlternative(alternativeIndex: number) {
    if (questionStatus === "unanswered") {
      if (selectedAlternativeIndex === alternativeIndex) {
        setSelectedAlternativeIndex(null);
        return;
      }
      setSelectedAlternativeIndex(alternativeIndex);
    }
  }

  function handleSubmitAnswer() {
    if (selectedAlternativeIndex === null) {
      alert("Por favor, selecione uma resposta antes de confirmar.");
      return;
    }
    const isCorrect =
      currentQuestion.alternatives[selectedAlternativeIndex].isCorrect;

    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestionIndex].selectedAlternativeIndex =
      selectedAlternativeIndex;
    updatedAnswers[currentQuestionIndex].isCorrect = isCorrect;
    updatedAnswers[currentQuestionIndex].questionStatus = "answered";
    setUserAnswers(updatedAnswers);
    setQuestionStatus("answered");
  }

  function handleNavigation(direction: "next" | "prev") {
    const nextIndex =
      direction === "next"
        ? Math.min(currentQuestionIndex + 1, questions.length - 1)
        : Math.max(currentQuestionIndex - 1, 0);
    setCurrentQuestionIndex(nextIndex);
    setQuestionStatus(userAnswers[nextIndex].questionStatus);
    setSelectedAlternativeIndex(
      userAnswers[nextIndex].selectedAlternativeIndex
    );
  }

  function handleFinalize() {
    const data = userAnswers.reduce(
      (acc, answer) => {
        // 1. Acertos
        if (answer.isCorrect === true) {
          acc.correct += 1;
          // 2. Erros
        } else if (answer.isCorrect === false) {
          acc.wrong += 1;
          // 3. Ignoradas (isCorrect ainda é null)
        } else if (answer.isCorrect === null) {
          acc.ignored += 1;
        }
        return acc;
      },
      { correct: 0, wrong: 0, ignored: 0, total: userAnswers.length }
    );

    setIsFinished(true);
    setResult(data);
  }

  const getAnswerClass = (index: number) => {
    const isSelected = index === selectedAlternativeIndex;
    if (questionStatus === "answered") {
      const isCorrect = currentQuestion.alternatives[index].isCorrect;
      if (isSelected && isCorrect) {
        return "bg-green-100 text-green-700 border-green-700";
      }
      if (isSelected && !isCorrect) {
        return "bg-red-100 text-red-700 border-red-700";
      }
      if (!isSelected && isCorrect) {
        return "bg-green-100 text-green-700 border-green-100";
      }
      if (!isSelected && !isCorrect) {
        return "bg-white text-gray-400 border-gray-200";
      }
    } else {
      return isSelected
        ? "bg-blue-100 border-blue-600 text-blue-600"
        : "bg-white border-gray-300 text-gray-800";
    }
  };
  function reset() {
    redirect("/quiz", RedirectType.replace);
  }
  useEffect(() => {
    if (!isFinished) {
      const handleBeforeUnload = (event: BeforeUnloadEvent) => {
        event.preventDefault();
        event.returnValue = "";
      };
      window.addEventListener("beforeunload", handleBeforeUnload);
      return () => {
        window.removeEventListener("beforeunload", handleBeforeUnload);
      };
    }
  }, [isFinished]);

  return (
    <Section>
      <div className="flex flex-col gap-4">
        <h1 className="text-lg font-semibold text-center">
          {currentQuestion.question}
        </h1>

        <div className="flex flex-col gap-3">
          {currentQuestion.alternatives.map((option, index) => (
            <button
              type="button"
              key={index}
              onClick={() => handleSelectAlternative(index)}
              className={cn(
                "rounded-lg border p-3 w-full flex flex-col items-center justify-between gap-2 transition-all font-semibold",
                getAnswerClass(index),
                questionStatus === "answered" && "cursor-default"
              )}
            >
              <div className="flex items-center gap-3 w-full">
                <p className="text-left flex-1">{option.content}</p>
                <div
                  className={cn(
                    "aspect-square h-8 border rounded-full flex items-center justify-center",
                    getAnswerClass(index),
                    questionStatus === "answered" &&
                      selectedAlternativeIndex === index &&
                      !option.isCorrect &&
                      "bg-red-600 border-red-600",
                    questionStatus === "answered" &&
                      selectedAlternativeIndex === index &&
                      option.isCorrect &&
                      "bg-green-600 border-green-600",
                    questionStatus === "unanswered" &&
                      selectedAlternativeIndex === index &&
                      "bg-blue-600 border-blue-600"
                  )}
                >
                  {questionStatus === "answered" &&
                    selectedAlternativeIndex === index &&
                    !option.isCorrect && <XIcon className="text-white" />}
                  {questionStatus === "answered" &&
                    selectedAlternativeIndex === index &&
                    option.isCorrect && (
                      <CheckCheckIcon className="text-white" />
                    )}
                  {questionStatus === "unanswered" &&
                    selectedAlternativeIndex === index && (
                      <CheckIcon className="text-white" />
                    )}
                </div>
              </div>
              {questionStatus === "answered" &&
                (index === selectedAlternativeIndex || option.isCorrect) && (
                  <div className="flex flex-col gap-2 w-full">
                    <span className="text-left text-base">
                      {option.isCorrect
                        ? "Resposta Correta"
                        : "Não era bem isso!"}
                    </span>
                    {option.explanation && option.explanation.trim() !== "" && (
                      <p className="text-sm text-gray-700 font-medium text-left">
                        {option.explanation}
                      </p>
                    )}
                  </div>
                )}
            </button>
          ))}
        </div>

        <div className="flex gap-3 mt-4 w-full items-center justify-center">
          <Button
            disabled={
              selectedAlternativeIndex === null || questionStatus === "answered"
            }
            onClick={handleSubmitAnswer}
            className="w-full"
          >
            Responder
          </Button>
        </div>
      </div>

      <div className="flex w-full justify-between items-center gap-3 mt-4">
        <Button
          size={"default"}
          disabled={currentQuestionIndex === 0}
          onClick={() => handleNavigation("prev")}
        >
          <ChevronLeftIcon />
        </Button>
        <div className="text-sm font-bold text-gray-700">
          {currentQuestionIndex + 1} de {questions.length}
        </div>
        {!isLastQuestion ? (
          <Button
            size={"default"}
            disabled={currentQuestionIndex === questions.length - 1}
            onClick={() => {
              handleNavigation("next");
            }}
          >
            <ChevronRightIcon />
          </Button>
        ) : (
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                size={"default"}
                disabled={currentQuestionIndex !== questions.length - 1}
              >
                Finalizar
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Tem certeza que deseja terminar?
                </AlertDialogTitle>
                <AlertDialogDescription>
                  Ao confirmar, você não poderá mais alterar suas respostas. Seu
                  resultado será calculado e exibido.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Voltar</AlertDialogCancel>
                <AlertDialogAction onClick={handleFinalize}>
                  Sim, Finalizar
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        )}
      </div>
      {result && (
        <Dialog open={isFinished}>
          <ResultPage
            data={result}
            onRestart={reset}
            onExit={() => {
              redirect("/", RedirectType.replace);
            }}
          />
        </Dialog>
      )}
    </Section>
  );
}
