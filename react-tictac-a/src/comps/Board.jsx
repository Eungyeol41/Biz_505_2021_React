import React, { useState } from "react";
import { RenderSquare } from "../modules/main";

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  // squares 배열의 index번째 요소의 값을 변경하려고 한다.
  // 매개변수로 index 값
  const changeSquares = (index) => {
    // squares[index] = "B"; --> 절대 사용하면 안 되는 코드임!

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
    _squares[index] = _squares[index] === "A" ? "B" : "A"; // 복제된 배열 요소 변경
    setSquares(_squares); // 복제된 배열을 원래 배열과 교체
  };

  // RenderSquare를 바닐라 함수로 불러 사용하는 방법
  // return <div>{RenderSquare()}</div>;

  // RenderSquare를 컴포넌트로 사용하는 방법
  // <RenderSquare />
  return (
    <div>
      <h3>다음 플레이어: O</h3>
      <RenderSquare squares={squares} changeSquares={changeSquares} />
    </div>
  );
}

export default Board;
