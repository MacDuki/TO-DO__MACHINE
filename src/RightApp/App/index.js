import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import React from "react";
import { TodoContext } from "../../TodoContext";

import "./RightApp.css";
function RigthApp() {
  const { formVisibility, todos } = React.useContext(TodoContext);
  const updatedTodos = todos.map(({ text, date, color }) => ({
    title: text,
    date,
    color,
  }));
  const [calendarEvents, setCalendarEvents] = React.useState(updatedTodos);

  console.log(updatedTodos);

  function handleCalendarEvents(arg) {
    console.log(arg);
  }

  return (
    <>
      {!formVisibility ? (
        <section className="right-section">
          <FullCalendar
            headerToolbar={{
              end: "prev,next",
            }}
            select={handleCalendarEvents}
            aspectRatio={4}
            plugins={[dayGridPlugin, interactionPlugin]}
            events={calendarEvents}
            initialView="dayGridMonth"
            height="800px"
            selectable
            editable
          />
        </section>
      ) : null}
    </>
  );
}

export default RigthApp;
