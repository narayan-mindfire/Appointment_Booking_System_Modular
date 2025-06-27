import state from "../app.state";
import { sortAppointments } from "../app.logic.js";
import Card from "./Card.js";

function AppointmentCards() {
  const container = document.createElement("div");
  container.id = "appointment-cards";
  container.className = "appointment-cards";

  let appointments = state.appointments;
  if (state.sortAppointmentsBy) {
    appointments = sortAppointments(appointments, state.sortAppointmentsBy);
  }

  for (const app of appointments) {
        const card = Card(
        app.name,
        app.doctor,
        app.purpose,
        app.date,
        app.slot,
        );
        container.appendChild(card);
    }

  return container;
}

export default AppointmentCards;
