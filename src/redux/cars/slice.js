import { createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "./operations";
const slice = createSlice({
  name: "cars",
  initialState: {
    items: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCars.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

export default slice.reducer;
