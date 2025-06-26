import getElements from "./utils/dom";

// import state from "./states.js";
// import { utilService } from "./logic.service.js";
// import { formService } from "./form.manager.js";
import formService from "./services/form.service";
import { updateAvailableSlots } from "./services/dom.service";



// const utils = utilService();
const formModule = formService();

/**
 * all application events are registered here
 */
function registerEvents() {
    const form = document.getElementById("myForm");
    const nameEle = document.getElementById("name");
    const emailEle = document.getElementById("email");
    const dateEle = document.getElementById("date");
    const doctorEle = document.getElementById("doctor");
    const slotEle = document.getElementById("slot");
    const purposeEle = document.getElementById("purpose");
    const btnHalf = document.getElementById("btn-half");
    const btnFull = document.getElementById("btn-full");
    const sortEle = document.getElementById("sort");
    const appointmentCards = document.getElementById("appointment-cards");
    const toast = document.getElementById("toast-message");
    const docList = document.getElementById("doc-options");
    const slotOptionsEle = document.getElementById("slot-options");
    const totalAppEle = document.getElementById("total-appointments");
    const appointmentListContainer = document.getElementById("appointment-list-container");
    const appointmentTable = document.getElementById("appointment-table");

//   btnFull.addEventListener("click", () => {
//     state.isGridSelected = false;
//     utils.selectList();
//   });

//   btnHalf.addEventListener("click", () => {
//     state.isGridSelected = true;
//     utils.selectGrid();
//   });

  form.addEventListener("submit", formModule.handleForm);
  doctorEle.addEventListener("change", updateAvailableSlots);
  dateEle.addEventListener("change", updateAvailableSlots);
  document.addEventListener("click", formModule.handleDoctorDropdownClick);
  doctorEle.addEventListener("click", formModule.handleDoctorInputFieldClick);
//   sortEle.addEventListener("change", utils.sortSetter);

//   window.addEventListener("resize", () => {
//   if (window.innerWidth <= 768) {
//     appointmentCards.classList.remove("hidden");
//     appointmentTable.classList.add("hidden");
//     state.setGrid("true");
//   }
// });

}

export { registerEvents };
