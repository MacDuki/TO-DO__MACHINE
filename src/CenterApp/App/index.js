import React from "react";
import { TodoContext } from "../../TodoContext";
import { CreateDetailedTodo } from "../CreateDetailedTodo";
import { CreateDetailedTodoForm } from "../CreateDetailedTodoForm";
import { TodoSearch } from "../TodoSearch";
import "./center-app.css";

function CenterApp() {
	const { formVisibility, handleFormVisibility } =
		React.useContext(TodoContext);

	return (
		<section className="center-section">
			<div className="center-app">
				{formVisibility ? (
					<CreateDetailedTodoForm handleFormVisibility={handleFormVisibility} />
				) : (
					<>
						<TodoSearch />
						<CreateDetailedTodo handleFormVisibility={handleFormVisibility} />
					</>
				)}
			</div>
		</section>
	);
}

export default CenterApp;
