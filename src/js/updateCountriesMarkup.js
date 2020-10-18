import oneCountryTpl from '../templates/oneCountry.hbs';
import severalСountriesTpl from '../templates/severalСountries.hbs';
import { error } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';


const refs = {
  menuList: document.querySelector('.js-menu'),
};

function createMenuList(markup) {
    refs.menuList.insertAdjacentHTML('beforeend', markup);
  }

function updateCountriesMarkup(countries) {
  let markup = null;
  
  if (countries.length > 10) {
    error({
        text: 'Too many matches found. Please enter a more specific query!'
      });
  } else if ((countries.length >= 2) & (countries.length <= 10)) {
    markup = severalСountriesTpl(countries);
    createMenuList(markup);
  } else {
    markup = oneCountryTpl(countries);
    createMenuList(markup);
  }
}

export default updateCountriesMarkup;
