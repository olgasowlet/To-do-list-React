import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import tasksReducer, { selectTasks } from "./features/tasks/tasksSlice";

const persistedState = localStorage.getItem(selectTasks)
    ? JSON.parse(localStorage.getItem(selectTasks))
    : {};

const sagaMiddleWare = createSagaMiddleware();


const store = configureStore({
    reducer: {
        tasks: tasksReducer,
    },
    middleware: [sagaMiddleWare],
    persistedState,
})

sagaMiddleWare.run(rootSaga);

export default store;