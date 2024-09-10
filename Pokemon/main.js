
async function getPokemon (){
    const request = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=10")
    const pokemon = await request.json()

    console.log(pokemon)
    feedPokemon(pokemon)
}
    
    //Load in all 10 Pokemon
    function feedPokemon(poke){
      
  
        for (const pokemon of poke.results) {
            const section = document.createElement("section")          
            section.name = pokemon.name
            section.url = pokemon.url
            //Append article to section
      
            //Append article to body
            document.body.appendChild(section)
            
            //Display the data
            const article = document.createElement("article")
            article.innerHTML = 
            `
            <h2>${section.name}</h2>
            <p>${section.url}</p>
            
            `
            document.body.appendChild(article)

            //Create event listener and pass on the URL      
            section.addEventListener("click", displayPokemonDetails)
        }
        
      
    }
    async function displayPokemonDetails(e){
        const request = await fetch(e.target.url)
        const pokeData = await request.json()
        //const article = document.createElement("section")
        console.log(pokeData.name)
    }
    getPokemon()

   
 

