import React from "react";
import { Span, Button } from "./style.js";

const Buttons = (props) => {
    if (props.tasks.length === 0) {
        return null;
    }

    return (
        <Span>
            <Button onClick={props.toggleHideDoneTask}>{props.hideDoneTasks ? "Pokaż ukończone" : "Ukryj ukończone"}</Button>
            <Button onClick={props.setAllDone} disabled={props.tasks.every(({ done }) => done)}>Ukończ wszystkie</Button>
        </Span>
    )
}

export default Buttons;