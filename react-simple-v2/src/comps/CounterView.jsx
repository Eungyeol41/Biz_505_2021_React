import React from "react";

function CounterView({ input, sum, multiple }) {
  return (
    <div>
      <div>
        {input}와 20의 합 : {sum}
      </div>
      <div>
        {input}와 {input}의 곱 : {multiple}
      </div>
    </div>
  );
}

export default CounterView;
