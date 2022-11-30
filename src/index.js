import './css/styles.css';
import { fetchCountries } from './js/fetchCountries';

const debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;

const searchBox = document.querySelector('#search-box');
const countryInfo = document.querySelector('.country-info');

searchBox.addEventListener('input', debounce(onInputChange, DEBOUNCE_DELAY));

function onInputChange(e) {
  const value = e.target.value;
  console.log(value.trim());
}

fetchCountries('peru')
  .then(renderCardCountry)
  .catch(error => {
    console.log(error);
  });

const createMarkupCardCountry = ({
  //   name: { official },
  capital,
  population,
  //   flags: { svg },
  languages,
}) =>
  `<div class="card">
     <div class="card-header">
        <img
        class="card-flags-img"
        src="1"
        alt="Flags"
        />
        <h1 class="card-title">1</h1>
    </div>
    <p class="card-subtitle"><span>Capital: </span>${{ capital }}</p>
    <p class="card-subtitle"><span>Population: </span>${population}</p>
    <p class="card-subtitle"><span>Languages: </span>${languages}</p>
    </div>`;
// const makeCardCountry = fetchCountries.map(createMarkupCardCountry).join('');

// countryInfo.insertAdjacentHTML('beforeend', makeCardCountry);

function renderCardCountry(country) {
  console.log(country);
  const markup = createMarkupCardCountry(country);
  console.log(markup);
}
