import { Section } from "@/components/section";
import { Title } from "@/components/title";
import { getPlantsSummary } from "@/actions/plants";
import List from "./_components/List";
import SearchInput from "./_components/search-input";
import Pagination from "./_components/pagination";
import { EmptyState } from "./_components/EmptyState";
import { Separator } from "@/components/ui/separator";

interface PlantPageProps {
  searchParams: Promise<{ search: string; limit: string; page: string }>;
}

export default async function PlantsPage({ searchParams }: PlantPageProps) {
  const { search, limit, page } = await searchParams;

  const limitPerPage = parseInt(limit) || 8;
  const actualPage = parseInt(page) || 1;

  const { data, meta } = await getPlantsSummary({
    search,
    limit: limitPerPage,
    page: actualPage,
  });

  return (
    <Section className="h-full flex flex-col p-4 md:p-6">
      <Title className="text-3xl font-bold mb-1 text-gray-800">
        🌱 Guia de Plantas
      </Title>

      <p className="text-gray-600 mb-4">
        Descubra vegetais e ervas que são fáceis de cuidar e crescem rapidamente
        na sua horta.
      </p>

      <div className="mb-6">
        <SearchInput />
      </div>

      <Separator className="mb-6" />

      {data.length === 0 && (
        <EmptyState isSearchActive={!!search} searchTerm={search} />
      )}

      {data.length > 0 && (
        <>
          <div className="flex-1">
            <List data={data} />
          </div>

          <div className="mt-10 mb-4 flex justify-center">
            <Pagination meta={meta} />
          </div>
        </>
      )}
    </Section>
  );
}
