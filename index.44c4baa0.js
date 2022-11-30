const e=document.querySelector("#search-box");document.querySelector(".country-info");var n;e.addEventListener("input",(function(e){console.log(e.currentTarget.value)})),fetch(`https://restcountries.com/v3.1/name/${n}?fields=name,capital,population,flags,languages`).then((e=>e.json())).then(renderCardCountry).catch((e=>{console.log(e)}));
//# sourceMappingURL=index.44c4baa0.js.map
