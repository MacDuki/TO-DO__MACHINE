import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";

function RigthApp() {
	function handleDateClick(arg) {
		console.log(arg.dateStr);
	}

	return (
		<section className="right-section">
			<div className="right-app">
				<FullCalendar
					height={500}
					aspectRatio={4.5}
					dateClick={handleDateClick}
					plugins={[dayGridPlugin, interactionPlugin]}
					initialView={"dayGridMonth"}
				/>
			</div>
		</section>
	);
}

export default RigthApp;
