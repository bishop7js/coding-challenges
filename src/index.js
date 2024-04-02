import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import FizzBuzz from "./components/FizzBuzz";
import ArrayChuncking from "./components/ArrayChuncking";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FizzBuzz />
  </React.StrictMode>
);
