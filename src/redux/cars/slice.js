import { createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "./operations";
import { fetchCarById } from "./operations";

const slice = createSlice({
  name: "cars",
  initialState: {
    items: [],
    currentPage: 1,
    isLoading: false,
    hasMore: true,
    selectedCar: null,
  },
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    clearSelectedCar(state) {
      state.selectedCar = null;
    },
    resetCatalog(state) {
      state.items = [];
      state.currentPage = 1;
      state.hasMore = true;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(fetchCars.fulfilled, (state, action) => {
        const newCars = action.payload.cars;
        const totalPages = action.payload.totalPages;
        const currentPage = Number(action.payload.page);

        state.isLoading = false;

        const existingIds = new Set(state.items.map((car) => car.id));
        const filteredNewCars = newCars.filter(
          (car) => !existingIds.has(car.id)
        );

        state.items.push(...filteredNewCars);

        if (currentPage >= totalPages) {
          state.hasMore = false;
        }
      })

      .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
      })

      .addCase(fetchCarById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCarById.fulfilled, (state, action) => {
        state.selectedCar = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchCarById.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { setCurrentPage, clearSelectedCar, resetCatalog } = slice.actions;

export default slice.reducer;
