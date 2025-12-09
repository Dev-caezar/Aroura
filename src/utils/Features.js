import { createSlice } from "@reduxjs/toolkit";

const globalInitialState = {
  userData: null,
  userToken: "",
  cart: [],
};

const userSlice = createSlice({
  name: "user",
  initialState: globalInitialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
    },

    setUserToken: (state, action) => {
      state.userToken = action.payload;
    },

    // ⭐ Add Product to Cart
    addToCart: (state, action) => {
      const product = action.payload;

      // Check if product exists in cart using _id
      const existingItem = state.cart.find(item => item._id === product._id);

      if (existingItem) {
        // If product already exists → increase quantity
        existingItem.quantity += 1;
      } else {
        // If new product → add with quantity = 1
        state.cart.push({
          ...product,
          quantity: 1,
        });
      }
    },

    // ⭐ Remove Product
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(item => item._id !== action.payload);
    },

    // ⭐ Clear Cart
    clearCart: state => {
      state.cart = [];
    },
  },
});

export const {
  setUserData,
  setUserToken,
  addToCart,
  removeFromCart,
  clearCart,
} = userSlice.actions;

export default userSlice.reducer;
