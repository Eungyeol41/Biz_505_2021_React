import "./App.css";
import "./css/nav.css";

import { BBsMain, BBsWrite, BBsDetail, MainNav, Header, Footer } from "./comps";

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <MainNav />
        <Route path="/" component={BBsMain} exact />
        <Route path="/write" component={BBsWrite} exact />
        <Switch>
          <Route path="/detail/:id" component={BBsDetail} exact />
          <Route path="/detail" component={BBsDetail} exact />
        </Switch>
        <section className="main_section"></section>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
