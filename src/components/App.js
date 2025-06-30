import Counter from "./Counter";
import MainHeading from "./MainHeading";
import ContentBody from "./ContentBody";
import Toast from "./Toast";


export function renderApp() {
    console.log("starting app")
    const root = document.getElementById('app');
    root.innerHTML = ''; 
    

    const layout = document.createElement('div');
    layout.className = 'app';

    layout.appendChild(Toast())
    layout.appendChild(MainHeading());
    const counterContainer = document.createElement('div');
    counterContainer.id = "counter-container";
    counterContainer.appendChild(Counter())
    layout.appendChild(counterContainer);
    layout.appendChild(ContentBody())

    root.appendChild(layout);
}
