import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class SignInUp extends Component {
  render() {
    return (
      <Fragment>
        <span className="nav-text">Hi! </span>
        <Link className="nav-link pink" to="#">
          Sign in
        </Link>
        <span className="nav-text"> or </span>
        <Link className="nav-link pink" to="#">
          Register
        </Link>
      </Fragment>
    );
  }
}

export default SignInUp;
