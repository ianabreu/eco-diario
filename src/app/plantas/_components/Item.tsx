import { ImageCard } from "@/components/image-card";
import { Plant } from "@/generated/prisma";
import Link from "next/link";
interface ItemProps {
  plant: Pick<Plant, "id" | "name" | "image_url">;
}
export function Item({ plant }: ItemProps) {
  return (
    <Link
      href={`/plantas/${plant.id}`}
      className="hover:scale-105 transition-all bg-white hover:bg-primary/30 shadow-lg rounded-lg flex flex-col p-2 gap-2 items-center"
      prefetch={true}
    >
      {plant.image_url && (
        <ImageCard alt={plant.name} src={plant.image_url} aspectRatio={1} />
      )}
      <p className="font-medium text-base">{plant.name}</p>
    </Link>
  );
}
