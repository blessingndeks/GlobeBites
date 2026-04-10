import { useState } from "react";
import { Send, ChefHat, CheckCircle } from "lucide-react";

export default function Footer() {
  const [form, setForm] = useState({ name: "", recipe: "", country: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const recommendations = JSON.parse(localStorage.getItem("recipe-recommendations") || "[]");
    recommendations.push({ ...form, date: new Date().toISOString() });
    localStorage.setItem("recipe-recommendations", JSON.stringify(recommendations));
    setSubmitted(true);
    setForm({ name: "", recipe: "", country: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-3">
            <ChefHat className="h-6 w-6 text-primary" />
            <h3 className="font-display text-xl font-bold text-foreground">
              Recommend a Recipe
            </h3>
          </div>
          <p className="text-sm text-muted-foreground">
            Know a dish the world needs to try? Tell us about it and we may add it to GlobeBites!
          </p>
        </div>

        {submitted ? (
          <div className="max-w-2xl mx-auto flex flex-col items-center gap-2 py-8 animate-fade-in">
            <CheckCircle className="h-10 w-10 text-primary" />
            <p className="font-display text-lg font-semibold text-foreground">Thanks for your recommendation!</p>
            <p className="text-sm text-muted-foreground">We'll review it soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              required
              maxLength={100}
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              className="rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <input
              required
              maxLength={100}
              placeholder="Recipe name"
              value={form.recipe}
              onChange={(e) => setForm((f) => ({ ...f, recipe: e.target.value }))}
              className="rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <input
              required
              maxLength={100}
              placeholder="Country of origin"
              value={form.country}
              onChange={(e) => setForm((f) => ({ ...f, country: e.target.value }))}
              className="rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary text-primary-foreground px-4 py-2.5 text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              <Send className="h-4 w-4" />
              Submit
            </button>
            <textarea
              maxLength={500}
              placeholder="Why should we add this recipe? (optional)"
              value={form.message}
              onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
              rows={3}
              className="sm:col-span-2 rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
            />
          </form>
        )}

        <div className="mt-12 pt-6 border-t border-border text-center text-xs text-muted-foreground">
          <p>
            Globe<span className="text-primary font-semibold">Bites</span> - Discover flavors from every corner of the world.
          </p>
        </div>
      </div>
    </footer>
  );
}
