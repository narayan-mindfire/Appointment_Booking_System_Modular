import { sortAppointments } from "../app.logic"
import state from "../app.state"
import TableRow from "./TableRow"

function Table(){
    const table = document.createElement("table")
    table.classList.add('appointment-table')
    table.id = "appointment-table"
    table.innerHTML = `
        <thead>
            <tr>
            <th>Name</th>
            <th>Doctor</th>
            <th>Date</th>
            <th>Slot</th>
            <th>Purpose</th>
            <th>Actions</th>
            </tr>
        </thead>
    `
    const tableBody = document.createElement("tbody")

    let appointments = state.appointments || [];
    if (state.sortAppointmentsBy) {
        appointments = sortAppointments(appointments, state.sortAppointmentsBy);
    }
    for (const app of appointments) {
        const row = TableRow(app);
        tableBody.appendChild(row);
    }

    table.appendChild(tableBody);

    tableBody.id = "appointment-table-body"

    table.appendChild(tableBody)

    return table
}

export default Table