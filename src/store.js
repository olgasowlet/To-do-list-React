import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import tasksReducer from "./features/tasks/tasksSlice";

const sagaMiddleWare = createSagaMiddleware();


const store = configureStore({
    reducer: {
        tasks: tasksReducer,
    },
    middleware: [sagaMiddleWare],
})

sagaMiddleWare.run(rootSaga);

export default store;