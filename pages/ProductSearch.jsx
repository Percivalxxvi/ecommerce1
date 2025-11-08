import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar"; // adjust the path if your SearchBar is elsewhere
import Navbar from "../components/Navbar";

const ProductSearch = () => {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");

  // Fetch all products once
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // Filter products based on the search query
  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-6">
      <Navbar page="search" />
      <SearchBar onSearch={setQuery} />

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="p-4 bg-gray-100 rounded-lg">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-40 object-contain"
              />
              <h2 className="text-sm mt-2 font-semibold">
                {product.title.slice(0, 25)}
              </h2>
              <p className="text-blue-600 font-bold">${product.price}</p>

              <h2 className="text-sm mt-2 font-semibold">
                {product.rating.rate} stars
              </h2>
            </div>
          ))
        ) : (
          <p className="text-gray-600 col-span-full text-center">
            No products found.
          </p>
        )}
      </div>
      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} KWIK SHOPPER. All Rights Reserved.{" "}
        <span>by GreyLine Studios</span>
      </div>
    </div>
  );
};

export default ProductSearch;
