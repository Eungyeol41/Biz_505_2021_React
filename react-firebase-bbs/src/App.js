import "./App.css";
import "./css/nav.css";

import MainNav from "./comps/MainNav";
import Main from "./comps/BBsMain";
import Write from "./comps/BBsWrite";

import { BrowserRouter, Route } from "react-router-dom";
import Header from "./comps/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <MainNav />
        <Route path="/" component={Main} exact />
        <Route path="/write" component={Write} exact />
      </div>
    </BrowserRouter>
  );
}

export default App;
