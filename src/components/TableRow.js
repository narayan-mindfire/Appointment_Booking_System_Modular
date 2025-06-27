
function TableRow(name, doctor, date, slot, purpose){
      const row = document.createElement("tr");
        row.innerHTML = `
            <td>${name}</td>
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