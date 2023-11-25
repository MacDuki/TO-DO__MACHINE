import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { TodoContext } from "../../TodoContext";
import "./TodoLeftHeader.css";
function TodoLeftHeader() {
	const {
		handlePanelVisibility,
		totalTodos,
		totalCompletedTodos,
		section,
		sectionSetFunction,
	} = React.useContext(TodoContext);

	const [tittle, setTittle] = React.useState("Tasks Pending");
	const [forceUpdate, setForceUpdate] = React.useState(0);
	useEffect(() => {
		if (section === "pending") {
			setTittle("Tasks Pending");
		} else if (section === "completed") {
			setTittle("Tasks Completed");
		} else if (section === "removed") {
			setTittle("Removed Tasks");
		}
		setForceUpdate(forceUpdate + 1);
	}, [section]);
	return (
		<>
			<div className="header-container">
				<div className="first-container">
					<motion.span
						whileHover={{
							scale: 1.1,
							color: "#547980",
						}}
					>
						<BsArrowLeftCircle
							className="arrow-icons"
							onClick={() => sectionSetFunction.left()}
						/>
					</motion.span>
					<motion.h2
						key={forceUpdate}
						initial={{ x: -100 }}
						animate={{ x: 0 }}
						className="left-tittle"
					>
						{tittle}
					</motion.h2>
					<motion.span
						whileHover={{
							scale: 1.1,
							color: "#547980",
						}}
					>
						<BsArrowRightCircle
							className="arrow-icons"
							onClick={() => sectionSetFunction.right()}
						/>
					</motion.span>
				</div>
				<div className="second-container">
					<h3 className="tasks-counter">
						{totalCompletedTodos}/{totalTodos}
					</h3>
					<AiOutlinePlusCircle
						onClick={() => {
							handlePanelVisibility();
						}}
						className="plus-icon"
					/>
				</div>
			</div>
		</>
	);
}

export { TodoLeftHeader };
