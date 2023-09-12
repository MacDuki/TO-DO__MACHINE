import { motion } from "framer-motion";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./CreateTodoPanelLeft.css";

function CreateTodoPanelLeft({
	handlePanelVisibility,
	createTodo,
	newTodoText,
	setNewTodoText,
}) {
	return (
		<motion.div
			animate={{ y: 45, x: 15, scale: 1 }}
			initial={{ scale: 0, y: 45 }}
			transition={{ type: "spring", bounce: 0.5 }}
			className="newtodo-panel"
		>
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
		</motion.div>
	);
}

export { CreateTodoPanelLeft };
