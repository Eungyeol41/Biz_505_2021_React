import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { useUserContext } from "../context/UserContextProvider";
import "../css/Login.css";
import MyButton from "../mycustom/MyButton";
import { fetchLogin } from "../modules/fetchModules.js";

const LoginForm = () => {
  const { setUser } = useUserContext();
  const [account, setAccount] = useState({
    userId: "",
    password: "",
  });

  const history = useHistory();

  const userID = useRef();
  const userPW = useRef();

  const onChange = (e) => {
    setAccount({ ...account, [e.target.name]: e.target.value });
  };

  const onLogin = async () => {
    const { userId, password } = account;
    const resultUser = await fetchLogin(userId, password);
    await setUser(resultUser);
    history.replace("/");
  };

  return (
    <div className="login_form">
      <input ref={userID} name="userId" placeholder="아이디를 입력해주세요" onChange={onChange} />
      <input
        ref={userPW}
        name="password"
        type="password"
        placeholder="비밀번호를 입력해주세요"
        onChange={onChange}
      />
      {/* <button onClick={onLogin}>Login</button> */}
      <MyButton backgroundColor="cadetblue" onBtnClick={onLogin}>
        Login
      </MyButton>
    </div>
  );
};

export default LoginForm;
