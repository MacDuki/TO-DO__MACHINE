import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import React, { useEffect } from "react";
import { AiOutlineCloseCircle, AiOutlineReload } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { MdOutlineTaskAlt } from "react-icons/md";
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
    handleTodoActions,
  } = React.useContext(TodoContext);
  const [calendarEvents, setCalendarEvents] = React.useState();
  const [propertyEventsValues, setPropertyEventsValues] = React.useState([]);
  const [showPanelDay, setShowPanelDay] = React.useState(false);

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

  let eventsDaySelected;
  let eventsValues;
  const handleDaySelected = (arg) => {
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

    eventsValues = eventsDaySelected.map((event) => [
      event.text,
      event.date,
      event.color,
      event.detailed,
      event.completed,
      event.removed,
    ]);
    setPropertyEventsValues(eventsValues);

    setShowPanelDay(true);
  };

  useEffect(() => {
    const eventsDaySelected = todos.filter(
      (todo) => todo.date === propertyEventsValues[0]?.[1]
    );

    eventsValues = eventsDaySelected.map((event) => [
      event.text,
      event.date,
      event.color,
      event.detailed,
      event.completed,
      event.removed,
    ]);
    setPropertyEventsValues(eventsValues);
  }, [
    todos,
    allPendingTodos,
    allCompletedTodos,
    allRemovedTodos,
    section,
    eventsValues,
  ]);

  return (
    <>
      {!formVisibility ? (
        <section className="right-section">
          {!showPanelDay ? (
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
          ) : (
            <div>
              <IoIosCloseCircleOutline
                onClick={() => {
                  setShowPanelDay(false);
                }}
              />
              {propertyEventsValues.map((value, index) => (
                <div key={index}>
                  {value}
                  {value[4] ? (
                    <div>
                      Completado
                      <AiOutlineReload
                        onClick={() => {
                          handleTodoActions(value[0], "discarded");
                        }}
                      />
                      <AiOutlineCloseCircle
                        onClick={() => {
                          handleTodoActions(value[0], "removed");
                        }}
                      />
                      <BsTrash
                        onClick={() => {
                          handleTodoActions(value[0], "eliminate");
                        }}
                      />
                    </div>
                  ) : value[5] ? (
                    <div>
                      Removido
                      <BsTrash
                        onClick={() => {
                          handleTodoActions(value[0], "eliminate");
                        }}
                      />
                      <MdOutlineTaskAlt
                        onClick={() => {
                          handleTodoActions(value[0], "check");
                        }}
                      />
                      <AiOutlineReload
                        onClick={() => {
                          handleTodoActions(value[0], "discarded");
                        }}
                      />
                    </div>
                  ) : (
                    <div>
                      Pendiente
                      <MdOutlineTaskAlt
                        onClick={() => {
                          handleTodoActions(value[0], "check");
                        }}
                      />
                      <AiOutlineCloseCircle
                        onClick={() => {
                          handleTodoActions(value[0], "removed");
                        }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </section>
      ) : null}
    </>
  );
}

export default RigthApp;
