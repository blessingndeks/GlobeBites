import { Link } from "react-router-dom";
import { Clock, ChefHat, Bookmark, MapPin, Share2 } from "lucide-react";
import { toast } from "sonner";
import type { Recipe } from "@/data/recipes";

interface RecipeCardProps {
  recipe: Recipe;
  isBookmarked: boolean;
  onToggleBookmark: (id: string) => void;
  index?: number;
}

export default function RecipeCard({ recipe, isBookmarked, onToggleBookmark, index = 0 }: RecipeCardProps) {
  const difficultyColor = {
    Easy: "bg-accent text-accent-foreground",
    Medium: "bg-secondary text-secondary-foreground",
    Hard: "bg-primary text-primary-foreground",
  }[recipe.difficulty];

  return (
    <div
      className="group relative bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300 animate-fade-in"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <Link to={`/recipe/${recipe.id}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={recipe.image}
            alt={recipe.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute top-3 left-3 flex gap-2">
            <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${difficultyColor}`}>
              {recipe.difficulty}
            </span>
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-display text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors line-clamp-1">
            {recipe.name}
          </h3>
          <div className="flex items-center gap-1 mt-1 text-muted-foreground text-sm">
            <MapPin className="h-3.5 w-3.5" />
            <span>{recipe.country}</span>
            <span className="mx-1">·</span>
            <span>{recipe.continent}</span>
          </div>
          <div className="flex items-center gap-3 mt-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {recipe.cookingTime} min
            </span>
            <span className="flex items-center gap-1">
              <ChefHat className="h-3.5 w-3.5" />
              {recipe.ingredients.length} ingredients
            </span>
          </div>
          {recipe.dietary.length > 0 && (
            <div className="flex gap-1.5 mt-2 flex-wrap">
              {recipe.dietary.map((d) => (
                <span key={d} className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground capitalize">
                  {d}
                </span>
              ))}
            </div>
          )}
        </div>
      </Link>
      <div className="absolute top-3 right-3 flex flex-col gap-1.5">
        <button
          onClick={(e) => { e.preventDefault(); onToggleBookmark(recipe.id); }}
          className="p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors"
          aria-label={isBookmarked ? "Remove bookmark" : "Add bookmark"}
        >
          <Bookmark
            className={`h-4 w-4 transition-colors ${isBookmarked ? "fill-primary text-primary" : "text-foreground"}`}
          />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            navigator.clipboard.writeText(`${window.location.origin}/recipe/${recipe.id}`);
            toast.success("Recipe link copied to clipboard!");
          }}
          className="p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors"
          aria-label="Share recipe"
        >
          <Share2 className="h-4 w-4 text-foreground" />
        </button>
      </div>
    </div>
  );
}
