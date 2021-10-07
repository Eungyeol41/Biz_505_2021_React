import React from "react";
import { useUserContext } from "../context/UserContextProvider";

function Notice() {
  const { user } = useUserContext();

  return (
    <div>
      <h1>공지사항</h1>
      <h3>USER ID : {user.userId}</h3>
    </div>
  );
}

export default Notice;
