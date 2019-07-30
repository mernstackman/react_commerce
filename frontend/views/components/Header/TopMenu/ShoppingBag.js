import React, { Component } from "react";

class ShoppingBag extends Component {
  render() {
    return (
      <div id="nav-bag" className="top-menu-item">
        <span className="iconic shopping-bag-24" />
        <span id="bag-amount" className="white bgr-red">
          0
        </span>
      </div>
    );
  }
}

export default ShoppingBag;
