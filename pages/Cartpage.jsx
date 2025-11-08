import React from "react";
import { Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import useCartStore from "../store"; // ✅ Ensure the path is correct

const CartPage = () => {
  const navigate = useNavigate();
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useCartStore();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 relative">
      <Navbar page="cart" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-2 mb-2">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-0">
          🛒 Your Cart
        </h1>
        <button
          onClick={() => navigate("/")}
          className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm sm:text-base hover:bg-blue-700 transition"
        >
          Back to Store
        </button>
      </div>

      {/* Empty Cart */}
      {cart.length === 0 ? (
        <div className="text-center mt-20 text-gray-600 text-lg sm:text-xl">
          Your cart is empty 🛍
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-8">
          {/* 🛍 Scrollable Cart Items */}
          <div
            className="flex-1 lg:w-2/3 flex flex-col gap-4 max-h-[70vh] overflow-y-auto pr-2"
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "#9ca3af #f3f4f6",
            }}
          >
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-white shadow-md p-4 rounded-xl transition hover:shadow-lg"
              >
                {/* Product Info */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 w-full sm:w-auto">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-24 h-24 object-contain mx-auto sm:mx-0"
                  />
                  <div className="text-center sm:text-left">
                    <h2 className="font-semibold text-gray-800 text-sm sm:text-base">
                      {item.title.slice(0, 40)}...
                    </h2>
                    <p className="text-gray-500 text-sm">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="flex justify-center sm:justify-start items-center gap-3 mt-3 sm:mt-0">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="bg-gray-200 px-3 py-1 rounded-md hover:bg-gray-300 text-lg font-semibold"
                  >
                    −
                  </button>
                  <span className="font-medium text-sm sm:text-base">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="bg-gray-200 px-3 py-1 rounded-md hover:bg-gray-300 text-lg font-semibold"
                  >
                    +
                  </button>
                </div>

                {/* Price & Remove */}
                <div className="flex justify-between sm:justify-end items-center mt-4 sm:mt-0 gap-4 sm:gap-6">
                  <p className="font-semibold text-gray-800 text-sm sm:text-lg">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600 hover:text-red-800 transition"
                    aria-label="Remove item"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* 💰 Static Total Section */}
          <div className="lg:w-1/3 w-full mt-10 lg:mt-0">
            <div className="bg-white shadow-md p-6 rounded-xl lg:sticky lg:top-24">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">
                Order Summary
              </h2>
              <div className="flex justify-between mb-4">
                <span className="text-gray-600 font-medium">Subtotal:</span>
                <span className="text-gray-800 font-semibold">
                  ${total.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between mb-4">
                <span className="text-gray-600 font-medium">Shipping:</span>
                <span className="text-gray-800 font-semibold">$0.00</span>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between text-lg font-bold mb-6">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex flex-col gap-3">
                <button
                  onClick={clearCart}
                  className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition text-sm sm:text-base"
                >
                  Clear Cart
                </button>
                <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition text-sm sm:text-base">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
