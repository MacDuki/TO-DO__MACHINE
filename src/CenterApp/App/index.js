import React from "react";
import { CreateDetailedTodo } from "../CreateDetailedTodo";
import { CreateDetailedTodoForm } from "../CreateDetailedTodoForm";
import { TodoSearch } from "../TodoSearch";
import "./center-app.css";

function CenterApp() {
	const [formVisibility, setFormVisibility] = React.useState(false);
	function handleFormVisibility() {
		setFormVisibility((state) => !state);
	}

	return (
		<section className="center-section">
			<div className="center-app">
				{formVisibility ? (
					<CreateDetailedTodoForm handleFormVisibility={handleFormVisibility} />
				) : null}

				<TodoSearch />
				<CreateDetailedTodo handleFormVisibility={handleFormVisibility} />
			</div>
		</section>
	);
}

export default CenterApp;
