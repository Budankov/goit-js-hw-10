import './css/styles.css';
import fetchCountries, { fetchCountries } from './js/fetchCountries';

const DEBOUNCE_DELAY = 300;

const searchBox = document.querySelector('#search-box');
const countryInfo = document.querySelector('.country-info');

searchBox.addEventListener('input', onInputChange);

function onInputChange(e) {
  console.log(e.currentTarget.value);
}

const createMarkupCardCountry = ({
  name: { official },
  capital,
  population,
  flags: { svg },
  languages,
}) =>
  `<div class="card">
     <div class="card-header">
        <img
        class="card-flags-img"
        src="${svg}"
        alt="Flags"
        width="50"
        />
        <h1 class="card-title">${official}</h1>
    </div>
    <p class="card-subtitle"><span>Capital: </span>${capital}</p>
    <p class="card-subtitle"><span>Population: </span>${population}</p>
    <p class="card-subtitle"><span>Languages: </span>${languages}</p>
    </div>`;
// const makeCardCountry = fetchCountries.map(createMarkupCardCountry).join('');

// countryInfo.insertAdjacentHTML('beforeend', makeCardCountry);

function renderCardCountry(country) {
  const markup = createMarkupCardCountry(country);
  console.log(markup);
}

function fetchCountries(name) {
  fetch(
    // `https://restcountries.com/v3.1/name/peru?fields=name,capital,population,flags,languages`
    `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`
  )
    .then(response => {
      return response.json();
    })
    .then(renderCardCountry)
    .catch(error => {
      console.log(error);
    });
}

fetchCountries('peru');
