import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to fetch products
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const result = await axios.get('https://dinespot-server.onrender.com/restaurants');
  return result.data;
});

// Initial state
const initialState = {
  allProducts: [],
  allProductsDummy: [],
  loading: false,
  error: ''
};

// Create the slice
const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    searchProduct: (state, action) => {
      state.allProducts = state.allProductsDummy.filter(item =>
        item.neighborhood.toLowerCase().includes(action.payload.toLowerCase())
      );
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.allProducts = action.payload;
        state.allProductsDummy = action.payload;
        state.loading = false;
        state.error = '';
      })
      .addCase(fetchProducts.pending, (state) => {
        state.allProducts = [];
        state.allProductsDummy = [];
        state.loading = true;
        state.error = '';
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.allProducts = [];
        state.allProductsDummy = [];
        state.loading = false;
        state.error = 'API call failed..please try again later!!';
      });
  }
});

export const { searchProduct } = productSlice.actions;
export default productSlice.reducer;
