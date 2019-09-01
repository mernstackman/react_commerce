import React, { Component, Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import MainRouter from "./MainRouter";
// import "./../sass/style.scss";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // <BrowserRouter>{auth.isLoggedIn() && <Notification />}</BrowserRouter>
    return (
      <Provider store={this.props.store}>
        <Fragment>
          <BrowserRouter>
            <MainRouter />
          </BrowserRouter>
        </Fragment>
      </Provider>
    );
  }
}

export default App;
