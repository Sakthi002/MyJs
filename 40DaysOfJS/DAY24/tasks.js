// # Tasks

// Please complete the following tasks and post them on the tapaScript Discord under "40 Days of JavaScript".

// > **DO NOT USE AI to FIND ANSWERS**. If you are stuck, let's discuss it on DISCORD and learn. Also, please note that none of the answers need you to create any UI. Just focus on the logic building and print the output on the browser console.

// ## 1. Create a function wait(ms) that returns a promise which resolves after ms milliseconds. Use async/await to log messages before and after the delay

async function wait(ms) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve("I am resolved...")
        }, ms)
    })
}

async function resolveWait() {

    console.log("Waits for resolve");

    let response = await wait(3000);

    console.log(response);

    console.log("Waiting done");
}

// resolveWait();

// ## 2. Using async/await, log "One", then after 1 second log "Two", then "Three" after another 2 seconds. No setTimeout outside of promises

function logTest(ms) {

    return new Promise(resolve => setTimeout(resolve, ms))
}

async function resolveLogTest() {

    console.log("One");

    await logTest(1000);

    console.log("Two");
    
    await logTest(2000);

    console.log("Three");
}

// resolveLogTest()

// ## 3. Use fetch() with async/await to load a local JSON file (data.json) and display its contents in the console

async function fetchJson() {

    let response = await fetch('data.json');

    let result = await response.json()

    console.log(result);
    
}

// fetchJson();

// ## 4. Use the public API `https://jsonplaceholder.typicode.com/users/1` to fetch and display the user’s name, email, and address on the page

async function fetchUser() {

    let response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    let user = await response.json();

    let userCardElem = document.createElement('div');
    userCardElem.classList.add("user-card");

    let h1Elem = document.createElement('h1');
    h1Elem.innerText = user.name;

    let h2Elem = document.createElement('h2');
    h2Elem.innerText = user.email;

    let divElem = document.createElement('p');
    divElem.innerHTML = `<p>${user.address.street}</p><p>${user.address.suite}</p><p>${user.address.city}</p><p>${user.address.zipcode}</p>`

    userCardElem.appendChild(h1Elem);
    userCardElem.appendChild(h2Elem);
    userCardElem.appendChild(divElem);

    document.body.appendChild(userCardElem);
}

// fetchUser();

// ## 5. Modify the previous task to handle errors (e.g., wrong URL) and display a user-friendly error message in the DOM

async function fetchUser1() {

    let userCardElem = document.createElement('div');
    userCardElem.classList.add("user-card");

    try {

        let response = await fetch('https://jsonplaceholder.typicode.com/uers/1');
        if(!response.ok) throw new Error("Error Occured")
        let user = await response.json();
        
        let h1Elem = document.createElement('h1');
        h1Elem.innerText = user.name;

        let h2Elem = document.createElement('h2');
        h2Elem.innerText = user.email;

        let divElem = document.createElement('p');
        divElem.innerHTML = `<p>${user.address.street}</p><p>${user.address.suite}</p><p>${user.address.city}</p><p>${user.address.zipcode}</p>`

        userCardElem.appendChild(h1Elem);
        userCardElem.appendChild(h2Elem);
        userCardElem.appendChild(divElem);

        document.body.appendChild(userCardElem);

    } catch (err) {

        let pTag = document.createElement('p');

        pTag.innerText = `${err.message} : User not found`;
        
        pTag.style.color = "red";
        
        document.body.appendChild(pTag);

    }
}

// fetchUser1();

// ## 6. Refactor then/catch to async/await

// ```js
// fetch('/api/data')
//   .then(res => res.json())
//   .then(data => console.log(data))
//   .catch(err => console.error(err));
// ```

async function getData() {
    try {
        let response = await fetch('/api/data');
        if(!response.ok) throw new Error("Error while fetching data")
        let data = await response.json();
        console.log(data);
    } catch (err) {
        console.error(err)
    }
}

// ## Project Task

// Let's Build a “Movie Explorer” App

// Build an app that lets users search movies using the OMDB API:
// `http://www.omdbapi.com/?apikey=yourkey&s=movieName`

// Hints:

// - Input box for search term
// - Display movie title, poster, and year
// - Show “No results found” if search fails
// - Use async/await, DOM manipulation, and try/catch