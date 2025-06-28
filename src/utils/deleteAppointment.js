import state from "../app.state";
import { saveData } from "../app.storage";
import { renderAppointmentList, showToast } from "../services/dom.service";

/**
 * function to delete appointments using id
 * @param {string} id 
 * @returns 
 */
export function deleteAppointment(id) {
    if (!confirm("Are you sure you want to delete this appointment?")) return;
    const updatedAppointments = state.appointments.filter(app => app.id !== id);
    saveData("appointments", updatedAppointments)
    state.appointments = updatedAppointments;
    renderAppointmentList();
    showToast("Appointment deleted.", "success");
}