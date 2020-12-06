import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addTask } from "../tasksSlice";
import { StyledForm, Input, Button } from "./style.js";



const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const dispatch = useDispatch();

    const onFormSubmit = (event) => {
        event.preventDefault();

        if (newTaskContent.trim() === "") {
            return;
        };

        dispatch(addTask({
            content: newTaskContent.trim(),
            done: false,
            id: nanoid(),
        }));

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