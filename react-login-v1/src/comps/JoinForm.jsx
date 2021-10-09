import React, { useState } from "react";
import "../css/JoinForm.css";
import MyButton from "../mycustom/MyButton";

function JoinForm() {
  const [joinUser, setJoinUser] = useState({
    userId: "",
    password: "",
    re_password: "",
    email: "",
  });

  const onChangeAccount = (e) => {
    const { name, value } = e.target;
    setJoinUser({ ...joinUser, [name]: value });
  };

  const onSubmitAccount = async () => {
    // if (joinUser.userId === "") {}
    // joinUser.userId가 false이면
    // 혹시나 userId가 없는 경우...? 대비
    if (!joinUser?.userId) {
      alert("ID를 입력해주세요");
      return;
    }
    if (!joinUser?.password) {
      alert("비밀번호를 입력해주세요");
      return;
    }
    if (!joinUser?.re_password) {
      alert("비밀번호 확인을 입력해주세요");
      return;
    }
    // if (joinUser?.password !== joinUser?.re_password) {
    if (joinUser.password !== joinUser.re_password) {
      alert("비밀번호가 일치하지 않습니다");
      return;
    }
    if (!joinUser?.email) {
      alert("E-mail을 입력해주세요");
      return;
    }

    const joinData = {
      userId: joinUser.userId,
      password: joinUser.password,
      email: joinUser.email,
    };

    const response = await fetch("http://localhost:8080/users/join", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(joinData),
    });

    if (response.ok) {
      const json = await response.json();
      alert(JSON.stringify(json));
      console.log(JSON.stringify(json));
    }
  };
  return (
    <div className="join_form">
      <input
        type="text"
        name="userId"
        value={joinUser.userId}
        onChange={onChangeAccount}
        placeholder="아이디를 입력해주세요"
      />
      <input
        type="password"
        name="password"
        value={joinUser.password}
        onChange={onChangeAccount}
        placeholder="비밀번호를 입력해주세요"
      />
      <input
        type="password"
        name="re_password"
        value={joinUser.re_password}
        onChange={onChangeAccount}
        placeholder="비밀번호를 한 번 더 입력해주세요"
      />
      <input
        type="email"
        name="email"
        value={joinUser.email}
        onChange={onChangeAccount}
        placeholder="E-mail을 입력해주세요"
      />
      {/* <button onClick={onSubmitAccount}>Join</button> */}
      <MyButton backgroundColor="cadetblue" onBtnClick={onSubmitAccount}>
        Join
      </MyButton>
    </div>
  );
}

export default JoinForm;
