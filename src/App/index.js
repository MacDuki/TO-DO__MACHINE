import React from "react";
import { TodoItemCompleted } from "../TodoItemCompleted/index";
import { TodoItemPending } from "../TodoItemPending/index";
import { TodoItemRemoved } from "../TodoItemRemoved/index";
import "./App.css";
import { AppUi } from "./AppUi";
import { useLocalStorage } from "./useLocalStorage";
function App() {
	const {
		item: todos,
		saveLocalStorage,
		error,
		loading,
	} = useLocalStorage("TODOS-V1", []);
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
			saveLocalStorage(updatedTodos);
			return;
		}

		saveLocalStorage(updateTodos);
	};
	// logica para secciones
	const [section, setSection] = React.useState("pending");

	const sectionSetFunction = {
		right: () =>
			setSection((prevSection) =>
				prevSection === "removed"
					? "pending"
					: prevSection === "pending"
					? "completed"
					: "removed",
			),
		left: () =>
			setSection((prevSection) =>
				prevSection === "completed"
					? "pending"
					: prevSection === "removed"
					? "completed"
					: "removed",
			),
	};

	const sectionComponents = {
		pending: () =>
			allPendingTodos.map((todo) => (
				<TodoItemPending
					todos={todos}
					removed={todo.removed}
					key={todo.text}
					text={todo.text}
					completed={todo.completed}
					handleClickCheck={() => handleTodoActions(todo.text, "check")}
					handleClickRemoved={() => handleTodoActions(todo.text, "removed")}
				/>
			)),
		completed: () =>
			allCompletedTodos.map((todo) => (
				<TodoItemCompleted
					todos={todos}
					removed={todo.removed}
					key={todo.text}
					text={todo.text}
					completed={todo.completed}
					handleClickRemoved={() => handleTodoActions(todo.text, "removed")}
					handleClickClose={() => handleTodoActions(todo.text, "discarded")}
				/>
			)),
		removed: () =>
			allRemovedTodos.map((todo) => (
				<TodoItemRemoved
					todos={todos}
					key={todo.text}
					text={todo.text}
					removed={todo.removed}
					completed={todo.completed}
					handleClickCheck={() => handleTodoActions(todo.text, "check")}
					handleClickDiscarded={() => handleTodoActions(todo.text, "discarded")}
					handleClickEliminate={() => handleTodoActions(todo.text, "eliminate")}
				/>
			)),
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
		saveLocalStorage(updatedTodos);
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
		<AppUi
			handlePanelVisibility={handlePanelVisibility}
			sectionFunctionLeft={sectionSetFunction.left}
			sectionFunctionRight={sectionSetFunction.right}
			totalCompletedTodos={totalCompletedTodos}
			totalTodos={totalTodos}
			showPanel={showPanel}
			createTodo={createTodo}
			newTodoText={newTodoText}
			setNewTodoText={setNewTodoText}
			section={section}
			sectionComponents={sectionComponents}
			todos={todos}
			error={error}
			loading={loading}
		/>
	);
}

export default App;
