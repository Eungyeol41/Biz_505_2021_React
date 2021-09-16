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

export { RenderSquare };
