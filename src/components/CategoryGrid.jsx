// src/components/CategoryGrid.jsx

const mockCategories = [
  {
    name: "Men's Apparel",
    imageUrl: "https://via.placeholder.com/300x400/1F2937/F3F4F6?text=MEN",
    link: "/shop/men",
  },
  {
    name: "Women's Collection",
    imageUrl: "https://via.placeholder.com/300x400/374151/F3F4F6?text=WOMEN",
    link: "/shop/women",
  },
  {
    name: "Accessories",
    imageUrl:
      "https://via.placeholder.com/300x400/4B5563/F3F4F6?text=ACCESSORIES",
    link: "/shop/accessories",
  },
  {
    name: "Footwear",
    imageUrl: "https://via.placeholder.com/300x400/111827/F3F4F6?text=FOOTWEAR",
    link: "/shop/shoes",
  },
];

const CategoryGrid = () => {
  // All theme and context logic has been removed. Component uses static dark mode classes.

  return (
    // Hardcoded dark background and light text
    <div className="w-full py-16 transition-colors duration-300 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title: Uses static blue accent */}
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">
          Shop by Collection
        </h2>

        {/* Grid Container */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {mockCategories.map((category, index) => (
            <a
              key={index}
              href={category.link}
              // Card design: static classes for dark mode
              className="block relative h-64 rounded-xl overflow-hidden shadow-md group transition duration-300 hover:scale-[1.03] transform border-2 border-transparent hover:border-blue-400">
              {/* Image with overlay */}
              <img
                src={category.imageUrl}
                alt={category.name}
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div
                // Static overlay for dark mode contrast
                className="absolute inset-0 bg-black/40 flex items-end p-4 transition duration-300 group-hover:bg-black/20">
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
