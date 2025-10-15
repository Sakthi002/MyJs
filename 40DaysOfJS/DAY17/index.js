console.log("DAY 17");

console.log(document);

console.log(document.head);
console.log(document.body);
console.log(document.title);
console.log(document.URL);

let titleElem = document.getElementById("heading");
console.log(titleElem);

let infoTags = document.getElementsByClassName("info");
console.log(infoTags); // HTMLCOLLECTION

let pTags = document.getElementsByTagName("p");
console.log(pTags); // HTMLCOLLECTION

let hOne = document.querySelector("#heading");
console.log(hOne);

let pNodes = document.querySelectorAll("p.info");
console.log(pNodes); // NodeList


function highlightText() {
    
    // let elements = document.getElementsByClassName("info"); // dont have forEach

    let elements = document.querySelectorAll("p.info");
    elements.forEach((elem)=>{
        elem.style.backgroundColor = "yellow"
    });
}

function filterList() {
    
    const inputElem = document.getElementById("searchInput");
    
    const input = inputElem.value.toLowerCase();
    console.log(input, "input");
    
    
    let elements = document.querySelectorAll("ul#itemsList li");
    
    elements.forEach((element) => {
        
        element.style.display = element.innerText.toLowerCase().includes(input) ? "block" : 'none';
    })
    
}


 


