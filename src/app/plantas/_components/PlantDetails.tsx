import { PlantInfo } from "@/generated/prisma";
import { Sprout, Calendar, Flower2 } from "lucide-react";

interface PlantDetailProps {
  info: PlantInfo[];
}

export function PlantDetailHybrid({ info }: PlantDetailProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 w-full">
      {info.map((item, idx) => (
        <div
          key={idx}
          className="group flex items-center flex-col gap-3 p-4 rounded-xl shadow-sm border border-transparent hover:border-green-700  transition-colors duration-300 hover:bg-green-50"
        >
          <div
            className="flex gap-2 font-bold text-gray-700 group-hover:text-green-700
                           md:px-4 md:py-2 md:font-bold "
          >
            <span className="text-nowrap">{item.title}</span>
          </div>

          {/* Value */}
          <span className="text-gray-600 group-hover:text-green-700">
            {item.description}
          </span>
        </div>
      ))}
    </div>
  );
}
