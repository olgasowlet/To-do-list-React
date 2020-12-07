import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTasks, toggleTaskDone, removeTask } from "../tasksSlice.js";
import { Ul, Li, Button, Span, Icon } from "./style.js";

const TasksList = () => {
    const { tasks, hideDone } = useSelector(selectTasks);

    const dispatch = useDispatch();

    return (
        <Ul>
            {tasks.map(task => (
                <Li display={`${task.done && hideDone ? "none" : ""}`} key={task.id} >
                    <Button done onClick={() => dispatch(toggleTaskDone(task.id))}>
                        <Icon done={task.done} className="fas fa-check "></Icon>
                    </Button>
                    <Span done={task.done}>
                        {task.content}
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