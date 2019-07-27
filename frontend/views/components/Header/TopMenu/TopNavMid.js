import React, { Component } from "react";
import { Link } from "react-router-dom";

export class TopNavMid extends Component {
  render() {
    return (
      <ul id="middle-nav">
        <li className="middle-nav-item">
          <Link className="nav-link" to="#">
            Daily Deals
          </Link>
        </li>
        <li className="middle-nav-item">
          <Link className="nav-link" to="#">
            Sell
          </Link>
        </li>
        <li className="middle-nav-item">
          <Link className="nav-link" to="#">
            Help {"&"} Contact
          </Link>
        </li>
      </ul>
    );
  }
}

export default TopNavMid;
