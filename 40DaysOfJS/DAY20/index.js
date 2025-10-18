console.log("DOM TRICKS");

// Efficient Traversing
let cardElem = document.querySelector(".card");
let firstElem = cardElem.firstElementChild;
let next = firstElem.nextElementSibling;
let parentOfFirstElem = firstElem.parentElement;
let lastElem = cardElem.lastElementChild;
console.log(cardElem);
console.log(firstElem);
console.log(parentOfFirstElem);
console.log(lastElem);
console.log(next);

// template
let cardTemplate = document.getElementById("card-template");
let clone = cardTemplate.content.cloneNode(true);
clone.querySelector(".title").textContent = "DOM Cloning";
clone.querySelector(".content").textContent = "Doing it job!";
document.body.appendChild(clone)

// Fragment
let list = document.getElementById("list");

let listFragment = document.createDocumentFragment();

for(let i = 0; i < 3; i++) {
    let liElem = document.createElement("li");
    liElem.textContent = `Item ${i}`;
    listFragment.appendChild(liElem);
}

list.appendChild(listFragment)



