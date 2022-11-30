!function(){var n=document.querySelector("#search-box");console.log(n),fetch("https://restcountries.com/v3.1/name/".concat("peru","?fields=name,capital,population,flags,languages")).then((function(n){return n.json()})).then((function(n){console.log(n)})).catch((function(n){console.log(n)}))}();
//# sourceMappingURL=index.5fc628d0.js.map
