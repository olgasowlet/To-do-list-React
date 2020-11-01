import React, { useState } from 'react';
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from './Section';
import Header from "./Header";
import Container from "./Container";
import MainContainer from "./MainContainer";
import { useTasks } from "./useTasks";

function App() {
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
          body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} removeTask={removeTask} toggleTaskDone={toggleTaskDone} />}
        />
      </Container>
    </MainContainer>
  );
}

export default App;
