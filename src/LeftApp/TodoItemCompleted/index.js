import { motion } from "framer-motion";
import React from "react";
import "./TodoItemCompleted.css";

function TodoItemCompleted(props) {
	return (
		<motion.li
			animate={{ x: 0, scale: 1 }}
			initial={{ scale: 0.5, x: -100 }}
			transition={{ type: "spring", bounce: 0.5 }}
			className="ItemToDoLeftCompleted"
		>
			<p>{props.text}</p>
			<div className="actionsContainerToDo">
				<span title="Restart" onClick={props.handleClickClose}>
					<ion-icon
						name="reload-circle-outline"
						class=" actionIconsLeftCheck"
					/>
				</span>
				<span title="Discard" onClick={props.handleClickRemoved}>
					<ion-icon name="close-circle-outline" class=" actionIconsLeftClose" />
				</span>
			</div>
		</motion.li>
	);
}

export { TodoItemCompleted };
