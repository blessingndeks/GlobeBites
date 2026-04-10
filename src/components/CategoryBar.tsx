import { mealCategories } from "@/data/recipes";

interface Props {
  selected: string;
  onSelect: (category: string) => void;
}

export default function CategoryBar({ selected, onSelect }: Props) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
      <button
        onClick={() => onSelect("")}
        className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium transition-colors ${
          !selected
            ? "bg-primary text-primary-foreground shadow-sm"
            : "bg-muted text-muted-foreground hover:text-foreground"
        }`}
      >
        All
      </button>
      {mealCategories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat === selected ? "" : cat)}
          className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium transition-colors ${
            selected === cat
              ? "bg-primary text-primary-foreground shadow-sm"
              : "bg-muted text-muted-foreground hover:text-foreground"
          }`}
        >
          {cat}
        </button>
      ))}
      {/* Vegetarian as a special filter */}
      <button
        onClick={() => onSelect(selected === "Vegetarian" ? "" : "Vegetarian")}
        className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium transition-colors ${
          selected === "Vegetarian"
            ? "bg-primary text-primary-foreground shadow-sm"
            : "bg-muted text-muted-foreground hover:text-foreground"
        }`}
      >
        Vegetarian
      </button>
    </div>
  );
}
