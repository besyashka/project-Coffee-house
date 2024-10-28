import { hamburgerMenuHandler } from './hamburger.js';
import { products } from './products.js';

window.onload = function () {
  hamburgerMenuHandler();
  toggleTabs();
};

const toggleTabs = () => {
  document.querySelector('.tabs_buttons').addEventListener('click', (event) => {
    if (event.target.closest('.tab_button')) {
      let clickedTab = event.target.closest('.tab_button');

      removeSelectedTab();
      addSelectedTab(clickedTab);
      toggleCategories(clickedTab);
    }
  });
}

const removeSelectedTab = () => {
  let tabButton = document.querySelectorAll('.tab_button');

  tabButton.forEach((button) => {
    button.classList.remove('tab_button_active');
  });
}

const addSelectedTab = (clickedTab) => {
  clickedTab.classList.add('tab_button_active');
}