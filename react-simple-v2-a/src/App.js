import "./App.css";
import CounterView from "./comps/CounterView";
import CounterInput from "./comps/CounterInput";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState();

  return (
    <div className="App">
      <header className="App-header">
        <CounterInput setNumber={setNumber} />
        <CounterView number={number} />
      </header>
    </div>
  );
}

export default App;
