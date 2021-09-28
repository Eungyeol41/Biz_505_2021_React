import logo from "./logo.svg";
import "./App.css";
import TodoInput from "./comps/TodoInput";
import TodoList from "./comps/TodoList";
import { useState } from "react";

function App() {
  // TODO 1개의 데이터를 관리할 state 선언하기
  // 객체로 묶어서 선언하기 --> 객체로 선언한 것은 1개의 데이터라는 것임.
  const [todo, setTodo] = useState({
    t_id: 0,
    t_date: "",
    t_text: "",
  });

  // TO DO LIST 데이터를 관리할 배열 state 선언하기
  const [todoList, setTodoList] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>TO DO LIST</h1>
      </header>
      <TodoInput todoList={todoList} setTodoList={setTodoList} todo={todo} setTodo={setTodo} />
      <p>{todo.t_text}</p>
      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;
