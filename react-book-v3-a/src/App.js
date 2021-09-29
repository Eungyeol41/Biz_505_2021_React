import logo from "./logo.svg";
import "./App.css";
import MainNav from "./comps/MainNav";
import { BrowserRouter } from "react-router-dom";
import BookMain from "./comps/BookMain";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <BrowserRouter>
        <MainNav />
        <BookMain />
      </BrowserRouter>
    </div>
  );
}

export default App;
