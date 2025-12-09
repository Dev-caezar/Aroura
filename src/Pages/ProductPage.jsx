import React from "react";
import ProductHero from "../components/ProductHero";
import { Product } from "../components/Product";

const ProductPage = () => {
  return (
    <div className="w-full h-full min-h-max bg-black">
      <ProductHero />
      <Product />
    </div>
  );
};

export default ProductPage;
