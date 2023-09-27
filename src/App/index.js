import React from "react";
import { TodoProvider } from "../TodoContext";
import "./App.css";
import { AppUi } from "./AppUi";

function App() {
	return (
		<TodoProvider>
			<AppUi />
		</TodoProvider>
	);
}

export default App;
