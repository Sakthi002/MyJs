// BUBBLING
document.getElementById("gparent").addEventListener("click", function () {
    console.log("Grandparent Clicked")
})

document.getElementById("parent").addEventListener("click", function (e) {
    console.log("Parent Clicked");
})

document.getElementById("child").addEventListener("click", function () {
    console.log("Child Clicked")
})

// When i clcik on child element - event propogates lithe below
    // Child Clicked
    // Parent Clicked
    // Grandparent Clicked

// CAPTURING

document.getElementById("gparent").addEventListener("click", function () {
    console.log("Grandparent Clicked")
})

document.getElementById("parent").addEventListener("click", function (e) {
    console.log("Parent Clicked");
}, { capture: true })

document.getElementById("child").addEventListener("click", function () {
    console.log("Child Clicked")
})

// When i clcik on child element - event propogates lithe below
    // Parent Clicked
    // Child Clicked
    // Grandparent Clicked

// DELEGATION
document.getElementById("list").addEventListener("click", function (e) {
    console.log(e.target.id, "Item Clicked")
})
