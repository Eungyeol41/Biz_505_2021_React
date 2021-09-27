import React from "react";

function CounterView({ number }) {
  let intNum, sum, multiple;
  if (number) {
    intNum = parseInt(number);
    sum = intNum + 20;
    multiple = intNum * intNum;
  }

  return (
    <div>
      <div>
        {intNum}와 20의 합 : {sum}
      </div>
      <div>
        {intNum}와 {intNum}의 곱 : {multiple}
      </div>
    </div>
  );
}

export default CounterView;
