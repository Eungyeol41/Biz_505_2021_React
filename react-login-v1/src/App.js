import logo from "./logo.svg";
import "./App.css";
import LoginForm from "./comps/LoginForm";
import MainNav from "./comps/MainNav";
import { BrowserRouter } from "react-router-dom";

function App() {
  const menu = [
    { link: "/", text: "Home" },
    { link: "/notice", text: "공지사항" },
    { link: "/boardList", text: "자유게시판" },
    { link: "/login", text: "로그인" },
    { link: "/join", text: "회원가입" },
  ];
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <MainNav menu={menu} />
        <LoginForm />
      </div>
    </BrowserRouter>
  );
}

export default App;
