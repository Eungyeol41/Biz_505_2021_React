import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BBsMain, BBsWrite, Footer, Header, MainNav, BBsDetail } from "./comps";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <MainNav />
        <section className="main_section">
          <Route exact path="/" component={BBsMain} />
          <Switch>
            {/* 순서가 바뀌지 않아야 함..! */}
            <Route exact path="/write/:id" component={BBsWrite} />
            <Route exact path="/write" component={BBsWrite} />
            <Route exact path="/detail/:id" component={BBsDetail} />
          </Switch>
        </section>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
