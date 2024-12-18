import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export function useDarkMode() {
  // Initializes theme state based on user preference or system theme
  const [theme, setTheme] = useState<Theme>("light");

  // Use effect to check for theme preference only on the client side
  useEffect(() => {
    // Ensure the code only runs on the client (browser)
    if (typeof window !== "undefined") {
      // Get saved theme from localStorage
      const savedTheme = localStorage.getItem("theme") as Theme | null;
      if (savedTheme) {
        setTheme(savedTheme);
      } else {
        // Use system preference if no saved theme
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
          .matches
          ? "dark"
          : "light";
        setTheme(systemTheme);
      }
    }
  }, []); // Run only once after the initial render (client-side)

  // Apply the theme class and update localStorage whenever the theme changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.classList.toggle("dark", theme === "dark");
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  // Toggle between dark and light themes
  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return { theme, toggleTheme };
}
