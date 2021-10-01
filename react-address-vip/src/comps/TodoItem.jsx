import React from "react";
import { useTodoContext } from "../context/AppContextProvider";

function TodoItem({ todo }) {
  const { t_id, t_text, t_comp } = todo;
  const { onDelClick, onCompClick } = useTodoContext();
  return (
    <tr>
      <td>ID</td>
      <td>이름</td>
      <td>주소</td>
      <td>전화번호</td>
      <td>나이</td>
    </tr>
  );
}

export default TodoItem;
