import React, { useRef, useState } from "react";
import "../css/Login.css";

const LoginForm = () => {
  const [account, setAccount] = useState({
    userId: "",
    password: "",
  });

  const userID = useRef();
  const userPW = useRef();

  const onChange = (e) => {
    setAccount({ ...account, [e.target.name]: e.target.value });
  };

  const onLogin = async () => {
    if (account.userId == "") {
      alert("ID를 입력해주세요!");
      userID.current.focus();
      return;
    }

    if (account.password == "") {
      alert("비밀번호를 입력해주세요!");
      userPW.current.focus();
      return;
    }

    // json server로부터 모든 데이터를 가져오고
    const res = await fetch("http://localhost:8080/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      //   credentials: "same-origin",
      body: JSON.stringify({
        userId: account.userId,
        password: account.password,
      }),
    });

    // Server로부터 정상적인 응답이 오면
    // 실제 Server가 멈춰있는 상태일 경우 res 자체가 undefined 또는 null값이다
    // if(res) {	} 연산을 하면 res가 정상인 지 확인할 수 있다
    // res가 정상이 아닐 경우 res.ok에서 오류가 발생한다.
    // ES6+ 버전에서 safe null 검사를 수행하는 코드가 있다
    //		if (res?.ok)
    // res가 정상(null, undefined가 아닐 경우 .ok 속성을 검사해라!)
    // null로 인한 오류를 방지하는 코드.
    if (res?.ok) {
      // user 정보를 뽑고
      const user = await res.json();
      // 일치하는 정보가 있는 지 확인
      // const user = users.find((item) => item.userId === account.userId);
      // 화살표 함수는 return을 해주거나 {}를 빼거나
      //   const user = users.find((item) => {
      //     return item.userId === account.userId;
      //   });

      console.log("user", user);
      // ID, PW가 없는 지를 각각 확인
      if (!user) {
        alert("Id가 없음!!");
        return;
      }
      if (user.password != account.password) {
        alert("PW 오류");
        return;
      }
      alert("Login Success");
    }
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
      <button onClick={onLogin}>Login</button>
    </div>
  );
};

export default LoginForm;
