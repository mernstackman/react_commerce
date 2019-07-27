import React, { Component } from "react";

import SignInUp from "./TopMenu/SignInUp";
import TopNavMid from "./TopMenu/TopNavMid";

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

        <div id="top-nav-mid" className="top-menu-item">
          <div id="currency" className="top-menu-item">
            Currency
          </div>
          <div id="nav-bag" className="top-menu-item">
            Bag
          </div>
        </div>
      </nav>
    );
  }
}

export default TopMenu;
