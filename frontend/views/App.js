import React, { Component, Fragment } from "react";
import MainRouter from "./MainRouter";
import { BrowserRouter } from "react-router-dom";
import "./../sass/style.scss";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // <BrowserRouter>{auth.isLoggedIn() && <Notification />}</BrowserRouter>
    return (
      <Fragment>
        <BrowserRouter>
          <MainRouter />
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;
