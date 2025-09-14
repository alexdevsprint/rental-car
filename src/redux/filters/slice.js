import { createSlice } from "@reduxjs/toolkit";
import { fetchBrands } from "./operations";

const slice = createSlice({
  name: "filters",
  initialState: {
    brands: [],
    isLoading: false,
    error: null,

    selectedBrand: null,
    selectedPrice: null,
    mileageFrom: "",
    mileageTo: "",
  },
  reducers: {
    setSelectedBrand(state, action) {
      state.selectedBrand = action.payload;
    },
    setSelectedPrice(state, action) {
      state.selectedPrice = action.payload;
    },
    setMileageFrom(state, action) {
      state.mileageFrom = action.payload;
    },
    setMileageTo(state, action) {
      state.mileageTo = action.payload;
    },
    resetFilters(state) {
      state.selectedBrand = null;
      state.selectedPrice = null;
      state.mileageFrom = "";
      state.mileageTo = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBrands.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchBrands.fulfilled, (state, action) => {
        state.isLoading = false;
        state.brands = action.payload;
      })
      .addCase(fetchBrands.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {
  setSelectedBrand,
  setSelectedPrice,
  setMileageFrom,
  setMileageTo,
  resetFilters,
} = slice.actions;

export default slice.reducer;


