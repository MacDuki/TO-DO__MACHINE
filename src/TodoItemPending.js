import { motion } from "framer-motion";
import "./TodoItemPending.css";
function TodoItemPending(props) {
	return (
		<motion.li
			animate={{ x: 0, scale: 1 }}
			initial={{ scale: 0.5, x: -100 }}
			transition={{ type: "spring", bounce: 0.5 }}
			className="ItemToDoLeftPending"
		>
			<p>{props.text}</p>
			<div className="actionsContainerToDo">
				<span title="Complete" onClick={props.handleClickCheck}>
					<ion-icon
						name="checkmark-circle-outline"
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

export { TodoItemPending };
