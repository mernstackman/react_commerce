import React, { Component, Fragment } from "react";

import Currency from "./Currency";

class TopNavRight extends Component {
  render() {
    return (
      <Fragment>
        <Currency />
        <div id="nav-bag" className="top-menu-item">
          Bag
        </div>
      </Fragment>
    );
  }
}

export default TopNavRight;
