import { useState } from "react";
import "./styles.css";
import ToDoList from "./ToDoList";
import NewToDoForm from "./NewToDoForm";

// Add the todos array
//const todos = ["Have Fun", "Learn React", "Learn the MERN-Stack"];

export default function App() {
  const [todos, setTodos] = useState([
    "Have Fun",
    "Learn React",
    "Learn the MERN-Stack"
  ]);

  const [showTodos, setShowTodos] = useState(true);

  function addToDo(todo) {
    setTodos([...todos, todo]);
  }

  return (
    <div className="App">
      <h1>React To-Do</h1>
      <button onClick={() => setShowTodos(!showTodos)}>
        {showTodos ? "HIDE" : "SHOW"}
      </button>
      {/* Conditionally render ToDoList */}
      {showTodos && <ToDoList todos={todos} />}
      <hr />
      <NewToDoForm addToDo={addToDo} />
    </div>
  );
}
