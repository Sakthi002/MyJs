console.log("********** TASKS DAY 18 ************");

// 1. Create a form dynamically using JavaScript and manipulate its behavior
// Add input fields dynamically based on user selection e.g., text, email, number
// Add a submit button that logs all the input values as an object.
// Add a reset button that clears the form.
// Use createElement, appendChild, setAttribute, and addEventListener.

let inputs = [
    { type: "text", name: "name", placeholder: "Enter name..."},
    { type: "email", name: "email", placeholder: "Enter email..."},
    { type: "number", name: "age", placeholder: "Enter age..."},
];

const formElem = document.createElement("form");
formElem.setAttribute("id", "myForm");

let inputElems = {};

inputs.forEach((element) => {
    let input = document.createElement("input");
    input.setAttribute("type", element.type);
    input.setAttribute("placeholder", element.placeholder);
    input.setAttribute("name", element.name);
    inputElems[element.name] = input;
    formElem.appendChild(input)
})

console.log(inputElems, 'elems');

const submitElem = document.createElement("button");
submitElem.setAttribute("type", "submit");
submitElem.innerText = "Submit";

const resetElem = document.createElement("button");
resetElem.setAttribute("type", "button");
resetElem.innerText = "Reset";
resetElem.onclick = function() {
    Object.values(inputElems).forEach((elem)=>{
        elem.value = ""
    });
}

formElem.appendChild(submitElem);
formElem.appendChild(resetElem);

document.body.appendChild(formElem)

formElem.addEventListener("submit", (e) => {
    e.preventDefault();
    let data = {};
    for(let key in inputElems) {
        data[key] = inputElems[key].value
    }
    console.log("Form Submitted", data);
});

// 2. Add, delete, and search rows in a dynamic table
// A form to add rows (Name, Age, Role).
// Each row should have a “Delete” button to remove it.
// Add a search input that filters the rows by name.
// Use insertRow, deleteRow, and textContent/innerText.
const container = document.getElementById("tableContainer");

// Create form to add rows
const form = document.createElement("form");
form.style.marginBottom = "10px";

const nameInput = document.createElement("input");
nameInput.setAttribute("placeholder", "Name");
nameInput.required = true;

const ageInput = document.createElement("input");
ageInput.setAttribute("placeholder", "Age");
ageInput.setAttribute("type", "number");
ageInput.required = true;

const roleInput = document.createElement("input");
roleInput.setAttribute("placeholder", "Role");
roleInput.required = true;

const addBtn = document.createElement("button");
addBtn.type = "submit";
addBtn.innerText = "Add Row";

form.appendChild(nameInput);
form.appendChild(ageInput);
form.appendChild(roleInput);
form.appendChild(addBtn);

container.appendChild(form);

// Create search input
const searchInput = document.createElement("input");
searchInput.setAttribute("placeholder", "Search by Name");
searchInput.style.marginBottom = "10px";
container.appendChild(searchInput);

// Create table
const table = document.createElement("table");
table.border = "1";
table.style.width = "100%";
table.style.borderCollapse = "collapse";

const thead = table.createTHead();
const headerRow = thead.insertRow();
["Name", "Age", "Role", "Action"].forEach(text => {
    const th = document.createElement("th");
    th.innerText = text;
    headerRow.appendChild(th);
});

const tbody = table.createTBody();
container.appendChild(table);

// Add row function
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = nameInput.value.trim();
    const age = ageInput.value.trim();
    const role = roleInput.value.trim();

    if (!name || !age || !role) return;

    const row = tbody.insertRow();
    row.insertCell().innerText = name;
    row.insertCell().innerText = age;
    row.insertCell().innerText = role;

    // Delete button
    const deleteCell = row.insertCell();
    const delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.onclick = () => tbody.deleteRow(row.rowIndex - 1); // adjust for header row
    deleteCell.appendChild(delBtn);

    // Clear form
    nameInput.value = "";
    ageInput.value = "";
    roleInput.value = "";
});

// Search function
searchInput.addEventListener("input", () => {
    const filter = searchInput.value.toLowerCase();
    Array.from(tbody.rows).forEach(row => {
        const nameCell = row.cells[0].textContent.toLowerCase();
        row.style.display = nameCell.includes(filter) ? "" : "none";
    });
});


// 3. Theme Switcher with Persistence
// Toggle theme using a button or switch.
// Persist the theme in localStorage and apply on page load.
// Change background and text color based on the theme.
let bodyClass = localStorage.getItem("theme") ? localStorage.getItem("theme") : 'light';

document.body.classList.add(bodyClass)

function toggleTheme() {
    
    if(bodyClass === 'light') {
        document.body.classList.remove("light");
        document.body.classList.add("dark");
        localStorage.setItem("theme", "dark")
    } else {
        document.body.classList.remove("dark");
        document.body.classList.add("light");
        localStorage.setItem("theme", "light")
   }
}