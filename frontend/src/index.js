import React from "react";
import ReactDOM from "react-dom";
import LoginPage from "./LoginPage";
import "./index.css"

let destination = document.querySelector("#container");

ReactDOM.render(
  <div>
    <LoginPage/>
  </div>,
  destination
);
