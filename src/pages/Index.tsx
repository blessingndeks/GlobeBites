import { useState, useRef, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { recipes } from "@/data/recipes";
import { useBookmarks } from "@/hooks/useBookmarks";
import { useCustomRecipes } from "@/hooks/useCustomRecipes";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedRecipes from "@/components/FeaturedRecipes";
import CategoryBar from "@/components/CategoryBar";
import CuisineBar from "@/components/CuisineBar";
import SearchAndFilters from "@/components/SearchAndFilters";
import RecipeCard from "@/components/RecipeCard";
import AddRecipeDialog from "@/components/AddRecipeDialog";
import Footer from "@/components/Footer";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

const RECIPES_PER_PAGE = 12;

export default function Index() {
  const navigate = useNavigate();
  const recipesRef = useRef<HTMLDivElement>(null);
  const { isBookmarked, toggleBookmark } = useBookmarks();
  const { customRecipes, addRecipe } = useCustomRecipes();
  const [page, setPage] = useState(1);

  const [filters, setFilters] = useState<Filters>({
    search: "",
    continent: "",
    country: "",
    difficulty: "",
    maxTime: 999,
    dietary: [],
    category: "",
    cuisine: "",
  });

  const surpriseMe = useCallback(() => {
    const all = [...customRecipes, ...recipes];
    const r = all[Math.floor(Math.random() * all.length)];
    navigate(`/recipe/${r.id}`);
  }, [navigate, customRecipes]);

  const scrollToRecipes = useCallback(() => {
    recipesRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const allRecipes = useMemo(() => [...customRecipes, ...recipes], [customRecipes]);

  const filtered = useMemo(() => {
    return allRecipes.filter((r) => {
      if (filters.continent && r.continent !== filters.continent) return false;
      if (filters.country && r.country !== filters.country) return false;
      if (filters.difficulty && r.difficulty !== filters.difficulty) return false;
      if (r.cookingTime > filters.maxTime) return false;
      if (filters.dietary.length > 0 && !filters.dietary.every((d) => r.dietary.includes(d))) return false;
      if (filters.category) {
        if (filters.category === "Vegetarian") {
          if (!r.dietary.includes("vegetarian") && !r.dietary.includes("vegan")) return false;
        } else {
          if (r.category !== filters.category) return false;
        }
      }
      if (filters.cuisine && r.country !== filters.cuisine) return false;
      if (filters.search) {
        const q = filters.search.toLowerCase();
        return (
          r.name.toLowerCase().includes(q) ||
          r.country.toLowerCase().includes(q) ||
          r.ingredients.some((i) => i.toLowerCase().includes(q))
        );
      }
      return true;
    });
  }, [filters, allRecipes]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / RECIPES_PER_PAGE));
  const currentPage = Math.min(page, totalPages);
  const paginatedRecipes = filtered.slice(
    (currentPage - 1) * RECIPES_PER_PAGE,
    currentPage * RECIPES_PER_PAGE
  );

  // Reset page when filters change
  const handleFiltersChange = useCallback((newFilters: Filters) => {
    setFilters(newFilters);
    setPage(1);
  }, []);

  const handleCategorySelect = useCallback((category: string) => {
    setFilters((prev) => ({ ...prev, category }));
    setPage(1);
  }, []);

  const handleCuisineSelect = useCallback((cuisine: string) => {
    setFilters((prev) => ({ ...prev, cuisine }));
    setPage(1);
  }, []);

  const pageNumbers = useMemo(() => {
    const pages: (number | "...")[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push("...");
      for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
        pages.push(i);
      }
      if (currentPage < totalPages - 2) pages.push("...");
      pages.push(totalPages);
    }
    return pages;
  }, [totalPages, currentPage]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar onSurpriseMe={surpriseMe} />
      <HeroSection onSurpriseMe={surpriseMe} onScrollToRecipes={scrollToRecipes} />
      <FeaturedRecipes isBookmarked={isBookmarked} onToggleBookmark={toggleBookmark} />

      <div ref={recipesRef} className="container mx-auto px-4 pb-20">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
            All Recipes
          </h2>
          <AddRecipeDialog onAdd={addRecipe} />
        </div>

        <CategoryBar selected={filters.category} onSelect={handleCategorySelect} />

        <div className="mt-3">
          <CuisineBar selected={filters.cuisine} onSelect={handleCuisineSelect} />
        </div>

        <div className="mt-6">
          <SearchAndFilters filters={filters} onChange={handleFiltersChange} resultCount={filtered.length} />
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {paginatedRecipes.map((recipe, i) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              isBookmarked={isBookmarked(recipe.id)}
              onToggleBookmark={toggleBookmark}
              index={i}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-lg text-muted-foreground">No recipes match your filters.</p>
            <button
              onClick={() => {
                setFilters({ search: "", continent: "", country: "", difficulty: "", maxTime: 999, dietary: [], category: "", cuisine: "" });
                setPage(1);
              }}
              className="mt-4 text-primary hover:underline text-sm font-medium"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-1 mt-10">
            <button
              onClick={() => { setPage((p) => Math.max(1, p - 1)); recipesRef.current?.scrollIntoView({ behavior: "smooth" }); }}
              disabled={currentPage === 1}
              className="inline-flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors disabled:opacity-40 disabled:cursor-not-allowed text-muted-foreground hover:text-foreground hover:bg-muted"
            >
              <ChevronLeft className="h-4 w-4" /> Prev
            </button>

            {pageNumbers.map((p, i) =>
              p === "..." ? (
                <span key={`ellipsis-${i}`} className="px-2 text-muted-foreground">…</span>
              ) : (
                <button
                  key={p}
                  onClick={() => { setPage(p); recipesRef.current?.scrollIntoView({ behavior: "smooth" }); }}
                  className={`min-w-[36px] h-9 rounded-lg text-sm font-medium transition-colors ${
                    currentPage === p
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {p}
                </button>
              )
            )}

            <button
              onClick={() => { setPage((p) => Math.min(totalPages, p + 1)); recipesRef.current?.scrollIntoView({ behavior: "smooth" }); }}
              disabled={currentPage === totalPages}
              className="inline-flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors disabled:opacity-40 disabled:cursor-not-allowed text-muted-foreground hover:text-foreground hover:bg-muted"
            >
              Next <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
