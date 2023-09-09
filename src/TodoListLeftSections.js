function TodoListLeftSections(props) {
	const pending = !props.completed && !props.removed;
	const completed = props.completed && !props.removed;
	const removed = !props.completed && props.removed;
	const [section, setSection] = React.useState(pending);
	if (section === pending) {
		return allPendingTodos.map((todo) => (
			<TodoItemPending
				todos={todos}
				key={todo.text}
				text={todo.text}
				completed={todo.completed}
				handleClickCheck={() => handleClickCheck(todo.text)}
				handleClickRemoved={() => handleClickRemoved(todo.text)}
			/>
		));
	} else if (section === completed) {
		return allCompletedTodos.map((todo) => (
			<TodoItemCompleted
				todos={todos}
				removed={todo.removed}
				key={todo.text}
				text={todo.text}
				completed={todo.completed}
				handleClickRemoved={() => handleClickRemoved(todo.text)}
				handleClickClose={() => handleClickDiscarded(todo.text)}
			/>
		));
	} else if (section === removed) {
		return allRemovedTodos.map((todo) => (
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
		));
	}
}

if (!todos.completed && !todos.removed) {
	allPendingTodos.map((todo) => (
		<TodoItemPending
			todos={todos}
			key={todo.text}
			text={todo.text}
			completed={todo.completed}
			handleClickCheck={() => handleClickCheck(todo.text)}
			handleClickRemoved={() => handleClickRemoved(todo.text)}
		/>
	));
} else if (todos.completed && !todos.removed) {
	allCompletedTodos.map((todo) => (
		<TodoItemCompleted
			todos={todos}
			removed={todo.removed}
			key={todo.text}
			text={todo.text}
			completed={todo.completed}
			handleClickRemoved={() => handleClickRemoved(todo.text)}
			handleClickClose={() => handleClickDiscarded(todo.text)}
		/>
	));
} else if (!todos.completed && todos.removed) {
	allRemovedTodos.map((todo) => (
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
	));
}

export { TodoListLeftSections };
