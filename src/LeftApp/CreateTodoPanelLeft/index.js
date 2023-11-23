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
    todayTask,
    setTodayTask,
  } = React.useContext(TodoContext);
  const [checkbox, setCheckBox] = React.useState(true);
  function handleCheckboxDate() {
    setCheckBox(!checkbox);
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
          setTimeout(setCheckBox(true), 500);
        }}
        className="plus-icon"
      />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (checkbox) {
            setTodayTask(true);
          } else {
            setTodayTask(false);
          }
          createTodo();
          setTimeout(handlePanelVisibility(), 100);
          setSection("pending");
          setTimeout(setCheckBox(true), 500);
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
          checked={checkbox}
          id="todayDateCheckbox"
          type="checkbox"
          onClick={() => {
            handleCheckboxDate();
          }}
        />
        <label>Para hoy?</label>
        <button
          type="submit"
          onClick={() => {
            if (checkbox) {
              setTodayTask(true);
            } else {
              setTodayTask(false);
            }
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
