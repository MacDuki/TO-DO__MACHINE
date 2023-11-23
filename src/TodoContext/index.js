import React from "react";
import { useLocalStorage } from "../LeftApp/App/useLocalStorage";
import { CreateTodoPanelLeft } from "../LeftApp/CreateTodoPanelLeft";
import { TodoItem } from "../LeftApp/TodoItem";
import { TodoLeftHeader } from "../LeftApp/TodoLeftHeader/index";
import { TodoList } from "../LeftApp/TodoList";
const TodoContext = React.createContext();

function TodoProvider({ children }) {
  const {
    item: todos,
    saveLocalStorage,
    error,
    loading,
  } = useLocalStorage("TODOS-V1", []);
  const totalTodos = todos.filter((todo) => !todo.removed).length;
  const totalCompletedTodos = todos.filter((todo) => !!todo.completed).length;
  const allPendingTodos = todos.filter(
    (todo) => !todo.completed && !todo.removed
  );
  const allCompletedTodos = todos.filter(
    (todo) => todo.completed && !todo.removed
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

  // logica para secciones
  const [section, setSection] = React.useState("pending");

  const sectionSetFunction = {
    right: () =>
      setSection((prevSection) =>
        prevSection === "removed"
          ? "pending"
          : prevSection === "pending"
          ? "completed"
          : "removed"
      ),
    left: () =>
      setSection((prevSection) =>
        prevSection === "completed"
          ? "pending"
          : prevSection === "removed"
          ? "completed"
          : "removed"
      ),
  };

  // Logica para crear Todos simples
  const [newTodoText, setNewTodoText] = React.useState("");
  const [newTodoTextArea, setNewTodoTextArea] = React.useState("");

  const createTodo = (detailedFlag) => {
    const updatedTodos = [...todos];
    const nuevoTodo = {
      text: newTodoText,
      date: "22-11-2023",
      color: "red",
      completed: false,
      removed: false,
      detailed: detailedFlag,
      textArea: newTodoTextArea,
    };

    if (newTodoText === " " || newTodoText.length === 0) {
      console.log("Nada de vacio perrita");
    } else if (updatedTodos.every((todo) => todo.text !== newTodoText)) {
      updatedTodos.push(nuevoTodo);
      saveLocalStorage(updatedTodos);
      setNewTodoText("");
      console.log(`${nuevoTodo.textArea}`);
      console.log(`${nuevoTodo.detailed}`);
    } else {
      setNewTodoText("");
      console.log("Nada de repetidos perrita");
    }
  };

  // Logica de todos detallados
  const detailedTodos = todos.filter((todo) => todo.detailed);
  function handleDetailedTodoForm() {
    if (newTodoTextArea.length > 1) {
      detailedFlag = true;
    } else {
      detailedFlag = false;
    }
    createTodo(detailedFlag);
    setNewTodoTextArea("");
    setNewTodoText("");
  }

  const [showTextArea, setShowTextArea] = React.useState(false);
  function handleTextAreaChange(event) {
    setNewTodoTextArea(event.target.value);
  }
  function handleNewTodoText(event) {
    setNewTodoText(event.target.value);
  }

  // rome-ignore lint/style/useConst: <explanation>
  let detailedFlag = false;

  ///

  const [showPanel, setShowPanel] = React.useState(false);
  const handlePanelVisibility = () => {
    setShowPanel((state) => !state);
  };

  const [formVisibility, setFormVisibility] = React.useState(false);
  function handleFormVisibility() {
    setFormVisibility((state) => !state);
  }

  function renderContent() {
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

  return (
    <TodoContext.Provider
      value={{
        renderContent,
        handlePanelVisibility,
        totalTodos,
        totalCompletedTodos,
        section,
        sectionSetFunction,
        newTodoText,
        setNewTodoText,
        createTodo,
        setSection,
        setNewTodoTextArea,
        newTodoTextArea,
        handleFormVisibility,
        formVisibility,
        showTextArea,
        setShowTextArea,
        handleTextAreaChange,
        handleNewTodoText,
        detailedFlag,
        handleDetailedTodoForm,
        detailedTodos,
        todos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
export { TodoContext, TodoProvider };
