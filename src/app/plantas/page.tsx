import { Section } from "@/components/section";
import { Title } from "@/components/title";
import { PlantSummary } from "@/types";
import { getPlantsSummary } from "@/actions/plants";
import { Item } from "./_components/Item";

export default async function PlantsPage() {
  const plants: PlantSummary[] = await getPlantsSummary();

  return (
    <Section>
      <Title>Plantas Ideais</Title>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
        {plants.length === 0 && <p>Vazio</p>}
        {plants.length > 0 &&
          plants.map((plant) => <Item key={plant.id} plant={plant} />)}
      </div>
    </Section>
  );
}
