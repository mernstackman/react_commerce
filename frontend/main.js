import React from "react";
import ReactDOM from "react-dom";
import store from "frontend/store";
import App from "./views/App";

ReactDOM.render(<App store={store} />, document.getElementById("app"));
