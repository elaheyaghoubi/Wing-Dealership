import { createSlice } from "@reduxjs/toolkit";
import carData from "../Data/CarData.js";

const initialState = {
    cars: carData,
    displayedCars: carData,
    filters: {
        category: null,
    },
    sort: "a-z", // Default sort
};

const carSlice = createSlice({
    name: "cars",
    initialState,
    reducers: {
        fetchCars: (state) => {
            state.cars = carData;
            state.displayedCars = carData;
        },
        filterAndSortCars: (state, action) => {
            if (action.payload?.filter !== undefined) {
                state.filters.category = action.payload.filter;
            }

            if (action.payload?.sort !== undefined) {
                state.sort = action.payload.sort;
            }

            let filteredCars = [...state.cars];
            if (state.filters.category && state.filters.category !== "All") {
                filteredCars = filteredCars.filter(
                    (car) => car?.category === state.filters.category
                );
            }

            let sortedCars = [...filteredCars];
            switch (state.sort) {
                case "low-high":
                    sortedCars.sort((a, b) => a.price - b.price);
                    break;
                case "high-low":
                    sortedCars.sort((a, b) => b.price - a.price);
                    break;
                case "a-z":
                default:
                    sortedCars.sort((a, b) => a.brand.localeCompare(b.brand));
            }

            state.displayedCars = sortedCars;
        },
    },
});

export const { fetchCars, filterAndSortCars } = carSlice.actions;

export const selectAllCars = (state) => state.cars.cars;
export const selectDisplayedCars = (state) => state.cars.displayedCars;
export const selectCurrentFilter = (state) => state.cars.filters.category;
export const selectCurrentSort = (state) => state.cars.sort;

export default carSlice.reducer;