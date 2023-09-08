import React from "react";
import "./App.css";
import { CreateTodoButton } from "./CreateTodoButton";
import TodoCounter from "./TodoCounter";
import { TodoItemCompleted } from "./TodoItemCompleted";
import { TodoItemPending } from "./TodoItemPending";
import { TodoItemRemoved } from "./TodoItemRemoved";
import { TodoListCompleted } from "./TodoListCompleted";
import TodoListPending from "./TodoListPending";
import { TodoListRemoved } from "./TodoListRemoved";

const defaultTodos = [
	{ text: "Item 0", completed: false, removed: false },
	{ text: "Item 1", completed: false, removed: false },
	{ text: "Item 3", completed: false, removed: false },
	{ text: "Item 4", completed: false, removed: false },
	{ text: "Item 5", completed: false, removed: false },
	{ text: "Item 6", completed: false, removed: false },
	{ text: "Item 7", completed: false, removed: false },
	{ text: "Item 8", completed: false, removed: false },
	{ text: "Item 9", completed: false, removed: false },
	{ text: "Item 10", completed: false, removed: false },
	{ text: "Item 11", completed: false, removed: false },
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
		setTodos(updateTodos);
	};

	const handleClickDiscarded = (text) => {
		const updateTodos = [...todos];
		const todoIndex = updateTodos.findIndex((todo) => todo.text === text);
		updateTodos[todoIndex].completed = false;
		updateTodos[todoIndex].removed = false;
		setTodos(updateTodos);
	};

	const handleClickRemoved = (text) => {
		const updateTodos = [...todos];
		const todoIndex = updateTodos.findIndex((todo) => todo.text === text);
		updateTodos[todoIndex].completed = false;
		updateTodos[todoIndex].removed = true;
		setTodos(updateTodos);
	};

	const handleClickEliminate = (text) => {
		const updatedTodos = todos.filter((todo) => todo.text !== text);
		setTodos(updatedTodos);
	};

	return (
		<section className="App">
			<div className="App-header">
				<TodoCounter completed={totalCompletedTodos} total={totalTodos} />
				{/* <TodoSearch/> */}
				<CreateTodoButton />
				<TodoListPending>
					{allPendingTodos.map((todo) => (
						<TodoItemPending
							todos={todos}
							key={todo.text}
							text={todo.text}
							completed={todo.completed}
							handleClickCheck={() => handleClickCheck(todo.text)}
							handleClickRemoved={() => handleClickRemoved(todo.text)}
						/>
					))}
				</TodoListPending>
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
