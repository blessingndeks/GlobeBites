import { Globe, Landmark, TreePalm, Mountain, Ship, Waves } from "lucide-react";
import { continents, recipes } from "@/data/recipes";
import type { ReactNode } from "react";

interface Props {
  selected: string;
  onSelect: (continent: string) => void;
}

const continentIcon: Record<string, ReactNode> = {
  Africa: <Landmark className="h-4 w-4" />,
  Asia: <Mountain className="h-4 w-4" />,
  Europe: <Landmark className="h-4 w-4" />,
  "North America": <Globe className="h-4 w-4" />,
  "South America": <TreePalm className="h-4 w-4" />,
  "Australia/Oceania": <Waves className="h-4 w-4" />,
};

export default function ContinentBar({ selected, onSelect }: Props) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
      <button
        onClick={() => onSelect("")}
        className={`whitespace-nowrap inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
          !selected ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:text-foreground"
        }`}
      >
        <Globe className="h-4 w-4" />
        All ({recipes.length})
      </button>
      {continents.map((c) => {
        const count = recipes.filter((r) => r.continent === c).length;
        return (
          <button
            key={c}
            onClick={() => onSelect(c === selected ? "" : c)}
            className={`whitespace-nowrap inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selected === c ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            {continentIcon[c] || <Globe className="h-4 w-4" />}
            {c} ({count})
          </button>
        );
      })}
    </div>
  );
}
