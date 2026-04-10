import { useState } from "react";
import { Plus, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { Recipe, MealCategory } from "@/data/recipes";
import { mealCategories, continents, dietaryOptions } from "@/data/recipes";
import { toast } from "@/hooks/use-toast";

interface Props {
  onAdd: (recipe: Omit<Recipe, "id">) => void;
}

const defaultForm = {
  name: "",
  country: "",
  continent: "",
  cookingTime: 30,
  difficulty: "Medium" as "Easy" | "Medium" | "Hard",
  category: "Dinner" as MealCategory,
  image: "",
  ingredients: "",
  instructions: "",
  dietary: [] as string[],
};

export default function AddRecipeDialog({ onAdd }: Props) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(defaultForm);

  const update = (partial: Partial<typeof form>) => setForm((p) => ({ ...p, ...partial }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.country || !form.ingredients || !form.instructions) {
      toast({ title: "Please fill in all required fields", variant: "destructive" });
      return;
    }

    onAdd({
      name: form.name,
      country: form.country,
      continent: form.continent || "Other",
      cookingTime: form.cookingTime,
      difficulty: form.difficulty,
      category: form.category,
      image: form.image || "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=600",
      dietary: form.dietary,
      ingredients: form.ingredients.split("\n").filter(Boolean),
      instructions: form.instructions.split("\n").filter(Boolean),
    });

    toast({ title: "Recipe added!", description: `${form.name} has been added to your recipes.` });
    setForm(defaultForm);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Add Recipe
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-lg max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display text-xl">Add Your Own Recipe</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div>
            <label className="text-sm font-medium text-foreground">Recipe Name *</label>
            <Input value={form.name} onChange={(e) => update({ name: e.target.value })} placeholder="e.g. Grandma's Pasta" className="mt-1" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-sm font-medium text-foreground">Country *</label>
              <Input value={form.country} onChange={(e) => update({ country: e.target.value })} placeholder="e.g. Italy" className="mt-1" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">Continent</label>
              <select
                value={form.continent}
                onChange={(e) => update({ continent: e.target.value })}
                className="mt-1 w-full px-3 py-2 rounded-md bg-background border border-input text-sm text-foreground focus:ring-2 focus:ring-ring"
              >
                <option value="">Select...</option>
                {continents.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="text-sm font-medium text-foreground">Time (min)</label>
              <Input type="number" value={form.cookingTime} onChange={(e) => update({ cookingTime: Number(e.target.value) })} min={1} className="mt-1" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">Difficulty</label>
              <select
                value={form.difficulty}
                onChange={(e) => update({ difficulty: e.target.value as "Easy" | "Medium" | "Hard" })}
                className="mt-1 w-full px-3 py-2 rounded-md bg-background border border-input text-sm text-foreground focus:ring-2 focus:ring-ring"
              >
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">Category</label>
              <select
                value={form.category}
                onChange={(e) => update({ category: e.target.value as MealCategory })}
                className="mt-1 w-full px-3 py-2 rounded-md bg-background border border-input text-sm text-foreground focus:ring-2 focus:ring-ring"
              >
                {mealCategories.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-foreground">Image URL</label>
            <Input value={form.image} onChange={(e) => update({ image: e.target.value })} placeholder="https://... (optional)" className="mt-1" />
          </div>

          <div>
            <label className="text-sm font-medium text-foreground">Dietary Tags</label>
            <div className="flex flex-wrap gap-2 mt-1">
              {dietaryOptions.map((d) => (
                <button
                  key={d}
                  type="button"
                  onClick={() =>
                    update({
                      dietary: form.dietary.includes(d)
                        ? form.dietary.filter((x) => x !== d)
                        : [...form.dietary, d],
                    })
                  }
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors capitalize ${
                    form.dietary.includes(d)
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-foreground">Ingredients * (one per line)</label>
            <Textarea value={form.ingredients} onChange={(e) => update({ ingredients: e.target.value })} placeholder={"2 cups flour\n1 egg\n..."} rows={4} className="mt-1" />
          </div>

          <div>
            <label className="text-sm font-medium text-foreground">Instructions * (one step per line)</label>
            <Textarea value={form.instructions} onChange={(e) => update({ instructions: e.target.value })} placeholder={"Preheat oven to 350°F\nMix dry ingredients\n..."} rows={4} className="mt-1" />
          </div>

          <Button type="submit" className="w-full">Add Recipe</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
