import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./container/App";
import { HashRouter } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
    {/* <BrowserRouter> */}
      <App />
    {/* </BrowserRouter> */}
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
