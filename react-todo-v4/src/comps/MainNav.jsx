import React from "react";
import { BrowserRouter, NavLink } from "react-router-dom";

import "../css/MainNav.css";

function MainNav({ children, navList }) {
  const menu_list = navList.map((nav) => {
    return (
      <li className="nav_li" key={nav.id}>
        <NavLink to={nav.link} activeClassName="active" exact>
          {nav.title}
        </NavLink>
      </li>
    );
  });

  return (
    <BrowserRouter>
      <ul className="main_nav">{menu_list}</ul>
      {children}
    </BrowserRouter>
  );
}

export default MainNav;
