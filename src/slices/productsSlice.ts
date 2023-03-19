import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProducts: () => {},
    setProducts: (state: any, action) => {
      state.products = action.payload;
    },
  },
});

export const { getProducts, setProducts } = productsSlice.actions;

export default productsSlice.reducer;
