import React from "react";
import { TodoProvider } from "../TodoContext";
import "./App.css";
import { AppUi } from "./AppUi";
import { useLocalStorage } from "./useLocalStorage";
function App() {
	const { item: todos, saveLocalStorage } = useLocalStorage("TODOS-V1", []);
	// Lógica para check y close TO-DO
	const totalTodos = todos.filter((todo) => !todo.removed).length;
	const totalCompletedTodos = todos.filter((todo) => !!todo.completed).length;

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
		<TodoProvider>
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
			/>
		</TodoProvider>
	);
}

export default App;
