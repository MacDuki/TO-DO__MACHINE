import React from "react";
import { TodoProvider } from "../TodoContext";
import { AppUi } from "./AppUi";
import "./left-app.css";

function App() {
	return (
		<TodoProvider>
			<AppUi />
		</TodoProvider>
	);
}

export default App;
