import React from "react";
import { useUserContext } from "../context/UserContextProvider";
import "../css/Login.css";

function Login() {
  const { onChange, onClick } = useUserContext();

  return (
    <div className="todo_login">
      <input name="userId" placeholder="ID를 입력해주세요" type="text" onChange={onChange} />
      <input
        name="password"
        placeholder="비밀번호를 입력해주세요"
        type="password"
        onChange={onChange}
      />
      <button onClick={onClick}>Login</button>
    </div>
  );
}

export default Login;
