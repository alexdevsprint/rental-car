import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosAPI from "../../api/api";

export const fetchBrands = createAsyncThunk(
  "filters/fetchBrands",
  async (_, thunkAPI) => {
    try {
      const res = await axiosAPI.get("/brands");
      return res.data; 
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);