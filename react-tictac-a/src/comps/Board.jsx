import React, { useState } from "react";
import { calcWinner, RenderSquare } from "../modules/main";

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [oxFlag, setOxFlag] = useState(true);

  //   if (calcWinner(squares)) {
  //     // 누군가 이겼다라는 표식을 보이기
  //     alert("Win!");
  //   }

  // squares 배열의 index번째 요소의 값을 변경하려고 한다.
  // 매개변수로 index 값
  const changeSquares = (index) => {
    // squares[index] = "B"; --> 절대 사용하면 안 되는 코드임!

    // 승부가 낫는 지 확인하고 승부가 있으면 더이상 진행 금지
    if (calcWinner(squares)) return;
    // if(문자열 변수) : 문자열변수값이 null, undefined, ""이면 무조건 false
    // 그게 아니면 true
    // 이미 값이 들어있을 때 다른 값으로 변하지 않게 하기
    // squares[index]에 어떤 값(문자열, O, X)이 담겨있으면 더 이상 진행 금지
    if (squares[index]) return;
    /**
     * const _squares = squares;
     *
     * 위의 코드는
     * 배열을 다른 배열에 할당(저장)하면 배열의 값이 복제되는 게 아니라
     * 배열이 저장된 저장소 위치가 복제된다.
     * 결국 _squares와 squares는 같은 배열이 된다.
     *
     * A라는 사람과 B라는 사람이 한 집을 같이 공유하는 것
     * 배열을 복제할 때는 반드시 전개연산자로 수행한다.
     */
    const _squares = [...squares]; // 복제
    _squares[index] = oxFlag ? "O" : "X"; // 복제된 배열 요소 변경
    setSquares(_squares); // 복제된 배열을 원래 배열과 교체
    setOxFlag(!oxFlag); // true, false 역전시키기 ==> switch 변수
  };

  const restart_game = () => {
    setSquares(Array(9).fill(null));
    setOxFlag(!oxFlag);
  };

  // RenderSquare를 바닐라 함수로 불러 사용하는 방법
  // return <div>{RenderSquare()}</div>;

  // RenderSquare를 컴포넌트로 사용하는 방법
  // <RenderSquare />
  const player = oxFlag ? "O" : "X";
  const winner = calcWinner(squares);
  const message = winner ? `승리자 : ${winner}` : `다음 플레이 : ${player}`;
  return (
    <div>
      <h3>{message}</h3>
      <RenderSquare squares={squares} changeSquares={changeSquares} />
      {winner ? <h4 onClick={restart_game}>다시 시작</h4> : ""}
    </div>
  );
}

export default Board;
