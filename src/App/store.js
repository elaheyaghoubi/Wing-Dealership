import {configureStore} from '@reduxjs/toolkit'
import carSlice from "../Features/carSlice.js";

const store = configureStore({
    reducer: {
        cars: carSlice,
    }
})
export default store;
