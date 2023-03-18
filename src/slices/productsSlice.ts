import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    items: [],
    status: null,
    error: null,
};

export const productsFetch = createAsyncThunk(
    "products/productsFetch",
    async () => {
        try {
            const resp = await axios.get(process.env.REACT_APP_BASE_URL || "");
            return resp?.data;
        } catch (err) {
            console.log(err);
        }
    }
);

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(productsFetch.pending, (state: any, action) => {
            state.status = "pending";
        });

        builder.addCase(productsFetch.fulfilled, (state: any, action) => {
            state.status = "success";
            state.items = action.payload;
        });

        builder.addCase(productsFetch.rejected, (state: any, action) => {
            state.status = "rejected";
        });
    },
});

export default productsSlice.reducer;
