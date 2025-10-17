console.log("Event Bubbling, Capturing and Delegation");

// Bubbling

document.getElementById("grandparent").addEventListener("click", () => {
    console.log("Bubble:: Grand Parent Clicked.");
});

document.getElementById("parent").addEventListener("click", () => {
    console.log("Bubble:: Parent Clicked.");
});

document.getElementById("child").addEventListener("click", () => {
    console.log("Bubble:: Child Clicked.");
});

// Capturing

document.getElementById("grandparent").addEventListener("click", () => {
    console.log("Capture:: Grand Parent Clicked.");
}, { capture:true });

document.getElementById("parent").addEventListener("click", () => {
    console.log("Capture:: Parent Clicked.");
}, { capture:true });

document.getElementById("child").addEventListener("click", () => {
    console.log("Capture:: Child Clicked.");
}, { capture:true });

// Delegation

document.getElementById("myList").addEventListener("click", function(event) {    
    if(event.target.nodeName === "LI") {
        console.log(event.target.innerText);
    }
});

// Stop Propogation
document.getElementById("father").addEventListener("click", function() {
    console.log("Father clicked");
})

document.getElementById("son").addEventListener("click", function(event) {
    event.stopPropagation();
    console.log("Son clicked");
})