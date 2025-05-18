import { createSlice } from "@reduxjs/toolkit";
import carData from "../Data/CarData.js";

const initialState = {
    cars: carData,
    displayedCars: carData,
    filters: {
        category: null,
        price: { min: null, max: null },
    },
    sort: "a-z",
};

const carSlice = createSlice({
    name: "cars",
    initialState,
    reducers: {
        fetchCars: (state) => {
            state.cars = carData;
            state.displayedCars = carData;
        },
        setPriceFilter: (state, action) => {
            const { min, max } = action.payload;
            if (min !== null && max !== null && min > max) return;
            state.filters.price = {
                min: min ?? null,
                max: max ?? null,
            };
        },
        setCategoryFilter: (state, action) => {
            state.filters.category = action.payload;
        },
        setSortOption: (state, action) => {
            state.sort = action.payload;
        },
        resetFilters: (state) => {
            state.filters = {
                category: null,
                price: { min: null, max: null },
            };
            state.sort = "a-z";
            state.displayedCars = [...state.cars];
        },
        applyFilters: (state) => {
            const filterConditions = [];
            if (state.filters.category && state.filters.category !== "All") {
                filterConditions.push(car => car.category === state.filters.category);
            }
            if (state.filters.price.min !== null) {
                filterConditions.push(car => car.price >= state.filters.price.min);
            }
            if (state.filters.price.max !== null) {
                filterConditions.push(car => car.price <= state.filters.price.max);
            }

            const filteredCars = filterConditions.length > 0
                ? state.cars.filter(car => filterConditions.every(condition => condition(car)))
                : [...state.cars];

            let sortedCars = [...filteredCars];
            switch (state.sort) {
                case "low-high": sortedCars.sort((a, b) => a.price - b.price); break;
                case "high-low": sortedCars.sort((a, b) => b.price - a.price); break;
                case "a-z":
                default: sortedCars.sort((a, b) => a.brand.localeCompare(b.brand));
            }

            state.displayedCars = sortedCars;
        }
    },
});

export const {
    fetchCars,
    setPriceFilter,
    setCategoryFilter,
    setSortOption,
    resetFilters,
    applyFilters
} = carSlice.actions;

export const selectAllCars = (state) => state.cars.cars;
export const selectDisplayedCars = (state) => state.cars.displayedCars;
export const selectCurrentFilterCategory = (state) => state.cars.filters.category;
export const selectCurrentFilterPrice = (state) => state.cars.filters.price;
export const selectCurrentSort = (state) => state.cars.sort;

export default carSlice.reducer;