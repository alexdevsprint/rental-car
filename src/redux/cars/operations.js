import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosAPI from "../../api/api";


export const fetchCars = createAsyncThunk(
  "cars/fetchCars",
  async ({ page = 1, brand, price, minMileage, maxMileage } = {}, thunkAPI) => {
    try {
      const params = new URLSearchParams();
      params.append("page", page);
      params.append("limit", 8);

      if (brand) params.append("brand", brand);
      if (price) params.append("price", price);
      if (minMileage) params.append("minMileage", minMileage);
      if (maxMileage) params.append("maxMileage", maxMileage);

      const res = await axiosAPI.get(`/cars?${params.toString()}`);
      console.log("✅ fetchCars response:", res.data);
      return res.data;
    } catch {
      return thunkAPI.rejectWithValue(true);
    }
  }
);
// export const fetchCars = createAsyncThunk(
//   "cars/fetchCars",
//   async (page = 1, thunkAPI) => {    
//     try {
//       const res = await axiosAPI.get(`/cars?page=${page}&limit=8`);
//       console.log("✅ fetchCars response:", res.data);
//       return res.data;
//     } catch {
//       return thunkAPI.rejectWithValue(true);
//     }
//   }
// );

export const fetchCarById = createAsyncThunk(
  "cars/fetchCarById",
  async (id, thunkAPI) => {
    try {
      const res = await axiosAPI.get(`/cars/${id}`);
      return res.data;
    } catch {
      return thunkAPI.rejectWithValue(true);
    }
  }
);
