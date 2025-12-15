import React, { useState, useEffect } from "react";
// Import images directly, remove ThemeContext imports
import HeroImg from "../assets/public/men.png";
import HeroImg2 from "../assets/public/men2.png";
import HeroImg3 from "../assets/public/women.png";
import HeroImg4 from "../assets/public/women2.png";

const HeroCard = () => {
  // Theme context logic has been removed. Component uses static classes.

  // --- Word Cycling Logic ---
  const changingWords = [
    "Your New Look.",
    "Today's Trends.",
    "Sustainable Style.",
    "Unbeatable Value.",
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    const wordInterval = setInterval(() => {
      // Start fade out/shrink animation
      setAnimationClass("opacity-0 translate-y-[-5px] scale-95");

      const wordTimeout = setTimeout(() => {
        // Change word, then trigger fade in/grow animation
        setCurrentWordIndex(
          prevIndex => (prevIndex + 1) % changingWords.length
        );
        setAnimationClass("opacity-100 translate-y-0 scale-100");
      }, 350); // Matches the CSS transition duration

      return () => clearTimeout(wordTimeout);
    }, 3000); // Word changes every 3 seconds

    // Initialize animation state on mount
    setAnimationClass("opacity-100 translate-y-0 scale-100");
    return () => clearInterval(wordInterval);
  }, []);

  // --- Mount Animation Logic ---
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Delay mounting to trigger initial slide-in animation
    const mountTimer = setTimeout(() => {
      setIsMounted(true);
    }, 100);

    return () => clearTimeout(mountTimer);
  }, []);

  // --- Static Data ---
  const cardBorderRadius = {
    card1: "0px 50px 50px 50px",
    card2: "50px 0px 50px 50px",
    card3: "50px 50px 50px 0px",
    card4: "50px 50px 0px 50px",
  };

  const cardImages = [
    { src: HeroImg, alt: "New collection outfit", borderRadiusKey: "card1" },
    { src: HeroImg2, alt: "Stylish accessory", borderRadiusKey: "card2" },
    { src: HeroImg3, alt: "Fashion footwear", borderRadiusKey: "card3" },
    { src: HeroImg4, alt: "Seasonal sale item", borderRadiusKey: "card4" },
  ];

  // --- Animation Classes (Based on isMounted state) ---
  const wrapperAnimationClasses = `
        ${
          isMounted
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-[-100px]"
        } 
        transition-opacity duration-1000 ease-out transition-transform duration-1000 ease-out
    `;

  const imageContainerAnimationClasses = `
        ${isMounted ? "opacity-100 scale-100" : "opacity-0 scale-90"} 
        transition-opacity duration-1000 ease-in-out transition-transform duration-1000 ease-in-out 
        delay-[500ms]
    `;

  return (
    <div
      // Hardcoded dark theme classes: bg-gray-900, text-white
      className={`w-full min-h-[75vh] lg:h-[85vh] flex justify-center py-10 lg:py-0 transition-colors duration-300 bg-gray-900 text-white`}>
      <div
        className={`w-full max-w-[90%] h-full flex flex-col lg:flex-row justify-between items-center px-4 lg:px-0 ${wrapperAnimationClasses}`}>
        {/* Left Side: Text Content */}
        <div className="w-full lg:w-1/2 h-full flex flex-col justify-center gap-3 lg:gap-[15px] pb-10 lg:pb-0 transition-all delay-[200ms]">
          <h2
            className={`font-['poppins'] text-3xl sm:text-4xl lg:text-[3em] font-extrabold min-h-[80px] lg:min-h-[100px] flex flex-col justify-center items-start leading-tight`}>
            Shop The Moment. <br />
            <span
              // Hardcoded blue-400 accent color
              className={`inline-block min-w-[200px] lg:min-w-[300px] whitespace-nowrap overflow-hidden text-blue-400 transition-all duration-[350ms] ease-in-out ${animationClass}`}>
              {changingWords[currentWordIndex]}
            </span>
          </h2>
          <h4 className="font-['poppins'] text-base sm:text-lg lg:text-[1.2em]">
            Discover the latest seasonal drops and timeless essentials. Refresh
            your wardrobe with quality fabrics, stunning fits, and trends
            curated just for you. Get ready to turn heads!
          </h4>
          <button
            // Hardcoded blue-400 accent for border and text. Added hover effect.
            className={`w-[180px] h-10 border-2 border-blue-400 rounded-lg font-['poppins'] text-blue-400 text-base font-medium cursor-pointer transition-colors duration-300 hover:bg-blue-400/10 mt-4`}>
            Shop New Arrivals
          </button>
        </div>

        {/* Right Side: Image Grid */}
        <div className="w-full lg:w-1/2 h-auto lg:h-full flex justify-center items-center">
          <div
            className={`w-[95%] sm:w-[80%] lg:w-[90%] h-[400px] lg:h-[80%] flex flex-wrap justify-center items-center gap-[10px] ${imageContainerAnimationClasses}`}>
            {cardImages.map((card, index) => (
              <div
                key={index}
                // Hardcoded blue-400 accent border
                className={`w-[48%] h-[48%] overflow-hidden border-[5px] border-blue-400`}
                style={{
                  borderRadius: cardBorderRadius[card.borderRadiusKey],
                }}>
                <img
                  src={card.src}
                  alt={card.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
