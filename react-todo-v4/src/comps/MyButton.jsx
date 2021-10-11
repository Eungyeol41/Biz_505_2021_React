import React from "react";

function MyButton() {
  const btnStyle = {
    backgroundColor: "#282c34",
    color: "white",
    border: "none",
    padding: "0.3rem",
    margin: "5px auto",
  };
  return <button style={btnStyle}>바로가기</button>;
}

export default MyButton;
