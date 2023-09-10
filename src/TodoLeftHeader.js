import { AiOutlineCloseCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import "./TodoLeftHeader.css";
function TodoLeftHeader({
	section,
	sectionFunctionRight,
	sectionFunctionLeft,
	total,
	completed,
	createTodo,
	newTodoText,
	setNewTodoText,
	handlePanelVisibility,
	showPanel,
	handlePanelClose,
}) {
	let tittle = "";
	if (section === "pending") {
		tittle = "Tasks Pending";
	} else if (section === "completed") {
		tittle = "Tasks Completed";
	} else if (section === "removed") {
		tittle = "Removed Tasks";
	}
	return (
		<>
			<div className="header-container">
				<div className="first-container">
					<BsArrowLeftCircle
						className="arrow-icons"
						onClick={sectionFunctionLeft}
					/>
					<h2 className="left-tittle">{tittle}</h2>
					<BsArrowRightCircle
						className="arrow-icons"
						onClick={sectionFunctionRight}
					/>
				</div>
				<div className="second-container">
					<h3 className="tasks-counter">
						{completed}/{total}
					</h3>
					<AiOutlinePlusCircle
						onClick={handlePanelVisibility}
						className="plus-icon"
					/>
				</div>
				<div className={showPanel}>
					<AiOutlineCloseCircle
						onClick={handlePanelClose}
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
							setTimeout(handlePanelClose, 100);
						}}
					>
						Agregar
					</button>
				</div>
			</div>
		</>
	);
}

export { TodoLeftHeader };
