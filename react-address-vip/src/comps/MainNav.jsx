import React from "react";
import { NavLink } from "react-router-dom";

import "../css/Nav.css";

function MainNav() {
  return (
    <nav className="main_nav">
      <NavLink to="/" exact activeClassName="active">
        MAIN
      </NavLink>
      <NavLink to="/input" activeClassName="active">
        INPUT ADDRESS
      </NavLink>
      <NavLink to="/list" activeClassName="active">
        ADDRESS LIST
      </NavLink>
    </nav>
  );
}

export default MainNav;
