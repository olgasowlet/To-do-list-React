import React from "react";
import { Span, Button } from "./style.js";
import { selectTasks, toggleHideDone } from "../tasksSlice";
import { useDispatch, useSelector } from "react-redux";


const Buttons = (props) => {
    const dispatch = useDispatch();

    const { tasks, hideDone } = useSelector(selectTasks);

    if (tasks.length === 0) {
        return null;
    }

    return (
        <Span>
            <Button onClick={() => dispatch(toggleHideDone())}>{hideDone ? "Pokaż ukończone" : "Ukryj ukończone"}</Button>
            <Button onClick={props.setAllDone} disabled={tasks.every(({ done }) => done)}>Ukończ wszystkie</Button>
        </Span >
    )
}

export default Buttons;