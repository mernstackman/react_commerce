import React from "react";
import { NavLink, withRouter } from "react-router-dom";

function MainMenu() {
  return (
    <div id="main-menu">
      <div id="site-logo">LOGO</div>

      <nav id="main-menu-nav">
        <NavLink to="/">Home</NavLink>
      </nav>

      <div id="search-form-nav">search</div>
    </div>
  );
}

export default MainMenu;
