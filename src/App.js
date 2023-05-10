import React, { useState } from "react";
import Todoitem from "./components/Todoitem/Todoitem";
import Form from "./components/Form/Form";

import "./App.css";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [i, setI] = useState(0);

  function addTask(task) {
    if (task !== "") {
      setTodos([
        ...todos,
        {
          id: i,
          value: task,
        },
      ]);
      setI(i + 1);
    }
  }

  function editTask(id, newValue) {
    const updateTodos = [...todos].map((task) => {
      if (task.id === id) {
        task.value = newValue;
      }
      return task;
    });
    setTodos(updateTodos);
  }

  function removeTask(id) {
    const updateTodos = [...todos].filter((el) => el.id !== id);
    setTodos(updateTodos);
  }

  return (
    <div className="app">
      <h1>Todo-List</h1>
      <Form addTask={addTask} />
      <ul className="list">
        {todos.map((task) => (
          <Todoitem task={task} editTask={editTask} removeTask={removeTask} />
        ))}
      </ul>
    </div>
  );
}
