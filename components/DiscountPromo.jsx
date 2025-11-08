import React from "react";

const DiscountPromo = () => {
  return (
    <section className="relative bg-linear-to-r from-blue-600 to-indigo-700 text-white py-16 px-6 sm:px-10 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-10">
      {/* Promo Text */}
      <div className="max-w-lg text-center lg:text-left">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">
          🔥 Limited-Time Offer!
        </h2>
        <p className="text-lg sm:text-xl mb-6 text-gray-100">
          Enjoy up to <span className="font-bold text-yellow-300">50% OFF</span>
          on all electronics and fashion accessories. Don’t miss out!
        </p>

        <a href="/shop"><button className="bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-300 transition-transform transform hover:scale-105 hover:cursor-pointer">
          Shop Now
        </button></a>
        
      </div>

      {/* Promo Image */}
      <div className="relative">
        <img
          src="https://cyberstore.qodeinteractive.com/wp-content/uploads/2017/08/h2-product-4-800x600.jpg"
          alt="Promo Product"
          className="rounded-2xl shadow-2xl w-full max-w-sm object-cover"
        />
        <div className="absolute -top-4 -right-4 bg-yellow-400 text-gray-900 font-bold px-4 py-2 rounded-full text-sm shadow-md animate-bounce">
          50% OFF
        </div>
      </div>
    </section>
  );
};

export default DiscountPromo;
