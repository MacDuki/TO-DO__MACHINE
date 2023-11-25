import React from "react";
import { TodoContext } from "../../TodoContext";
import { CreateDetailedTodoForm } from "../CreateDetailedTodoForm";
import { TodoLeftHeader } from "../TodoLeftHeader";
import "./center-app.css";

function CenterApp() {
  const { formVisibility, handleFormVisibility } =
    React.useContext(TodoContext);

  return (
    <section className="center-section">
      <div className="center-app">
        {formVisibility ? (
          <CreateDetailedTodoForm handleFormVisibility={handleFormVisibility} />
        ) : (
          <>
            <TodoLeftHeader />
          </>
        )}
      </div>
    </section>
  );
}

export default CenterApp;
