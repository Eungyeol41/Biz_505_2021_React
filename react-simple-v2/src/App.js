import "./App.css";
import CounterInput from "./comps/CounterInput";
import CounterView from "./comps/CounterView";
import { useState } from "react";

function App() {
  const [input, setInput] = useState(0);

  const inputNum = (e) => {
    const num = e.target.value;

    setInput(num);
  };
  const _num = parseInt(input);

  let sum, multiple;
  if (inputNum) {
    sum = input + 20;
    multiple = input * input;
  }

  //   const sum = input + 20;
  //   const multiple = input * input;

  return (
    <div className="App">
      <header className="App-header">
        <CounterInput input={input} inputNum={inputNum} />
        <CounterView input={input} sum={sum} multiple={multiple} />
      </header>
    </div>
  );
}

export default App;
