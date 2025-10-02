import { Section } from "@/components/section";
import { Skeleton } from "@/components/ui/skeleton";

export default async function LoadingPage() {
  return (
    <Section className="min-h-[calc(100svh_-_64px)] h-full flex flex-col">
      <Skeleton className="mb-2 h-9 w-56" />
      <Skeleton className=" h-12 w-96" />
      <div className="flex-1">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
          <Skeleton className="w-full aspect-square" />
          <Skeleton className="w-full aspect-square" />
        </div>
      </div>
      <div className="mt-8 flex items-center justify-center">
        <Skeleton className="w-40 h-9" />
      </div>
    </Section>
  );
}
