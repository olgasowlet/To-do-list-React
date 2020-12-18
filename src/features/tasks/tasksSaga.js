import { call, throttle, put, takeEvery, select } from "redux-saga/effects";
import getExampleTasks from "./getExampleTasks";
import { fetchExampleTasks, selectTasks, setExampleTasks } from "./tasksSlice";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";

function* fetchExampleTasksHandler() {
    try {
        const exampleTasks = yield call(getExampleTasks);
        yield put(setExampleTasks(exampleTasks));
    } catch (error) {
        yield call(alert, "Popsute :/");
    };
};

function* addTasksToLocalStorageHandler() {
    try {
        const tasks = yield select(selectTasks);
        yield call(saveTasksInLocalStorage, tasks);
    } catch (error) {
        yield call(alert, "Popsute :/");
    };
};

export default function* tasksSaga() {
    yield throttle(10_000, fetchExampleTasks.type, fetchExampleTasksHandler);
    yield takeEvery("*", addTasksToLocalStorageHandler);
};