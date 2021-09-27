import "./App.css";
import AddressInput from "./comps/AddressInput";
import AddressView from "./comps/AddressView";
import { useState } from "react";

function App() {
  const [address, setAddress] = useState({
    u_name: "",
    u_addr: "",
    u_tel: "",
    u_age: 0,
  });
  const [addressList, setAddressList] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <AddressInput
          address={address}
          setAddress={setAddress}
          addressList={addressList}
          setAddressList={setAddressList}
        />
        <AddressView addressList={addressList} />
      </header>
    </div>
  );
}

export default App;
