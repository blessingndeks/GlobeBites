import { Shuffle, Search, Globe } from "lucide-react";

interface HeroProps {
  onSurpriseMe: () => void;
  onScrollToRecipes: () => void;
}

export default function HeroSection({ onSurpriseMe, onScrollToRecipes }: HeroProps) {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }} />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase mb-4">
            <Globe className="h-3.5 w-3.5" />
            105+ Global Recipes
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground leading-tight">
            Discover Flavors From{" "}
            <span className="text-primary">Every Corner</span> of the World
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-lg mx-auto">
            Explore authentic dishes from Africa to Oceania. Search by cuisine, ingredient, or let fate decide your next meal.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={onScrollToRecipes}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              <Search className="h-4 w-4" />
              Browse Recipes
            </button>
            <button
              onClick={onSurpriseMe}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Shuffle className="h-4 w-4" />
              Surprise Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
