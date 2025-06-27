import state from "../app.state";
import { DOCS, VALIDATION_CONFIG } from "../app.const";
import { resetErrorMessages } from "./dom.service";
import { validationService } from "./validation.service";
import { showToast } from "./dom.service";
import { updateAvailableSlots } from "./dom.service";
import { saveData } from "../app.storage";
import { renderDoctorOptions } from "./dom.service";
import { renderApp } from "../components/App";



function formService() {

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
    const slotOptionsEle = document.getElementById("slot-options");
    const totalAppEle = document.getElementById("total-appointments");
    const appointmentListContainer = document.getElementById("appointment-list-container");
    const appointmentTable = document.getElementById("appointment-table");


    let doctorSelectedRecently = false;
    /**
     * Handles form submission, including validation, creating and updating appointments.
     * @param {Event} event 
     */
    const validators = validationService();
    function handleForm(event) {
        const form = document.getElementById("myForm");
        
        event.preventDefault();

        const fields = _getFormFields();
        resetErrorMessages();

        let isValid = true;

        for (let key in fields) {
            const validations = VALIDATION_CONFIG[key] || [];
            for (let validation of validations) {
                const validatorFn = validators[validation];
                console.log()
                if (validatorFn && !validatorFn(fields[key], key)) {
                    isValid = false;
                    break;
                }
            }
        }

        if (!isValid){
            showToast("Please input correct data and try again", "error")
            return;
        }

        let appointments = state.appointments || [];

        if (state.editingAppointmentId) {
            const index = appointments.findIndex(app => app.id === state.editingAppointmentId);
            if (index !== -1) {
                console.log(fields)
                appointments[index] = { id: state.editingAppointmentId, ...fields };
                state.editingAppointmentId = null;
                form.querySelector("#submit").value = "Book Appointment";
            } else {
                alert("Appointment you're editing no longer exists, please create a new one.");
                return;
            }
        } else {
            console.log({...fields});
            appointments.push({ id: Date.now(), ...fields });
        }
        state.appointments = appointments;
        saveData("appointments", appointments);
        form.reset();
        updateAvailableSlots();
        renderApp()
        showToast("Appointment successfully booked!", "success");
    }

    /**
     * Returns form field values as an object.
     */
    function _getFormFields() {
        const nameEle = document.getElementById("name");
        const emailEle = document.getElementById("email");
        const dateEle = document.getElementById("date");
        const doctorEle = document.getElementById("doctor");
        const slotEle = document.getElementById("slot");
        const purposeEle = document.getElementById("purpose");
        console.log("get form fields called")
        console.log("printing doctorele value: ",doctorEle.value)
        return {
            name: nameEle.value,
            email: emailEle.value,
            date: dateEle.value,
            doctor: doctorEle.value,
            slot: slotEle.value,
            purpose: purposeEle.value
        };
    }

    /**
     * Handles doctor dropdown toggle visibility.
     */
    function handleDoctorDropdownClick(event) {
        doctorSelectedRecently = false;
        if (!document.getElementById("doctor").contains(event.target)) {
            document.getElementById("doc-options").style.display = "none";
        }
    }
    /**
     * Handles the toggling of search results for doctors 
     */
    function handleDoctorInputFieldClick(){
        if(!doctorSelectedRecently) {
            document.getElementById("doc-options").style.display = "block"   
        }
    }
    /**
     * Load doctors into dropdown with search filter.
     */
    function setDoctors() {
        const docList = document.getElementById("doc-options")
        renderDoctorOptions(DOCS);
    
        document.getElementById("doctor").addEventListener("input", function () {
            const filteredDocs = DOCS.filter(doc =>
                doc.toLowerCase().includes(this.value.toLowerCase())
            );
            docList.style.display = "block"
            renderDoctorOptions(filteredDocs);
        });
    
        docList.addEventListener("click", function (event) {
            debugger
            if (event.target.classList.contains("doctor-option")) {
                doctor.value = event.target.textContent;
                updateAvailableSlots();
                docList.style.display = "none";
                doctorSelectedRecently = true;
            }
        });
    }

  return {
    handleForm,
    handleDoctorDropdownClick,
    handleDoctorInputFieldClick,
    setDoctors,
  };
}

export default formService