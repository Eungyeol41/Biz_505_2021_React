import React from "react";
import "../css/Input.css";

import { useTodoContext } from "../context/AppContextProvider";

function TodoInput() {
  const { textId, todo, onChange, onClick, onKeyPress } = useTodoContext();
  return (
    <div className="todo_input">
      <input ref={textId} placeholder="NAME" onChange={onChange} onKeyPress={onKeyPress} />
      <input ref={textId} placeholder="ADDRESS" onChange={onChange} onKeyPress={onKeyPress} />
      <input ref={textId} placeholder="TEL" onChange={onChange} onKeyPress={onKeyPress} />
      <input ref={textId} placeholder="AGE" onChange={onChange} onKeyPress={onKeyPress} />
      <button onClick={onClick}>추가</button>
    </div>
  );
}

export default TodoInput;
