import React from "react";
function Board() {
  let index = 0;

  /* 
	const arrayBox = [
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0],
	];
  */
  const arrayBox = Array(3).fill(Array(3).fill(0));
  // console.log(arrayBox);
  const array_div = arrayBox.map((sub_box) => {
    const button_box = sub_box.map(() => {
      return <button className="square">{index++}</button>;
    });
    return <div className="squares">{button_box}</div>;
  });

  return <div className="board_main">{array_div}</div>;
}

export default Board;
