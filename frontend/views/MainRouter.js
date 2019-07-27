import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./components/Home";

class MainRouter extends Component {
  render() {
    return (
      <div>
        <Header />
        {/* Routes here */}
        <Switch>
          <Route exact path="/" render={props => <Home {...props} title={"React Commerce"} />} />
        </Switch>
        {/* end Routes*/}
      </div>
    );
  }
}

export default MainRouter;
