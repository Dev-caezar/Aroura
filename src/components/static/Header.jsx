import React, { useState, useRef, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { RiUserLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [cartDropdownOpen, setCartDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  const userData = useSelector(state => state.user.userData);
  const userToken = useSelector(state => state.user.userToken);
  const cart = useSelector(
    state => state.user.cart || [{ id: 1, name: "Tee", price: 89 }]
  );

  const searchInputRef = useRef(null);

  const handleCartToggle = () => setCartDropdownOpen(!cartDropdownOpen);
  const handleSearchToggle = () => setIsSearchOpen(!isSearchOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
            {cart.length < 1 && (
              <span className="absolute top-1.5 right-1.5 bg-green-400 text-white text-xs font-bold rounded-full h-2.5 w-2.5 flex items-center justify-center animate-pulse"></span>
            )}
          </div>
          {userToken ? (
            <div className={`transition-colors rounded-full ${getHoverBg()}`}>
              <img
                src={userData?.profilePicture?.url}
                alt="User Avatar"
                className="w-12 h-12 rounded-full object-cover"
              />
            </div>
          ) : (
            <div
              className={`p-2 transition-colors rounded-full ${getHoverBg()} ${getIconColor(
                "text-white"
              )}`}>
              <RiUserLine className="w-6 h-6" />
            </div>
          )}
        </div>
      </div>

      {cartDropdownOpen && (
        <>
          <div
            className="fixed inset-0 top-20 bg-black/50 z-[55] transition-opacity duration-300 opacity-100"
            onClick={handleCartToggle}
          />
        </>
      )}

      <div
        className={`fixed top-20 right-0 h-[calc(100vh-5rem)] w-full max-w-sm bg-black text-white z-[60] shadow-2xl transform transition-transform duration-500 ease-in-out
          ${cartDropdownOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex justify-between items-center p-6 border-b border-gray-700">
          <h2 className="text-2xl font-bold text-purple-400 uppercase tracking-wider">
            Shopping Cart
          </h2>
          <button
            onClick={handleCartToggle}
            className="p-2 rounded-full hover:bg-gray-800 transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-6 h-[calc(100%-5.5rem)] flex flex-col justify-between">
          <div className="flex-grow overflow-y-auto pb-4">
            {cart.length === 0 ? (
              <p className="text-gray-400 mt-4">Your cart is empty.</p>
            ) : (
              <div className="space-y-4">
                {cart.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-2 border-b border-gray-800">
                    <span>{item.name}</span>
                    <span className="font-semibold">${item.price}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="pt-6 border-t border-gray-700">
            <div className="flex justify-between font-bold text-xl mb-4">
              <span>Subtotal:</span>
              <span>
                ${cart.reduce((total, item) => total + item.price, 0)}
              </span>
            </div>
            <button
              onClick={() => {
                handleCartToggle();
                navigate("/cart");
              }}
              disabled={cart.length === 0}
              className={`w-full py-3 rounded-lg text-white font-bold transition-colors ${
                cart.length > 0
                  ? "bg-purple-500 hover:bg-purple-600"
                  : "bg-gray-700 cursor-not-allowed"
              }`}>
              Checkout ({cart.length})
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
