import logo from "./logo.svg";
import "./App.css";
import MainNav from "./comps/MainNav";
import LoginForm from "./comps/LoginForm";
import JoinForm from "./comps/JoinForm";
import { Route } from "react-router";

const navList = [
  { id: 0, title: "Home", link: "/" },
  { id: 1, title: "공지사항", link: "/notice" },
  { id: 2, title: "자유게시판", link: "/bbs" },
  { id: 3, title: "로그인", link: "/login", align: true },
  { id: 4, title: "회원가입", link: "/join" },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <MainNav navList={navList}>
        <Route path="/login" component={LoginForm} />
        <Route path="/join" component={JoinForm} />
      </MainNav>
    </div>
  );
}

export default App;
