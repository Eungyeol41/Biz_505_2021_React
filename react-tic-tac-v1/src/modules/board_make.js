const make_board = () => {
  const onButtonClick = (e) => {
    const index = e.target.dataset.index;
    // alert(index);
    const squares = squares ? "O" : "X";
  };

  let index = 0;

  /* 
	const arrayBox = [
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0],
	];
  */
  const arrayBox = Array(3).fill(Array(3).fill(null));
  // console.log(arrayBox);
  const array_div = arrayBox.map((sub_box) => {
    const button_box = sub_box.map(() => {
      return (
        <button className="square" data-index={index++} onClick={onButtonClick}>
          {squares}
        </button>
      );
    });
    return <div className="squares">{button_box}</div>;
  });
  return array_div;
};

export { make_board };
