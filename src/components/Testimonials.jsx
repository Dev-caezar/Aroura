import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const mockReviews = [
  {
    quote: "The quality is unmatched. My new favorite shop for essentials!",
    author: "Sarah M.",
    rating: 5,
  },
  {
    quote:
      "Fast shipping and the style is always on trend. Highly recommend AURORA.",
    author: "James K.",
    rating: 5,
  },
  {
    quote:
      "I love their commitment to sustainability. Great clothing and conscience.",
    author: "Anya V.",
    rating: 4.5,
  },
];

const Testimonials = () => {
  const ACCENT_COLOR = "text-purple-400";
  const CARD_BACKGROUND = "bg-gray-900";
  const SUBTLE_TEXT = "text-gray-400";
  const BORDER_ACCENT = "border-purple-500";

  return (
    <div className={`w-full py-12 bg-black text-white`}>
      <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-4xl font-bold text-center mb-12 ${ACCENT_COLOR}`}>
          What Our Customers Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {mockReviews.map((review, index) => (
            <div
              key={index}
              className={`p-4 rounded-xl shadow-lg ${CARD_BACKGROUND} border-t-8 ${BORDER_ACCENT}`}>
              <FaQuoteLeft className={`w-6 h-6 mb-4 ${ACCENT_COLOR}`} />
              <p className={`${SUBTLE_TEXT} italic mb-4`}>"{review.quote}"</p>
              <div className="flex items-center space-x-1 text-yellow-400 text-lg">
                {Array(Math.floor(review.rating))
                  .fill()
                  .map((_, i) => (
                    <FaStar key={i} />
                  ))}
                {review.rating % 1 !== 0 && <FaStar className="opacity-50" />}
              </div>
              <p className="mt-3 font-semibold text-lg">{review.author}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
