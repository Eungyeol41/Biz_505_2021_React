import React from "react";
import { NavLink } from "react-router-dom";

function MainNav() {
  return (
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/insert">Insert</NavLink>
      </li>
      <li>
        <NavLink to="/view">List View</NavLink>
      </li>
    </ul>
  );
}

export default MainNav;
