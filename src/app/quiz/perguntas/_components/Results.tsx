import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
export interface ResultData {
  total: number;
  wrong: number;
  ignored: number;
  correct: number;
}

interface ResultPageProps {
  data: ResultData;
  onRestart?: () => void;
  onExit?: () => void;
}
interface PerformanceRank {
  message: string;
  className: string;
}
export function ResultPage({ data, onExit, onRestart }: ResultPageProps) {
  const percentage = (data.correct / data.total) * 100;
  const correctRatio = `${data.correct}/${data.total}`;

  function getPerformanceRank(percentage: number): PerformanceRank {
    if (percentage === 100) {
      return {
        message: "Mestre Absoluto! Pontuação perfeita. 🏆",
        className: "text-green-600",
      };
    } else if (percentage >= 80) {
      return {
        message: "Quase Lá! Resultado excelente. 🌟",
        className: "text-blue-600",
      };
    } else if (percentage >= 50) {
      return {
        message: "Na Média! Bom resultado. Continue! 👍",
        className: "text-yellow-600",
      };
    } else {
      return {
        message: "Hora de Regar! Estude mais um pouco. 🌱",
        className: "text-red-500",
      };
    }
  }
  const rank = getPerformanceRank(percentage);
  return (
    <DialogContent showCloseButton={false}>
      <DialogHeader>
        <DialogTitle className="text-center">Quiz Finalizado!</DialogTitle>
      </DialogHeader>

      <div className="flex flex-col gap-6 items-center w-full py-4">
        <div className="text-center">
          <p className="text-sm text-gray-500 font-medium mb-1">
            Sua Pontuação
          </p>
          <p className="font-extrabold text-4xl" data-testid="correct-ratio">
            {correctRatio}
          </p>
          <p className={`font-bold text-xl mt-2 ${rank.className}`}>
            {rank.message}
          </p>
        </div>

        <div className="flex w-full justify-around items-center border-y py-4">
          <div className="text-center">
            <p
              className={`font-extrabold text-3xl text-primary ${rank.className}`}
            >
              {percentage.toFixed(1)}%
            </p>
            <p className="text-sm text-gray-600 mt-1">Taxa de Acerto</p>
          </div>

          <div className="space-y-1 text-sm">
            <ResultItem
              label="Corretas"
              value={data.correct}
              className="text-green-600"
            />
            <ResultItem
              label="Erradas"
              value={data.wrong}
              className="text-red-500"
            />
            <ResultItem
              label="Não Respondidas"
              value={data.ignored}
              className="text-gray-500"
            />
          </div>
        </div>
      </div>

      <DialogFooter>
        <Button variant="outline" onClick={onRestart}>
          Tentar novamente
        </Button>
        <Button onClick={onExit}>Voltar para a tela inicial</Button>
      </DialogFooter>
    </DialogContent>
  );
}

interface ResultItemProps {
  label: string;
  value: number;
  className: string;
}

function ResultItem({ label, value, className }: ResultItemProps) {
  return (
    <p className="flex justify-between items-center gap-4">
      <span className="font-medium text-gray-700">{label}:</span>
      <strong className={`font-extrabold ${className}`}>{value}</strong>
    </p>
  );
}
