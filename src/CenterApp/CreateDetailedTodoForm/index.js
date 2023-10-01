import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsArrowDownCircle } from "react-icons/bs";
import { TodoContext } from "../../TodoContext";
import "./CreateDetailedTodoForm.css";

function CreateDetailedTodoForm({ handleFormVisibility }) {
	const {
		createTodo,
		newTodoTextArea,
		setNewTodoTextArea,
		newTodoText,
		setNewTodoText,
		showTextArea,
		setShowTextArea,
		handleTextAreaChange,
		handleNewTodoText,
		handleDetailedTodoForm,
	} = React.useContext(TodoContext);

	return (
		<div className="detailed-form-container">
			<AiOutlineCloseCircle
				onClick={() => {
					setNewTodoText("");
					setNewTodoTextArea("");
					handleFormVisibility();
				}}
				className="plus-icon"
			/>
			<form
				onSubmit={(event) => {
					event.preventDefault();
					handleDetailedTodoForm();
				}}
				className="detailed-form"
			>
				<label>Escribe tu tarea</label>
				<div>
					<span>Titulo</span>
					<input
						onChange={handleNewTodoText}
						value={newTodoText}
						type="text"
						required
					/>
				</div>
				<div>
					<span>Quieres especificar algo?</span>
					<BsArrowDownCircle
						onClick={() => {
							setShowTextArea(!showTextArea);
						}}
					/>
					{showTextArea && (
						<textarea
							onChange={handleTextAreaChange}
							placeholder="Comentarios"
							value={newTodoTextArea}
							autoCapitalize="words"
						/>
					)}
				</div>

				<button type="submit" className="form-button" />
			</form>
		</div>
	);
}

export { CreateDetailedTodoForm };
