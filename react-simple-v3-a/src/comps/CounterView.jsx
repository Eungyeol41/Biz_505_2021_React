import React from "react";

function CounterView({ count }) {
  const number = Number(count);

  return (
    <div>
      <div>
        {number}와 20의 합 : {number + 20}
      </div>
      <div>
        {number}와 {number}의 곱 : {number * number}
      </div>
    </div>
  );
}

export default CounterView;
