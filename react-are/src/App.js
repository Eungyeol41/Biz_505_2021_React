import { useEffect } from "react";
import "./App.css";
import Detail from "./comps/Detail";
import Hashtag from "./comps/Hashtag";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>BOX ATELIER</h2>
        <p>With. RE;CODE</p>
      </header>
      <Hashtag />
    </div>
  );
}

export default App;
