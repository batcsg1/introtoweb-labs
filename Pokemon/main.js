async function getPokemon (){
    const request = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
    const pokemon = await request.json()   
    feedPokemon(pokemon)   
}
    
//Load in all 10 Pokemon
function feedPokemon(pokes){
    for (const pokemon of pokes.results) {
        const poke = document.createElement("div")
        poke.id = "pokemon-list"
        poke.url = pokemon.url;  
        poke.name = pokemon.name;         
        poke.innerHTML = `
            <h2>${poke.name}</h2>
            
        `;
        //<p>Url: ${poke.url}</p>
        //Append article to body
        document.body.appendChild(poke)
        //Create event listener and pass on the URL      
        poke.addEventListener("click", displayPokemonDetails) 
    }
}
async function displayPokemonDetails(e){
    
    const res = await fetch(e.currentTarget.url)
    const pokeData = await res.json()
    console.log(pokeData.name)

    const singlePoke = document.createElement("div")
    
    singlePoke.id = "pokemon"

    singlePoke.sprite = pokeData.sprites.back_default
    singlePoke.name = pokeData.name
    singlePoke.height = pokeData.height
    singlePoke.ability = pokeData.abilities

    console.log(singlePoke.ability)
    singlePoke.innerHTML = `
    <h2>${singlePoke.name}</h2>
    <img src="${singlePoke.sprite}" alt="${singlePoke.name}"width="100" height="100">
    <p>Height: ${singlePoke.height} m</p>
    <h3>Abilities</h3>
    <ul>
        ${singlePoke.ability.map(ability => `<li>${ability.ability.name}</li>`).join("")}
    </ul>
    `
    document.body.appendChild(singlePoke)
   
}
getPokemon();

