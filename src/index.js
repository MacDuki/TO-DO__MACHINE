import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CenterApp from "./CenterApp/App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("left-root"));
root.render(<App />);
const centerRoot = ReactDOM.createRoot(document.getElementById("center-root"));
centerRoot.render(<CenterApp />);
