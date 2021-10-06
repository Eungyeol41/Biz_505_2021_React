import React from "react";
import { useUserContext } from "../context/UserContextProvider";
import "../css/JoinForm.css";

function JoinForm() {
  const { user, setUser } = useUserContext();

  const onChangeAccount = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const onSubmitAccount = async () => {
    // if (user.userId === "") {}
    // user.userId가 false이면
    // 혹시나 userId가 없는 경우...? 대비
    if (!user?.userId) {
      alert("ID를 입력해주세요");
      return;
    }
    if (!user?.password) {
      alert("비밀번호를 입력해주세요");
      return;
    }
    if (!user?.re_password) {
      alert("비밀번호 확인을 입력해주세요");
      return;
    }
    // if (user?.password !== user?.re_password) {
    if (user.password !== user.re_password) {
      alert("비밀번호가 일치하지 않습니다");
      return;
    }
    if (!user?.email) {
      alert("E-mail을 입력해주세요");
      return;
    }

    const joinData = {
      userId: user.userId,
      password: user.password,
      email: user.email,
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
    }
  };
  return (
    <div className="join_form">
      <input
        type="text"
        name="userId"
        value={user.userId}
        onChange={onChangeAccount}
        placeholder="아이디를 입력해주세요"
      />
      <input
        type="password"
        name="password"
        value={user.password}
        onChange={onChangeAccount}
        placeholder="비밀번호를 입력해주세요"
      />
      <input
        type="password"
        name="re_password"
        value={user.re_password}
        onChange={onChangeAccount}
        placeholder="비밀번호를 한 번 더 입력해주세요"
      />
      <input
        type="email"
        name="email"
        value={user.email}
        onChange={onChangeAccount}
        placeholder="E-mail을 입력해주세요"
      />
      <button onClick={onSubmitAccount}>Join</button>
    </div>
  );
}

export default JoinForm;
