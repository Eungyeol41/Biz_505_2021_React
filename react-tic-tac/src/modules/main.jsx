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
// let count = 0;

const RenderSquare = ({ squares, changeSquares }) => {
  // const squares = props.squares;
  const arrayBox = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ];

  const onButtonClick = (e) => {
    const index = e.target.dataset.id;

    // if(null) return;
    // null, undefined 는 if를 만났을때 무조건 false이기 때문에
    // if (squares[index] != null) {
    //   return;
    // } --> squares[index]가 null이 아니면
    // 위와 같은 코드로 안 쓰고 그냥 아래처럼 써도 상관없다.!
    // squares[index]가 있으면 return
    if (squares[index]) return;
    changeSquares(index);
  };

  let index = 0;
  // arrayBox는 사용하기 전 이미 선언이 되어있어야 한다.
  const buttons = arrayBox.map((sub_box) => {
    const button_cols = sub_box.map(() => {
      // 한 라인의 button 만들기 ( 9번 반복 )
      return (
        <button data-id={index} onClick={onButtonClick}>
          {squares[index++]}
        </button>
      ); // 9번 반복
    }); // 3개 만들어짐
    // 각 라인의 컴포넌트 만들기
    return <div className="row_box">{button_cols}</div>;
  });
  return buttons;
};

/**
 * index 값
 *
 * x+1
 * - x = 0, 3, 6
 * 0, 1, 2
 * 3, 4, 5
 * 6, 7, 8
 *
 * x+3
 * - x = 0, 1, 2
 * 0, 3, 6
 * 1, 4, 7
 * 2, 5, 8
 *
 * x+4
 * - x = 0
 * 0, 4, 8
 *
 * x+2
 * - x = 2
 * 2, 4, 6
 */

// const calcWinner = (squares) => {
//   if (i == 0 || i == 3 || i == 6) {
//     if (squares[i] && squares[i] === squares[i + 1] && squares[i] === squares[i + 2]) {
//       return squares[i];
//     }
//   }
//     } else if (squares[i] && squares[i] === squares[i + 3] && squares[i + 3] === squares[i + 6]) {
//       return squares[i];
//     } else if (squares[i] && squares[i] === squares[i + 4] && squares[i + 4] === squares[i + 8]) {
//       return squares[i];
//     } else if (squares[i] && squares[i] === squares[i + 2] && squares[i + 2] === squares[i + 4]) {
//       return squares[i];
//     }
// };

// let winner = "";
// const calcWinner = (squares) => {
//   const win = [
//     [0, 1, 2],
//     [0, 3, 6],
//     [0, 4, 8],
//     [1, 4, 7],
//     [2, 4, 6],
//     [2, 5, 8],
//     [3, 4, 5],
//     [6, 7, 8],
//   ];

//   win.forEach((row_win) => {
//     if (
//       squares[row_win[0]] &&
//       squares[row_win[0]] === squares[row_win[1]] &&
//       squares[row_win[0]] === squares[row_win[2]]
//     ) {
//       winner = squares[row_win[0]];
//     }
//     return null;
//   });

//   return winner;

//   // if (
//   //     squares[win[x][0]] &&
//   //     squares[win[x][0]] === squares[win[x][1]] &&
//   //     squares[win[x][0]] === squares[win[x][2]]
//   //   ) {
//   //     return squares[win[x][0]];
//   //   }
//   //   return null;

//   //   const calWin = win.map((win_x) => {
//   //     win_x.map(() => {
//   //       if (
//   //         squares[win[0]] &&
//   //         squares[win[0]] === squares[win[1]] &&
//   //         squares[win[0]] === squares[win[2]]
//   //       ) {
//   //         return squares[win[0]];
//   //       }
//   //       return null;
//   //     });
//   //   });
// };

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

  return result.length && squares[result[0][0]];
};

export { RenderSquare, calcWinner };
