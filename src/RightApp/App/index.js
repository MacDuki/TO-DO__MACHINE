import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import React, { useEffect } from "react";
import { TodoContext } from "../../TodoContext";
import "./RightApp.css";

function RigthApp() {
  const {
    formVisibility,
    todos,
    allPendingTodos,
    allCompletedTodos,
    allRemovedTodos,
    section,
  } = React.useContext(TodoContext);

  useEffect(() => {
    let updatedCalendarList;
    if (section === "pending") {
      updatedCalendarList = allPendingTodos.map(({ text, date, color }) => ({
        title: text,
        date,
        color,
      }));
    } else if (section === "completed") {
      updatedCalendarList = allCompletedTodos.map(({ text, date, color }) => ({
        title: text,
        date,
        color,
      }));
    } else {
      updatedCalendarList = allRemovedTodos.map(({ text, date, color }) => ({
        title: text,
        date,
        color,
      }));
    }
    setCalendarEvents(updatedCalendarList);
  }, [todos, allPendingTodos, allCompletedTodos, allRemovedTodos, section]);

  const [calendarEvents, setCalendarEvents] = React.useState();

  const handleDaySelected = (arg) => {
    let eventsDaySelected;
    if (section === "pending") {
      eventsDaySelected = allPendingTodos.filter(
        (todo) => todo.date === arg.dateStr
      );
    } else if (section === "completed") {
      eventsDaySelected = allCompletedTodos.filter(
        (todo) => todo.date === arg.dateStr
      );
    } else {
      eventsDaySelected = allRemovedTodos.filter(
        (todo) => todo.date === arg.dateStr
      );
    }

    const propertyEventsValues = eventsDaySelected.map((event) => event.text);
    alert(propertyEventsValues);
  };

  return (
    <>
      {!formVisibility ? (
        <section className="right-section">
          <FullCalendar
            headerToolbar={{
              end: "prev,next",
            }}
            aspectRatio={4}
            plugins={[dayGridPlugin, interactionPlugin]}
            events={calendarEvents}
            height="800px"
            selectable
            eventInteractive
            eventDisplay="list-item"
            dateClick={handleDaySelected}
            eventClick={handleDaySelected}
          />
        </section>
      ) : null}
    </>
  );
}

export default RigthApp;
