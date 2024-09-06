const myMovieData = {
    id: 1,
    title: "Rear Window",
    director: "Alfred Hitchcock",
    year: 1954,
    genre: [
        "Mystery", 
        "Thriller"
    ],
    rating: 10,
    starring: [
        "James Stewart", 
        "Grace Kelly"
    ]
};

async function getMovies(){
    const response = await fetch("https://web1-z04e.onrender.com/movies");
    const fetchedMovies = await response.json();
    displayMovies(fetchedMovies);
}

function displayMovies(moviesData){
    for (movie of moviesData){
        const movieCard = document.createElement("div");
        
        movieCard.innerHTML = `
            <h2>Title: ${movie.title}</h2>
            <p class = "movie-data">Year: ${movie.year}</p>
            <p>Director: ${movie.director}</p>
            <p>Rating: <strong>${movie.rating}</strong></p>           
        `;
        function createList(field, title){
        const webpage = document.querySelector("body");
        const actorList = document.createElement("ul"); //Creates the list to hold the actors
        //Loop through each actor
        const elementtitle = document.createElement("h2");
        elementtitle.innerText = title;
        actorList.appendChild(elementtitle);
        
        for (const object of field){
            const actorItem = document.createElement("li");
            actorItem.innerText = object;
            actorList.appendChild(actorItem); //Puts item into list
        }
        //Append actor list to movieCard
        movieCard.appendChild(actorList);
        //Appends movie card to body
        webpage.appendChild(movieCard);
        }
        createList(movie.genre, "Genre: ");
        createList(movie.starring, "Actors: ");
        

        
    }
}
//Call the getMovies function
getMovies();
//Appends list to movie card
//movieCard.appendChild(actorList);



