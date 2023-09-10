import React from "react";
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
	{ text: "Item 5", completed: false, removed: false, section: "pending" },
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

	const handleClickCheck = (text) => {
		const updateTodos = [...todos];
		const todoIndex = updateTodos.findIndex((todo) => todo.text === text);
		updateTodos[todoIndex].completed = true;
		updateTodos[todoIndex].removed = false;
		updateTodos[todoIndex].section = "completed";
		setTodos(updateTodos);
	};

	const handleClickDiscarded = (text) => {
		const updateTodos = [...todos];
		const todoIndex = updateTodos.findIndex((todo) => todo.text === text);
		updateTodos[todoIndex].completed = false;
		updateTodos[todoIndex].removed = false;
		updateTodos[todoIndex].section = "pending";
		setTodos(updateTodos);
	};

	const handleClickRemoved = (text) => {
		const updateTodos = [...todos];
		const todoIndex = updateTodos.findIndex((todo) => todo.text === text);
		updateTodos[todoIndex].completed = false;
		updateTodos[todoIndex].removed = true;
		updateTodos[todoIndex].section = "removed";
		setTodos(updateTodos);
	};

	const handleClickEliminate = (text) => {
		const updatedTodos = todos.filter((todo) => todo.text !== text);
		setTodos(updatedTodos);
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

	const [showPanel, setShowPanel] = React.useState("newtodo-panel-hidden");
	const handleOpenPanel = () => {
		setShowPanel("newtodo-panel");
	};
	const handleClosePanel = () => {
		setShowPanel("newtodo-panel-hidden");
	};
	return (
		<section className="App">
			<div className="App-header">
				{/* <TodoSearch/> */}
				<TodoLeftHeader
					handlePanelClose={() => handleClosePanel()}
					showPanel={showPanel}
					handlePanelVisibility={() => handleOpenPanel()}
					section={section}
					sectionFunctionRight={() => sectionFunctionRight()}
					sectionFunctionLeft={() => sectionFunctionLeft()}
					completed={totalCompletedTodos}
					total={totalTodos}
					createTodo={() => createTodo()}
					newTodoText={newTodoText}
					setNewTodoText={setNewTodoText}
				/>
				{section === "pending" ? (
					<TodoList>
						{allPendingTodos.map((todo) => (
							<TodoItemPending
								todos={todos}
								removed={todo.removed}
								key={todo.text}
								text={todo.text}
								completed={todo.completed}
								handleClickCheck={() => handleClickCheck(todo.text)}
								handleClickRemoved={() => handleClickRemoved(todo.text)}
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
								handleClickRemoved={() => handleClickRemoved(todo.text)}
								handleClickClose={() => handleClickDiscarded(todo.text)}
							/>
						))}
					</TodoList>
				) : (
					<TodoList>
						{allRemovedTodos.map((todo) => (
							<TodoItemRemoved
								todos={todos}
								key={todo.text}
								text={todo.text}
								removed={todo.removed}
								completed={todo.completed}
								handleClickCheck={() => handleClickCheck(todo.text)}
								handleClickDiscarded={() => handleClickDiscarded(todo.text)}
								handleClickEliminate={() => handleClickEliminate(todo.text)}
							/>
						))}
					</TodoList>
				)}
			</div>
		</section>
	);
}

export default App;
