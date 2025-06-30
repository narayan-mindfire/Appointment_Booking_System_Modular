import state from "./app.state";
/**
 * Get data from localStorage.
 */
function loadData(key, defaultValue = null) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : defaultValue;
}

/**
 * Saves data to localStorage.
 */
function saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

/**
 * loads data from localStorage
 */
function loadFromStorage() {
    state.appointments = loadData("appointments", []);
    state.isGridSelected = loadData("isGridSelected", true);
}


export {
    loadFromStorage,
    loadData,
    saveData
}

