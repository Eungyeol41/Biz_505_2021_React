import "./App.css";
import "./css/nav.css";

import MainNav from "./comps/MainNav";
import { Board, Write, Login, Join } from "./comps";

import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <h1>REACT BBS 2021</h1>
          <h3>React & Firebase BBS</h3>
        </header>

        <MainNav />
        <Route path="/" component={Board} exact />
      </div>
    </BrowserRouter>
  );
}

export default App;
