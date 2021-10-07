import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../css/Login.css";
import { fetchLogin } from "../modules/fetchModules.js";

function Login() {
  const [user, setUser] = useState({
    userId: "",
    password: "",
  });

  const history = useHistory();

  const onChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const onClick = async () => {
    const { userId, password } = user;
    const resultUser = await fetchLogin(userId, password);
    await setUser(resultUser);
    history.replace("/");
  };

  return (
    <div className="todo_login">
      <input placeholder="ID를 입력해주세요" type="text" onChange={onChange} />
      <input placeholder="비밀번호를 입력해주세요" type="password" onChange={onChange} />
      <button onClick={onClick}>Login</button>
    </div>
  );
}

export default Login;
