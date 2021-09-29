import logo from "./logo.svg";
import "./App.css";
import PropsDrilling from "./comps/PropsDrilling";
import BookMain from "./comps/BookMain";
import { useState } from "react";
import BookContext from "./context/BookContext";

function App() {
  const [book, setBook] = useState("Very very Sleepy");
  const [address, setAddress] = useState({ b_name: "", b_tel: "", b_addr: "" });
  //   이렇게 해놓으면 어디에서든지 자유롭게 사용 가능하다
  const providerData = { book, setBook, address, setAddress };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {/* Provider에서는 value라는 키워드로 항상 전달해야 함! */}
      <BookContext.Provider value={providerData}>
        <BookMain />
      </BookContext.Provider>
      <PropsDrilling />
    </div>
  );
}

export default App;
