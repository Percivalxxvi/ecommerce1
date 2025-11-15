import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Shop from "../pages/Shop";
import Description from "../pages/Description";
import Cart from "../pages/Cart";
import CartPage from '../pages/Cartpage';
import Navpc from '../components/Navpc';
import ProductSearch from "../pages/ProductSearch";
import BackToTopButton from '../components/BackToTopButton';
import Favorites from '../components/Favorites';
import Checkout from '../pages/Checkout';

const App = () => {
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const addToCart = (price) => {
    setCartCount(cartCount + 1);
    setCartTotal(cartTotal + price);
  };
  return (
    <Router>
      <Navpc cartCount={cartCount} cartTotal={cartTotal} />
      {/* 
      <div className="pt-20 p-6 text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to ShopEase</h1>
        <button
          onClick={() => addToCart(4999.99)}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          Add Item (₦4999.99)
        </button>
      </div> */}
      <BackToTopButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:category" element={<Shop />} />
        <Route path="/description" element={<Description />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/search" element={<ProductSearch />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}

export default App