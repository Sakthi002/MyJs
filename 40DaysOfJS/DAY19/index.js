console.log("DAY 19");

// EVENT IN MARKUP
function clickMe(value) {
    console.log(`Button clicked with ${value}`);   
}

// EVENT IN SCRIPT
let btn2 = document.getElementById("myBtn");

const handleClick = (value) => {
    console.log("Button click handled", value);
}
btn2.onclick = function () {
    console.log("Button 2 clicked");
}

btn2.onclick = function () {
    console.log("Button 2 clicked again");
}

// Normal
btn2.onclick = handleClick;
// With args
btn2.onclick = function () {
    handleClick("Hola")
}

// addEventListener | removeEventListener
let countBtn = document.getElementById("countBtn");
let count = 0;

// THIS WILL NOT REMOVE LISTENER - CALLBACK DEFINED HERE ARE NOT SAME
// countBtn.addEventListener("click", function () {
//     console.log(count);
//     count++;
// });

// countBtn.removeEventListener("click", function () {
//     console.log(count);
//     count++;
// });

// THIS WILL REMOVE
// const handleCount = function () {
//     console.log(count);
//     count++;
// }
// countBtn.addEventListener("click", handleCount);

// countBtn.removeEventListener("click", handleCount);

// MULTIPLE EVENT LISTENERS

const handleCount = function () {
    console.log(count);
    count++;
}

function greetMe() {
    console.log("thanks");
    
}
countBtn.addEventListener("click", handleCount);
countBtn.addEventListener("click", greetMe);
countBtn.removeEventListener("click", handleCount);

// Event Object

const search = document.getElementById("search-input");
console.log(search);

// WITHOUT ANY PARAMS
function handleChange(event) {
    console.log(event.type);
    console.log(event.target); // Element which triggered event 
    console.log(event.target.value); // value of an element
    console.log(event.target.name); // name of an element
    console.log(event.currentTarget); // Element which event attached to

    console.log(this); // refers to the element
    
};

search.addEventListener("change", handleChange)

// WITH PARAMS
// function handleChange(event, param) {
//     console.log(event.type);
//     console.log(event.target); // Element which triggered event 
//     console.log(event.target.value); // value of an element
//     console.log(event.target.name); // name of an element
//     console.log(event.currentTarget); // Element which event attached to
//     console.log(param);
//     console.log(this); // refers to window object
// };

// search.addEventListener("change", (e) => handleChange(e, 'extra'))
