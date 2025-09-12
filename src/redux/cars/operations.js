import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosAPI from "../../api/api";

export const fetchCars = createAsyncThunk(
  "cars/fetchCars",
  async (page = 1, thunkAPI) => {    
    try {
      const res = await axiosAPI.get(`/cars?page=${page}&limit=8`);
      console.log("✅ fetchCars response:", res.data);
      return res.data;
    } catch {
      return thunkAPI.rejectWithValue(true);
    }
  }
);