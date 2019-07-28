import React, { Component, Fragment } from "react";
import MainRouter from "./MainRouter";
import { BrowserRouter } from "react-router-dom";
import "./../sass/style.scss";
import "./../css/currency-flags.css";
import icons_1 from "./../img/icons_2.png";

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
