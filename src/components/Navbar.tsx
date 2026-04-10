import { Link, useLocation } from "react-router-dom";
import { Bookmark, ChefHat, Shuffle } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

interface NavbarProps {
  onSurpriseMe: () => void;
}

export default function Navbar({ onSurpriseMe }: NavbarProps) {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 group">
          <ChefHat className="h-7 w-7 text-primary transition-transform group-hover:rotate-12" />
          <span className="font-display text-xl font-bold text-foreground tracking-tight">
            Globe<span className="text-primary">Bites</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              location.pathname === "/" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Explore
          </Link>
          <Link
            to="/bookmarks"
            className={`text-sm font-medium transition-colors hover:text-primary flex items-center gap-1 ${
              location.pathname === "/bookmarks" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            <Bookmark className="h-4 w-4" />
            Saved
          </Link>
          <ThemeToggle />
          <button
            onClick={onSurpriseMe}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            <Shuffle className="h-4 w-4" />
            Surprise Me
          </button>
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            className="p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span className={`block h-0.5 w-6 bg-foreground transition-transform ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 w-6 bg-foreground transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-6 bg-foreground transition-transform ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background px-4 py-4 space-y-3 animate-fade-in">
          <Link to="/" onClick={() => setMobileOpen(false)} className="block text-sm font-medium text-foreground">
            Explore
          </Link>
          <Link to="/bookmarks" onClick={() => setMobileOpen(false)} className="block text-sm font-medium text-foreground">
            Saved Recipes
          </Link>
          <button
            onClick={() => { onSurpriseMe(); setMobileOpen(false); }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold"
          >
            <Shuffle className="h-4 w-4" />
            Surprise Me
          </button>
        </div>
      )}
    </nav>
  );
}
