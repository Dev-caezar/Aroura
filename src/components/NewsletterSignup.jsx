import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
// Removed: ThemeContext, lightTheme, darkTheme imports.

const NewsletterSignup = () => {
  // Removed: const { isDarkMode } = useContext(ThemeContext);
  // Removed: const theme = isDarkMode ? darkTheme : lightTheme;
  const [email, setEmail] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (email) {
      toast.success(`Thank you for subscribing, ${email}!`);
      setEmail("");
    } else {
      toast.error("Please enter a valid email address.");
    }
  };

  // Define fixed colors for a black background scheme
  const ACCENT_COLOR = "text-purple-400";
  const PRIMARY_BG = "bg-black";
  const SECONDARY_BG = "bg-gray-900"; // Dark gray card background
  const PRIMARY_TEXT = "text-white";
  const SECONDARY_TEXT = "text-gray-400";
  const PRIMARY_BORDER = "border-gray-700";
  const PRIMARY_BUTTON = "bg-purple-500 hover:bg-purple-600";

  return (
    <div
      className={`w-full py-20 transition-colors duration-300 ${PRIMARY_BG} ${PRIMARY_TEXT}`}>
      <div
        className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center p-8 rounded-xl shadow-2xl border ${PRIMARY_BORDER} ${SECONDARY_BG}`}>
        <FaEnvelope className={`w-10 h-10 mx-auto mb-4 ${ACCENT_COLOR}`} />
        <h2 className={`text-3xl font-bold mb-3 ${ACCENT_COLOR}`}>
          Get 10% Off Your First Order
        </h2>
        <p className={`${SECONDARY_TEXT} mb-6`}>
          Join the AURORA community for exclusive deals, early access to sales,
          and trend updates.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className={`w-full sm:flex-1 py-3 px-4 rounded-lg border ${PRIMARY_BORDER} focus:ring-2 border-purple-500 focus:border-purple-500 ${SECONDARY_BG} ${PRIMARY_TEXT} placeholder-gray-500`}
            required
          />
          <button
            type="submit"
            className={`w-full sm:w-auto px-6 py-3 rounded-lg text-white font-semibold transition duration-300 ${PRIMARY_BUTTON}`}>
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterSignup;
