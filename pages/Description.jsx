import React from 'react'
import Navpc from "../components/Navpc";
import { useLocation, Link } from 'react-router-dom';
import useCartStore from "../store";

const Description = () => {
  const { state } = useLocation();
  const { cart, addToCart, removeFromCart } = useCartStore();
   const isInCart = cart.some((item) => item.id === state.id);
   const handleCartToggle = () => {
     if (isInCart) {
       removeFromCart(state.id); // 🗑️ Remove if already added
     } else {
       addToCart(state); // ✅ Add if not in cart
     }
   };
  
  return (
    <div>
      {/* <Navpc /> */}
      <Link to={"/shop"} className="ml-2">
        Return
      </Link>
      <div className="lg:h-screen h-fit flex lg:flex-row flex-col items-center justify-center lg:gap-10">
        <img className='lg:h-130 h-70' src={state.image} alt="" />
        <div className="h-5/6 lg:w-2/4 flex flex-col gap-5 p-5">
          <h1 className="text-3xl font-bold">{state.title}</h1>
          <h1 className="text-2xl font-semibold">${state.price}</h1>
          <div className="h-[0.5px] w-4/4 bg-gray-400"></div>
          <h1>{state.rating.rate} stars</h1>
          <h1>{state.description}</h1>
          <div className="flex ">
            <button
              onClick={handleCartToggle}
              className={`flex items-center gap-1 px-4 py-2 rounded-lg shadow-md transition hover:cursor-pointer ${
                isInCart
                  ? "bg-red-600 text-white hover:bg-red-700"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              {isInCart ? (
                <>
                  <span>Remove from Cart</span>
                </>
              ) : (
                <>
                  <span>Add to Cart</span>
                </>
              )}
            </button>
          </div>
          <button>Add to Favorites</button>
        </div>
      </div>
    </div>
  );
}

export default Description