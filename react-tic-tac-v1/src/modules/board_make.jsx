const RenderSquare = ({ squares, changeSquares }) => {
  const arrayBox = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ];

  const onButtonClick = (e) => {
    const index = e.target.dataset.id;

    if (squares[index]) return;
    changeSquares(index);
  };

  let index = 0;
  const buttons = arrayBox.map((sub_box) => {
    const button_cols = sub_box.map(() => {
      return (
        <button className="square" data-id={index} onClick={onButtonClick}>
          {squares[index++]}
        </button>
      );
    });
    return <div className="row_box">{button_cols}</div>;
  });
  return buttons;
};

const winList = [
  // 가로 → ←
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  // 세로 ↑↓
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  // 대각선 - ↘ ↖
  [0, 4, 8],

  // 대각선 - ↙ ↗
  [2, 4, 6],
];

const calcWinner = (squares) => {
  const result = winList.filter((win) => {
    const [col_0, col_1, col_2] = win;
    return (
      squares[col_0] &&
      squares[col_0] === squares[col_1] &&
      squares[col_0] === squares[col_2]
    );
  });
  return result.length && squares[result[0][0]];
};

export { RenderSquare, calcWinner };
