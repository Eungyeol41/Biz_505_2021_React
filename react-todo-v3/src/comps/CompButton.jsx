import React from "react";

function CompButton({ children, onClick, onKeyPress }) {
  const btnStyle = {
    backgroundColor: "#282c34",
    color: "white",
    border: "none",
    padding: "0.3rem",
    margin: "5px auto",
  };
  return (
    <button style={btnStyle} onClick={onClick} onKeyPress={onKeyPress}>
      {children}
    </button>
  );
}

export default CompButton;
