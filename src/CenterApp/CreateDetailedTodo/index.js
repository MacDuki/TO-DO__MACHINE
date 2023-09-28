import { AiOutlinePlusCircle } from "react-icons/ai";

function CreateDetailedTodo({ handleFormVisibility }) {
	return (
		<AiOutlinePlusCircle
			onClick={() => {
				handleFormVisibility();
			}}
			className="plus-icon"
		/>
	);
}

export { CreateDetailedTodo };
