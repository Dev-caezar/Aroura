import { useState } from "react";
import { ShoppingBag, Heart, X, Minus, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import poloImage from "../assets/public/polo.jpg";
import poloImage1 from "../assets/public/white-shirt.jpg";
import cargoPantImage from "../assets/public/cargopant.jpg";
import cargoPantImage1 from "../assets/public/jeans.jpg";
import hoodieImage from "../assets/public/hoodie.jpg";
import hoodieImage1 from "../assets/public/fleece-hoodie.jpg";
import hoodieImage2 from "../assets/public/graphic-print-hoodie.jpg";
import hoodieImage3 from "../assets/public/vintage-wash-hoodie.jpg";
import hoodieImage4 from "../assets/public/urban-zip-hoodie.jpg";
import hoodieImage5 from "../assets/public/minimalist-hoodie.jpg";
import jacketImage from "../assets/public/jacket.jpg";
import jacketImage1 from "../assets/public/leather-jacket.jpg";

// --- ENRICHED PRODUCT DATA ---
const products = [
  {
    id: 1,
    name: "Vintage Wash Hoodie",
    price: "$139",
    image: hoodieImage3,
    category: "Hoodies",
    badge: "Hot",
    description:
      "A premium heavyweight hoodie with a custom vintage wash treatment, offering ultimate comfort and a unique, worn-in look. Features a spacious front pocket and ribbed cuffs.",
    details: ["100% Cotton, 450 GSM", "Oversized Fit", "Distressed finish"],
    colors: [
      { hex: "#A5A58D", name: "Stone" },
      { hex: "#4A4E69", name: "Midnight" },
    ],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 2,
    name: "Classic White Tee",
    price: "$49",
    image: poloImage1,
    category: "T-Shirts",
    description:
      "The perfect essential tee. Crafted from ultra-soft Pima cotton for a smooth, comfortable feel and a relaxed, classic fit.",
    details: ["Pima Cotton Blend", "Regular Fit", "Crew neck"],
    colors: [
      { hex: "#FFFFFF", name: "White" },
      { hex: "#000000", name: "Black" },
    ],
    sizes: ["XS", "S", "M", "L"],
  },
  {
    id: 7,
    name: "Essential Cargo Pants",
    price: "$129",
    image: cargoPantImage,
    category: "Bottoms",
    badge: "Trending",
    description:
      "Durable and functional cargo pants featuring six utility pockets and adjustable ankle cuffs. Made from rugged cotton twill.",
    details: ["Cotton Twill", "Relaxed Fit", "Adjustable cuffs"],
    colors: [
      { hex: "#587243", name: "Olive" },
      { hex: "#8A9A5B", name: "Khaki" },
    ],
    sizes: ["28", "30", "32", "34", "36"],
  },
  {
    id: 12,
    name: "Leather Jacket",
    price: "$399",
    image: jacketImage1,
    category: "Outerwear",
    badge: "Premium",
    description:
      "An iconic biker jacket made from genuine, supple lambskin leather. Features polished hardware and a quilted interior lining.",
    details: ["Genuine Lambskin Leather", "Slim Fit", "Quilted Lining"],
    colors: [{ hex: "#000000", name: "Black" }],
    sizes: ["S", "M", "L"],
  },
  // ... (Other products follow the structure)
];

const categories = [
  "All",
  "T-Shirts",
  "Bottoms",
  "Hoodies",
  "Outerwear",
  "Accessories",
  "Footwear",
]; // Filtered categories list

// --- PRODUCT MODAL COMPONENT ---

const ProductModal = ({ product, onClose }) => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const handleQuantityChange = delta => {
    setQuantity(prev => Math.max(1, prev + delta));
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-gray-900 text-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300">
        {/* Modal Header */}
        <div className="sticky top-0 p-4 flex justify-end bg-gray-900 z-10 border-b border-gray-800">
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-800 transition-colors">
            <X className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Modal Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 p-8">
          {/* Left: Image Gallery */}
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto rounded-lg object-cover aspect-square mb-4 border border-gray-700"
            />
          </div>

          {/* Right: Details and Actions */}
          <div>
            <h2 className="text-4xl font-black uppercase mb-2">
              {product.name}
            </h2>
            <p className="text-3xl font-bold text-purple-400 mb-6">
              {product.price}
            </p>

            <p className="text-white/80 mb-6">{product.description}</p>

            {/* Color Selector */}
            <div className="mb-6">
              <p className="text-sm font-semibold mb-2 uppercase tracking-wider">
                Color:{" "}
                <span className="text-purple-400">{selectedColor.name}</span>
              </p>
              <div className="flex space-x-3">
                {product.colors.map(color => (
                  <button
                    key={color.hex}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border-2 transition-all duration-200`}
                    style={{
                      backgroundColor: color.hex,
                      borderColor:
                        selectedColor.hex === color.hex ? "#ce0dd4" : "#374151",
                    }}
                    aria-label={`Select color ${color.name}`}
                  />
                ))}
              </div>
            </div>

            {/* Size Selector */}
            <div className="mb-8">
              <p className="text-sm font-semibold mb-2 uppercase tracking-wider">
                Size: <span className="text-purple-400">{selectedSize}</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded-lg text-sm font-medium transition-colors ${
                      selectedSize === size
                        ? "bg-purple-500 border-purple-500 text-white"
                        : "bg-gray-800 border-gray-700 text-white/70 hover:bg-gray-700"
                    }`}>
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity and Actions */}
            <div className="flex items-center space-x-4 mb-8">
              <div className="flex items-center border border-gray-700 rounded-lg">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  className="p-3 hover:bg-gray-800 rounded-l-lg"
                  disabled={quantity <= 1}>
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-10 text-center text-lg font-bold">
                  {quantity}
                </span>
                <button
                  onClick={() => handleQuantityChange(1)}
                  className="p-3 hover:bg-gray-800 rounded-r-lg">
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <button className="flex-grow py-3 bg-purple-500 text-white font-bold rounded-lg uppercase tracking-wider hover:bg-purple-600 transition-colors">
                <ShoppingBag className="w-5 h-5 inline mr-2" /> Add to Cart
              </button>
            </div>

            <div className="border-t border-gray-800 pt-6">
              <p className="text-sm font-semibold mb-2 uppercase tracking-wider text-purple-400">
                Product Features
              </p>
              <ul className="space-y-2 text-white/70">
                {product.details.map((detail, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 flex-shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- PRODUCT LISTING COMPONENT ---

export function Product() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(p => p.category === selectedCategory);

  // purple color variables for consistency
  const purple_400 = "text-purple-400";
  const purple_500 = "bg-purple-500";
  const purple_600_HOVER = "hover:bg-purple-600";
  const purple_400_HOVER = "hover:text-purple-400";
  const purple_500_BG_20_HOVER = "hover:bg-purple-500/20";

  const openModal = product => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="px-4 py-16">
        <div className="max-w-[90%] mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-black uppercase mb-2">
              Our <span className={`${purple_400}`}>Collection</span>
            </h1>
          </div>

          <div className="mb-12">
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wider transition-all ${
                    selectedCategory === category
                      ? `${purple_500} text-white ${purple_600_HOVER}`
                      : `border border-white/20 text-white hover:border-purple-400 ${purple_400_HOVER}`
                  }`}>
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div>
            {filteredProducts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredProducts.map(product => (
                  <div
                    key={product.id}
                    className="group cursor-pointer"
                    onClick={() => openModal(product)} // OPEN MODAL ON CARD CLICK
                  >
                    <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-4 bg-black/10 border border-white/10">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {product.badge && (
                        <div className="absolute top-4 left-4 bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-black uppercase">
                          {product.badge}
                        </div>
                      )}
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          className="h-10 w-10 p-0 inline-flex items-center justify-center rounded-full text-sm font-medium border border-black/30 bg-black/50 backdrop-blur-sm transition-colors hover:bg-black/80"
                          onClick={e => {
                            e.stopPropagation(); // Prevents modal from opening when clicking heart
                            console.log("Added to wishlist:", product.name);
                          }}>
                          <Heart className="w-4 h-4 text-white" />
                        </button>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <p className="text-xs text-white/50 uppercase tracking-widest font-bold">
                        {product.category}
                      </p>
                      <h3
                        className={`text-base font-black uppercase ${purple_400_HOVER} transition-colors`}>
                        {product.name}
                      </h3>
                      <div className="flex justify-between items-center pt-2 border-t border-white/10">
                        <p className="text-xl font-bold text-white">
                          {product.price}
                        </p>
                        <button
                          className={`h-9 px-3 py-2 text-sm inline-flex items-center justify-center rounded-lg transition-opacity opacity-0 group-hover:opacity-100 ${purple_500_BG_20_HOVER} ${purple_400}`}
                          onClick={e => {
                            e.stopPropagation(); // Prevents modal from opening when clicking cart
                            console.log("Added to cart:", product.name);
                          }}>
                          <ShoppingBag className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-white/60 text-lg">
                  No products found in this category.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Product Details Modal */}
      {isModalOpen && (
        <ProductModal product={selectedProduct} onClose={closeModal} />
      )}
    </main>
  );
}
