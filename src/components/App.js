import Counter from "./Counter";
import MainHeading from "./MainHeading";
import ContentBody from "./ContentBody";


export function renderApp() {
    console.log("starting app")
    const root = document.getElementById('app');
    root.innerHTML = ''; 

    const layout = document.createElement('div');
    layout.className = 'app';

    layout.appendChild(MainHeading());
    layout.appendChild(Counter());
    layout.appendChild(ContentBody())

    root.appendChild(layout);
}
