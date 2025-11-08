import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const AllCategories = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const categories = [
    { name: "Men’s Fashion", path: "/shop/mens" },
    { name: "Women’s Fashion", path: "/shop/womens" },
    { name: "Electronics", path: "/shop/electronics" },
    { name: "Home & Kitchen", path: "/shop/home" },
    { name: "Beauty & Health", path: "/shop/beauty" },
    { name: "Sports", path: "/shop/sports" },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center gap-1 bg-gray-200 hover:bg-gray-200 text-gray-800 font-medium px-4 py-2 lg:w-40 w-fit rounded-md transition"
      >
        All Categories
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          <ul className="py-2">
            {categories.map((cat, index) => (
              <li key={index}>
                <a
                  href={cat.path}
                  className="block px-4 py-2 hover:bg-gray-100 text-gray-700 transition"
                >
                  {cat.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AllCategories;
