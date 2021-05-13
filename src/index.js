import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import CartStore from "./CartStore";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={CartStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
