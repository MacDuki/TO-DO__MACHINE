import { AiOutlineCloseCircle } from "react-icons/ai";
import "./CreateTodoPanelLeft.css";

function CreateTodoPanelLeft({
	handlePanelVisibility,
	createTodo,
	newTodoText,
	setNewTodoText,
}) {
	return (
		<div className="newtodo-panel">
			<AiOutlineCloseCircle
				onClick={handlePanelVisibility}
				className="plus-icon"
			/>
			<input
				type="text"
				placeholder="Nueva tarea..."
				onChange={(e) => setNewTodoText(e.target.value)}
				value={newTodoText}
			/>
			<button
				onClick={() => {
					createTodo();
					setTimeout(handlePanelVisibility, 100);
				}}
			>
				Agregar
			</button>
		</div>
	);
}

export { CreateTodoPanelLeft };
