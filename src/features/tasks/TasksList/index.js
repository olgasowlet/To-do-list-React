import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { StyledNavLink } from "./style";
import { toggleTaskDone, removeTask, selectTasksByQuery, selectHideDone } from "../tasksSlice.js";
import { Ul, Li, Button, Span, Icon } from "./style.js";

const TasksList = () => {
    const { search } = useLocation();
    const searchParams = new URLSearchParams(search);
    const query = searchParams.get("szukaj");

    const tasks = useSelector(state => selectTasksByQuery(state, query));

    const hideDone = useSelector(selectHideDone);

    const dispatch = useDispatch();

    return (
        <Ul>
            {tasks.map(task => (
                <Li display={`${task.done && hideDone ? "none" : ""}`} key={task.id} >
                    <Button done onClick={() => dispatch(toggleTaskDone(task.id))}>
                        <Icon done={task.done} className="fas fa-check "></Icon>
                    </Button>
                    <Span done={task.done}>
                        <StyledNavLink to={`/zadania/${task.id}`}>{task.content}</StyledNavLink>
                    </Span>
                    <Button toDelete onClick={() => dispatch(removeTask(task.id))}>
                        <Icon done className="far fa-trash-alt"></Icon>
                    </Button>
                </Li>
            ))}
        </Ul>
    )
};

export default TasksList;