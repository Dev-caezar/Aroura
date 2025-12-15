"use client";

import { useState } from "react";
import { ShoppingBag, Heart, X, Minus, Plus, Star, Check } from "lucide-react";

const ProductModal = ({ product, onClose }) => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  if (!product) return null;

  const handleQuantityChange = delta => {
    setQuantity(prev => Math.max(1, prev + delta));
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-black text-white rounded-2xl shadow-2xl max-w-[65%] w-full h-[85vh] overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-0">
        <div className="relative bg-gray-950 flex items-center justify-center order-2 md:order-1">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-full object-cover"
          />

          {/* Mobile close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors shadow-lg md:hidden"
            aria-label="Close modal">
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* CONTENT SIDE */}
        <div className="p-8 overflow-y-auto flex flex-col order-1 md:order-2">
          {/* Desktop close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors hidden md:block"
            aria-label="Close modal">
            <X className="w-5 h-5 text-white" />
          </button>

          {/* Title + Rating */}
          <div className="mb-6">
            <p className="text-sm font-semibold text-purple-500 uppercase tracking-widest mb-2">
              {product.category}
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              {product.name}
            </h2>

            <div className="flex items-center gap-3">
              <div className="flex text-yellow-400 gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < 4 ? "fill-current" : "text-gray-600"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-400">(120 reviews)</span>
            </div>
          </div>

          {/* Price */}
          <div className="mb-6 pb-6 border-b border-gray-800">
            <p className="text-4xl font-bold text-white">{product.price}</p>
          </div>

          {/* Description */}
          <p className="text-gray-300 text-base leading-relaxed mb-6">
            {product.description}
          </p>

          {/* Colors */}
          <div className="mb-6">
            <label className="text-sm font-semibold text-white mb-3 block">
              Color:{" "}
              <span className="text-purple-500">{selectedColor.name}</span>
            </label>

            <div className="flex gap-3">
              {product.colors.map(color => (
                <button
                  key={color.hex}
                  onClick={() => setSelectedColor(color)}
                  className="relative w-10 h-10 rounded-full border-2 transition-all duration-200 hover:scale-110"
                  style={{
                    backgroundColor: color.hex,
                    borderColor:
                      selectedColor.hex === color.hex ? "#a78bfa" : "#404040",
                  }}
                  aria-label={`Select color ${color.name}`}>
                  {selectedColor.hex === color.hex && (
                    <Check className="w-5 h-5 text-white absolute inset-0 m-auto" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div className="mb-6">
            <label className="text-sm font-semibold text-white mb-3 block">
              Size: <span className="text-purple-500">{selectedSize}</span>
            </label>

            <div className="flex flex-wrap gap-2">
              {product.sizes.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border-2 rounded-lg text-sm font-semibold transition-all ${
                    selectedSize === size
                      ? "border-purple-500 bg-purple-950 text-purple-300"
                      : "border-gray-700 bg-gray-900 text-gray-400 hover:border-gray-600"
                  }`}>
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity + Cart + Wishlist */}
          <div className="flex gap-3 mb-6">
            {/* Quantity Selector */}
            <div className="flex items-center border-2 border-gray-700 rounded-lg">
              <button
                onClick={() => handleQuantityChange(-1)}
                className="p-2 hover:bg-gray-800 transition-colors"
                disabled={quantity <= 1}
                aria-label="Decrease quantity">
                <Minus className="w-4 h-4 text-gray-400" />
              </button>

              <span className="w-8 text-center text-sm font-semibold text-white">
                {quantity}
              </span>

              <button
                onClick={() => handleQuantityChange(1)}
                className="p-2 hover:bg-gray-800 transition-colors"
                aria-label="Increase quantity">
                <Plus className="w-4 h-4 text-gray-400" />
              </button>
            </div>

            {/* Add to Cart */}
            <button className="flex-grow bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2">
              <ShoppingBag className="w-5 h-5" />
              Add to Cart
            </button>

            {/* Wishlist */}
            <button
              onClick={() => setIsWishlisted(!isWishlisted)}
              className="p-3 border-2 border-gray-700 rounded-lg hover:border-purple-500 hover:bg-purple-950/30 transition-colors"
              aria-label="Add to wishlist">
              <Heart
                className={`w-5 h-5 transition-colors ${
                  isWishlisted
                    ? "fill-purple-500 text-purple-500"
                    : "text-gray-500"
                }`}
              />
            </button>
          </div>

          {/* Features */}
          <div className="pt-6 border-t border-gray-800">
            <p className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Key Features
            </p>

            <ul className="space-y-3">
              {product.details.map((detail, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-sm text-gray-300">
                  <Check className="w-4 h-4 text-purple-500 flex-shrink-0 mt-0.5" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
