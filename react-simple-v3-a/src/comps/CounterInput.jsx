import React from "react";

function CounterInput(props) {
  const { setCount } = props;

  const onChangeHandler = (e) => {
    const number = e.target.value;
    setCount(number);
  };

  return (
    <div>
      <input type="number" placeholder="숫자를 입력해주세요" onChange={onChangeHandler} />
    </div>
  );
}

export default CounterInput;
