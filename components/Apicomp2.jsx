import React from "react";
import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import useCartStore from "../store";

const Apicomp2 = ({ data, page, onAddToCart }) => {
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
  return (
    <div
      style={{ width: page === "shop" ? "260px" : "" }}
      className="lg:w-70 w-90 h-fit bg-[#ffffff] flex flex-col items-center text-left pb-2 pt-2 pl-2 border border-gray-300 rounded-xl"
    >
      <div className="flex">
        <img
          className="h-25 w-25 object-contain border border-gray-300 rounded-xl"
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

      <div className="w-4/4 flex items-center mt-1">
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
      </div>
    </div>
  );
};

export default Apicomp2;
