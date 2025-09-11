import { createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "./operations";
const slice = createSlice({
  name: "cars",
  initialState: {
    items: [],
    currentPage: 1,
  },
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCars.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

export const { setCurrentPage } = slice.actions;

export default slice.reducer;
