import React, { Component, Fragment } from "react";

import Currency from "./Currency";
import ShoppingBag from "./ShoppingBag";

class TopNavRight extends Component {
  render() {
    return (
      <Fragment>
        <Currency />
        <ShoppingBag />
      </Fragment>
    );
  }
}

export default TopNavRight;
