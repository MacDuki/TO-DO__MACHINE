import { motion } from "framer-motion";
import { TodoItemButtons } from "../TodoItemButtons";
import "./TodoItem.css";

function TodoItem({
	text,
	handleClickCheck,
	handleClickDiscarded,
	handleClickRemoved,
	handleClickEliminate,
	section,
}) {
	return (
		<motion.li
			animate={{ x: 0, scale: 1 }}
			initial={{ scale: 0.5, x: -100 }}
			transition={{ type: "spring", bounce: 0.5 }}
			className="item-todo-left"
		>
			<p className="todo-tittle">{text}</p>
			<TodoItemButtons
				text={text}
				section={section}
				handleClickRemoved={() => handleClickRemoved}
				handleClickCheck={() => handleClickCheck}
				handleClickDiscarded={() => handleClickDiscarded}
				handleClickEliminate={() => handleClickEliminate}
			/>
		</motion.li>
	);
}

export { TodoItem };
