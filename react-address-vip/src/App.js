import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Route } from "react-router-dom";

import AddressMain from "./comps/AddressMain";
import AddressInput from "./comps/AddressInput";
import AddressList from "./comps/AddressList";
import MainNav from "./comps/MainNav";
import AddressDetail from "./comps/AddressDetail";
import Home from "./comps/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App gradient-border">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>ADDRESS BOOK</h2>
        </header>
        <MainNav />
        <Route path="/" exact>
          <AddressMain form={<AddressInput />}>
            <hr />
            <AddressList />
          </AddressMain>
        </Route>
        <Route path="/list">{/* <AddressList /> */}</Route>
        <Route path="/detail">{/* <AddressDetail /> */}</Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
