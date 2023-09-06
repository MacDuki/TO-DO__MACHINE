import "./TodoCounter.css";

function TodoCounter({ completed, total }) {
	return (
		<>
			<h2>Tasks completed</h2>
			<h2 className="tasksCounter">
				{completed}/{total}
			</h2>
		</>
	);
}

export default TodoCounter;
