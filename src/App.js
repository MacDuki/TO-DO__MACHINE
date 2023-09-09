import React from "react";
import "./App.css";
import { CreateTodoButton } from "./CreateTodoButton";
import TodoCounter from "./TodoCounter";
import { TodoItemCompleted } from "./TodoItemCompleted";
import { TodoItemPending } from "./TodoItemPending";
import { TodoItemRemoved } from "./TodoItemRemoved";
import TodoList from "./TodoList";
import { TodoListCompleted } from "./TodoListCompleted";
import { TodoListRemoved } from "./TodoListRemoved";

const defaultTodos = [
	{ text: "Item 0", completed: false, removed: false, section: "pending" },
	{ text: "Item 1", completed: true, removed: false, section: "completed" },
	{ text: "Item 3", completed: false, removed: false, section: "pending" },
	{ text: "Item 4", completed: false, removed: false, section: "pending" },
	{ text: "Item 5", completed: false, removed: false, section: "pending" },
	{ text: "Item 6", completed: false, removed: false, section: "pending" },
	{ text: "Item 7", completed: false, removed: false, section: "pending" },
	{ text: "Item 8", completed: false, removed: false, section: "pending" },
	{ text: "Item 9", completed: false, removed: false, section: "pending" },
	{ text: "Item 10", completed: false, removed: false, section: "pending" },
	{ text: "Item 11", completed: false, removed: true, section: "removed" },
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
		updateTodos[todoIndex].section = "removed";
		setTodos(updateTodos);
	};

	const handleClickEliminate = (text) => {
		const updatedTodos = todos.filter((todo) => todo.text !== text);
		setTodos(updatedTodos);
	};

	const sectionArray = () => {
		const updateTodos = [...todos];
		const pending = updateTodos
			.filter((todo) => todo.section === "pending")
			.map((todo) => Object.keys(todo));
		const removed = updateTodos
			.filter((todo) => todo.section === "removed")
			.map((todo) => Object.keys(todo));
		const complete = updateTodos
			.filter((todo) => todo.section === "completed")
			.map((todo) => Object.keys(todo));

		return { pending, removed, complete };
	};

	const [sect, setSection] = React.useState(1);

	const section = sectionArray();
	return (
		<section className="App">
			<div className="App-header">
				<TodoCounter completed={totalCompletedTodos} total={totalTodos} />
				{/* <TodoSearch/> */}
				<CreateTodoButton sectionFunction={() => section()} />
				<TodoList>
					{section.map((todo) => (
						<TodoItemPending
							todos={todos}
							key={todo.text}
							text={todo.text}
							completed={todo.completed}
							removed={todo.removed}
							section={todo.section}
							handleClickCheck={() => handleClickCheck(todo.text)}
							handleClickRemoved={() => handleClickRemoved(todo.text)}
						/>
					))}
				</TodoList>
				<TodoListCompleted>
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
				</TodoListCompleted>
				<TodoListRemoved>
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
				</TodoListRemoved>
			</div>
		</section>
	);
}

export default App;
