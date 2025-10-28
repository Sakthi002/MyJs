const API_KEY = "8ed176b5";

let errorPTag = document.createElement("p");
const listElem = document.getElementById("movieList");
const loadingEl = document.getElementById("loading");

async function getMovies(searchTerm = "") {

    loadingEl.innerText = "Loading...";

    listElem.innerHTML = "";

    errorPTag.remove();

    try {
     
        let response = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}`);

        if(!response.ok) throw new Error("Error Occured");

        let responseData = await response.json();

        if(responseData.Response === "False") {
            
            throw new Error(responseData.Error)
        }

        loadingEl.innerText = "";

        let movies = responseData.Search;

        let listFragment = document.createDocumentFragment();

        movies.forEach((movie) => {
            let movieCard = document.createElement('div');
            movieCard.classList.add("movie-card");

            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', movie.Poster);
            imgEl.setAttribute('alt', movie.Title);

            let headEl = document.createElement('h3');
            headEl.innerText = movie.Title;

            let yearEl = document.createElement("p");
            yearEl.innerText = movie.Year;

            movieCard.appendChild(imgEl);
            movieCard.appendChild(headEl);
            movieCard.appendChild(yearEl);
            listFragment.appendChild(movieCard);
        })

        listElem.appendChild(listFragment);

    } catch (error) {
        
        loadingEl.innerText = "";;

        errorPTag.innerText = "No results found";

        errorPTag.classList.add("no-results");

        listElem.appendChild(errorPTag);
    }
}

let inputElem = document.getElementById("searchInput");

inputElem.addEventListener("input", function (e) {

    debouncedSearch(e.target.value)
})

const debouncedSearch = debounce(getMovies, 400)

function debounce(func, delay) {

    let timer;

    return function (...args) {
        
        clearTimeout(timer);

        let context = this;

        timer = setTimeout(() => {

            func.apply(context, args);

        }, delay);
    }
}