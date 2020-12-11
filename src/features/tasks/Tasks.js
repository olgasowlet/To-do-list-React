import React from 'react';
import Form from "./Form";
import Buttons from "./Buttons";
import Section from '../../common/Section';
import Header from "../../common/Header";
import Container from "../../common/Container";
import MainContainer from "../../common/MainContainer";
import store from "../../store";
import selectTasks from "./tasksSlice";
import TasksList from './TasksList';
import { Button } from "./Buttons/style";
import { useDispatch } from "react-redux";
import { fetchExampleTasks } from "./tasksSlice";

function Tasks() {
  store.subscribe(() => {
    localStorage.setItem(selectTasks, JSON.stringify(store.getState()))
  })

  const dispatch = useDispatch();

  return (
    <MainContainer>
      <Header
        title="Lista zadań"
      />
      <Container>
        <Section
          title="Dodaj nowe zadanie"
          extrasToHeader={<Button onClick={() => dispatch(fetchExampleTasks())}>Pobierz przykładowe zadania</Button>}
          body={<Form />}
        />
        <Section
          title="Lista zadań"
          extrasToHeader={<Buttons />}
          body={<TasksList />}
        />
      </Container>
    </MainContainer>
  );
}

export default Tasks;
