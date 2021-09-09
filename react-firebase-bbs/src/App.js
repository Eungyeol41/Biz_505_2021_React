import "./App.css";
import "./css/nav.css";

import MainNav from "./comps/MainNav";
import Board from "./comps/Board";

import { BrowserRouter, Route } from "react-router-dom";
import Header from "./comps/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <MainNav />
        <Route path="/" component={Board} exact />
      </div>
    </BrowserRouter>
  );
}

export default App;
