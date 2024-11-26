import { createSlice } from "@reduxjs/toolkit";

// Define initial state.
const initialState = {
  tasks: [],
};

// Define tasks slice.
const todoSlice = createSlice({ 
    name: "todo",
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload);
        },

        removeTask: (state, action) => {
            state.tasks = state.tasks.filter((task) => task.id  !== action.payload);
        }
    }
});

// Export actions
export const { addTask, removeTask } = todoSlice.actions;

// Export reducer
export default todoSlice.reducer;