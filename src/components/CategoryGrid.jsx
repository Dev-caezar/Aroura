import React, { useContext } from "react";
import { ThemeContext } from "../utils/ThemeProvider";
import { lightTheme, darkTheme } from "../global/themeColors";

const mockCategories = [
  { name: "Men's Apparel", imageUrl: "...", link: "/shop/men" },
  { name: "Women's Collection", imageUrl: "...", link: "/shop/women" },
  { name: "Accessories", imageUrl: "...", link: "/shop/accessories" },
  { name: "Footwear", imageUrl: "...", link: "/shop/shoes" },
];

const CategoryGrid = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <div
      className={`w-full py-16 transition-colors duration-300 ${theme.bgPrimary} ${theme.textPrimary}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-4xl font-bold text-center mb-12 ${theme.textPrimaryAccent}`}>
          Shop by Collection
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {mockCategories.map((category, index) => (
            <a
              key={index}
              href={category.link}
              // Card design: bgSecondary on hover, accent border, scaled on hover
              className={`block relative h-64 rounded-xl overflow-hidden shadow-md group transition duration-300 hover:scale-[1.03] transform border-2 border-transparent hover:${theme.borderPrimaryAccent}`}>
              {/* Image with overlay */}
              <img
                src={category.imageUrl}
                alt={category.name}
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div
                className={`absolute inset-0 bg-black/40 flex items-end p-4 transition duration-300 group-hover:bg-black/20`}>
                <h3 className="text-white text-xl font-bold z-10">
                  {category.name}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryGrid;
