fetch(`https://restcountries.com/v3.1/name/${"peru"}?fields=name,capital,population,flags,languages`).then((e=>e.json())).then((e=>{console.log(e)})).catch((e=>{console.log(e)}));
//# sourceMappingURL=index.27f8e677.js.map
