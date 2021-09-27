// 연습용 코드 (딱히 사용하지는 않을 것.)
const arrayEx = () => {
  const arrayRow = [0, 0, 0];
  const arrayCol = [0, 0, 0];
  arrayRow.map((row) => {
    const cols = arrayCol.map((col) => {
      // 한 라인의 button 만들기
    });
    // 각 라인의 컴포넌트 만들기
  });

  const arrayFuncCol = Array(3).fill(0);
  const arrayFuncRow = Array(3).fill(arrayFuncCol);

  /**
   * const arrFuncBox = Array(3).fill(	[Array(3).fill(0)]	);
   * const arrFuncBox = [
   * 	[
   * 		[0, 0, 0],
   * 		[0, 0, 0],
   * 		[0, 0, 0],
   * 	]
   * ]
   */
  //   const arrayFuncBox = Array(3).fill([...Array(3).fill(0)]);
  const arrayFuncBox = Array(3).fill(Array(3).fill(0));
};

/**
 * 다차원 배열
 * 배열 속에 요소가 배열로 이루어진 배열
 * a = [1, 2, 3, 4, 5]; --> a라는 배열 내에 1, 2, 3, 4, 5라는 요소가 들어있는 것.
 * console.log(	a[0]	);
 * a[0] = 3;
 *
 * 2차원 배열
 * b = [
 * 	[1, 2, 3, 4, 5]
 * ];
 * console.log(	b[0][0]	);
 * b[0][2] = 100;
 *
 * 3차원 배열
 * c = [
 * 	[
 * 		[1, 2, 3, 4, 5]
 * 	]
 * ];
 * console.log(	c[0][1][2]	);
 */

// const RenderSquare = (props, { squares }) => {
// 	const {squares} = props;
const RenderSquare = ({ squares, changeSquares }) => {
  // const squares = props.squares;
  const arrayBox = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ];

  const onButtonClick = (e) => {
    const index = e.target.dataset.index;
    changeSquares(index);
  };

  let index = 0;
  // arrayBox는 사용하기 전 이미 선언이 되어있어야 한다.
  const buttons = arrayBox.map((sub_box) => {
    const button_cols = sub_box.map(() => {
      // 한 라인의 button 만들기 ( 9번 반복 )
      return (
        <button data-index={index} onClick={onButtonClick}>
          {squares[index++]}
        </button>
      ); // 9번 반복
    }); // 3개 만들어짐
    // 각 라인의 컴포넌트 만들기
    return <div className="box_row">{button_cols}</div>;
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

const calcWinner_ccc = (squares) => {
  // 1번 예시
  //   if (squares[0] && squares[0] === squares[1] && squares[0] === squares[2]) {
  //     return squares[0];
  //   } else if (squares[3] && squares[3] === squares[4] && squares[3] === squares[5]) {
  //     return squares[3];
  //   }
  //   return null;
  // 2번 예시
  //   for (let i = 0; i < winList.length; i++) {
  //     // const col_0 = winList[i][0];
  //     // const col_1 = winList[i][1];
  //     // const col_2 = winList[i][2];
  //     const [col_0, col_1, col_2] = winList[i];
  //     if (squares[col_0] && squares[col_0] === squares[col_1] && squares[col_0] === squares[col_2]) {
  //       return squares[col_0];
  //     }
  //   }
  //   return null;
};
// 3번 예시
const calcWinner = (squares) => {
  // const 결과 = 원본.map()
  // 결과의 배열개수와 원본의 배열개수는 항상 같다
  // 내용은 map의 return 결과에 따라서 달라진다

  // const 결과 = 원본.filter()
  // 결과의 배열개수 <= 원본보다 작거나 같다
  // filter()의 return이 true일 경우에만 결과에 배열을 추가한다

  // 코드에서 비교 결과가 true이면 return true한 것과 같고
  // 그 때 win의 값이 result에 담기게 된다.
  // result는 개수가 없거나 1개인 배열이 된다
  const result = winList.filter((win) => {
    const [col_0, col_1, col_2] = win;
    return squares[col_0] && squares[col_0] === squares[col_1] && squares[col_0] === squares[col_2];
  });

  // result.length가 false이면 result.length 그대로 return
  return result.length && squares[result[0][0]];
};

export { RenderSquare, calcWinner };
