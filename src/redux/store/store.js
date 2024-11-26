import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../reducers/todoSlice";

// Create a redux store holding app
const store = configureStore({
    reducer: {
        todoReducer,
    },
})

export default store;