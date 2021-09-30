import React from "react";
import { NavLink } from "react-router-dom";
import "../css/MainNav.css";

/**
 *
 */
function MainNav() {
  return (
    <nav className="main_nav">
      <NavLink to="/" exact>
        Home
      </NavLink>
      <NavLink to="/insert" exact>
        Insert
      </NavLink>
      <NavLink to="/list" exact>
        ListView
      </NavLink>
    </nav>
  );
}

export default MainNav;
