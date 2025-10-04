import { Section } from "@/components/section";
import { Skeleton } from "@/components/ui/skeleton";

export default async function QuizLoading() {
  return (
    <Section className="flex flex-col items-center gap-2">
      <Skeleton className="w-full max-w-3/4 h-20" />
      <Skeleton className="w-full h-14" />
      <Skeleton className="w-full h-14" />
      <Skeleton className="w-full h-14" />
      <Skeleton className="w-full h-14" />
      <Skeleton className="w-full h-20 mt-4" />
    </Section>
  );
}
