
function TableRow(name, doctor, email, purpose, date, slot){
      const row = document.createElement("tr");
        row.innerHTML = `
            <td>${name}</td>
            <td>${email}</td>
            <td>${doctor}</td>
            <td>${date}</td>
            <td>${slot}</td>
            <td>${purpose}</td>
            <td>
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
            </td>
        `;
        return row;
}

export default TableRow