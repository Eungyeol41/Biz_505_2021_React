import React from "react";
import { useUserContext } from "../context/UserContextProvider";

function BBs() {
  const { user } = useUserContext();

  return (
    <div>
      <h1>자유게시판</h1>
      <h3>USER ID : {user.userId}</h3>
    </div>
  );
}

export default BBs;
