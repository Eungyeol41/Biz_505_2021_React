import React, { useState } from "react";
import { calcWinner, RenderSquare } from "../modules/board_make";

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [oxFlag, setOxFlag] = useState(true);

  const changeSquares = (index, count) => {
    if (calcWinner(squares)) return;

    if (count == 9) {
      alert("Draw!!");
    }

    if (squares[index]) return;
    const _squares = [...squares];
    _squares[index] = oxFlag ? "O" : "X";
    setSquares(_squares);
    setOxFlag(!oxFlag);
  };

  const restart_game = () => {
    setSquares(Array(9).fill(null));
    setOxFlag(!oxFlag);
  };

  const player = oxFlag ? "O" : "X";
  const winner = calcWinner(squares);
  const message = winner ? `승리자 : ${winner}` : `다음 플레이 : ${player}`;
  return (
    <div>
      <h3>{message}</h3>
      <RenderSquare squares={squares} changeSquares={changeSquares} />
      {winner ? (
        <h3 className="restart" onClick={restart_game}>
          다시 시작
        </h3>
      ) : (
        ""
      )}
    </div>
  );
}

export default Board;
