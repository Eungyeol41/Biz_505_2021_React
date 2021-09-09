import "./App.css";
import "./css/nav.css";

import MainNav from "./comps/MainNav";
import Main from "./comps/BBsMain";

import { BrowserRouter, Route } from "react-router-dom";
import Header from "./comps/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <MainNav />
        <Route path="/" component={Main} exact />
      </div>
    </BrowserRouter>
  );
}

export default App;
