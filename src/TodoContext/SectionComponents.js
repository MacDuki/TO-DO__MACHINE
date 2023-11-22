import React from "react";
import { TodoContext } from ".";
import { TodoItem } from "../LeftApp/TodoItem";


function SectionComponents () {
const {todos,saveLocalStorage} = React.useContext(TodoContext)
const totalTodos = todos.filter((todo) => !todo.removed).length;
const totalCompletedTodos = todos.filter((todo) => !!todo.completed).length;
const allPendingTodos = todos.filter(
    (todo) => !todo.completed && !todo.removed,
);
const allCompletedTodos = todos.filter(
    (todo) => todo.completed && !todo.removed,
);
const allRemovedTodos = todos.filter((todo) => todo.removed);

const handleTodoActions = (text, action) => {
    const updateTodos = [...todos];
    const todoIndex = updateTodos.findIndex((todo) => todo.text === text);

    if (action === "check") {
        updateTodos[todoIndex].completed = true;
        updateTodos[todoIndex].removed = false;
        updateTodos[todoIndex].section = "completed";
    } else if (action === "discarded") {
        updateTodos[todoIndex].completed = false;
        updateTodos[todoIndex].removed = false;
        updateTodos[todoIndex].section = "pending";
    } else if (action === "removed") {
        updateTodos[todoIndex].completed = false;
        updateTodos[todoIndex].removed = true;
        updateTodos[todoIndex].section = "removed";
    } else if (action === "eliminate") {
        const updatedTodos = updateTodos.filter((todo) => todo.text !== text);
        saveLocalStorage(updatedTodos);
        return;
    }

    saveLocalStorage(updateTodos);
};

const sectionComponents = {
    pending: () =>
        allPendingTodos.map((todo) => (
            <TodoItem
                section={"pending"}
                text={todo.text}
                handleClickCheck={() => handleTodoActions(todo.text, "check")}
                handleClickRemoved={() => handleTodoActions(todo.text, "removed")}
            />
        )),
    completed: () =>
        allCompletedTodos.map((todo) => (
            <TodoItem
                section={"completed"}
                text={todo.text}
                handleClickRemoved={() => handleTodoActions(todo.text, "removed")}
                handleClickDiscarded={() => handleTodoActions(todo.text, "discarded")}
            />
        )),
    removed: () =>
        allRemovedTodos.map((todo) => (
            <TodoItem
                section={"removed"}
                text={todo.text}
                handleClickCheck={() => handleTodoActions(todo.text, "check")}
                handleClickDiscarded={() => handleTodoActions(todo.text, "discarded")}
                handleClickEliminate={() => handleTodoActions(todo.text, "eliminate")}
            />
        )),
};
return (
    {handleTodoActions, sectionComponents, totalCompletedTodos, totalTodos }
)
}
export { SectionComponents };

