function showModal() {
    const modal = document.getElementById("modal");
    modal.innerHTML = `<p>This is a modal</p>`;

    document.body.addEventListener("click", handleBodyClick);

    // Clean it up after 5 seconds (just an example)
    setTimeout(() => {
        document.body.removeEventListener("click", handleBodyClick);
    }, 5000);
}

function handleBodyClick() {
    console.log("Body clicked");
}

document.getElementById("open").addEventListener("click", showModal);