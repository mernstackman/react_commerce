import React, { Component } from "react";

// import "currency-flags";

export class Currency extends Component {
  render() {
    return (
      <div id="currency">
        <span className="currency-flag currency-flag-usd" />
      </div>
    );
  }
}

export default Currency;
