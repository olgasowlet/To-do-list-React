import React, { useState } from 'react';
import Form from "./Form";
import Buttons from "./Buttons";
import Section from '../../common/Section';
import Header from "../../common/Header";
import Container from "../../common/Container";
import MainContainer from "../../common/MainContainer";
import { useTasks } from "../../useTasks";
import TasksList from './TasksList';

function Tasks() {
  const [hideDoneTasks, setHideDoneTask] = useState(false);

  const toggleHideDoneTask = () => {
    setHideDoneTask(hideDoneTasks => !hideDoneTasks);
  };

  const {
    tasks,
    removeTask,
    toggleTaskDone,
    setAllDone,
    addNewTask,
  } = useTasks();

  return (
    <MainContainer>
      <Header
        title="Lista zadań"
      />
      <Container>
        <Section
          title="Dodaj nowe zadanie"
          body={<Form addNewTask={addNewTask} />}
        />
        <Section
          title="Lista zadań"
          extrasToHeader={<Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} toggleHideDoneTask={toggleHideDoneTask} setAllDone={setAllDone} />}
          body={<TasksList tasks={tasks} hideDoneTasks={hideDoneTasks} removeTask={removeTask} toggleTaskDone={toggleTaskDone} />}
        />
      </Container>
    </MainContainer>
  );
}

export default Tasks;
