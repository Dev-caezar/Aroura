import React, { useState, useRef, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { RiUserLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { X, Minus, Plus, Trash2, Heart, User, LogOut } from "lucide-react";
import { useCartStore } from "../../utils/cartStore";
import { useUserStore } from "../../utils/userStore";

const DUMMY_WISHLIST = [
  {
    id: "w1",
    name: "Legendary God-Tier Sword",
    price: 15.0,
    currency: "ETH",
    image: "sword.png",
  },
  {
    id: "w2",
    name: "Mythic Dragon Wings Skin",
    price: 3.5,
    currency: "ETH",
    image: "wings.png",
  },
  {
    id: "w3",
    name: "Rare Mana Potion Pack (x10)",
    price: 50.0,
    currency: "USD",
    image: "potion.png",
  },
];

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [cartDropdownOpen, setCartDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  const { logout } = useUserStore.getState();
  const userData = useUserStore(state => state.user);
  const userToken = useUserStore(state => state.token);
  const cart = useCartStore(state => state.cart);
  const { updateQuantity, removeFromCart, clearCart } = useCartStore.getState();

  const DUMMY_SHIPPING = 0.0;
  const DUMMY_TAX_RATE = 0.1;

  const searchInputRef = useRef(null);
  const profileRef = useRef(null);

  const handleWishlistToggle = () => {
    setIsWishlistOpen(!isWishlistOpen);
    setCartDropdownOpen(false);
    setIsProfileDropdownOpen(false);
  };

  const handleCartToggle = () => {
    setCartDropdownOpen(!cartDropdownOpen);
    setIsProfileDropdownOpen(false);
    setIsWishlistOpen(false);
  };

  const handleProfileToggle = () => {
    if (userToken) {
      setIsProfileDropdownOpen(!isProfileDropdownOpen);
      setCartDropdownOpen(false);
      setIsWishlistOpen(false);
    } else {
      navigate("/login");
      setIsProfileDropdownOpen(false);
    }
  };

  const handleSearchToggle = () => {
    if (!isSearchOpen) {
      setIsSearchOpen(true);
      setTimeout(() => searchInputRef.current?.focus(), 300);
    } else {
      setIsSearchOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const handleClickOutside = event => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target) &&
        isProfileDropdownOpen
      ) {
        setIsProfileDropdownOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isProfileDropdownOpen]);

  const baseHeaderClasses =
    "fixed top-0 w-full z-50 transition-all duration-300";

  const headerClasses = isScrolled ? "text-white" : "text-white group";

  const backgroundTransformClasses = isScrolled
    ? "scale-y-100 shadow-xl border-b border-gray-700"
    : "scale-y-0";

  const getTextColor = baseColor =>
    isScrolled ? "text-white" : `group-hover:text-white ${baseColor}`;

  const getIconColor = baseColor =>
    isScrolled ? "text-gray-200" : `group-hover:text-gray-200 ${baseColor}`;

  const getLogoColor = () =>
    isScrolled ? "text-purple-400" : "group-hover:text-purple-400 text-white";

  const getHoverBg = () =>
    isScrolled
      ? "hover:bg-gray-800"
      : "hover:bg-black/20 group-hover:hover:bg-gray-800";

  const cartSubtotal = cart.reduce((total, item) => {
    const price = parseFloat(item.price) || 0;
    const quantity = parseFloat(item.quantity) || 0;
    return total + price * quantity;
  }, 0);

  const calculatedTax = cartSubtotal * DUMMY_TAX_RATE;
  const finalTotal = cartSubtotal + DUMMY_SHIPPING + calculatedTax;

  const formatPrice = price => (parseFloat(price) || 0).toFixed(2);

  const handleNavClick = path => {
    navigate(path);
    setIsProfileDropdownOpen(false);
  };

  const handleLogout = () => {
    logout();
    setIsProfileDropdownOpen(false);
    navigate("/");
  };

  const handleMoveToCart = item => {
    console.log(`Moved item ${item.name} to cart.`);
  };

  const handleRemoveFromWishlist = itemId => {
    console.log(`Removed item ${itemId} from wishlist.`);
  };

  return (
    <header className={`${baseHeaderClasses} ${headerClasses}`}>
      <div
        className={`absolute inset-0 bg-black backdrop-blur-3xl transition-transform duration-300 ease-out transform origin-top 
        ${backgroundTransformClasses} group-hover:scale-y-100`}
      />

      <div className="max-w-[90%] mx-auto h-20 flex items-center justify-between px-4 sm:px-6 lg:px-2 relative z-10 transition-colors duration-300">
        <div className="flex items-center">
          <span
            className={`animate-pulse text-xl font-extrabold transition-colors duration-300 ${getLogoColor()}`}>
            AURORA
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <div
            className={`relative transition-all duration-300 ${
              isSearchOpen
                ? "w-64 opacity-100 mr-2"
                : "w-0 opacity-0 overflow-hidden"
            }`}>
            <IoIosSearch
              className={`absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500`}
            />
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search products..."
              className={`w-full py-2 pl-12 pr-4 rounded-full focus:outline-none focus:ring-2 border border-gray-700 bg-gray-900 ${getTextColor(
                "text-gray-200"
              )}`}
              onBlur={() => {
                if (searchInputRef.current?.value === "")
                  setIsSearchOpen(false);
              }}
            />
          </div>

          <button
            aria-label="Toggle Search"
            onClick={handleSearchToggle}
            className={`p-2 transition-colors rounded-full ${getHoverBg()} ${getIconColor(
              "text-white"
            )}`}>
            <FaSearch className="w-5 h-5" />
          </button>
          <div
            onClick={handleCartToggle}
            className={`relative p-2 transition-colors rounded-full cursor-pointer ${getHoverBg()} ${getIconColor(
              "text-white"
            )}`}>
            <MdOutlineShoppingCart className="w-6 h-6" />
            {cart.length > 0 && (
              <span className="absolute top-1 right-1 bg-purple-500 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </div>

          <div className="relative" ref={profileRef}>
            {userToken ? (
              <div
                onClick={handleProfileToggle}
                className={`transition-colors rounded-full ${getHoverBg()} cursor-pointer`}>
                <img
                  src={userData?.profilePicture?.url || "placeholder-url"}
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full object-cover"
                />
              </div>
            ) : (
              <div
                onClick={handleProfileToggle}
                className={`p-2 transition-colors rounded-full ${getHoverBg()} ${getIconColor(
                  "text-white"
                )} cursor-pointer`}>
                <RiUserLine className="w-6 h-6" />
              </div>
            )}

            {isProfileDropdownOpen && userToken && (
              <div className="absolute -right-15 mt-5 w-48 bg-black rounded-lg shadow-2xl overflow-hidden z-20 border border-gray-700">
                <div className="p-2 space-y-1">
                  <button
                    onClick={() => {
                      handleWishlistToggle();
                      setIsWishlistOpen(true);
                    }}
                    className="w-full flex items-center p-2 text-sm text-gray-200 hover:bg-gray-700 rounded-md transition-colors">
                    <Heart className="w-4 h-4 mr-3 text-red-400" />
                    Wishlist
                  </button>

                  <button
                    onClick={() => handleNavClick("/profile")}
                    className="w-full flex items-center p-2 text-sm text-gray-200 hover:bg-gray-700 rounded-md transition-colors">
                    <User className="w-4 h-4 mr-3 text-purple-400" />
                    Profile
                  </button>

                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center p-2 text-sm text-red-400 hover:bg-gray-700 rounded-md transition-colors border-t border-gray-700 pt-3 mt-3">
                    <LogOut className="w-4 h-4 mr-3" />
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-0 top-20 bg-black/70 z-[55] transition-opacity duration-300
            ${
              isWishlistOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
        onClick={handleWishlistToggle}
      />

      <div
        className={`fixed top-20 left-0 w-full h-[calc(100vh-5rem)] min-h-max bg-black text-white z-[60] transition-opacity duration-300 ease-out overflow-y-auto px-8ho 
            ${
              isWishlistOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}>
        <div className="max-w-7xl mx-auto px-4 py-4 h-full flex flex-col">
          <div className="flex justify-between items-end mb-8 border-b border-gray-800 pb-4">
            <h2 className="text-3xl font-extrabold text-white flex items-center">
              <Heart className="w-7 h-7 mr-3 text-red-500" />
              Wishlist
            </h2>
            <button
              onClick={handleWishlistToggle}
              aria-label="Close Wishlist"
              className="p-2 rounded-full text-gray-400 hover:bg-gray-800 hover:text-white transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>

          {DUMMY_WISHLIST.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-20">
              <Heart className="w-16 h-16 text-gray-700 mb-4" />
              <p className="text-gray-300 text-xl font-medium">
                Your Wishlist is Empty
              </p>
              <button
                onClick={handleWishlistToggle}
                className="mt-6 text-purple-400 hover:text-purple-300 flex items-center font-semibold transition-colors">
                Browse Shop
              </button>
            </div>
          ) : (
            <div className="flex-grow flex space-x-8">
              <div className="w-full space-y-4">
                <div className="space-y-4">
                  {DUMMY_WISHLIST.map(item => {
                    const price = parseFloat(item.price) || 0;

                    return (
                      <div
                        key={item.id}
                        className="flex justify-between items-center p-4 bg-gray-800 rounded-lg shadow-lg border border-gray-700">
                        <div className="flex items-center space-x-4">
                          <div className="w-20 h-20 bg-gray-700 rounded-md flex items-center justify-center text-xs text-gray-400 flex-shrink-0">
                            {item.name.substring(0, 8)}
                          </div>
                          <div>
                            <p className="font-semibold text-lg text-white line-clamp-1">
                              {item.name}
                            </p>
                            <p className="text-lg font-bold text-red-400 mt-1">
                              {price.toFixed(2)} {item.currency}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center space-x-4">
                          <button
                            onClick={() => handleMoveToCart(item)}
                            className="py-2 px-4 rounded-md text-sm font-bold text-white bg-purple-600 hover:bg-purple-700 transition-colors">
                            Move to Cart
                          </button>

                          <button
                            onClick={() => handleRemoveFromWishlist(item.id)}
                            aria-label={`Remove ${item.name}`}
                            className="text-gray-400 hover:text-red-500 transition-colors p-2">
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="flex justify-between pt-4">
                  <button
                    onClick={handleWishlistToggle}
                    className="text-gray-400 hover:text-white flex items-center font-semibold transition-colors">
                    Continue Shopping
                  </button>

                  <button className="text-red-400 hover:text-red-300 flex items-center font-semibold transition-colors text-sm">
                    Clear Wishlist
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div
        className={`fixed inset-0 top-20 bg-black/70 z-[55] transition-opacity duration-300
            ${
              cartDropdownOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
        onClick={handleCartToggle}
      />

      <div
        className={`fixed top-20 left-0 w-full h-[calc(100vh-5rem)] min-h-max bg-black text-white z-[60] transition-opacity duration-300 ease-out overflow-y-auto px-8ho 
            ${
              cartDropdownOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}>
        <div className="max-w-7xl mx-auto px-4 py-4 h-full flex flex-col">
          <div className="flex justify-between items-end mb-8 border-b border-gray-800 pb-4">
            <h2 className="text-3xl font-extrabold text-white">
              Shopping Cart
            </h2>
            <button
              onClick={handleCartToggle}
              aria-label="Close Cart"
              className="p-2 rounded-full text-gray-400 hover:bg-gray-800 hover:text-white transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>

          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-20">
              <MdOutlineShoppingCart className="w-16 h-16 text-gray-700 mb-4" />
              <p className="text-gray-300 text-xl font-medium">
                Your Shopping Cart is Empty
              </p>
              <button
                onClick={handleCartToggle}
                className="mt-6 text-purple-400 hover:text-purple-300 flex items-center font-semibold transition-colors">
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="flex-grow flex space-x-8">
              <div className="w-full md:w-2/3 space-y-4">
                <div className="space-y-4">
                  {cart.map(item => {
                    const price = parseFloat(item.price) || 0;

                    return (
                      <div
                        key={item.id}
                        className="flex justify-between items-center p-4 bg-gray-800 rounded-lg shadow-lg border border-gray-700">
                        <div className="flex items-center space-x-4">
                          <div className="w-20 h-20 bg-gray-700 rounded-md flex items-center justify-center text-xs text-gray-400 flex-shrink-0">
                            {item.name.substring(0, 8)}
                          </div>
                          <div>
                            <p className="font-semibold text-lg text-white line-clamp-1">
                              {item.name}
                            </p>
                            <p className="text-sm text-gray-400">
                              Size: {item.size || "M"}
                            </p>
                            <p className="text-lg font-bold text-purple-400 mt-1">
                              ${formatPrice(price)}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center space-x-4">
                          <div className="flex items-center border border-gray-700 rounded-md">
                            <button
                              className="p-2 text-gray-400 hover:bg-gray-700 rounded-l-md disabled:opacity-30"
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                              disabled={item.quantity <= 1}>
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="px-3 text-base font-medium text-white">
                              {item.quantity}
                            </span>
                            <button
                              className="p-2 text-gray-400 hover:bg-gray-700 rounded-r-md"
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }>
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>

                          <button
                            onClick={() => removeFromCart(item.id)}
                            aria-label={`Remove ${item.name}`}
                            className="text-red-500 hover:text-red-400 transition-colors p-2">
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="flex justify-between pt-4">
                  <button
                    onClick={handleCartToggle}
                    className="text-gray-400 hover:text-white flex items-center font-semibold transition-colors">
                    Continue Shopping
                  </button>
                </div>
              </div>

              <div className="hidden md:block w-1/3 flex-shrink-0 bg-gray-900 p-6 rounded-lg self-start sticky top-0 h-fit">
                <h3 className="text-xl font-bold text-white border-b border-gray-700 pb-3 mb-4">
                  Order Summary
                </h3>

                <div className="space-y-3 text-white">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Subtotal</span>
                    <span className="font-semibold">
                      ${formatPrice(cartSubtotal)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Shipping</span>
                    <span className="font-semibold">
                      {DUMMY_SHIPPING > 0
                        ? `$${formatPrice(DUMMY_SHIPPING)}`
                        : "Free"}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-gray-700 pb-3">
                    <span className="text-gray-400">Tax</span>
                    <span className="font-semibold">
                      ${formatPrice(calculatedTax)}
                    </span>
                  </div>

                  <div className="flex justify-between text-xl pt-2">
                    <span className="font-extrabold">Total</span>
                    <span className="font-extrabold text-white">
                      ${formatPrice(finalTotal)}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    handleCartToggle();
                    navigate("/checkout");
                  }}
                  className={`w-full py-3 mt-6 rounded-md text-lg font-bold transition-all duration-200 
                                     bg-purple-600 hover:bg-purple-700 text-white`}>
                  Proceed to Checkout
                </button>

                <button
                  onClick={clearCart}
                  className="w-full py-2 mt-2 rounded-md text-sm font-semibold text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">
                  Clear Cart
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
