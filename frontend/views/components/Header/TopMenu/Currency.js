import React, { Component } from "react";
import currency from "currency-symbol-map/map";

export class Currency extends Component {
  render() {
    return (
      <div id="currency" className="pointer">
        <span className="currency-flag currency-flag-gbp" />{" "}
        <span className="bolded">{currency.GBP} GBP</span>
      </div>
    );
  }
}

export default Currency;
