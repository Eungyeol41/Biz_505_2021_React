import React from "react";

/**
 * 객체지향의 탄생
 *
 * 기존에 잘 만들어진 클래스를 가져다가 마치 부품을 조립하는 방식으로 프로그래밍하기
 * 잘 만들어진 클래스가 있는데 기능을 좀 추가하고 싶다.. 한다면 상속을 받고 일부 변경하여 내것으로 만들어 '재사용'하기
 *
 * 객체지향의 가장 큰 단점은 상속받은 부모클래스를 잘 알아야 한다.
 * 상속받은 부모클래스가 변경되면 내 클래스도 변경하거나 버려야 한다.
 *
 * 부모와 자식 클래스 간에 결합도가 엄청 높아진다.
 * 	결합도가 높아지면 코드의 재사용이 힘들어지고 응집도가 낮아짐
 *
 * 좋은 모듈은 서로 결합도가 낮고 응집도는 높아야 한다.
 *
 * 이러한 상속으로 단점을 보완하는 디자인패턴 개념 --> 확장
 *
 * 파사드 패턴이라고도 함
 *
 * 		클래스야.. 내가 객체를 하나 만들었는데 그 객체를 사용하여 니가 일을 대신하고 정확한 처리 결과만 나에게 주거라!
 */
function MyButton({ onClick, children }) {
  const myStyle = {
    backgroundColor: "blue",
    color: "white",
    borderRadius: "10px",
    margin: "0",
    outline: "none",
    border: "none",
    padding: "0.8rem",
  };
  return (
    <button style={myStyle} onClick={onClick}>
      {children}
    </button>
  );
}

export default MyButton;
