import { PlantsSummary } from "@/actions/plants";
import { ImageCard } from "@/components/image-card";
import Link from "next/link";
interface ItemProps {
  plant: PlantsSummary;
}
export function Item({ plant }: ItemProps) {
  return (
    <Link
      href={`/plantas/${plant.id}`}
      className="hover:scale-105 transition-all bg-white hover:bg-primary/30 shadow-lg rounded-lg flex flex-col p-2 gap-2 items-center"
      prefetch={false}
      scroll={true}
      aria-label={`Abrir detalhes de ${plant.name}`}
    >
      {plant.image_url && (
        <ImageCard alt={plant.name} src={plant.image_url} aspectRatio={1} />
      )}
      <p className="font-medium text-base">{plant.name}</p>
    </Link>
  );
}
