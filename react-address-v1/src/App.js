import "./App.css";
import AddressInput from "./comps/AddressInput";
import AddressView from "./comps/AddressView";
import { useState } from "react";

function App() {
  const [text, setText] = useState({
    name: "",
    addr: "",
    tel: "",
    age: "",
  });

  return (
    <div className="App">
      <header className="App-header">
        <AddressInput text={text} setText={setText} />
        <AddressView text={text} />
      </header>
    </div>
  );
}

export default App;
