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
  const [squares, setSquares] = useState(Array(9).fill(null));

  /*
  const onButtonClick = (e) => {
    const index = e.target.dataset.index;
    console.log("index : ", index);

    const b_squares = [...squares];
    b_squares[index] = "B";
    console.table(b_squares[index]);

    setSquares(b_squares);
    console.table(squares);
  };
  */
  // O, X가 바껴서 나오려면 횟수에 따라서 나눠져야 할 것 같다...
  // count를 하나씩 + 해주고 그 값에 따라서 X, O 나눠주기
  const changeSquares = (index, count) => {
    console.log("sIndex : ", count);
    console.log("index: ", index);

    const b_squares = [...squares];

    b_squares[index] = count % 2 == 0 ? "X" : "O";
    console.table(b_squares[index]);
    console.table(b_squares);

    setSquares(b_squares);
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
