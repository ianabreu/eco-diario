import { Search } from "lucide-react";

interface EmptyStateProps {
  isSearchActive: boolean;
  searchTerm?: string;
}

export function EmptyState({ isSearchActive, searchTerm }: EmptyStateProps) {
  const icon = isSearchActive ? <Search size={64} /> : "🌱";
  const iconClass = isSearchActive ? "text-red-500" : "text-green-600";

  const title = isSearchActive
    ? `Nenhuma Planta Encontrada`
    : `Nenhuma Planta Cadastrada`;

  const description = isSearchActive
    ? `Não encontramos resultados para "${searchTerm}". Tente refinar sua busca.`
    : `Parece que a horta está vazia.`;

  return (
    <div className="flex flex-col items-center justify-center p-8 text-center border-2 border-dashed border-gray-300 rounded-xl bg-white/70 shadow-inner mt-8">
      <div className={`text-6xl mb-4 ${iconClass}`}>{icon}</div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h3>

      <p className="text-gray-600 mb-6 max-w-sm">{description}</p>
    </div>
  );
}
