import { TodoContext } from "../TodoContext";

function AppUi() {
	return (
		<section className="App">
			<div className="App-header">
				{/* <TodoSearch/> */}

				<TodoContext.Consumer>
					{({ renderContent }) => renderContent()}
				</TodoContext.Consumer>
			</div>
		</section>
	);
}

export { AppUi };
