import { useState } from "react";
import { ShoppingBag, Heart } from "lucide-react";
import { categories, products } from "../data/mockData";
import ProductModal from "./ProductModal";
import { useCartStore } from "../utils/cartStore";

export function Product() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const addToCart = useCartStore(state => state.addToCart);

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(p => p.category === selectedCategory);

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
            <div className="flex flex-nowrap overflow-x-auto gap-2 pb-2 hide-scrollbar">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`flex-shrink-0 px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wider transition-all ${
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
                    onClick={() => openModal(product)}>
                    <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-4 bg-black/10 border border-white/10">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {product.badge && (
                        <div
                          className={`absolute top-4 left-4 ${purple_500} text-white px-3 py-1 rounded-full text-xs font-black uppercase`}>
                          {product.badge}
                        </div>
                      )}
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          className="h-10 w-10 p-0 inline-flex items-center justify-center rounded-full text-sm font-medium border border-black/30 bg-black/50 backdrop-blur-sm transition-colors hover:bg-black/80"
                          onClick={e => {
                            e.stopPropagation();
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
                          ${product.price}
                        </p>
                        <button
                          className={`h-9 px-3 py-2 text-sm inline-flex items-center justify-center rounded-lg transition-opacity opacity-0 group-hover:opacity-100 ${purple_500_BG_20_HOVER} ${purple_400}`}
                          onClick={e => {
                            e.stopPropagation();
                            addToCart(product);
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

      {isModalOpen && (
        <ProductModal product={selectedProduct} onClose={closeModal} />
      )}
    </main>
  );
}
