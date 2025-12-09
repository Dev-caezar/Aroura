import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProductHero = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 10 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const ACCENT_COLOR = "text-purple-400";
  const TEXT_COLOR = "text-white";

  return (
    <div className="productImg h-[50vh] flex items-center bg-cover bg-center bg-fixed relative">
      <div className="absolute inset-0 bg-black/60 flex justify-center items-center">
        <motion.div
          variants={fadeIn}
          initial="initial"
          animate="animate"
          className={`${TEXT_COLOR}`}>
          <div className="text-2xl font-medium text-white/70">
            <ol className="flex items-center space-x-2">
              <li className="flex items-center">
                <Link
                  to="/"
                  className="hover:text-purple-400 transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-white/40">{">"}</li>
              <li className="text-purple-400">Products</li>
            </ol>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductHero;
