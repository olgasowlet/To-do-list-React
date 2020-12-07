import React from "react";
import { useSelector } from "react-redux";
import { selectTasks } from "../tasksSlice.js";
import { Ul, Li, Button, Span, Icon } from "./style.js";

const TasksList = (props) => {
    const { tasks, hideDone } = useSelector(selectTasks);
    return (
        <Ul>
            {tasks.map(task => (
                <Li display={`${task.done && hideDone ? "none" : ""}`} key={task.id} >
                    <Button done onClick={() => props.toggleTaskDone(task.id)}>
                        <Icon done={task.done} className="fas fa-check "></Icon>
                    </Button>
                    <Span done={task.done}>
                        {task.content}
                    </Span>
                    <Button toDelete onClick={() => props.removeTask(task.id)}>
                        <Icon done className="far fa-trash-alt"></Icon>
                    </Button>
                </Li>
            ))}
        </Ul>
    )
};

export default TasksList;