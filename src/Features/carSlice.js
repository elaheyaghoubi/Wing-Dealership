import { createSlice } from "@reduxjs/toolkit";
import carData from "../Data/CarData.js";

const initialState = {
    cars: carData,  // Initialize with your car data
    filteredCars: carData   ,  // Initialize filtered cars with all cars
    filters: {
        category: null
    }
};

const carSlice = createSlice({
    name: "cars",
    initialState,
    reducers: {
        fetchCars: (state) => {
            state.cars = carData;
            state.filteredCars = carData;
        },
        filterCars: (state, action) => {
            // Update the filter
            state.filters.category = action.payload;

            // Apply the filter
            if (!action.payload) {
                // If no category selected, show all cars
                state.filteredCars = state.cars;
            } else {
                // Filter cars by category
                state.filteredCars = state.cars.filter(car =>
                    car.category === action.payload
                );
            }
        }
    }
});

export const { fetchCars, filterCars } = carSlice.actions;

// Selectors
export const selectAllCars = (state) => state.cars.cars;
export const selectFilteredCars = (state) => state.cars.filteredCars;
export const selectCurrentFilter = (state) => state.cars.filters.category;

export default carSlice.reducer;