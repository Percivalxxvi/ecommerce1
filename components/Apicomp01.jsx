import React from 'react'
import { ShoppingCart } from "lucide-react";
import { Heart } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import useCartStore from "../store";
import { useFavoritesStore } from "../store";


const Apicomp01 = ({ data, page, onAddToCart }) => {
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
            style={{ width: page === "shop" ? "" : "" }}
            className="lg:w-70 w-[49%] md:w-65 lg:h-95 h-85 bg-[#ffffff] flex flex-col items-center text-left lg:border-0 border rounded-xl"
        >
            <div className="w-4/4 flex">
                <h1 className="ml-2 mr-2 pb-2 pt-2 text-left w-[90%]">
                    {data.category.slice(0, 25)}
                </h1>
                <button
                    onClick={toggleFavorite}
                    className={`p-2 rounded-full transition-all cursor-pointer ${isFavorite ? "bg-red-500 text-white" : "bg-gray-200 text-gray-600"
                        }`}
                    aria-label="Add to Favorites"
                >
                    <Heart className={isFavorite ? "fill-white" : "fill-none"} />
                </button>
            </div>

            <img
                className="h-40 w-50 object-contain border-0"
                src={data.image}
                alt=""
            />
            <h2 className="ml-2 mr-2 text-left w-[90%]">{data.rating.rate} stars</h2>
            <h1 className="ml-2 mr-2 text-left w-[90%] text-sm font-semibold">
                {data.title.slice(0, 23)}
            </h1>
            <h1 className="ml-2 mr-2 text-left w-[90%] text-2xl">${data.price}</h1>
            <div className="w-4/4 flex items-center mt-2">
                <button
                    onClick={() => {
                        navigate("/description", { state: data });
                    }}
                    className="ml-2 mr-2 text-left shadow-xl hover:bg-blue-600 hover:text-white text-xl rounded-xl py-1 px-2 hover:cursor-pointer border hover:border-white"
                >
                    Details
                </button>
                <button
                    onClick={handleCartToggle}
                    className={`p-2 rounded-full shadow-md transition px-5 cursor-pointer lg:hidden ${isInCart
                            ? "bg-blue-700 text-white" // ✅ active state
                            : "bg-gray-100 text-gray-500 hover:bg-blue-400 hover:text-white"
                        }`}
                    aria-label="Add to cart"
                >
                    <ShoppingCart className="w-6 h-6" />
                </button>
            </div>
            <div className='lg:flex hidden'>
                 <button
                onClick={handleCartToggle}
                className={`p-2 rounded-full shadow-md transition px-5 cursor-pointer  ${isInCart
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

export default Apicomp01