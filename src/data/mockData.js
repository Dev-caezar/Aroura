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

export const products = [
  {
    id: 1,
    name: "Vintage Wash Hoodie",
    price: "139",
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
    price: "49",
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
    id: 3,
    name: "Bold Hoodie Fits",
    price: "119",
    image: hoodieImage,
    category: "Hoodies",
    description:
      "A mid-weight hoodie with a structured fit, perfect for layering or stand-alone wear. Features a clean, minimalist design.",
    details: ["Cotton-Poly Blend", "Structured Fit", "Double-lined hood"],
    colors: [
      { hex: "#1F2937", name: "Charcoal" },
      { hex: "#B91C1C", name: "Red" },
    ],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 4,
    name: "Heavyweight Pullover Hoodie",
    price: "159",
    image: hoodieImage5,
    category: "Hoodies",
    badge: "Trending",
    description:
      "Our heaviest fleece hoodie designed for maximum warmth and durability. Built to last with reinforced stitching.",
    details: [
      "80/20 Cotton/Polyester Fleece",
      "Heavyweight (500 GSM)",
      "Reinforced Stitching",
    ],
    colors: [
      { hex: "#4B5563", name: "Ash Gray" },
      { hex: "#111827", name: "Deep Navy" },
    ],
    sizes: ["M", "L", "XL"],
  },
  {
    id: 5,
    name: "Premium Jacket",
    price: "249",
    image: jacketImage,
    category: "Outerwear",
    badge: "Hot",
    description:
      "A waterproof and breathable shell jacket, offering superior protection without sacrificing style or mobility.",
    details: ["3-Layer Waterproof Fabric", "Seam-Sealed", "Adjustable Hood"],
    colors: [
      { hex: "#000000", name: "Black" },
      { hex: "#374151", name: "Slate" },
    ],
    sizes: ["S", "M", "L"],
  },
  {
    id: 6,
    name: "Minimalist Hoodie",
    price: "129",
    image: hoodieImage4,
    category: "Hoodies",
    description:
      "Clean lines and zero branding define this exceptionally comfortable hoodie. Focuses purely on fit and material quality.",
    details: [
      "100% French Terry Cotton",
      "Clean Finish",
      "No External Branding",
    ],
    colors: [
      { hex: "#D1D5DB", name: "Light Gray" },
      { hex: "#4B5563", name: "Taupe" },
    ],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 7,
    name: "Essential Cargo Pants",
    price: "129",
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
    id: 8,
    name: "Fleece Hoodie",
    price: "139",
    image: hoodieImage1,
    category: "Hoodies",
    description:
      "Softest fleece lining ensures maximum warmth and a plush feel against the skin. A cold-weather staple.",
    details: ["Super-soft Fleece Lining", "Classic Fit", "Kangaroo Pocket"],
    colors: [
      { hex: "#1F2937", name: "Navy" },
      { hex: "#9CA3AF", name: "Stone Gray" },
    ],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 9,
    name: "Graphic Print Hoodie",
    price: "149",
    image: hoodieImage2,
    category: "Hoodies",
    description:
      "Features a unique, abstract graphic print on the chest and back, using water-based inks for a soft feel.",
    details: ["Premium Cotton", "Water-based Print", "Medium Weight"],
    colors: [
      { hex: "#000000", name: "Black" },
      { hex: "#064E3B", name: "Forest" },
    ],
    sizes: ["M", "L", "XL"],
  },
  {
    id: 10,
    name: "Street Oversized Tee",
    price: "89",
    image: poloImage,
    category: "T-Shirts",
    badge: "New",
    description:
      "An intentionally oversized t-shirt cut for a relaxed, urban silhouette. Heavyweight collar maintains shape.",
    details: [
      "Heavy Cotton Jersey",
      "Oversized Drop Shoulder",
      "Ribbed Crewneck",
    ],
    colors: [
      { hex: "#374151", name: "Cement" },
      { hex: "#F3F4F6", name: "Bone" },
    ],
    sizes: ["M", "L", "XL"],
  },
  {
    id: 11,
    name: "Slim Fit Jeans",
    price: "99",
    image: cargoPantImage1,
    category: "Bottoms",
    description:
      "Traditional 5-pocket jeans with a modern slim fit through the thigh and leg opening. Minimal stretch for classic denim feel.",
    details: ["100% Rigid Denim", "Slim Tapered Leg", "Copper Hardware"],
    colors: [
      { hex: "#1F2937", name: "Dark Indigo" },
      { hex: "#4B5563", name: "Washed Black" },
    ],
    sizes: ["28", "30", "32", "34", "36"],
  },
  {
    id: 12,
    name: "Leather Jacket",
    price: "399",
    image: jacketImage1,
    category: "Outerwear",
    badge: "Premium",
    description:
      "An iconic biker jacket made from genuine, supple lambskin leather. Features polished hardware and a quilted interior lining.",
    details: ["Genuine Lambskin Leather", "Slim Fit", "Quilted Lining"],
    colors: [{ hex: "#000000", name: "Black" }],
    sizes: ["S", "M", "L"],
  },
];

export const categories = [
  "All",
  "T-Shirts",
  "Bottoms",
  "Hoodies",
  "Outerwear",
  "Accessories",
  "Footwear",
  "Headwear",
  "Vintage",
];
