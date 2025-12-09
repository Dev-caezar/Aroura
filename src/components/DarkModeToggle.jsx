import React, { useContext } from "react";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { ThemeContext } from "../utils/ThemeProvider";

const DarkModeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const isDarkMode = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-4 right-4 z-50 p-3 rounded-full shadow-lg bg-black dark:bg-gray-800 transition-colors duration-500"
      aria-label="Toggle dark mode">
      {isDarkMode ? (
        <IoSunnyOutline className="w-6 h-6 text-yellow-300" />
      ) : (
        <IoMoonOutline className="w-6 h-6 text-gray-900" />
      )}
    </button>
  );
};

export default DarkModeToggle;
