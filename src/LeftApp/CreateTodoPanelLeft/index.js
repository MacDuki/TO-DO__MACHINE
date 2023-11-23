import { motion } from "framer-motion";
import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { TodoContext } from "../../TodoContext";
import "./CreateTodoPanelLeft.css";

function CreateTodoPanelLeft() {
  const {
    newTodoText,
    setNewTodoText,
    createTodo,
    handlePanelVisibility,
    setSection,
    setTodayTask,
    todayTask,
  } = React.useContext(TodoContext);

  function handleCheckboxDate() {
    setTodayTask(!todayTask);
  }
  return (
    <motion.div
      animate={{ y: 45, x: 15, scale: 1 }}
      initial={{ scale: 0, y: 45 }}
      transition={{ type: "spring", bounce: 0.5 }}
      className="newtodo-panel"
    >
      <AiOutlineCloseCircle
        onClick={() => {
          handlePanelVisibility();
        }}
        className="plus-icon"
      />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createTodo();
          setTimeout(handlePanelVisibility(), 100);
          setSection("pending");
        }}
      >
        <input
          required
          type="text"
          placeholder="Nueva tarea..."
          onChange={(e) => setNewTodoText(e.target.value)}
          value={newTodoText}
        />
        <input
          checked={todayTask}
          id="todayDateCheckbox"
          type="checkbox"
          onChange={() => {
            handleCheckboxDate();
          }}
        />
        <label>Para hoy?</label>
        <button
          type="submit"
          onClick={() => {
            createTodo();
            setTimeout(handlePanelVisibility(), 100);
            setSection("pending");
          }}
        >
          Agregar
        </button>
      </form>
    </motion.div>
  );
}

export { CreateTodoPanelLeft };
