import { loadFromStorage } from './app.storage.js';
import { renderApp } from './components/App.js';

// responsible for initialising applicaiton -> data loading and mounting the DOM
document.addEventListener('DOMContentLoaded', () => {
  loadFromStorage();  
  renderApp();
});