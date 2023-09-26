import React from "react";
import { useLocalStorage } from "../App/useLocalStorage";
import { TodoItemCompleted } from "../TodoItemCompleted/index";
import { TodoItemPending } from "../TodoItemPending/index";
import { TodoItemRemoved } from "../TodoItemRemoved/index";

const TodoContext = React.createContext();

function TodoProvider({ children }) {
	const {
		item: todos,
		saveLocalStorage,
		error,
		loading,
	} = useLocalStorage("TODOS-V1", []);
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
	return (
		<TodoContext.Provider
			value={{
				loading,
				error,
				todos,
				sectionComponents,
			}}
		>
			{children}
		</TodoContext.Provider>
	);
}

export { TodoContext, TodoProvider };
