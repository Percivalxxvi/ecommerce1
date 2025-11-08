import React from 'react'
import Navpc from "../components/Navpc";


const Cart = () => {
  return (
    <div>
      {/* <Navpc /> */}
      {/* <div className="h-screen bg-green-300"></div> */}
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">🛍 Store</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-xl p-4 shadow-md bg-white"
            >
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <p className="text-gray-600">${product.price}</p>
              <button
                onClick={() => addToCart(product)}
                className="mt-2 bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {/* 🛒 Cart Section */}
        <div className="mt-10 p-4 border-t">
          <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul className="space-y-2">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between items-center border-b pb-2"
                >
                  <span>
                    {item.title} × {item.quantity}
                  </span>
                  <div>
                    <span className="mr-4">${item.price * item.quantity}</span>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-600 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
          <h3 className="text-xl font-bold mt-4">Total: ${total}</h3>
        </div>
      </div>
    </div>
  );
}

export default Cart