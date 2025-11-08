import React from 'react'
import { Link } from "react-router-dom";

const Navbar = ({page}) => {
  return (
    <div className="lg:flex bg-[#5677fc] gap-3 h-20 items-center pl-25 hidden">
      <Link
        to="/"
        style={{ color: page === "home" ? "black" : "" }}
        className="hover:text-gray-200 text-white"
      >
        Home
      </Link>

      <Link
        to="/shop"
        style={{ color: page === "shop" ? "black" : "" }}
        className="hover:text-gray-200 text-white"
      >
        Shop
      </Link>

      <Link
        // to="/about"
        // style={{ color: page === "search" ? "black" : "" }}
        className="hover:text-gray-200 text-white"
      >
        About
      </Link>

      <Link
        // to="/contact"
        // style={{ color: page === "search" ? "black" : "" }}
        className="hover:text-gray-200 text-white"
      >
        Contact
      </Link>

      <Link
        to="/search"
        style={{ color: page === "search" ? "black" : "" }}
        className="hover:text-gray-200 text-white"
      >
        Search
      </Link>
    </div>
  );
}

export default Navbar