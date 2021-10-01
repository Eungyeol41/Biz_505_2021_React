import React from "react";
import { useTodoContext } from "../context/AppContextProvider";
import "../css/List.css";

import TodoItem from "./TodoItem";

function TodoList() {
  const { todoList } = useTodoContext();

  const listView = todoList.map((item) => {
    return <TodoItem todo={item} key={item.t_id} />;
  });
  return <div>{listView}</div>;
}

export default TodoList;
