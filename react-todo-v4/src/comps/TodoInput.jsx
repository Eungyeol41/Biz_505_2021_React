import React from "react";
import "../css/Input.css";

import { useTodoContext } from "../context/AppContextProvider";

function TodoInput() {
  const { textId, todo, onChange, onClick, onKeyPress, queClick } =
    useTodoContext();
  return (
    <div className="todo_input">
      <input
        ref={textId}
        placeholder="오늘 할 일"
        value={todo.t_text}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button className="todo_insert" onClick={onClick}>
        추가
      </button>
      <button className="todo_question" onClick={queClick}>
        &#63;
      </button>
      <p>{todo.t_text}</p>
    </div>
  );
}

export default TodoInput;
