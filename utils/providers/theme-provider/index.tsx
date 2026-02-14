"use client";
import { useCallback, useEffect, useState } from "react";
import { createContext } from "react";

export enum ThemeType {
  light = "light",
  dark = "dark",
}

export type ThemeContextType = {
  toggleTheme: () => void;
  theme: ThemeType;
  isDark: boolean;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: ThemeType.light,
  toggleTheme: () => null,
  isDark: false,
});

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState(ThemeType.light);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme") as ThemeType;
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    if (
      savedTheme &&
      (savedTheme === ThemeType.dark || savedTheme === ThemeType.light)
    ) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else if (systemPrefersDark) {
      setTheme(ThemeType.dark);
      document.documentElement.setAttribute("data-theme", ThemeType.dark);
    } else {
      document.documentElement.setAttribute("data-theme", ThemeType.light);
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const newTheme =
        prev === ThemeType.dark ? ThemeType.light : ThemeType.dark;
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <ThemeContext
      value={{ theme, toggleTheme, isDark: theme === ThemeType.dark }}
    >
      {children}
    </ThemeContext>
  );
};

export default ThemeProvider;
