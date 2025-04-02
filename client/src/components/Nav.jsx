import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <NavLink to={"/"} className={"logo"}>
        TK Portfolio
      </NavLink>
    </nav>
  );
}

export default Nav;
