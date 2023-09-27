import { motion } from "framer-motion";
import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { TodoContext } from "../TodoContext";
import "./CreateTodoPanelLeft.css";

function CreateTodoPanelLeft() {
	const {
		newTodoText,
		setNewTodoText,
		createTodo,
		handlePanelVisibility,
		setSection,
	} = React.useContext(TodoContext);
	return (
		<motion.div
			animate={{ y: 45, x: 15, scale: 1 }}
			initial={{ scale: 0, y: 45 }}
			transition={{ type: "spring", bounce: 0.5 }}
			className="newtodo-panel"
		>
			<AiOutlineCloseCircle
				onClick={() => {
					handlePanelVisibility("close");
				}}
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
					setTimeout(handlePanelVisibility("close"), 100);
					setSection("pending");
				}}
			>
				Agregar
			</button>
		</motion.div>
	);
}

export { CreateTodoPanelLeft };
