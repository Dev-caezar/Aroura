import { ShoppingBag, Heart, ArrowRight } from "lucide-react";
import poloImage from "../assets/public/polo.jpg";
import cargoPantImage from "../assets/public/cargopant.jpg";
import hoodieImage from "../assets/public/hoodie.jpg";
import jacketImage from "../assets/public/jacket.jpg";
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Street Oversized Tee",
    price: "$89",
    image: poloImage,
    category: "T-Shirts",
    badge: "New",
  },
  {
    id: 2,
    name: "Essential Cargo Pants",
    price: "$129",
    image: cargoPantImage,
    category: "Bottoms",
    badge: "Trending",
  },
  {
    id: 3,
    name: "Bold Hoodie Fits",
    price: "$119",
    image: hoodieImage,
    category: "Hoodies",
  },
  {
    id: 4,
    name: "Premium Jacket",
    price: "$249",
    image: jacketImage,
    category: "Outerwear",
    badge: "Hot",
  },
];

export default function FeaturedProducts() {
  const navigate = useNavigate();
  return (
    <section className="py-24 px-4 bg-black text-white">
      <div className="max-w-[90%] mx-auto">
        <div className="space-y-6 mb-16">
          <div className="flex items-end justify-between gap-4">
            <div className="space-y-4 flex-1">
              <div className="inline-block">
                <span className="text-purple-400 font-black text-sm uppercase tracking-widest">
                  Trending Now
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl font-black uppercase">
                Hot <span className="text-purple-400">Picks</span>
              </h2>
            </div>

            <button
              onClick={() => navigate("/products")}
              className="hidden md:flex h-10 px-4 py-2 text-sm rounded-lg border border-white/30 font-bold bg-transparent items-center justify-center transition-colors hover:bg-white/10">
              View All
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-4 bg-black/10 border border-black/10">
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
                  <button className="h-10 w-10 p-0 inline-flex items-center justify-center rounded-full text-sm font-medium border border-black/30 bg-black/50 backdrop-blur-sm transition-colors hover:bg-black/80">
                    <Heart className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-xs text-white/50 uppercase tracking-widest font-bold">
                  {product.category}
                </p>
                <h3 className="text-base font-black uppercase group-hover:text-purple-400 transition-colors">
                  {product.name}
                </h3>
                <div className="flex justify-between items-center pt-2 border-t border-white/10">
                  <p className="text-xl font-white">{product.price}</p>
                  <button className="h-9 px-3 py-2 text-sm inline-flex items-center justify-center rounded-lg transition-opacity opacity-0 group-hover:opacity-100 hover:bg-purple-500/20 hover:text-purple-400">
                    <ShoppingBag className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="md:hidden mt-8">
          {/* Full Width Button (purple solid) */}
          <button className="w-full h-10 px-4 py-2 text-base rounded-lg bg-purple-500 text-white font-bold transition-colors hover:bg-purple-600">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
}
