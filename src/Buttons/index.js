import React from "react";
import { Span, Button } from "./style.js";
import "../Container/style.css";

const Buttons = (props) => {
    if (props.tasks.length === 0) {
        return null;
    }

    return (
        <Span className="section__span">
            <Button onClick={props.toggleHideDoneTask} className="section__button">{props.hideDoneTasks ? "Pokaż ukończone" : "Ukryj ukończone"}</Button>
            <Button onClick={props.setAllDone} className="section__button" disabled={props.tasks.every(({ done }) => done)}>Ukończ wszystkie</Button>
        </Span>
    )
}

export default Buttons;