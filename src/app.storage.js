import state from "./app.state";
/**
 * Get data from localStorage.
 */
function loadData(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
}

/**
 * Saves data to localStorage.
 */
function saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

function loadFromStorage(){
    state.appointments = loadData("appointments")
    state.isGridSelected = loadData("isGridSelected")
}

export {
    loadFromStorage
}

