import React from "react";

function CounterInput({ input, inputNum }) {
  return (
    <div>
      <input onChange={inputNum} type="text" />
    </div>
  );
}

export default CounterInput;
