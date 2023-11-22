import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import React from "react";
import { TodoContext } from "../../TodoContext";
import "./RightApp.css";
function RigthApp() {
  const { formVisibility } = React.useContext(TodoContext);

  function handleDateClick(arg) {
    console.log(arg.dateStr);
  }

  const [calendarEvents, setCalendarEvents] = React.useState([
    { title: "Prueba", date: "2023-11-21" },
    { title: "event 2", date: "2023-11-21", color: "red" },
  ]);

  return (
    <>
      {!formVisibility ? (
        <section className="right-section">
          <FullCalendar
            height={"90vh"}
            aspectRatio={4.5}
            dateClick={handleDateClick}
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView={"dayGridMonth"}
            events={calendarEvents}
          />
        </section>
      ) : null}
    </>
  );
}

export default RigthApp;
