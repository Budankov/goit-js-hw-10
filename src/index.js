import './css/styles.css';
import fetchCountries, { fetchCountries } from './js/fetchCountries';

const DEBOUNCE_DELAY = 300;

const searchBox = document.querySelector('#search-box');
console.log(searchBox);

fetchCountries('peru');

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
        src="https://flagcdn.com/pe.svg"
        alt="Flags"
        width="50"
        />
        <h1 class="card-title">Republic of Peru</h1>
    </div>
    <p class="card-subtitle"><span>Capital: </span>Lima</p>
    <p class="card-subtitle"><span>Population: </span>329912312</p>
    <p class="card-subtitle"><span>Languages: </span>Spanish</p>
    </div>`;
// const makeGalleryItem = galleryItems.map(createMarkupElemetsGallery).join('');

// galleryListEl.insertAdjacentHTML('beforeend', makeGalleryItem);
