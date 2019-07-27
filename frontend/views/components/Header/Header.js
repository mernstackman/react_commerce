import React from "react";
import { NavLink, withRouter } from "react-router-dom";

import TopMenu from "./TopMenu";
import MainMenu from "./MainMenu";

const Header = props => {
  return (
    <header id="menus" className="menu-container">
      <TopMenu />
    </header>
  );
};

export default withRouter(Header);
