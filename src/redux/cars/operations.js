import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosAPI from "../../api/api";

export const fetchCars = createAsyncThunk(
  "cars/fetchCars",
  async (_, thunkAPI) => {    
    try {
      const res = await axiosAPI.get("/cars");
      // console.log("✅ fetchCars response:", res.data);
      return res.data;
    } catch {
      return thunkAPI.rejectWithValue(true);
    }
  }
);