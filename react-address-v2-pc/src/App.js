import { useState } from "react";
import "./App.css";
import AddressInput from "./comps/AddressInput";
import AddressView from "./comps/AddressView";

function App() {
  const [input, setInput] = useState({
    u_name: "",
    u_addr: "",
    u_tel: "",
    u_age: 0,
  });

  const [address, setAddress] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <AddressInput
          input={input}
          setInput={setInput}
          address={address}
          setAddress={setAddress}
        />
        <AddressView address={address} />
      </header>
    </div>
  );
}

export default App;
