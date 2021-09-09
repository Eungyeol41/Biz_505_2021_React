import React from "react";
import { NavLink } from "react-router-dom";

function MainNav() {
  const activeNavStyle = {
    backgroundColor: "#61dafb",
  };
  return (
    <div>
      <ul className="main_nav">
        <li>
          <NavLink to="/" activeStyle={activeNavStyle} exact>
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/write" activeStyle={activeNavStyle}>
            글쓰기
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" activeStyle={activeNavStyle}>
            로그인
          </NavLink>
        </li>
        <li>
          <NavLink to="/join" activeStyle={activeNavStyle}>
            회원가입
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default MainNav;
