import React, { Component } from "react";
import { Link } from "react-router-dom";

export class TopNavMid extends Component {
  render() {
    return (
      <ul id="top-nav">
        <li className="top-nav-item">
          <Link to="#">Daily Deals</Link>
        </li>
        <li className="top-nav-item">
          <Link to="#">Sell</Link>
        </li>
        <li className="top-nav-item">
          <Link to="#">Help {"&"} Contact</Link>
        </li>
      </ul>
    );
  }
}

export default TopNavMid;
