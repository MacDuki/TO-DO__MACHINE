import { AiOutlinePlusCircle } from "react-icons/ai";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import "./TodoLeftHeader.css";
function TodoLeftHeader({
	section,
	sectionFunctionRight,
	sectionFunctionLeft,
	total,
	completed,
	handlePanelVisibility,
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
			</div>
		</>
	);
}

export { TodoLeftHeader };
