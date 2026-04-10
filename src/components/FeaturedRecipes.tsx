import { recipes } from "@/data/recipes";
import RecipeCard from "./RecipeCard";

interface Props {
  isBookmarked: (id: string) => boolean;
  onToggleBookmark: (id: string) => void;
}

const FEATURED_IDS = ["20", "36", "57", "75", "1", "91"]; // Butter Chicken, Carbonara, Tacos al Pastor, Ceviche, Jollof Rice, Pavlova

export default function FeaturedRecipes({ isBookmarked, onToggleBookmark }: Props) {
  const featured = recipes.filter((r) => FEATURED_IDS.includes(r.id));

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              Featured Recipes
            </h2>
            <p className="text-muted-foreground mt-1">Hand-picked favorites from around the globe</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((recipe, i) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              isBookmarked={isBookmarked(recipe.id)}
              onToggleBookmark={onToggleBookmark}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
