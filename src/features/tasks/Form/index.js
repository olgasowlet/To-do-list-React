import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../tasksSlice";
import { StyledForm, Input, Button } from "./style.js";



const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const onFormSubmit = (event) => {
        event.preventDefault();

        if (newTaskContent.trim() === "") {
            return;
        };

        addNewTask(newTaskContent.trim());
        inputRef.current.focus();
        setNewTaskContent("");
    };

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <Input ref={inputRef} value={newTaskContent} placeholder="Co jest do zrobienia?" onChange={(event) => setNewTaskContent(event.target.value)} />
            <Button>Dodaj zadanie</Button>
        </StyledForm>
    );
};

export default Form;