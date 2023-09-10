import React from "react";
import { AiOutlineReload } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { MdOutlineTaskAlt } from "react-icons/md";
import "./TodoItemRemoved.css";

function TodoItemRemoved(props) {
	const itemClassName = props.removed ? "ItemToDoLeftRemoved" : "ItemToDoLeft";
	return (
		<li className={itemClassName}>
			<p>{props.text}</p>
			<div className="actionsContainerToDo">
				<span title="To completed" onClick={props.handleClickCheck}>
					<MdOutlineTaskAlt className=" actionIconsLeftCompleted" />
				</span>
				<span title="Restart" onClick={props.handleClickDiscarded}>
					<AiOutlineReload className=" actionIconsLeftCheck" />
				</span>
				<span title="Eliminate" onClick={props.handleClickEliminate}>
					<BsTrash title="Eliminate" className=" actionIconsLeftClose" />
				</span>
			</div>
		</li>
	);
}

export { TodoItemRemoved };
