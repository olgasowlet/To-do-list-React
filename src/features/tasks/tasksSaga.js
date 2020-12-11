import { call, takeEvery, put } from "redux-saga/effects";
import getExampleTasks from "./getExampleTasks";
import { fetchExampleTasks, setExampleTasks } from "./tasksSlice";

function* fetchExampleTasksHandler() {
    try {
        const exampleTasks = yield call(getExampleTasks);
        yield put(setExampleTasks(exampleTasks));
    } catch(error) {
        yield call(alert, "Popsute :/")
    };
};

export default function* watchFetchExampleTasks() {
    yield takeEvery(fetchExampleTasks.type, fetchExampleTasksHandler);
};