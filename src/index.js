import React from "react";
import ReactDOM from "react-dom/client";
import PrincipalApp from "./PrincipalApp/App";
import "./index.css";

const principalRoot = ReactDOM.createRoot(
	document.getElementById("principal-root"),
);
principalRoot.render(<PrincipalApp />);
