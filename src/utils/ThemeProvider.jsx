import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

const THEME_KEY = "isDarkMode";

const getInitialTheme = () => {
  if (typeof window !== "undefined") {
    // 1. Check if a theme preference is already saved in localStorage
    const savedTheme = localStorage.getItem(THEME_KEY);

    // 2. Return the parsed boolean value, or default to false (light mode)
    if (savedTheme !== null) {
      return JSON.parse(savedTheme);
    }

    // Optional: You could also check system preference here:
    // return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  return false;
};

export const ThemeProvider = ({ children }) => {
  // Initialize state using the function that checks localStorage
  const [isDarkMode, setIsDarkMode] = useState(getInitialTheme);

  const toggleTheme = () => setIsDarkMode(prev => !prev);

  useEffect(() => {
    // 1. Update the localStorage value whenever isDarkMode changes
    if (typeof window !== "undefined") {
      localStorage.setItem(THEME_KEY, JSON.stringify(isDarkMode));
    }

    // 2. Update the DOM class for Tailwind/CSS (your original logic)
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
