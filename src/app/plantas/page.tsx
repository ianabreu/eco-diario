import { Section } from "@/components/section";
import { Title } from "@/components/title";
import { getPlantsSummary } from "@/actions/plants";
import List from "./_components/List";
import SearchInput from "./_components/search-input";
import Pagination from "./_components/pagination";
import { EmptyState } from "./_components/EmptyState";

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
    <Section className="min-h-[calc(100svh_-_64px)] h-full flex flex-col">
      <Title className="mb-2">Plantas Ideais</Title>
      <SearchInput />
      {data.length === 0 && (
        <EmptyState isSearchActive={!!search} searchTerm={search} />
      )}
      {data.length > 0 && (
        <>
          <div className="flex-1">
            <List data={data} />
          </div>

          <div className="mt-8">
            <Pagination meta={meta} />
          </div>
        </>
      )}
    </Section>
  );
}
