import { useState, useEffect, useCallback } from "react";

export function useBookmarks() {
  const [bookmarks, setBookmarks] = useState<string[]>(() => {
    try {
      return JSON.parse(localStorage.getItem("recipe-bookmarks") || "[]");
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("recipe-bookmarks", JSON.stringify(bookmarks));
  }, [bookmarks]);

  const toggleBookmark = useCallback((id: string) => {
    setBookmarks((prev) =>
      prev.includes(id) ? prev.filter((b) => b !== id) : [...prev, id]
    );
  }, []);

  const isBookmarked = useCallback(
    (id: string) => bookmarks.includes(id),
    [bookmarks]
  );

  return { bookmarks, toggleBookmark, isBookmarked };
}
