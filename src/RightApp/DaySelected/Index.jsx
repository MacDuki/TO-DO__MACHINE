function DaySelected(arg) {
  function handleCalendarEvents(arg) {
    alert(arg.dateStr);
  }

  return (
    <section>
      <div className="day-selected-container">
        <p>{arg.dateStr}</p>
      </div>
    </section>
  );
}

export { DaySelected };
