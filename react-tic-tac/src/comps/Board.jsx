// import React from "react";

// function Board() {
//   //   const arrayRow = [0, 0, 0];
//   //   const arrayCol = [0, 0, 0];

//   //   arrayRow.map((row) => {
//   //     const cols = arrayCol.map((col) => {
//   //       // 한 라인의 button 만들기
//   //     });
//   //     // 각 라인의 컴포넌트 만들기
//   //   });

//   //   const arrayBox = [
//   //     [0, 0, 0],
//   //     [0, 0, 0],
//   //     [0, 0, 0],
//   //   ];
//   //   const box = arrayBox.map((sub) => {
//   //     const sub_box = sub.map((b) => {
//   //       // 한 라인의 button 만들기
//   //       return <button></button>;
//   //     });
//   //     // 각 라인의 컴포넌트 만들기
//   //     return <div>{sub_box}</div>;
//   //   });

//   //   const arrayFuncCol = Array(3).fill(0);
//   //   const arrayFuncRow = Array(3).fill(arrayFuncCol);

//   const arrayFuncBox = Array(3).fill(Array(3).fill(0));
//   console.log(arrayFuncBox);

//   const box = arrayFuncBox.map((sub) => {
//     const sub_box = sub.map((b) => {
//       return <button></button>;
//     });
//     return <div className="row_box">{sub_box}</div>;
//   });

//   return (
//     <header className="App-header">
//       <div>{box}</div>
//     </header>
//   );
// }

// export default Board;

import React, { useState } from "react";
import { RenderSquare } from "../modules/main";

function Board() {
  const [squares, setSquares] = useState(Array(9).fill("A"));

  const onButtonClick = (e) => {
    const index = e.target.dataset.index;
    console.log("index : ", index);

    const b_squares = [...squares];
    b_squares[index] = "B";
    console.table(b_squares[index]);

    setSquares(b_squares);
    console.table(squares);
  };

  // RenderSquare를 바닐라 함수로 불러 사용하는 방법
  // return <div>{RenderSquare()}</div>;

  // RenderSquare를 컴포넌트로 사용하는 방법
  // <RenderSquare />
  return (
    <div>
      <h3>다음 플레이어: O</h3>
      <RenderSquare squares={squares} onButtonClick={onButtonClick} />
    </div>
  );
}

export default Board;
