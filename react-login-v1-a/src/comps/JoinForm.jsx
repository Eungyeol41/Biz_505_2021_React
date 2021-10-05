import React, { useRef, useState } from "react";
import "../css/JoinForm.css";

function JoinForm() {
  const [join, setJoin] = useState({
    userId: "",
    password: "",
    passwordCheck: "",
    email: "",
  });

  const joinId = useRef();
  const joinPw = useRef();
  const joinRePw = useRef();
  const joinEmail = useRef();

  const onChange = (e) => {
    setJoin({ ...join, [e.target.name]: e.target.value });
    // console.log("join", join);
  };

  const onJoinClick = () => {
    if (join.userId == "") {
      alert("ID를 입력해주세요");
      joinId.current.focus();
      return;
    }
    if (join.password == "") {
      alert("비밀번호를 입력해주세요");
      joinPw.current.focus();
      return;
    }
    if (join.passwordCheck == "") {
      alert("비밀번호를 한 번 더 입력해주세요");
      joinRePw.current.focus();
      return;
    }
    if (join.password !== join.passwordCheck) {
      alert("입력한 비밀번호가 다릅니다");
      joinRePw.current.focus();
      return;
    }
    if (join.email == "") {
      alert("E-mail을 입력해주세요");
      joinEmail.current.focus();
      return;
    }

    alert("Join");
  };

  return (
    <div className="join_form">
      <input
        name="userId"
        ref={joinId}
        onChange={onChange}
        placeholder="아이디를 입력해주세요"
        type="text"
      />
      <input
        name="password"
        ref={joinPw}
        onChange={onChange}
        placeholder="비밀번호를 입력해주세요"
        type="password"
      />
      <input
        name="passwordCheck"
        ref={joinRePw}
        onChange={onChange}
        placeholder="비밀번호를 한 번 더 입력해주세요"
        type="password"
      />
      <input
        name="email"
        ref={joinEmail}
        onChange={onChange}
        placeholder="E-mail을 입력해주세요"
        type="text"
      />
      <button onClick={onJoinClick}>Join</button>
    </div>
  );
}

export default JoinForm;
