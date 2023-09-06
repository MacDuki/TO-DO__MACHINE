import React from "react";
import "./TodoItemCompleted.css";

function TodoItemCompleted(props) {
	const itemClassName = props.completed
		? "ItemToDoLeftCompleted"
		: "ItemToDoLeft";
	return (
		<li className={itemClassName}>
			<p>{props.text}</p>
			<div className="actionsContainerToDo">
				<span onClick={props.handleClickClose}>
					<ion-icon
						name="reload-circle-outline"
						class=" actionIconsLeftCheck"
					/>
				</span>
				<span onClick={props.handleClickRemoved}>
					<ion-icon name="close-circle-outline" class=" actionIconsLeftClose" />
				</span>
			</div>
		</li>
	);
}

export { TodoItemCompleted };
