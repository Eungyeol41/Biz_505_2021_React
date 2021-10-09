import React from "react";
import MainNav from "./MainNav";
import LoginForm from "./LoginForm";
import JoinForm from "./JoinForm";
import { Route } from "react-router-dom";
import Notice from "./Notice";
import BBs from "./BBs";
import { useUserContext } from "../context/UserContextProvider";
import Logout from "./Logout";
import Admin from "./Admin";

function MainComp() {
  const { user, setUser } = useUserContext();
  const navList = [
    { id: 0, title: "Home", link: "/" },
    { id: 1, title: "공지사항", link: "/notice" },
    { id: 2, title: "자유게시판", link: "/bbs" },
    user?.userId
      ? { id: 3, title: "로그아웃", link: "/logout", align: true }
      : { id: 3, title: "로그인", link: "/login", align: true },
    user?.userId
      ? { id: 4, title: "마이페이지", link: "/mypage" }
      : { id: 4, title: "회원가입", link: "/join" },
    { id: 5, title: "게시판 관리", link: "/admin" },
  ];
  return (
    <MainNav navList={navList}>
      <Route path="/" exact>
        <div>
          <h1>HOME</h1>
        </div>
      </Route>
      <Route path="/notice" exact>
        <Notice />
      </Route>
      <Route path="/bbs" exact>
        <BBs />
      </Route>
      <Route path="/login" exact>
        <LoginForm />
      </Route>
      <Route path="/join" exact>
        <JoinForm />
      </Route>
      <Route path="/logout">
        <Logout />
      </Route>
      <Route path="/mypage">
        <div>
          <h1>MYPAGE</h1>
        </div>
      </Route>
      <Route path="/admin">
        <Admin />
      </Route>
    </MainNav>
  );
}

export default MainComp;
