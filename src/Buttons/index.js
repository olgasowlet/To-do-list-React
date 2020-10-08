import React from "react";
import "../Container/style.css";

const Buttons = (props) => {
    if (props.tasks.length === 0) {
        return null;
    }

    return (
        <span className="section__span">
            <button onClick={props.toggleHideDoneTask} className="section__button">{props.hideDoneTasks ? "Pokaż ukończone" : "Ukryj ukończone"}</button>
            <button onClick={props.setAllDone} className="section__button" disabled={props.tasks.every(({ done }) => done)}>Ukończ wszystkie</button>
        </span>
    )
}

export default Buttons;