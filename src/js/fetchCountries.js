export function fetchCountries(name) {
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
