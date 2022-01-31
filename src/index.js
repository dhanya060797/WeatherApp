import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./Components/Home";
import App from "./Components/App";
import City2 from "./Components/Newdelhi";
import Banglore from "./Components/Banglore";
import reportWebVitals from "./reportWebVitals";
import Mumbai from "./Components/Mumbai";
import Pithoragarh from "./Components/Pithoragarh";
import Blore from "./Components/Blore";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Home />
    <City2 />
    <Banglore />
    <Mumbai />
    <Pithoragarh />
    <Blore/>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
