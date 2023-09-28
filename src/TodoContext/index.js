import React from "react";
import { useLocalStorage } from "../App/useLocalStorage";
import { CreateTodoPanelLeft } from "../CreateTodoPanelLeft";
import { TodoItemCompleted } from "../TodoItemCompleted/index";
import { TodoItemPending } from "../TodoItemPending/index";
import { TodoItemRemoved } from "../TodoItemRemoved/index";
import { TodoLeftHeader } from "../TodoLeftHeader";
import { TodoList } from "../TodoList";

const TodoContext = React.createContext();

function TodoProvider({ children }) {
	const {
		item: todos,
		saveLocalStorage,
		error,
		loading,
	} = useLocalStorage("TODOS-V1", []);
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
	const [showPanel, setShowPanel] = React.useState(false);
	const handlePanelVisibility = () => {
		setShowPanel((state) => !state);
	};

	function renderContent() {
		if (showPanel === true) {
			return <CreateTodoPanelLeft />;
		} else {
			return (
				<>
					<TodoLeftHeader />
					<TodoList>
						{loading ? <p>Cargando ...</p> : null}
						{error ? <p>Hay un error fatal</p> : null}
						{!loading && todos.length < 1 ? <p>Crea tu primer Todo</p> : null}
						{!loading && todos.length >= 1
							? sectionComponents[section]()
							: null}
					</TodoList>
				</>
			);
		}
	}

	return (
		<TodoContext.Provider
			value={{
				renderContent,
				handlePanelVisibility,
				totalTodos,
				totalCompletedTodos,
				section,
				sectionSetFunction,
				newTodoText,
				setNewTodoText,
				createTodo,
				setSection,
			}}
		>
			{children}
		</TodoContext.Provider>
	);
}

export { TodoContext, TodoProvider };
