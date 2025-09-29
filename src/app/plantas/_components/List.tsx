import { PlantsSummary } from "@/actions/plants";
import { Item } from "./Item";

interface ListProps<T> {
  data: T[];
}
export default function List({ data }: ListProps<PlantsSummary>) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
      {data.length > 0 &&
        data.map((item) => <Item key={item.id} plant={item} />)}
    </div>
  );
}
