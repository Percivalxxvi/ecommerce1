import React, { useEffect, useMemo } from "react";
import Navbar from "../components/Navbar";
import Apicomp1 from "../components/Apicomp1";
import { useData } from "../store";
import { useParams } from "react-router-dom";

const Shop = () => {
  const { category } = useParams(); // e.g. "mens", "womens", "electronics"
  const { value, FetchData } = useData();

  // Fetch data only once when page loads
  useEffect(() => {
    FetchData();
  }, []);

  // 🧠 Normalize category name from URL to match your API’s format
  const normalizedCategory = useMemo(() => {
    if (!category) return null;

    switch (category.toLowerCase()) {
      case "mens":
      case "men":
      case "men’s":
      case "men's":
        return "men's clothing";
      case "womens":
      case "women":
      case "women’s":
      case "women's":
        return "women's clothing";
      case "electronics":
        return "electronics";
      case "beauty":
        return "beauty";
      case "home":
        return "home";
      case "sports":
        return "sports";
      default:
        return category.toLowerCase();
    }
  }, [category]);

  // 🧩 Filter the fetched API data by category
  const filteredProducts = useMemo(() => {
    if (!normalizedCategory) return value; // show all if no specific category
    return value.filter(
      (item) =>
        item.category &&
        item.category.toLowerCase() === normalizedCategory.toLowerCase()
    );
  }, [value, normalizedCategory]);

  return (
    <div>
      <Navbar page="shop" />

      <div className="p-4">
        <h1 className="text-2xl font-semibold mb-4">
          {normalizedCategory
            ? `${normalizedCategory.toUpperCase()} COLLECTION`
            : "ALL PRODUCTS"}
        </h1>
      </div>

      {/* 🛍️ Product Grid */}
      <div className="h-fit lg:bg-[#f5f5f5] flex items-center justify-center">
        <div className="flex lg:gap-5 gap-1 flex-wrap items-center justify-center">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item, index) => (
              <Apicomp1 page="shop" key={index} data={item} />
            ))
          ) : (
            <p className="text-white text-center py-10 text-lg">
              No products found in this category.
            </p>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} KWIK SHOPPER. All Rights Reserved.{" "}
        <span>by GreyLine Studios</span>
      </div>
    </div>
  );
};

export default Shop;
