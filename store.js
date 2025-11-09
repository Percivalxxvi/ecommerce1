import { create } from "zustand";
import { persist } from "zustand/middleware";


export const useCount=create((set)=>(
    {
        data:0,
        useAdd:()=>{set((state)=>({data:state.data+1}))},
        useMinus:()=>{set((state)=>({data:state.data-1}))}
    }
))

export const useData=create((set)=>(
    {
        value:[],
        Cart:[],
        FetchData:async()=>{
            const res=await fetch("https://fakestoreapi.com/products")
            const res2=await res.json()
            set({value:res2})
            console.log(res2)
        },
        addToCart:(product)=>set((state)=>({Cart:[...state.Cart,product]}))
    }
))

const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [],

      // ✅ Add item to cart
      addToCart: (product) => {
        const existing = get().cart.find((item) => item.id === product.id);

        if (existing) {
          set({
            cart: get().cart.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          });
        } else {
          set({
            cart: [...get().cart, { ...product, quantity: 1 }],
          });
        }
      },

      // ✅ Remove item
      removeFromCart: (id) => {
        set({
          cart: get().cart.filter((item) => item.id !== id),
        });
      },

      // ✅ Increase quantity
      increaseQuantity: (id) => {
        set({
          cart: get().cart.map((item) =>
            item.id === id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        });
      },

      // ✅ Decrease quantity
      decreaseQuantity: (id) => {
        set({
          cart: get().cart
            .map((item) =>
              item.id === id && item.quantity > 1
                ? { ...item, quantity: item.quantity - 1 }
                : item
            )
            .filter((item) => item.quantity > 0),
        });
      },

      // ✅ Clear entire cart
      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "cart-storage", // 🧠 saved in localStorage
    }
  )
);

export default useCartStore;

export const useFavoritesStore = create((set) => ({
  favorites: [],

  addToFavorites: (item) =>
    set((state) => {
      if (!item || !item.id) return state; // Prevent invalid adds
      const exists = state.favorites.some((fav) => fav.id === item.id);
      if (exists) return state; // Prevent duplicates
      return { favorites: [...state.favorites, item] };
    }),

  removeFromFavorites: (id) =>
    set((state) => ({
      favorites: state.favorites.filter((fav) => fav.id !== id),
    })),

  clearFavorites: () => set({ favorites: [] }),
}));

