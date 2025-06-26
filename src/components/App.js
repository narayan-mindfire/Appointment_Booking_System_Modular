import Counter from "./Counter";
import MainHeading from "./MainHeading";
import ContentBody from "./ContentBody";
import Toast from "./Toast";
import formService from "../services/form.service";
import { markRequiredFields, setMinDateForInput } from "../services/dom.service";

const formModule = formService()
export function renderApp() {
    console.log("starting app")
    const root = document.getElementById('app');
    root.innerHTML = ''; 
    
    const layout = document.createElement('div');
    layout.className = 'app';
    
    layout.appendChild(Toast())
    layout.appendChild(MainHeading());
    layout.appendChild(Counter());
    layout.appendChild(ContentBody())
    
    root.appendChild(layout);
    setMinDateForInput()
    formModule.setDoctors()
    markRequiredFields()
}
