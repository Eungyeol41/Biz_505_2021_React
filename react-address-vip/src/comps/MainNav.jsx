import React from "react";
import { NavLink } from "react-router-dom";

import "../css/Nav.css";

function MainNav() {
  return (
    <nav className="main_nav">
      <NavLink to="/" exact activeClassName="active">
        MAIN
      </NavLink>
      <NavLink to="/list" activeClassName="active">
        ADDRESS LIST
      </NavLink>
      <NavLink to="/detail" activeClassName="active">
        ADDRESS DETAIL
      </NavLink>
    </nav>
  );
}

export default MainNav;
