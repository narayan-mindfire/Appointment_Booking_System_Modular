import Card from "./Card"
import Table from "./Table"

function AppointmentList(){
    const parent = document.createElement("div")
    parent.className = "appointment-list"
    parent.innerHTML = `
        <div class="appointment-head">
            <h2>Appointments List</h2>
            <div class="app-options">
            <select id="sort">
                <option>Sort appointments(default)</option>
                <option id="sDate" value="date">Sort by date (newest to oldest)</option>
                <option id="sDate" value="dateR">Sort by date (oldest to newest)</option>
                <option id="sDname" value="doctor">Sort by doctor name (A-Z)</option>
                <option id="sDname" value="doctorR">Sort by doctor name (Z-A)</option>
                <option id="sPname" value="name">Sort by doctor patient name (A-Z)</option>
                <option id="sPname" value="nameR">Sort by doctor patient name (Z-A)</option>
            </select>
            <button id="btn-half" title="grid view"><i class="fas fa-th-large"></i></button>
            <button id="btn-full" title="list view"><i class="fas fa-list"></i></button>
            </div>
        </div>
    `
    parent.appendChild(Table())
    parent.appendChild(Card("narayan", "Aniket", "Cardiac Arrest", "2025-06-15", "11:00"))
    return parent
}
export default AppointmentList