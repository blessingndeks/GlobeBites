import { cuisines } from "@/data/recipes";

interface Props {
  selected: string;
  onSelect: (cuisine: string) => void;
}

export default function CuisineBar({ selected, onSelect }: Props) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
      <button
        onClick={() => onSelect("")}
        className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium transition-colors ${
          !selected
            ? "bg-accent text-accent-foreground shadow-sm"
            : "bg-muted text-muted-foreground hover:text-foreground"
        }`}
      >
        All
      </button>
      {cuisines.map((c) => (
        <button
          key={c}
          onClick={() => onSelect(c === selected ? "" : c)}
          className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium transition-colors ${
            selected === c
              ? "bg-accent text-accent-foreground shadow-sm"
              : "bg-muted text-muted-foreground hover:text-foreground"
          }`}
        >
          {c}
        </button>
      ))}
    </div>
  );
}
