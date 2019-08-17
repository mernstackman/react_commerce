import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Menu from "./components/Menu";
import Home from "./components/Home";

class MainRouter extends Component {
  render() {
    return (
      <div>
        <Menu />
        {/* Routes here */}
        <Switch>
          <Route exact path="/" render={props => <Home {...props} title={"React Starter Kit"} />} />
        </Switch>
        {/* end Routes*/}
      </div>
    );
  }
}

export default MainRouter;
