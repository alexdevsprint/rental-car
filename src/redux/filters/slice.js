import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: {
    brand: '',
    rentalPrice: 0,
    minMileage: 0,
    maxMileage: 0,
  },
  reducers: {},
  extraReducers: (builder) => {
    
  },
});


export default slice.reducer;