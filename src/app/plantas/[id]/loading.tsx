import { Section } from "@/components/section";
import { Title } from "@/components/title";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <Section>
      <Skeleton className="w-full h-64 rounded-xl bg-gray-200" />

      <div className="mt-4 flex flex-col items-center">
        <Skeleton className="w-40 h-6 mb-1 rounded-sm bg-gray-200" />
        <Skeleton className="w-36 h-6 rounded-sm bg-gray-200" />
        <Title as="h3" className="mt-8 mb-4">
          Descrição
        </Title>
        <Skeleton className="w-80 h-6 mt-2 rounded-sm bg-gray-200" />
        <Title as="h3" className="mt-8 mb-4">
          Como Plantar
        </Title>
        <Skeleton className="w-full h-44 mt-2 rounded-sm bg-gray-200" />
      </div>
    </Section>
  );
}
