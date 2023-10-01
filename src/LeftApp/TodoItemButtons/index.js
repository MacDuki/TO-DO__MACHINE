import React from "react";
import { AiOutlineCloseCircle, AiOutlineReload } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { CiSquareMore } from "react-icons/ci";
import { MdOutlineTaskAlt } from "react-icons/md";
import { TodoContext } from "../../TodoContext";
import "./TodoItemButtons.css";

function TodoItemButtons({
	handleClickCheck,
	handleClickDiscarded,
	handleClickRemoved,
	handleClickEliminate,
	section,
	text,
}) {
	const { detailedTodos } = React.useContext(TodoContext);

	function buttonsLogic() {
		if (section === "removed") {
			return (
				<>
					<span
						title="To completed"
						className="button-completed"
						onClick={handleClickCheck()}
					>
						<MdOutlineTaskAlt />
					</span>
					<span
						title="Restart"
						className="button-restart"
						onClick={handleClickDiscarded()}
					>
						<AiOutlineReload />
					</span>
					<span
						title="Eliminate"
						className="button-eliminate"
						onClick={handleClickEliminate()}
					>
						<BsTrash />
					</span>
				</>
			);
		} else if (section === "completed") {
			return (
				<>
					<span
						title="Restart"
						className="button-restart"
						onClick={handleClickDiscarded()}
					>
						<AiOutlineReload />
					</span>
					<span
						title="Discard"
						className="button-discard"
						onClick={handleClickRemoved()}
					>
						<AiOutlineCloseCircle />
					</span>
				</>
			);
		} else if (section === "pending") {
			return (
				<>
					<span
						title="To completed"
						className="button-completed"
						onClick={handleClickCheck()}
					>
						<MdOutlineTaskAlt />
					</span>
					<span
						title="Discard"
						className="button-discard"
						onClick={handleClickRemoved()}
					>
						<AiOutlineCloseCircle />
					</span>
				</>
			);
		}
	}

	const haveDetailButton = detailedTodos.some((todo) => todo.text === text);

	return (
		<div className="elements-todo-container">
			<div className="actions-container-todo">{buttonsLogic()}</div>
			{haveDetailButton ? (
				<>
					<div className="button-detail-container">
						<span title="Detail" className="button-details">
							<CiSquareMore />
						</span>
					</div>
				</>
			) : null}
		</div>
	);
}

export { TodoItemButtons };
