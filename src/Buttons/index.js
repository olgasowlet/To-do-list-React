import React from "react";
import styled from "styled-components";
import "../Container/style.css";

const Span = styled.span`
    display: flex;
    justify-content: center;

    @media (max-width: 466px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

const Button = styled.button`
    border: none;
    background-color: white;
    color: teal;
    padding: 0 10px;
    transition: 0.5s;

    &:hover {
        opacity: 0.7;
    }

    &:disabled {
        color: grey;
    }

    @media (max-width: 466px) {
        margin: 5px 0;
    }
`;

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