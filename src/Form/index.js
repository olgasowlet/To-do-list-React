import React, { useState, useRef } from "react";
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
        setNewTaskContent("");
    };

    const focusInput = () => {
        inputRef.current.focus();
    };

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <Input ref={inputRef} value={newTaskContent} placeholder="Co jest do zrobienia?" onChange={(event) => setNewTaskContent(event.target.value)} />
            <Button onClick={focusInput}>Dodaj zadanie</Button>
        </StyledForm>
    );
};

export default Form;