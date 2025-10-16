console.log("DAY 18");

// Creating Elements
// {
//     let pElem = document.createElement("p");
//     pElem.innerText = "This is dynamically created paragraph tag.";
//     document.body.appendChild(pElem)
// }
// Inserting Elements
// const spanElem = document.createElement("span");
// spanElem.innerText = "i am Span";

// const divElem = document.querySelector("div")
// const labelElem = document.querySelector("label");
// divElem.insertBefore(spanElem, labelElem)

// const pElem = document.querySelector("p");
// console.log(pElem.nextElementSibling);

// document.body.insertBefore(spanElem, null)
// document.body.insertBefore(spanElem, pElem.nextElementSibling)

// let h2Elem = document.querySelector("h2");
// h2Elem.innerHTML = "<u>Hi, Hello,</u> How are you";

// textContent

// let div1 = document.querySelector("div")
// console.log(div1.innerText);
// console.log(div1.textContent);


// REMOVING ELEMENTS
const pElem = document.querySelector("p");
document.getElementById("removeMe").remove();

let list = document.getElementById("myList");

// remove particular child
// list.children[0].remove()
list.removeChild(list.children[0]);

// remove everything
// list.innerText = "";
list.replaceChildren(pElem);

// Read/write/remove attributes

{
    let imageElem = document.querySelector("img");
    console.log(imageElem);

    imageElem.setAttribute("src", "banner.png");
    imageElem.setAttribute("height", "200px");
    imageElem.setAttribute("width", "200px");
    let attrAlt = imageElem.getAttribute("alt");
    console.log(attrAlt);

    imageElem.removeAttribute("width")
    
    console.log(imageElem.hasAttribute("src"));    
}

// Traversing DOM

{
    let spanElem = document.querySelector("span");

    // parentElement/parentNode
    console.log(spanElem.parentElement.parentElement);
    console.log(spanElem.parentNode.parentNode);

    //childNodes/children
    let mainElem = document.querySelector("#main-id");
    console.log(mainElem.children); // HTMLCollection (1)
    console.log(mainElem.childNodes); // NodeList(3)
    
    // firstChild/firstElementChild
    console.log(mainElem.firstChild);
    console.log(mainElem.firstElementChild);
    
    // lastChild/lastElementChild
    console.log(mainElem.lastChild);
    console.log(mainElem.lastElementChild);

    // nextSibling/nextElementSibling
    let h1El = document.getElementById("sib-1");
    console.log(h1El.nextSibling);
    console.log(h1El.nextElementSibling);
    
    //previousSibling/previousElementSibling
    console.log(h1El.previousSibling);
    console.log(h1El.previousElementSibling);   
}

// Style Manipuation

{
    let pElem = document.querySelector("#style-p");
    console.log(pElem);
    pElem.style.color = "red";
    pElem.style.backgroundColor = "pink"
    pElem.style.padding = "10px";
}

// Class Manipulation
{
    // className

    const mainElem = document.getElementById("sib");
    console.log(mainElem.className);
    // mainElem.className = "green-class" // removes all clases

    // classList
    mainElem.classList.add("test");
    mainElem.classList.remove("test");
    mainElem.classList.replace("main-class", "green-class");
    mainElem.classList.toggle("test")    
    mainElem.classList.toggle("test");
    console.log(mainElem.classList.contains("main-class")); // false
     
}




