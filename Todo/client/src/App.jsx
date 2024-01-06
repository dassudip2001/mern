import { useState } from "react";
import "./App.css";
import CreateTodo from "./Components/CreateTodo";
import Todo from "./Components/Todo";

function App() {
  const [todo, setTodos] = useState([]); // [{}
  return (
    <>
      <CreateTodo />
      <Todo todo={todo} />
    </>
  );
}

export default App;
