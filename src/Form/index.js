import React, { useState } from "react";
import { StyledForm, Input, Button } from "./style.js";


const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        
        if (newTaskContent.trim() === "") {
            return;
        };

        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
    };

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <Input value={newTaskContent} placeholder="Co jest do zrobienia?" onChange={(event) => setNewTaskContent(event.target.value)} />
            <Button>Dodaj zadanie</Button>
        </StyledForm>
    );
};

export default Form;