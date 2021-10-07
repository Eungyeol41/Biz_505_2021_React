import React from "react";

/**
 * props 전달받은 변쉥 기본값을 지정하여
 * 	props 값이 전달되지 않더라도
 * 		기본을 설정할 수 있도록 기본값 설정하기
 */
function MyButton({ children, backgroundColor = "cadetblue", color = "#fff", onBtnClick }) {
  const btnStyle = {
    fontSize: "18px",
    fontWeight: "700",

    width: "60%",
    height: "50px",
    lineHeight: "50px",

    margin: "10px auto",

    cursor: "pointer",

    textAlign: "center",

    color: color,
    backgroundColor: backgroundColor,

    border: "none",
    borderRadius: "5px",
  };

  return (
    <div>
      <button style={btnStyle} onClick={onBtnClick}>
        {children}
      </button>
    </div>
  );
}

export default MyButton;
