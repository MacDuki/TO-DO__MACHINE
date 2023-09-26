import { CreateTodoPanelLeft } from "../CreateTodoPanelLeft/index";
import { TodoContext } from "../TodoContext";
import { TodoLeftHeader } from "../TodoLeftHeader/index";
import TodoList from "../TodoList/index";

function AppUi({
	handlePanelVisibility,
	sectionFunctionLeft,
	sectionFunctionRight,
	totalCompletedTodos,
	totalTodos,
	showPanel,
	createTodo,
	newTodoText,
	setNewTodoText,
	section,
}) {
	return (
		<section className="App">
			<div className="App-header">
				{/* <TodoSearch/> */}
				{showPanel === "hidden" ? (
					<TodoLeftHeader
						handlePanelVisibility={() => handlePanelVisibility("open")}
						section={section}
						sectionFunctionRight={() => sectionFunctionRight()}
						sectionFunctionLeft={() => sectionFunctionLeft()}
						completed={totalCompletedTodos}
						total={totalTodos}
					/>
				) : null}
				{showPanel === "visible" ? (
					<CreateTodoPanelLeft
						handlePanelVisibility={() => handlePanelVisibility("close")}
						createTodo={() => createTodo()}
						newTodoText={newTodoText}
						setNewTodoText={setNewTodoText}
					/>
				) : (
					<TodoContext.Consumer>
						{({ loading, error, todos, sectionComponents }) => (
							<TodoList>
								{loading ? <p>Cargando ...</p> : null}
								{error ? <p>Hay un error fatal</p> : null}
								{!loading && todos.length < 1 ? (
									<p>Crea tu primer Todo</p>
								) : null}
								{!loading && todos.length >= 1
									? sectionComponents[section]()
									: null}
							</TodoList>
						)}
					</TodoContext.Consumer>
				)}
			</div>
		</section>
	);
}

export { AppUi };
