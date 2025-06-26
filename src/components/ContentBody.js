import AppointmentList from "./AppointmentList"
import Form from "./Form"

function ContentBody(){
    const parent = document.createElement("div");
    parent.className = "content";
    parent.appendChild(Form());
    parent.appendChild(AppointmentList());
    return parent
}

export default ContentBody