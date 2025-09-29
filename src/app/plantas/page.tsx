import { Section } from "@/components/section";
import { Title } from "@/components/title";
import { getPlantsSummary } from "@/actions/plants";
import List from "./_components/List";

interface PlantPageProps {
  searchParams: Promise<{ query: string; limit: string; page: string }>;
}
export default async function PlantsPage({ searchParams }: PlantPageProps) {
  const { query, limit, page } = await searchParams;
  const limitPerPage = parseInt(limit) || 8;
  const offset = parseInt(page) || 0;
  const plants = await getPlantsSummary(query, limitPerPage, offset);

  return (
    <Section>
      <Title>Plantas Ideais</Title>
      <List data={plants} />
    </Section>
  );
}
