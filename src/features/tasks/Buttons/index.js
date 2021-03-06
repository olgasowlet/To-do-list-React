import React from "react";
import { Span, Button } from "./style.js";
import { selectTasks, toggleHideDone, setAllDone, selectHideDone } from "../tasksSlice";
import { useDispatch, useSelector } from "react-redux";


const Buttons = () => {
    const dispatch = useDispatch();

    const tasks = useSelector(selectTasks);
    const hideDone = useSelector(selectHideDone);

    if (tasks.length === 0) {
        return null;
    }

    return (
        <Span>
            <Button onClick={() => dispatch(toggleHideDone())}>{hideDone ? "Pokaż ukończone" : "Ukryj ukończone"}</Button>
            <Button onClick={() => dispatch(setAllDone())} disabled={tasks.every(({ done }) => done)}>Ukończ wszystkie</Button>
        </Span >
    )
}

export default Buttons;