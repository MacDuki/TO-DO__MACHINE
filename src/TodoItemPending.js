import "./TodoItemPending.css";
function TodoItemPending(props) {
	const itemClassName = props.completed
		? "ItemToDoLeftCompleted"
		: "ItemToDoLeftPending";
	return (
		<li className={itemClassName}>
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
		</li>
	);
}

export { TodoItemPending };
