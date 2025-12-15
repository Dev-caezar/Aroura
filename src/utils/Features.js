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

    addToCart: (state, action) => {
      const product = action.payload;

      const existingItem = state.cart.find(item => item._id === product._id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({
          ...product,
          quantity: 1,
        });
      }
    },

    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(item => item._id !== action.payload);
    },

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
