import logo from "../logo.svg";
import React from "react";

function Header() {
  return (
    <div className="header_div">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>MY BUCKET LIST</h1>
      </header>
    </div>
  );
}

export default Header;
