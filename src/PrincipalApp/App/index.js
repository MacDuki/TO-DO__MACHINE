import React from "react";
import CenterApp from "../../CenterApp/App";
import App from "../../LeftApp/App";
import { TodoProvider } from "../../TodoContext";
import "./PrincipalApp.css";

function PrincipalApp() {
	return (
		<>
			<TodoProvider>
				<App />
				<CenterApp />
			</TodoProvider>
		</>
	);
}

export default PrincipalApp;
