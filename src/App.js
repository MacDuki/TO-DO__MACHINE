import React from "react";
import { CreateTodoPanelLeft } from "./CreateTodoPanelLeft";
import { TodoItemCompleted } from "./TodoItemCompleted";
import { TodoItemPending } from "./TodoItemPending";
import { TodoItemRemoved } from "./TodoItemRemoved";
import { TodoLeftHeader } from "./TodoLeftHeader";
import TodoList from "./TodoList";

const defaultTodos = [
	{ text: "Item 0", completed: false, removed: false, section: "pending" },
	{ text: "Item 1", completed: true, removed: false, section: "completed" },
	{ text: "Item 3", completed: false, removed: false, section: "pending" },
	{ text: "Item 4", completed: false, removed: false, section: "pending" },
	{ text: "Item 5", completed: false, removed: true, section: "pending" },
];

function App() {
	const [todos, setTodos] = React.useState(defaultTodos);

	// Lógica para check y close TO-DO
	const totalTodos = todos.filter((todo) => !todo.removed).length;
	const totalCompletedTodos = todos.filter((todo) => !!todo.completed).length;

	const allPendingTodos = todos.filter(
		(todo) => !todo.completed && !todo.removed,
	);
	const allCompletedTodos = todos.filter(
		(todo) => todo.completed && !todo.removed,
	);
	const allRemovedTodos = todos.filter((todo) => todo.removed);

	const handleTodoActions = (text, action) => {
		const updateTodos = [...todos];
		const todoIndex = updateTodos.findIndex((todo) => todo.text === text);

		if (action === "check") {
			updateTodos[todoIndex].completed = true;
			updateTodos[todoIndex].removed = false;
			updateTodos[todoIndex].section = "completed";
		} else if (action === "discarded") {
			updateTodos[todoIndex].completed = false;
			updateTodos[todoIndex].removed = false;
			updateTodos[todoIndex].section = "pending";
		} else if (action === "removed") {
			updateTodos[todoIndex].completed = false;
			updateTodos[todoIndex].removed = true;
			updateTodos[todoIndex].section = "removed";
		} else if (action === "eliminate") {
			const updatedTodos = updateTodos.filter((todo) => todo.text !== text);
			setTodos(updatedTodos);
			return; // Return early to avoid setting state multiple times
		}

		setTodos(updateTodos);
	};

	// logica para secciones

	const [section, setSection] = React.useState("pending");

	const sectionFunctionRight = () => {
		if (section === "pending") {
			setSection("completed");
		} else if (section === "completed") {
			setSection("removed");
		} else if (section === "removed") {
			setSection("pending");
		}
	};

	const sectionFunctionLeft = () => {
		if (section === "pending") {
			setSection("removed");
		} else if (section === "completed") {
			setSection("pending");
		} else if (section === "removed") {
			setSection("completed");
		}
	};
	// Logica para crear Todos simples
	const [newTodoText, setNewTodoText] = React.useState("");
	const createTodo = () => {
		const updatedTodos = [...todos];
		const nuevoTodo = {
			text: newTodoText,
			completed: false,
			removed: false,
		};
		updatedTodos.push(nuevoTodo);
		setTodos(updatedTodos);
		setNewTodoText("");
	};

	const [showPanel, setShowPanel] = React.useState("hidden");

	const handlePanelVisibility = (action) => {
		if (action === "open") {
			setShowPanel("visible");
		} else if (action === "close") {
			setShowPanel("hidden");
		}
	};
	return (
		<section className="App">
			<div className="App-header">
				{/* <TodoSearch/> */}
				<TodoLeftHeader
					handlePanelVisibility={() => handlePanelVisibility("open")}
					section={section}
					sectionFunctionRight={() => sectionFunctionRight()}
					sectionFunctionLeft={() => sectionFunctionLeft()}
					completed={totalCompletedTodos}
					total={totalTodos}
				/>
				{showPanel === "visible" ? (
					<CreateTodoPanelLeft
						handlePanelVisibility={() => handlePanelVisibility("close")}
						createTodo={() => createTodo()}
						newTodoText={newTodoText}
						setNewTodoText={setNewTodoText}
					/>
				) : section === "pending" ? (
					<TodoList>
						{allPendingTodos.map((todo) => (
							<TodoItemPending
								todos={todos}
								removed={todo.removed}
								key={todo.text}
								text={todo.text}
								completed={todo.completed}
								handleClickCheck={() => handleTodoActions(todo.text, "check")}
								handleClickRemoved={() =>
									handleTodoActions(todo.text, "removed")
								}
							/>
						))}
					</TodoList>
				) : section === "completed" ? (
					<TodoList>
						{allCompletedTodos.map((todo) => (
							<TodoItemCompleted
								todos={todos}
								removed={todo.removed}
								key={todo.text}
								text={todo.text}
								completed={todo.completed}
								handleClickRemoved={() =>
									handleTodoActions(todo.text, "removed")
								}
								handleClickClose={() =>
									handleTodoActions(todo.text, "discarded")
								}
							/>
						))}
					</TodoList>
				) : section === "removed" ? (
					<TodoList>
						{allRemovedTodos.map((todo) => (
							<TodoItemRemoved
								todos={todos}
								key={todo.text}
								text={todo.text}
								removed={todo.removed}
								completed={todo.completed}
								handleClickCheck={() => handleTodoActions(todo.text, "check")}
								handleClickDiscarded={() =>
									handleTodoActions(todo.text, "discarded")
								}
								handleClickEliminate={() =>
									handleTodoActions(todo.text, "eliminate")
								}
							/>
						))}
					</TodoList>
				) : null}
			</div>
		</section>
	);
}

export default App;
