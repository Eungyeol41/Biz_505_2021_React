import React from "react";
import { make_board } from "../modules/board_make";
function Board() {
  return <div className="board_main">{make_board()}</div>;
}

export default Board;
