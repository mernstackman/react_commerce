import React, { Component } from "react";

import SignInUp from "./TopMenu/SignInUp";
import TopNavMid from "./TopMenu/TopNavMid";
import TopNavRight from "./TopMenu/TopNavRight";

class TopMenu extends Component {
  render() {
    return (
      <nav id="top-menu">
        <div id="top-nav-left" className="top-menu-item bolded">
          <SignInUp />
        </div>

        <nav id="top-nav-mid" className="top-menu-item">
          <TopNavMid />
        </nav>

        <div id="top-nav-right" className="top-menu-item">
          <TopNavRight />
        </div>
      </nav>
    );
  }
}

export default TopMenu;
