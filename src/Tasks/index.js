import React from "react";
import "./style.css";
import styled, { css } from "styled-components";

const Ul = styled.ul`
    width: 100%;
    margin: 0;
    padding: 0;
    list-style: none;
`;

const Li = styled.li`
    display: ${({ display }) => display || "flex"};
    width: 100%;
    justify-content: space-around;
    border-bottom: 1px solid #eeeeee;
`;

const Button = styled.button`
    margin: 10px;
    height: 30px;
    width: 30px;
    color: white;
    box-shadow: none;
    border: none;
    align-self: center;
    padding: 10px;
    display: flex;
    transition: 0.5s;

    &:hover {
        opacity: 0.7;
    }

    ${({ done }) => done && css`
        background-color: green;
    `}

    ${({ toDelete }) => toDelete && css`
        background-color: red;
    `}
`;

const Tasks = (props) => (
    <Ul>
        {props.tasks.map(task => (
            <Li display={`${task.done && props.hideDoneTasks ? "none" : ""}`} key={task.id} >
                <Button done onClick={() => props.toggleTaskDone(task.id)}>
                    <i className={`fas${task.done ? " fa-check" : "--none fa-check"} `}></i>
                </Button>
                <span className={`listedTask__content${task.done ? "--done" : ""} `}>
                    {task.content}
                </span>
                <Button toDelete onClick={() => props.removeTask(task.id)}>
                    <span className="far fa-trash-alt"></span>
                </Button>
            </Li>
        ))}
    </Ul>
);

export default Tasks;