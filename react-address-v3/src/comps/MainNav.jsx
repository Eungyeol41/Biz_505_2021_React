import React from "react";
import { NavLink } from "react-router-dom";

function MainNav() {
  return (
    <ul>
      <li>
        <NavLink to="/">HOME</NavLink>
      </li>
      <li>
        <NavLink to="/input">내 정보 입력</NavLink>
      </li>
      <li>
        <NavLink to="/list">정보 리스트</NavLink>
      </li>
    </ul>
  );
}

export default MainNav;
