import React from "react";
import ReactDOM from "react-dom";
import store from "./global-store/sync.store";
import astore from "./global-store/async.store";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Check in console log</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
