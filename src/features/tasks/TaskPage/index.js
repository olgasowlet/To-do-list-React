import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectTaskById } from "../tasksSlice";
import Section from '../../../common/Section';
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import MainContainer from "../../../common/MainContainer";


function Task() {
    const { id } = useParams();
    const task = useSelector(state => selectTaskById(state, id));

    console.log(task);
    return (
        <MainContainer>
            <Header
                title="Szczegóły zadania"
            />
            <Container>
                <Section
                    title={task ? task.content : "Nie znaleziono zadania :("}
                    body={
                        <>
                            <strong>Zrobione: {task ? (task.done ? "Tak" : "Nie") : ""} </strong>
                        </>
                    }
                />
            </Container>
        </MainContainer>
    );
}

export default Task;
