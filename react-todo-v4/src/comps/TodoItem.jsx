import React from "react";
import { useTodoContext } from "../context/AppContextProvider";

function TodoItem({ todo }) {
  const { t_id, t_text, t_comp } = todo;
  const { onDelClick, onCompClick } = useTodoContext();
  return (
    <div className="todo_item">
      <div className="todo_delete" onClick={onDelClick} data-todo-id={t_id}>
        &times;
      </div>
      <div className="todo_id">{t_id}</div>
      <div
        className={`todo_text ${t_comp && "checked"}`}
        data-todo-id={t_id}
        onClick={onCompClick}
      >
        {t_text}
      </div>
      {t_comp && <div className="todo_mark">&#x2713;</div>}
    </div>
  );
}

export default TodoItem;
