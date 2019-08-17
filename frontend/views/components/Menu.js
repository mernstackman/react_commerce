import React from "react";
import { NavLink, withRouter } from "react-router-dom";

const Menu = props => {
  return (
    <nav id="main_nav">
      <NavLink to="/">Home</NavLink>
    </nav>
  );
};

export default withRouter(Menu);
