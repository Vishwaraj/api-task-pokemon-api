
var pokeBaseUrl = 'https://pokeapi.co/api/v2/pokemon?limit=151';

var johtoUrl = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=151';

var hoennUrl = 'https://pokeapi.co/api/v2/pokemon?limit=135&offset=251';

var sinnohUrl = 'https://pokeapi.co/api/v2/pokemon?limit=107&offset=386';


function getKanto(url) {
 console.log(url);
    
    
    
    fetch(url).then((result) => result.json())
    .then((data) => {
        let pokeData = data.results;
        pokeData.forEach((pokemon) => {
         pokeInfo(pokemon);
        });
    })
    .catch((error) => console.log(error));

}

// getKanto();

function pokeInfo(data) {
   let url = data.url;

   let pokemonContainerArr = document.getElementsByClassName('pokemon-container');
   let pokemonContainer = pokemonContainerArr[0];
//    console.log(pokemonContainer);

   pokemonContainer.innerHTML = ' ';
   
   fetch(url).then((result) => result.json())
   .then((data) => {
       let types = data.types;
       let realTypes = [];
       types.forEach((type) => {
          realTypes.push(type.type.name);
       });
    //    console.log(data.name, realTypes, data.sprites.front_default);

       pokemonContainer.innerHTML += `<div class="pokemon-card">
       <img src=${data.sprites.front_default} alt="">
       <div class="pokemon-info">
           <h5>${data.name}</h5>
           <p>Type: ${realTypes}</p>
       </div>
   </div>`;




   })
   .catch((error) => console.log(error));

}