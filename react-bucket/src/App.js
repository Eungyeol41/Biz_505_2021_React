import "./App.css";
import { BucketList, Footer, Header } from "./comps";

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main_section">
        <BucketList />
      </section>
      <Footer />
    </div>
  );
}

export default App;
