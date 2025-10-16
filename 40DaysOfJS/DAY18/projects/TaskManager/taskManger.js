console.log("Task Manager");

let editingLi = null;

function addTask() {

    const inputElem = document.getElementById("task-input");
     const addTaskBtn = document.getElementById("task-submit");
    const input = inputElem.value;

    if(!inputElem.value.trim()) return;
    addTaskBtn.innerText = "Add";

    const listElem = document.getElementById("taskList");
    console.log(listElem.children);

    const liElem = document.createElement("li");

    if (editingLi) {
        // Update existing task
        editingLi.querySelector("span").innerText = input;
        addTaskBtn.innerText = "Add";
        editingLi = null;
        inputElem.value = "";
        inputElem.focus();
        return;
    }

    const spanElem = document.createElement("span");
    spanElem.innerText = input;
    liElem.appendChild(spanElem);

    // Complete
    const completeBtn = document.createElement("button");
    completeBtn.innerText = "☐";
    completeBtn.style.cursor = "pointer";
    completeBtn.style.marginLeft = "5px";
    completeBtn.onclick = function() {
        completeBtn.innerText = completeBtn.innerText === "✅" ?  "☐" : "✅";
        liElem.classList.toggle("completed")
    }
    liElem.appendChild(completeBtn);

    // Edit
    const editBtn = document.createElement("button");
    editBtn.innerText = "✏️";
    editBtn.style.cursor = "pointer";
    editBtn.style.marginLeft = "5px";
    editBtn.onclick = function() {
        inputElem.value = spanElem.innerText;
        addTaskBtn.innerText = "Update";
        editingLi = liElem;
    }
    liElem.appendChild(editBtn);

    // Delete
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "❌";
    deleteBtn.style.cursor = "pointer";
    deleteBtn.style.marginLeft = "5px";
    deleteBtn.onclick = function() {
        liElem.remove();
        if (editingLi === liElem) editingLi = null;
    }
    liElem.appendChild(deleteBtn);


    listElem.appendChild(liElem)
    inputElem.value = "";
    inputElem.focus();
}

function onKeyPress(e) {
    if(e.key === "Enter") {
        addTask();
    }
}

function filterList() {

    let searchInput = document.getElementById("searchInput");
    let input = searchInput.value;

    let liElem = document.querySelectorAll("#taskList li");
    
    liElem.forEach(elem => {
        elem.style.display = elem.querySelector("span").innerText.toLowerCase().includes(input.toLowerCase()) ? 'block' : 'none'
    })
    
}