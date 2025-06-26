import state from "../app.state"

function Counter(){
    const counter = document.createElement("div");
    counter.className = "head-area";
    const count = state.appointments.length || 0;
    counter.innerHTML = `
        <h3>Total Appointments: <span id="total-appointments">${count}</span></h3>
    `
    return counter;
}
export default Counter