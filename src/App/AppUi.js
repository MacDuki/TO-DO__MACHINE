import { CreateTodoPanelLeft } from "../CreateTodoPanelLeft/index";
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
	sectionComponents,
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
					<TodoList>{sectionComponents[section]()}</TodoList>
				)}
			</div>
		</section>
	);
}

export { AppUi };
