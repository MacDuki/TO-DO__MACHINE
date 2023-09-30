import { TodoContext } from "../../TodoContext";

function AppUi() {
	return (
		<div className="left-app">
			<TodoContext.Consumer>
				{({ renderContent }) => renderContent()}
			</TodoContext.Consumer>
		</div>
	);
}

export { AppUi };
