import React from "react";
import "../css/Login.css";

const LoginForm = () => {
  return (
    <div className="login_form">
      <div className="login_div">
        <input placeholder="아이디를 입력해주세요" />
      </div>
      <div className="login_div">
        <input placeholder="비밀번호를 입력해주세요" />
      </div>
      <div className="login_btn">
        <button>LOGIN</button>
      </div>
    </div>
  );
};

export default LoginForm;
