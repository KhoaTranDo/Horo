import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./Components/Homepage/reportWebVitals";
import RoomProvider from "./Components/Homepage/context";
ReactDOM.render(
  <RoomProvider>
    <Router>
      <App />
    </Router>
  </RoomProvider>,
  document.getElementById("root")
);

// reportWebVitals();
