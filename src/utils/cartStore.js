import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [],

      addToCart: product => {
        const cart = get().cart;
        const existing = cart.find(item => item.id === product.id);

        if (existing) {
          set({
            cart: cart.map(item =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          });
        } else {
          set({ cart: [...cart, { ...product, quantity: 1 }] });
        }
      },

      removeFromCart: id => {
        set(state => ({
          cart: state.cart.filter(item => item.id !== id),
        }));
      },

      updateQuantity: (id, qty) => {
        if (qty <= 0) {
          set(state => ({
            cart: state.cart.filter(item => item.id !== id),
          }));
          return;
        }

        set(state => ({
          cart: state.cart.map(item =>
            item.id === id ? { ...item, quantity: qty } : item
          ),
        }));
      },

      clearCart: () => set({ cart: [] }),

      totalItems: () => {
        return get().cart.reduce((sum, item) => sum + item.quantity, 0);
      },

      totalPrice: () => {
        return get().cart.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        );
      },
    }),
    {
      name: "cart-storage",
      getStorage: () => localStorage,
    }
  )
);
