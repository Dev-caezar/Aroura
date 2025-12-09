import React, { useRef, useEffect } from "react";
import { FaShippingFast, FaUndoAlt, FaShieldAlt } from "react-icons/fa";
import { motion, useInView } from "framer-motion";

const mockFeatures = [
  {
    icon: FaShippingFast,
    title: "Free Global Shipping",
    description: "On all orders over $75.",
  },
  {
    icon: FaUndoAlt,
    title: "Hassle-Free Returns",
    description: "30-day money-back guarantee.",
  },
  {
    icon: FaShieldAlt,
    title: "Secured Payments",
    description: "100% safe and secure checkout.",
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Delay between each feature card
      delayChildren: 0.1, // Small initial delay
    },
  },
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 1, 0.5, 1], // Smooth, slightly springy easing
    },
  },
};

const ValueProps = () => {
  const ref = useRef(null);
  // Trigger animation when 20% of the component is visible
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div className={`w-full py-12 bg-black text-white`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Motion Container for the Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"} // Animates when in view
          className="grid md:grid-cols-3 gap-8 text-center">
          {mockFeatures.map((feature, index) => (
            // Motion Item for each Feature Card
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center">
              <div
                // Icon background color is kept as purple-500
                className={`p-4 rounded-full bg-purple-500 mb-4 text-white shadow-xl`}>
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className={`text-gray-400 text-base`}>{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ValueProps;
