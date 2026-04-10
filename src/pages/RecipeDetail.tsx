import { useParams, Link, useNavigate } from "react-router-dom";
import { recipes } from "@/data/recipes";
import { useBookmarks } from "@/hooks/useBookmarks";
import { ArrowLeft, Clock, ChefHat, MapPin, Bookmark, Shuffle, Globe, Check, Share2 } from "lucide-react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RecipeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isBookmarked, toggleBookmark } = useBookmarks();
  const recipe = recipes.find((r) => r.id === id);

  const surpriseMe = () => {
    const r = recipes[Math.floor(Math.random() * recipes.length)];
    navigate(`/recipe/${r.id}`);
  };

  if (!recipe) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar onSurpriseMe={surpriseMe} />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="font-display text-3xl text-foreground">Recipe not found</h1>
          <Link to="/" className="mt-4 inline-block text-primary hover:underline">
            ← Back to recipes
          </Link>
        </div>
      </div>
    );
  }

  const bookmarked = isBookmarked(recipe.id);

  const difficultyColor = {
    Easy: "bg-accent text-accent-foreground",
    Medium: "bg-secondary text-secondary-foreground",
    Hard: "bg-primary text-primary-foreground",
  }[recipe.difficulty];

  return (
    <div className="min-h-screen bg-background">
      <Navbar onSurpriseMe={surpriseMe} />

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Link to="/" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4" />
          Back to recipes
        </Link>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Image */}
          <div className="relative rounded-xl overflow-hidden aspect-square">
            <img src={recipe.image} alt={recipe.name} className="w-full h-full object-cover" />
            <div className="absolute top-4 right-4 flex flex-col gap-2">
              <button
                onClick={() => toggleBookmark(recipe.id)}
                className="p-3 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors"
              >
                <Bookmark className={`h-5 w-5 ${bookmarked ? "fill-primary text-primary" : "text-foreground"}`} />
              </button>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  toast.success("Recipe link copied to clipboard!");
                }}
                className="p-3 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors"
              >
                <Share2 className="h-5 w-5 text-foreground" />
              </button>
            </div>
          </div>

          {/* Info */}
          <div>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground">{recipe.name}</h1>

            <div className="flex flex-wrap items-center gap-3 mt-4">
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                {recipe.country}
              </span>
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                <Globe className="h-4 w-4" />
                {recipe.continent}
              </span>
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                {recipe.cookingTime} min
              </span>
              <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${difficultyColor}`}>
                {recipe.difficulty}
              </span>
            </div>

            {recipe.dietary.length > 0 && (
              <div className="flex gap-2 mt-3 flex-wrap">
                {recipe.dietary.map((d) => (
                  <span key={d} className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground capitalize">
                    {d}
                  </span>
                ))}
              </div>
            )}

            <div className="mt-8">
              <h2 className="font-display text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                <ChefHat className="h-5 w-5 text-primary" />
                Ingredients
              </h2>
              <ul className="space-y-2">
                {recipe.ingredients.map((ing, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    {ing}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <Check className="h-5 w-5 text-primary" />
            Instructions
          </h2>
          <ol className="space-y-4">
            {recipe.instructions.map((step, i) => (
              <li key={i} className="flex gap-4 animate-fade-in" style={{ animationDelay: `${i * 80}ms` }}>
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <p className="text-foreground pt-1">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
      <Footer />
    </div>
  );
}
