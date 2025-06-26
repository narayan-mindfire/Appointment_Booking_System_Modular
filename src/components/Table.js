import TableRow from "./TableRow"

function Table(){
    const table = document.createElement("table")
    table.classList.add('appointment-table')
    // table.classList.add('hidden')
    table.id = "appointment-table"
    table.innerHTML = `
        <thead>
            <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Doctor</th>
            <th>Date</th>
            <th>Slot</th>
            <th>Purpose</th>
            <th>Actions</th>
            </tr>
        </thead>
    `
    const tableBody = document.createElement("tbody")
    tableBody.appendChild(TableRow("narayan", "narayan.pradhan1117@gmail.com", "Aniket Nayak", "2025-12-23", "12:00"))
    tableBody.id = "appointment-table-body"

    table.appendChild(tableBody)

    return table
}

export default Table