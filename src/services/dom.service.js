import { SLOTS, VALIDATION_CONFIG } from "../app.const";
import state from "../app.state";
/**
 * Clears all validation error messages.
 */
function resetErrorMessages() {
    document.querySelectorAll(".error-message").forEach(ele => ele.textContent = "");
}

/**
 * function to show toast messages in the dom
 * @param {string} message 
 * @param {string} type 
 */
function showToast(message, type = "success") {
    const toast = document.getElementById("toast-message");
    toast.textContent = message;
    toast.classList.remove("toast-hidden");
    toast.classList.add("toast-visible");

    toast.style.backgroundColor = {
      success: "green",
      warning: "orange",
      error: "red"
    }[type] || "gray";

    setTimeout(() => {
      toast.classList.remove("toast-visible");
      toast.classList.add("toast-hidden");
    }, 3000);
}

/**
 * checks and udpdates available slots
 */
function updateAvailableSlots() {
    const dateEle = document.getElementById("date");
    const doctorEle = document.getElementById("doctor");
    const slotEle = document.getElementById("slot");
    const date = dateEle.value;
    const doctorVal = doctorEle.value;

    // Clear old options
    slotEle.innerHTML = `<option value="">Select a time slot</option>`;

    if (!date || !doctorVal) return;

    const appointments = state.appointments;
    const bookedSlots = appointments
        .filter(appointment => appointment.date === date && appointment.doctor === doctorVal && appointment.id !== state.editingAppointmentId)
        .map(appointment => appointment.slot);

    const today = new Date();
    const selectedDate = new Date(date);
    const isToday = today.toDateString() === selectedDate.toDateString();

    SLOTS.forEach(slot => {
        const slotHour = Number(slot.split(":")[0]);
        const isDisabled = bookedSlots.includes(slot) || (isToday && slotHour <= today.getHours());

        if (!isDisabled) {
            const option = document.createElement("option");
            option.value = slot;
            option.textContent = slot;
            slotEle.appendChild(option);
        }
    });
}


function setMinDateForInput() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const minDate = `${year}-${month}-${day}`;

    document.getElementById("date").setAttribute("min", minDate);
}

/**
 * Displays asterisk for required fields.
 */
function markRequiredFields() {
    Object.keys(VALIDATION_CONFIG).forEach(field => {
        if (VALIDATION_CONFIG[field].includes("isRequired")) {
            const label = document.getElementById(`required-${field}`);
            if (label) label.textContent = '*';
        }
    });
}

export {resetErrorMessages, showToast, updateAvailableSlots, markRequiredFields, setMinDateForInput}