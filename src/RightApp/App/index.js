import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import React from "react";
import { TodoContext } from "../../TodoContext";

import "./RightApp.css";
function RigthApp() {
  const { formVisibility } = React.useContext(TodoContext);

  const [calendarEvents, setCalendarEvents] = React.useState([
    { title: "Prueba", date: "2023-11-21" },
    { title: "event 2", date: "2023-11-21", color: "red" },
  ]);

  return (
    <>
      {!formVisibility ? (
        <section className="right-section">
          <FullCalendar
            headerToolbar={{
              end: "prev,next",
            }}
            height={"90vh"}
            width={"80%"}
            aspectRatio={1}
            plugins={[dayGridPlugin, interactionPlugin]}
            events={calendarEvents}
            initialView="dayGridMonth"
          />
        </section>
      ) : null}
    </>
  );
}

export default RigthApp;
