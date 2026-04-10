import { Search, X, SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import { recipes } from "@/data/recipes";
import { continents, countries, difficulties, dietaryOptions } from "@/data/recipes";

interface Filters {
  search: string;
  continent: string;
  country: string;
  difficulty: string;
  maxTime: number;
  dietary: string[];
  category: string;
  cuisine: string;
}

interface Props {
  filters: Filters;
  onChange: (filters: Filters) => void;
  resultCount: number;
}

export default function SearchAndFilters({ filters, onChange, resultCount }: Props) {
  const [showFilters, setShowFilters] = useState(false);

  const update = (partial: Partial<Filters>) => onChange({ ...filters, ...partial });
  const hasActiveFilters = filters.continent || filters.country || filters.difficulty || filters.maxTime < 999 || filters.dietary.length > 0;

  const clearAll = () =>
    onChange({ search: filters.search, continent: "", country: "", difficulty: "", maxTime: 999, dietary: [], category: "", cuisine: "" });

  return (
    <div className="space-y-4">
      <div className="flex gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search recipes or ingredients..."
            value={filters.search}
            onChange={(e) => update({ search: e.target.value })}
            className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
          />
          {filters.search && (
            <button onClick={() => update({ search: "" })} className="absolute right-3 top-1/2 -translate-y-1/2">
              <X className="h-4 w-4 text-muted-foreground" />
            </button>
          )}
        </div>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border text-sm font-medium transition-colors ${
            hasActiveFilters
              ? "border-primary bg-primary/10 text-primary"
              : "border-border text-muted-foreground hover:text-foreground"
          }`}
        >
          <SlidersHorizontal className="h-4 w-4" />
          Filters
          {hasActiveFilters && (
            <span className="ml-1 px-1.5 py-0.5 rounded-full bg-primary text-primary-foreground text-xs">!</span>
          )}
        </button>
      </div>

      {showFilters && (
        <div className="bg-card border border-border rounded-xl p-4 space-y-4 animate-fade-in">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-foreground">Filter recipes</span>
            {hasActiveFilters && (
              <button onClick={clearAll} className="text-xs text-primary hover:underline">
                Clear all
              </button>
            )}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <select
              value={filters.continent}
              onChange={(e) => update({ continent: e.target.value, country: "" })}
              className="px-3 py-2 rounded-lg bg-muted border-none text-sm text-foreground focus:ring-2 focus:ring-primary/50"
            >
              <option value="">All Continents</option>
              {continents.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>

            <select
              value={filters.country}
              onChange={(e) => update({ country: e.target.value })}
              className="px-3 py-2 rounded-lg bg-muted border-none text-sm text-foreground focus:ring-2 focus:ring-primary/50"
            >
              <option value="">All Countries</option>
              {(filters.continent
                ? countries.filter((c) => {
                    return recipes.some((r) => r.country === c && r.continent === filters.continent);
                  })
                : countries
              ).map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>

            <select
              value={filters.difficulty}
              onChange={(e) => update({ difficulty: e.target.value })}
              className="px-3 py-2 rounded-lg bg-muted border-none text-sm text-foreground focus:ring-2 focus:ring-primary/50"
            >
              <option value="">Any Difficulty</option>
              {difficulties.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>

            <select
              value={filters.maxTime}
              onChange={(e) => update({ maxTime: Number(e.target.value) })}
              className="px-3 py-2 rounded-lg bg-muted border-none text-sm text-foreground focus:ring-2 focus:ring-primary/50"
            >
              <option value={999}>Any Time</option>
              <option value={15}>Under 15 min</option>
              <option value={30}>Under 30 min</option>
              <option value={60}>Under 1 hour</option>
              <option value={120}>Under 2 hours</option>
            </select>
          </div>

          <div>
            <span className="text-xs text-muted-foreground mb-2 block">Dietary</span>
            <div className="flex flex-wrap gap-2">
              {dietaryOptions.map((d) => (
                <button
                  key={d}
                  onClick={() =>
                    update({
                      dietary: filters.dietary.includes(d)
                        ? filters.dietary.filter((x) => x !== d)
                        : [...filters.dietary, d],
                    })
                  }
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors capitalize ${
                    filters.dietary.includes(d)
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <p className="text-sm text-muted-foreground">
        {resultCount} recipe{resultCount !== 1 ? "s" : ""} found
      </p>
    </div>
  );
}
