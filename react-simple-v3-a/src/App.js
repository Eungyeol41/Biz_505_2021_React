import { useState } from "react";
import "./App.css";
import CounterBody from "./comps/CounterBody";

function App() {
  const [count, setCount] = useState();

  return (
    <div className="App">
      <header className="App-header">
        <CounterBody count={count} setCount={setCount} />
      </header>
    </div>
  );
}

export default App;
