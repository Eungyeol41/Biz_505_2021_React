import React from "react";
import { NavLink } from "react-router-dom";
import "../css/MainNav.css";

function MainNav() {
  const activeStyle = {
    color: "black",
  };

  return (
    <ul>
      <li>
        <NavLink to="/" activeStyle={activeStyle}>
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink to="/input" activeStyle={activeStyle}>
          내 정보 입력
        </NavLink>
      </li>
      <li>
        <NavLink to="/list" activeStyle={activeStyle}>
          정보 리스트
        </NavLink>
      </li>
    </ul>
  );
}

export default MainNav;
