import logo from "./logo.svg";
import "./App.css";

import { useState } from "react";
import UUID from "react-uuid";
import { BrowserRouter, Route } from "react-router-dom";

import { AddressList, AddressInput, MainNav, Home } from "./comps";

function App() {
  // 주소 1개의 데이터를 저장할 state 선언하기
  const [address, setAddress] = useState({
    a_id: UUID(),
    a_name: "NAME",
    a_tel: "TEL",
    a_addr: "ADDRESS",
    a_age: 0,
  });

  const [addrBook, setAddrBook] = useState([]);
  const stateGroup = {
    address,
    setAddress,
    addrBook,
    setAddrBook,
  };

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <MainNav />
        {/* <AddressInput stateGroup={stateGroup} /> */}
        {/* <AddressList addrBook={addrBook} /> */}
        <Route path="/" component={Home} exact />
        <Route path="/input" component={() => <AddressInput stateGroup={stateGroup} />} />
        <Route path="/list" component={() => <AddressList addrBook={addrBook} />} />
      </div>
    </BrowserRouter>
  );
}

export default App;
