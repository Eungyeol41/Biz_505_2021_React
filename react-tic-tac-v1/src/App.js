import "./App.css";
import { Board, Footer, Header } from "./comps";

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main_section">
        <Board />
      </section>
      <Footer />
    </div>
  );
}

export default App;
