import React from 'react';
import Form from "./Form";
import Buttons from "./Buttons";
import Section from '../../common/Section';
import Header from "../../common/Header";
import Container from "../../common/Container";
import MainContainer from "../../common/MainContainer";
import { useTasks } from "../../useTasks";
import TasksList from './TasksList';

function Tasks() {

  const {
    setAllDone,
  } = useTasks();

  return (
    <MainContainer>
      <Header
        title="Lista zadań"
      />
      <Container>
        <Section
          title="Dodaj nowe zadanie"
          body={<Form />}
        />
        <Section
          title="Lista zadań"
          extrasToHeader={<Buttons setAllDone={setAllDone} />}
          body={<TasksList />}
        />
      </Container>
    </MainContainer>
  );
}

export default Tasks;
