import { hamburgerMenuHandler } from './hamburger.js';
import { products } from './products.js';

window.onload = function () {
  const initialTab = document.querySelector('.tab_button_active');
  const className = initialTab.textContent.toLowerCase().trim();

  hamburgerMenuHandler();
  toggleTabs();
  toggleCategories(className);
  handleClickButtonRefresh(className);
};

const toggleTabs = () => {
  document.querySelector('.tabs_buttons').addEventListener('click', (event) => {
    if (event.target.closest('.tab_button')) {
      let clickedTab = event.target.closest('.tab_button');
      const className = clickedTab.textContent.toLowerCase().trim();

      removeSelectedTab();
      addSelectedTab(clickedTab);
      toggleCategories(className);
      handleClickButtonRefresh(className);

      document.querySelector('.button-refresh').classList.remove('button-refresh-hidden')
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

const toggleCategories = (className) => {
  const element = document.querySelector(`.${className}`);
  const menuItem = element.querySelectorAll('.menu_item');

  document.querySelectorAll('.menu_list').forEach((item) => {
    item.classList.add('list_hidden');
  });
 
  element.classList.remove('list_hidden');

  hideExcessMenuItems(menuItem);
}

const hideExcessMenuItems = (menuItem) => {
  menuItem.forEach((item, index) => {
    if (index >= 4) {
      item.classList.add('menu_item_hidden');
    }
  });
}

const handleClickButtonRefresh = (className) => {
  document.querySelector('.button-refresh').addEventListener('click', () => {
    const hiddenItem = document.querySelector(`.${className}`).querySelectorAll('.menu_item_hidden');

    hiddenItem.forEach((item) => {
      item.classList.remove('menu_item_hidden');
    });

    document.querySelector('.button-refresh').classList.add('button-refresh-hidden')
  });
}