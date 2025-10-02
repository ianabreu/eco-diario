import { Section } from "@/components/section";
import { Title } from "@/components/title";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <Section className="mt-4">
      <div className="flex gap-4 flex-col md:flex-row-reverse justify-center">
        <Skeleton className="h-44 w-full max-w-96" />
        <div className="flex flex-col flex-1 gap-2">
          <Skeleton className="h-9 w-full " />
          <Skeleton className="h-9 w-full " />
          <Skeleton className="h-9 w-full " />
          <Skeleton className="h-9 w-full " />
        </div>
      </div>
      <div className="flex flex-col gap-4 items-center mt-2">
        <Skeleton className="h-9 w-full" />

        <Skeleton className="h-9 w-full" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 w-full">
          <Skeleton className="h-20 w-full" />
          <Skeleton className="h-20 w-full" />
          <Skeleton className="h-20 w-full" />
        </div>
      </div>

      <Skeleton className="mt-8 h-20 w-full" />
    </Section>
  );
}
