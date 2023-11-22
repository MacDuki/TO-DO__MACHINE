import React from "react";
import { TodoContext } from ".";
import { CreateTodoPanelLeft } from "../LeftApp/CreateTodoPanelLeft";
import { TodoLeftHeader } from "../LeftApp/TodoLeftHeader/index";
import { TodoList } from "../LeftApp/TodoList";




function  RenderContentLeft() {
    const {showPanel, formVisibility, loading, error, todos, section, sectionComponents,} = React.useContext(TodoContext);
    if (formVisibility) {
    } else {
        if (showPanel === true) {
            return <CreateTodoPanelLeft />;
        } else {
            return (
                <>
                    <TodoLeftHeader />
                    <TodoList>
                        {loading ? <p>Cargando ...</p> : null}
                        {error ? <p>Hay un error fatal</p> : null}
                        {!loading && todos.length < 1 ? <p>Crea tu primer Todo</p> : null}
                        {!loading && todos.length >= 1
                            ? sectionComponents[section]()
                            : null}
                    </TodoList>
                </>
            );
        }
    }
}
export { RenderContentLeft };

