console.log("Custom Event");

// Create new event
const myEvent = new CustomEvent("userLoggedIn", {
    detail: {
        username: "Sakthi",
        role: "admin"
    }
})
// Listen to the event
document.addEventListener("userLoggedIn", (e) => {
    console.log("Event happened", e.detail);
})
// Dispatch the event

document.dispatchEvent(myEvent)

function loginUser (username) {

    const event = new CustomEvent("userLogsIn", {
        detail: {username}
    })

    document.dispatchEvent(event)
}

document.addEventListener('userLogsIn', (e) => {
    console.log("user looged");
    document.getElementById("welcome").innerText = `Welcome ${e.detail.username}!`
})