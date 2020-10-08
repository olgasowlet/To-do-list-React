import React, { useState, useEffect } from 'react';
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from './Section';
import Header from "./Header";
import Container from "./Container";
import MainContainer from "./MainContainer";


function App() {
  const [hideDoneTasks, setHideDoneTask] = useState(false);
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);

  useEffect(() => {
    localStorage.setItem(`tasks`, JSON.stringify(tasks));
  }, [tasks]);

  const toggleHideDoneTask = () => {
    setHideDoneTask(hideDoneTasks => !hideDoneTasks);
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      }

      return task;
    }));
  };

  const setAllDone = () => {
    setTasks(tasks => tasks.map(task => ({ ...task, done: true, })));
  };

  const addNewTask = (newTaskContent) => {
    setTasks(tasks => [...tasks, { content: newTaskContent, done: false, id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1, },]);
  };

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
