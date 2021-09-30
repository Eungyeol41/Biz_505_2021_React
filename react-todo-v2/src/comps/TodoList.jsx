import React from "react";
import "../css/List.css";

import { useTodoContext } from "../context/AppContextProvider";
import TodoItem from "./TodoItem";

function TodoList() {
  const { todoList } = useTodoContext();

  const viewList = todoList.map(({ t_id, t_text, t_isComplete }) => {
    // todo.t_text
    return <TodoItem t_text={t_text} />;
  });

  return <div>{viewList}</div>;
}

export default TodoList;
