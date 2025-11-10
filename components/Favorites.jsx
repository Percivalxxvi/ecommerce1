import React from "react";
import { useFavoritesStore } from "../store";
import { Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const Favorites = () => {
     const navigate = useNavigate();
  const { favorites, removeFromFavorites, clearFavorites } =
    useFavoritesStore();

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <Navbar page="" />
      <div className="max-w-1xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          ❤️ Your Favorites
        </h1>

        {favorites.length === 0 ? (
          <div className="text-center mt-20">
            <p className="text-gray-600 mb-4">
              You haven’t added anything yet.
            </p>
            <Link
              to="/shop"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Go Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="flex flex-wrap gap-2 w-full">
              {favorites.map((item) => (
                <div
                  key={item.id}
                  className="bg-gray-100 p-4 w-70 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer"
                  onClick={() => {
                    navigate("/description", { state: item });
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-30 object-contain rounded-md"
                  />
                  <h2 className="text-lg font-semibold mt-2 line-clamp-1">
                    {item.title}
                  </h2>
                  <p className="text-gray-600">${item.price}</p>
                  <button
                    onClick={() => removeFromFavorites(item.id)}
                    className="mt-3 flex items-center gap-2 text-red-500 hover:text-red-700 transition"
                  >
                    <Trash2 className="w-4 h-4" /> Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-10">
              <button
                onClick={clearFavorites}
                className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
              >
                Clear All Favorites
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Favorites;
