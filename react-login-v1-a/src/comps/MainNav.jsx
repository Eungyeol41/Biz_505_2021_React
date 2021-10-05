import React from "react";
import { BrowserRouter, NavLink, Route } from "react-router-dom";

import "../css/MainNav.css";
import JoinForm from "./JoinForm";
import LoginForm from "./LoginForm";

const align_right = {
  marginLeft: "auto",
};

function MainNav({ children, navList }) {
  const nav_items = navList.map((nav) => {
    return (
      <li className="nav_item" key={nav.id} style={nav.align && align_right}>
        <NavLink to={nav.link}>{nav.title}</NavLink>
      </li>
    );
  });
  return (
    <BrowserRouter>
      <ul className="nav">{nav_items}</ul>
      {children}
    </BrowserRouter>
  );
}

export default MainNav;
