import React, { useState } from "react";
import CounterInput from "./CounterInput";
import CounterView from "./CounterView";

function CounterBody(props) {
  return (
    <div>
      <CounterInput setCount={props.setCount} />
      <CounterView count={props.count} />
    </div>
  );
}

export default CounterBody;
