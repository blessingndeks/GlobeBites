import { useState, useEffect, useCallback } from "react";
import type { Recipe } from "@/data/recipes";

const STORAGE_KEY = "custom-recipes";

export function useCustomRecipes() {
  const [customRecipes, setCustomRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setCustomRecipes(JSON.parse(stored));
    } catch {}
  }, []);

  const addRecipe = useCallback((recipe: Omit<Recipe, "id">) => {
    const newRecipe: Recipe = { ...recipe, id: `custom-${Date.now()}` };
    setCustomRecipes((prev) => {
      const updated = [newRecipe, ...prev];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
    return newRecipe;
  }, []);

  const removeRecipe = useCallback((id: string) => {
    setCustomRecipes((prev) => {
      const updated = prev.filter((r) => r.id !== id);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
  }, []);

  return { customRecipes, addRecipe, removeRecipe };
}
