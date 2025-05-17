import { createSlice } from "@reduxjs/toolkit";
import carData from "../Data/CarData.js";

const initialState = {
    cars: carData,
    filteredCars: carData,
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
            state.filters.category = action.payload;
            if (!action.payload) {
                state.filteredCars = state.cars;
            } else {
                state.filteredCars = state.cars.filter(car =>
                    car.category === action.payload
                );
            }
        }
    }
});

export const { fetchCars, filterCars } = carSlice.actions;

export const selectAllCars = (state) => state.cars.cars;
export const selectFilteredCars = (state) => state.cars.filteredCars;
export const selectCurrentFilter = (state) => state.cars.filters.category;

export default carSlice.reducer;