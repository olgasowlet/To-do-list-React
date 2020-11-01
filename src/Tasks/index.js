import React from "react";
import { Ul, Li, Button, Span, Icon } from "./style.js";

const Tasks = (props) => (
    <Ul>
        {props.tasks.map(task => (
            <Li display={`${task.done && props.hideDoneTasks ? "none" : ""}`} key={task.id} >
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
);

export default Tasks;