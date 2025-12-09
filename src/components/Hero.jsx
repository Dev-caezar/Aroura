import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

// 1. Container Variants (Subtle Fade and Scale)
const containerVariants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1], // Standard fast cubic-bezier for responsive feel
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

// 2. Child Variants (Reveal Effect)
const revealVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Hero() {
  return (
    <section className="heroImg pb-0 px-4 h-screen flex items-center bg-cover bg-center bg-fixed relative">
      <div className="absolute inset-0 bg-black/50 h-full w-full" />
      <div className="max-w-7xl w-full relative z-10 flex items-center h-full">
        <div className="max-w-2xl mx-auto">
          {/* Apply the container variants to the main content block */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8">
            <div className="space-y-4 flex justify-center items-center flex-col">
              {/* 1. Badge - Apply reveal variant */}
              <motion.div
                variants={revealVariants}
                className="inline-flex items-center gap-2 px-3 py-1 bg-purple-400/10 border border-purple-400/30 rounded-full">
                <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                <p className="text-xs font-bold text-purple-400 uppercase tracking-widest">
                  New Season
                </p>
              </motion.div>

              {/* 2. Headline - Apply reveal variant */}
              <motion.h1
                variants={revealVariants}
                className="text-6xl md:text-6xl lg:text-7xl font-black leading-18 text-balance uppercase text-white text-center">
                Craft Your <span className="text-purple-400">Future</span>
              </motion.h1>

              {/* 3. Subtext - Apply reveal variant */}
              <motion.p
                variants={revealVariants}
                className="text-lg text-white/90 leading-relaxed max-w-lg font-medium text-center mx-auto">
                Explore a new generation of digital-first apparel. Design,
                connect, and express yourself through bold, minimalist style.
              </motion.p>
            </div>

            <motion.div
              variants={revealVariants}
              className="flex gap-4 flex-wrap justify-center">
              <button className="h-12 w-[250px] bg-purple-500 text-white hover:bg-purple-500/90 font-bold text-base px-8 flex items-center justify-center rounded-lg transition-colors duration-200">
                Shop Collections
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
              <button className="h-12 w-[250px] border border-white/40 text-white hover:bg-black/10 font-bold text-base px-8 bg-transparent flex items-center justify-center rounded-lg transition-colors duration-200">
                View Lookbook
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
