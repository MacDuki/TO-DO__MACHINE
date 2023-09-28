import { AiOutlineCloseCircle } from "react-icons/ai";
import "./CreateDetailedTodoForm.css";

function CreateDetailedTodoForm({ handleFormVisibility }) {
	return (
		<div className="detailed-form-container">
			<AiOutlineCloseCircle
				onClick={() => {
					handleFormVisibility();
				}}
				className="plus-icon"
			/>
			<form className="detailed-form">
				<label>Escribe tu primer Todo</label>
				<div>
					<span>Titulo</span>
					<input type="text" />
				</div>

				<textarea placeholder="Comentarios" autoCapitalize="words" />

				<button type="button" className="form-button" />
			</form>
		</div>
	);
}

export { CreateDetailedTodoForm };
