import React from "react";
import { ShoppingCart } from "lucide-react";
import { Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import useCartStore from "../store";
import { useFavoritesStore } from "../store";

const Apicomp3 = ({ data, page, onAddToCart }) => {
  const navigate = useNavigate();
  const { cart, addToCart, removeFromCart } = useCartStore();

  const handleAddToCart = () => {
    addToCart(data); // ✅ adds the item to the global cart store
  };

  const isInCart = cart.some((item) => item.id === data.id);
  const handleCartToggle = () => {
    if (isInCart) {
      removeFromCart(data.id); // 🗑️ Remove if already added
    } else {
      addToCart(data); // ✅ Add if not in cart
    }
  };
   const { favorites, addToFavorites, removeFromFavorites } =
          useFavoritesStore();
    
        const isFavorite = favorites.some((fav) => fav.id === data.id);
    
        const toggleFavorite = () => {
          if (isFavorite) {
            removeFromFavorites(data.id);
          } else {
            addToFavorites(data);
          }
        };
  return (
    <div
      style={{ width: page === "shop" ? "260px" : "" }}
      className="lg:w-full w-90 h-45 bg-[#ffffff] flex flex-col items-center text-left pt-2"
    >
      <div className="flex">
        <img
          className="h-30 w-35 object-contain border border-gray-300 rounded-xl"
          src={data.image}
          alt=""
        />
        <div className="flex flex-col">
          <h1 className="ml-2 mr-2 text-left w-[90%] text-sm">
            {data.category.slice(0, 25)}
          </h1>
          <h2 className="ml-2 mr-2 text-left w-[90%] text-sm">
            {data.rating.rate} stars
          </h2>
          <h1 className="ml-2 mr-2 text-left w-[90%] text-sm font-semibold">
            {data.title.slice(0, 25)}
          </h1>
          <h1 className="ml-2 mr-2 text-left w-[90%] text-xl">${data.price}</h1>
        </div>
      </div>

      <div className="w-4/4 flex items-center justify-end mt-1 mb-5">
        <button
          onClick={() => {
            navigate("/description", { state: data });
          }}
          className="ml-2 mr-2 text-left shadow-xl hover:bg-blue-600 hover:text-white text-xl py px-2 hover:cursor-pointer border hover:border-white"
        >
          Details
        </button>
        <button
          onClick={handleCartToggle}
          className={`p-1 rounded-full shadow-md transition px-5 cursor-pointer ${
            isInCart
              ? "bg-blue-700 text-white" // ✅ active state
              : "bg-gray-100 text-gray-500 hover:bg-blue-400 hover:text-white"
          }`}
          aria-label="Add to cart"
        >
          <ShoppingCart className="w-6 h-6" />
        </button>
         <button
                  onClick={toggleFavorite}
                  className={`p-2 rounded-full transition-all cursor-pointer ${
                    isFavorite ? "bg-red-500 text-white" : "bg-gray-200 text-gray-600"
                  }`}
                  aria-label="Add to Favorites"
                >
                  <Heart className={isFavorite ? "fill-white" : "fill-none"} />
                </button>
      </div>
    </div>
  );
};

export default Apicomp3;
