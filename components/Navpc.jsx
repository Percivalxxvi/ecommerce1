// src/components/Navpc.jsx
import React, { useState } from "react";
import { ShoppingCart, Menu, X, Heart, Settings2 } from "lucide-react";
// import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import AllCategories from "./AllCategories";
import SearchBar from "./SearchBar";
import useCartStore from "../store"; // ✅ Import your Zustand cart store

const Navpc = () => {
  const [isOpen, setIsOpen] = useState(false);

  // ✅ Pull the cart state directly from Zustand
  const { cart } = useCartStore();

  // ✅ Calculate total items and total price dynamically
  const cartCount = cart.reduce(
    (total, item) => total + (item.quantity || 1),
    0
  );
  const cartTotal = cart
    .reduce((total, item) => total + item.price * (item.quantity || 1), 0)
    .toFixed(2);

  return (
    <nav className="w-full bg-white shadow-md top-0 left-0 z-50 lg:block flex flex-col">
      <Link
        to="/"
        className="lg:text-2xl flex lg:hidden text-xl font-bold text-gray-800 justify-center"
      >
        KWIK SHOPPER
      </Link>

      <div className="max-w-7xl mx-auto lg:px-6 py-4 px-2 flex items-center lg:justify-between justify-between w-full">
        {/* Logo */}
        <Link
          to="/"
          className="lg:text-2xl lg:flex hidden text-sm font-bold text-gray-800"
        >
          KWIK SHOPPER
        </Link>

        {/* Search Section */}
        <div className="flex lg:w-151 border border-gray-400">
          <AllCategories />
          {/* <SearchBar /> */}
        </div>

        {/* Cart + Menu Buttons */}
        <div className="flex items-center space-x-6">
          <Settings2 className="lg:flex hidden" />
          <Link to="/favorites" className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-red-500" />
            Favorites
          </Link>
          {/* <Heart className="lg:flex hidden" /> */}

          {/* 🛒 Cart Icon */}
          <Link to="/cart" className="relative">
            <ShoppingCart className="w-6 h-6 text-gray-800 hover:text-blue-600 ml-2" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>

          {/* 💰 Cart Total (Desktop) */}
          <span className="hidden md:inline-block text-gray-800 font-medium">
            ${cartTotal}
          </span>

          {/* 📱 Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none"
          >
            {isOpen ? (
              <X className="w-10 h-10 text-gray-800" />
            ) : (
              <Menu className="w-10 h-10 text-gray-800" />
            )}
          </button>
        </div>
      </div>

      {/* 📱 Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white border-t border-gray-200 flex flex-col items-center space-y-4 py-4 font-medium text-gray-700">
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/shop" onClick={() => setIsOpen(false)}>
              Shop
            </Link>
          </li>
          <li>
            <Link to="/search" onClick={() => setIsOpen(false)}>
              Search
            </Link>
          </li>
          <li>
            <Link to="/favorites" className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-red-500" />
            Favorites
          </Link>
          </li>
          
          {/* 💰 Cart total visible on mobile */}
          <li className="text-gray-800 font-semibold">
            Cart Total: ${cartTotal}
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navpc;
