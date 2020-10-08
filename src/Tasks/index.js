import React from "react";
import "./style.css"

const Tasks = (props) => (
    <ul className="listOfTasks">
        {props.tasks.map(task => (
            <li key={task.id} className={`listedTask${task.done && props.hideDoneTasks ? " listedTask--hidden" : ""}`}>
                <button onClick={() => props.toggleTaskDone(task.id)} className={`listedTask__button listedTask__button--doner`}>
                    <i className={`fas${task.done ? " fa-check" : "--none fa-check"}`}></i>
                </button>
                <span className={`listedTask__content${task.done ? "--done" : ""}`}>
                    {task.content}
                </span>
                <button onClick={() => props.removeTask(task.id)} className="listedTask__button listedTask__button--remover">
                    <span className="far fa-trash-alt"></span>
                </button>
            </li>
        ))}
    </ul>
);

export default Tasks;