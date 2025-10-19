import { Section } from "@/components/section";
import { Title } from "@/components/title";
import {
  Sprout,
  Sun,
  Droplet,
  Leaf,
  LayoutGrid,
  Earth,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface Step {
  id: number;
  title: string;
  content: string;
  iconName: "area" | "solo" | "escolha" | "plantio" | "cuidado";
}

const guideSteps: Step[] = [
  {
    id: 1,
    title: "1. Escolha o Local Ideal",
    content:
      "Sua horta precisa de pelo menos 4 a 6 horas de sol direto por dia. Varandas, janelas voltadas para o norte ou quintais são ótimas opções. Garanta que o local tenha bom acesso à água.",
    iconName: "area",
  },
  {
    id: 2,
    title: "2. Prepare o Solo (ou Vaso)",
    content:
      "Use uma mistura rica em nutrientes: 1/3 de terra vegetal, 1/3 de composto orgânico (húmus de minhoca, etc.) e 1/3 de areia grossa para garantir boa drenagem. Isso evita que as raízes apodreçam.",
    iconName: "solo",
  },
  {
    id: 3,
    title: "3. Selecione Suas Plantas",
    content:
      "Comece com o que é mais fácil e rápido. Sugestões para iniciantes: alface, rúcula, manjericão e cebolinha. Consulte o nosso Catálogo de Plantas para mais detalhes!",
    iconName: "escolha",
  },
  {
    id: 4,
    title: "4. Hora do Plantio",
    content:
      "Se for semear, siga a profundidade indicada no pacote. Se for transplantar mudas, manuseie as raízes com cuidado e cubra-as gentilmente com terra. Dê espaço para elas crescerem.",
    iconName: "plantio",
  },
  {
    id: 5,
    title: "5. Cuidados Diários (Água e Sol)",
    content:
      "Regue pela manhã ou no final da tarde, evitando molhar as folhas (previne fungos). Mantenha o solo úmido, mas nunca encharcado. Observe as pragas e remova ervas daninhas.",
    iconName: "cuidado",
  },
];

const iconMap = {
  area: Sun,
  solo: Earth,
  escolha: LayoutGrid,
  plantio: Sprout,
  cuidado: Droplet,
};

function StepCard({ step }: { step: Step }) {
  const IconComponent = iconMap[step.iconName];
  const stepNumber = step.id;

  const primaryColor = "text-green-600";
  const baseBg = stepNumber % 2 === 0 ? "bg-green-50" : "bg-white";

  return (
    <div
      className={cn(
        "rounded-xl border border-gray-200 p-6 shadow-md transition-all duration-300",
        "hover:shadow-lg hover:border-green-400 cursor-pointer",
        baseBg,
        "h-full flex flex-col gap-4"
      )}
    >
      <div className="flex items-center gap-4">
        <div
          className={cn(
            "p-2 rounded-full w-fit flex-shrink-0",
            primaryColor,
            "bg-green-100 shadow-inner"
          )}
        >
          <IconComponent size={24} />
        </div>

        <h3 className="text-xl font-extrabold text-gray-800">{step.title}</h3>
      </div>

      <p className="text-base text-gray-700">{step.content}</p>

      <div className="mt-2 pt-2 border-t border-dashed border-gray-300">
        <p className={cn("text-sm font-semibold", primaryColor)}>
          Passo {stepNumber} de {guideSteps.length}
        </p>
      </div>
    </div>
  );
}

export default function ComoConstruirSuaHortaPage() {
  return (
    <Section>
      <div className="text-center py-12 mb-8 bg-green-50 border-b-4 border-green-400 rounded-xl shadow-md">
        <Title
          as="h1"
          size="large"
          className="text-4xl font-extrabold text-gray-800"
        >
          Seu Guia de Plantio Simples
        </Title>
        <p className="text-lg text-green-700 mt-2 max-w-2xl mx-auto">
          Quer começar uma horta em casa, mas não sabe por onde? Este guia
          mostra o caminho em apenas 5 passos simples!
        </p>
      </div>

      <h2 className="text-3xl font-bold text-gray-800 mb-8 border-l-4 border-green-600 pl-4">
        As 5 Etapas para o Sucesso
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {guideSteps.map((step) => (
          <StepCard key={step.id} step={step} />
        ))}
      </div>

      <div className="mt-12 p-8 bg-blue-50 border-2 border-blue-400 rounded-xl shadow-xl flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <Zap className="w-8 h-8 mr-4 text-blue-600 flex-shrink-0" />
          <div>
            <h3 className="text-xl font-bold text-blue-800">
              Desafie Seu Conhecimento!
            </h3>
            <p className="text-gray-700 text-sm">
              Teste seus conhecimentos sobre práticas sustentáveis.
            </p>
          </div>
        </div>

        <Link href="/quiz" passHref>
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 flex items-center w-full md:w-auto">
            <Zap className="w-5 h-5 mr-2" />
            Iniciar Quiz Agora
          </button>
        </Link>
      </div>

      <div className="mt-12 p-8 bg-green-100 border-2 border-green-300 rounded-xl shadow-lg flex flex-col items-center">
        <h3 className="text-2xl font-bold text-green-800 mb-3">
          Pronto para Colher?
        </h3>
        <p className="text-center text-gray-700 mb-4">
          Com este guia, você tem o essencial. Agora é só colocar a mão na terra
          e plantar o futuro!
        </p>
        <Link href="/plantas" passHref>
          <button className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-lg hover:bg-green-700 transition duration-300 flex items-center">
            <Leaf className="w-5 h-5 mr-2" />
            Ver Plantas Ideais
          </button>
        </Link>
      </div>
    </Section>
  );
}
