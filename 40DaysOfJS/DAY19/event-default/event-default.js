console.log("Event Default Behaviour");

document.getElementById("gotoGoogle").addEventListener('click', (e) => {
    e.preventDefault();
    console.log("Default event prevented");
    
})

document.getElementById("myForm").addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Form submission prevented");
})