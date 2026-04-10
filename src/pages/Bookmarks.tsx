import { recipes } from "@/data/recipes";
import { useBookmarks } from "@/hooks/useBookmarks";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import RecipeCard from "@/components/RecipeCard";
import { Bookmark } from "lucide-react";

export default function Bookmarks() {
  const navigate = useNavigate();
  const { bookmarks, isBookmarked, toggleBookmark } = useBookmarks();
  const saved = recipes.filter((r) => bookmarks.includes(r.id));

  const surpriseMe = () => {
    const r = recipes[Math.floor(Math.random() * recipes.length)];
    navigate(`/recipe/${r.id}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar onSurpriseMe={surpriseMe} />
      <div className="container mx-auto px-4 py-12">
        <h1 className="font-display text-3xl font-bold text-foreground mb-2">Saved Recipes</h1>
        <p className="text-muted-foreground mb-8">Your bookmarked favorites</p>

        {saved.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {saved.map((recipe, i) => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                isBookmarked={isBookmarked(recipe.id)}
                onToggleBookmark={toggleBookmark}
                index={i}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <Bookmark className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-lg text-muted-foreground">No saved recipes yet.</p>
            <p className="text-sm text-muted-foreground mt-1">Click the bookmark icon on any recipe to save it here.</p>
          </div>
        )}
      </div>
    </div>
  );
}
