import React from "react";

function TodoItem({ t_text }) {
  return (
    <div className="todo_item">
      <div className="todo_delete">&times;</div>
      <div className="todo_text">{t_text}</div>
      <div className="todo_mark">&#x2713;</div>
    </div>
  );
}

export default TodoItem;
