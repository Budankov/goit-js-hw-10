const e=document.querySelector("#search-box");console.log(e),fetch(`https://restcountries.com/v3.1/name/${"peru"}?fields=name,capital,population,flags,languages`).then((e=>e.json())).then((e=>{console.log(e)})).catch((e=>{console.log(e)}));
//# sourceMappingURL=index.e9bf4233.js.map
