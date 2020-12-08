import { configureStore } from "@reduxjs/toolkit";
import tasksReducer, { selectTasks } from "./features/tasks/tasksSlice";

const persistedState = localStorage.getItem(selectTasks)
    ? JSON.parse(localStorage.getItem(selectTasks))
    : {}

export default configureStore({
    reducer: {
        tasks: tasksReducer,
    },
    persistedState,
})