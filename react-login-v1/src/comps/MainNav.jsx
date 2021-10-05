import React from "react";
import { NavLink } from "react-router-dom";

import "../css/MainNav.css";

function MainNav({ menu }) {
  const menu_nav = menu.map((nav) => {
    return <NavLink to={nav.link}>{nav.text}</NavLink>;
  });
  return <nav className="main_nav">{menu_nav}</nav>;
}

export default MainNav;
