
function Form(){
    const parent = document.createElement("div");
    parent.className = "form-container";
    parent.innerHTML =`
        <h2>Appointment Form</h2>
          <form id="myForm">
            <label class="form-label"><i class="fa-solid fa-user"></i> Name:<span id="required-name"></span><br><input type="text" id="name" /></label><br><span class="error-message" id="name-error"></span><br><br>
            <label class="form-label"><i class="fa-solid fa-envelope"></i> Email:<span id="required-email"></span><br><input type="text" id="email" /></label><br><span class="error-message" id="email-error"></span><br><br>
            <label class="form-label"><i class="fa-solid fa-calendar-days"></i> Date:<span id="required-date"></span><br><input type="date" id="date" /></label><br><span class="error-message" id="date-error"></span><br><br>
            <label class="form-label"><i class="fa-solid fa-stethoscope"></i> Doctor:<span id="required-doctor"></span><br>
            <input type="text" id="doctor">
            <div class="doc-options" id="doc-options"></div>
            </label><br><span class="error-message" id="doctor-error"></span><br><br>
            <label class="form-label"><i class="fa-solid fa-check-to-slot"></i> Slot:<span id="required-slot"></span><br>
            <select id="slot">
                <option value="">Select a time slot</option>
            </select>
            </label><br><span class="error-message" id="slot-error"></span><br><br>

            <label class="form-label">
            <i class="fa-solid fa-microscope"></i> Purpose:<span id="required-purpose"></span>
            <br><input type="text" id="purpose" />
            </label>
            <br><span class="error-message" id="purpose-error"></span>
            <br><br>

            <center><input class="submit-button" id="submit" type="submit" value="Book Appointment" /></center>
        </form>   
    `
    return parent
}

export default Form