import { useState, useEffect } from 'react';

export const useTasks = () => {

    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);

    useEffect(() => {
        localStorage.setItem(`tasks`, JSON.stringify(tasks));
    }, [tasks]);


    const removeTask = (id) => {
        setTasks(tasks => tasks.filter(task => task.id !== id));
    };

    const setAllDone = () => {
        setTasks(tasks => tasks.map(task => ({ ...task, done: true, })));
    };

    const addNewTask = (newTaskContent) => {
        setTasks(tasks => [...tasks, { content: newTaskContent, done: false, id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1, },]);
    };
    return {
        removeTask,
        setAllDone,
        addNewTask,
    };
};
