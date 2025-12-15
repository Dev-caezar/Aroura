import React from "react";
import { MdDeleteForever } from "react-icons/md"; // Icon for removing item
import { FaGem } from "react-icons/fa"; // Icon for currency/crypto price
// Import useNavigate if you use the 'Browse Shop' button
// import { useNavigate } from 'react-router-dom';

const Wishlist = () => {
  // const navigate = useNavigate(); // Uncomment this line if you use react-router-dom

  // Placeholder data for demonstration
  const wishlistItems = [
    {
      id: 1,
      name: "Mythic Dragon Skin NFT",
      price: 0.5,
      currency: "ETH",
      rarity: "Mythic",
      imageUrl: "https://via.placeholder.com/300x200?text=Dragon+Skin",
    },
    {
      id: 2,
      name: "Gold Loot Box (x5)",
      price: 500,
      currency: "TOKEN",
      rarity: "Epic",
      imageUrl: "https://via.placeholder.com/300x200?text=Loot+Box",
    },
    {
      id: 3,
      name: "Stealth Boots",
      price: 15,
      currency: "TOKEN",
      rarity: "Rare",
      imageUrl: "https://via.placeholder.com/300x200?text=Stealth+Boots",
    },
    {
      id: 4,
      name: "Legendary Sword Blueprint",
      price: 2.1,
      currency: "ETH",
      rarity: "Legendary",
      imageUrl: "https://via.placeholder.com/300x200?text=Legendary+Sword",
    },
  ];

  // Helper function to get Tailwind color classes based on rarity
  const getRarityClasses = rarity => {
    const lowerRarity = rarity.toLowerCase();
    switch (lowerRarity) {
      case "common":
        return "bg-gray-400 text-gray-800";
      case "rare":
        return "bg-green-500 text-white";
      case "epic":
        return "bg-blue-500 text-white";
      case "legendary":
        return "bg-yellow-500 text-gray-900";
      case "mythic":
        return "bg-red-500 text-white";
      default:
        return "bg-gray-200 text-gray-800";
    }
  };

  return (
    <div className="bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Wishlist Header */}
        <div className="flex justify-between items-center mb-6 pb-4 border-b-2 border-gray-200">
          <h2 className="text-3xl font-bold text-gray-800">
            Your Wishlist ({wishlistItems.length} Items)
          </h2>
          {/* Optional: Add All to Cart button */}
          {wishlistItems.length > 0 && (
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-200">
              Add All to Cart
            </button>
          )}
        </div>

        {/* Wishlist Container Grid */}
        {wishlistItems.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {wishlistItems.map(item => (
              <div
                className="bg-white border border-gray-200 rounded-xl p-4 shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 flex flex-col"
                key={item.id}>
                {/* Item Image Area */}
                <div className="w-full h-48 mb-4 overflow-hidden rounded-lg bg-gray-100">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Item Details */}
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.name}
                  </h3>

                  {/* Rarity Tag */}
                  <p
                    className={`inline-block px-3 py-1 text-xs font-bold rounded-full mb-3 ${getRarityClasses(
                      item.rarity
                    )}`}>
                    {item.rarity}
                  </p>

                  {/* Price Display */}
                  <div className="flex items-center text-lg font-bold text-green-600 mt-2">
                    <FaGem className="text-yellow-500 mr-2" />
                    <span>
                      {item.price} {item.currency}
                    </span>
                  </div>
                </div>

                {/* Item Actions */}
                <div className="flex gap-3 mt-4 pt-4 border-t border-gray-100">
                  {/* Primary action: Buy Now */}
                  <button className="flex-grow bg-green-500 hover:bg-green-600 text-white font-medium py-2 rounded-lg transition duration-200">
                    Buy Now
                  </button>

                  {/* Secondary action: Remove */}
                  <button
                    className="text-red-600 border border-red-300 hover:bg-red-500 hover:text-white p-2 rounded-lg transition duration-200"
                    title="Remove from Wishlist"
                    // onClick={() => handleRemove(item.id)} // Example handler
                  >
                    <MdDeleteForever className="text-xl" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-20 bg-white rounded-xl shadow-lg">
            <p className="text-xl text-gray-600 mb-6">
              Your wishlist is empty. Start adding some awesome gear!
            </p>
            <button
              // onClick={() => navigate('/shop')} // Uncomment to use navigation
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition duration-200">
              Browse Shop
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
