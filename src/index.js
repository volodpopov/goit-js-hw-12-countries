import './styles.css';
import updateCountriesMarkup from './js/updateCountriesMarkup.js';
import fetchCountries from './js/fetchCountries.js';
import debounce from 'lodash.debounce';

const refs = {
  menuList: document.querySelector('.js-menu'),
  input: document.querySelector('.input'),
};

function onInput(event) {
  let inputValue = event.target.value;
  refs.menuList.innerHTML = '';
  fetchCountries(inputValue).then(updateCountriesMarkup);
}

refs.input.addEventListener('input', debounce(onInput, 500));
