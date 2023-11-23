import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import React, { useEffect } from "react";
import { TodoContext } from "../../TodoContext";

import "./RightApp.css";
function RigthApp() {
  const { formVisibility, todos, allPendingTodos } =
    React.useContext(TodoContext);
  const calendarList = todos.map(({ text, date, color }) => ({
    title: text,
    date,
    color,
  }));

  useEffect(() => {
    const updatedCalendarList = allPendingTodos.map(
      ({ text, date, color }) => ({
        title: text,
        date,
        color,
      })
    );
    setCalendarEvents(updatedCalendarList);
  }, [todos, allPendingTodos]);

  const [calendarEvents, setCalendarEvents] = React.useState(calendarList);

  function handleCalendarEvents(arg) {
    console.log(arg.event);
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
          />
        </section>
      ) : null}
    </>
  );
}

export default RigthApp;
