console.log("DAY 33 - Tasks - Map, Set, WeakMap, WeakSet");
// # Tasks

// ## 1. Create a Map of Student IDs and Names

// - Add at least 5 students.
// - Retrieve a name using a student ID.
// - Delete one entry and print the Map.

const students = new Map();
students.set(1, "Tom");
students.set(2, "Bob");
students.set(3, "Alice");
students.set(4, "Ram");
students.set(5, "James");

console.log(students);

console.log(students.get(4));

students.delete(4);

console.log(students);


// ## 2. Create a Set of Programming Languages

// - Add duplicate languages to test uniqueness.
// - Iterate and print all unique entries.

const programmingLanguages = new Set([
    'Javascript',
    'HTML',
    'CSS',
    'PHP',
    'Python'
])

programmingLanguages.add('Python');

programmingLanguages.forEach((value) => {
    console.log(value);
})

for(let value of programmingLanguages) {
    console.log(value);
}


// ## 3. Compare Object vs Map for Key-Value Storage

// - Store the same data in both.
// - Compare insertion order and key types (e.g., object keys).

const obj = { id: 1, name: "Sakthi", 180: "House No" };

const map = new Map([['id',1],['name', "Sakthi"],[180, 'House no']]);

console.log(obj);
console.log(map);

// In object - insertion order is not guaranteed
// In Map - it keeps the elements in insertion order

// in obj - key `180` converted to string - keys pnly string or symbol
// in map - key `180` is number only - keys can be any type

console.log(obj[180] === obj["180"]); // true
console.log(map.get(180) === map.get("180")); // false - map.get("180") - undefined


// ## 4. Build a Contact List Using Map

// - Use phone numbers as keys and names as values.
// - Add, update, delete contacts.
// - Search for a contact by number.

let editingNumber = null;
const contacts = new Map([[1234, "Sakthi"]]);

let numElem = document.createElement("input");
numElem.setAttribute('type', 'number');
numElem.setAttribute('name', 'phone_number');

let nameElem = document.createElement("input");
nameElem.setAttribute('type', 'text');
nameElem.setAttribute('name', 'name');

let addBtn = document.createElement("button");
addBtn.innerText = "Add Contact";

let searchDiv = document.createElement('div');
let heading = document.createElement("h4");
heading.innerText = "Search"
let searchElem = document.createElement("input");
searchElem.setAttribute('type', 'text');
searchElem.setAttribute('name', 'search');

searchDiv.appendChild(heading);
searchDiv.appendChild(searchElem);
document.body.appendChild(searchDiv);

document.body.appendChild(numElem);
document.body.appendChild(nameElem);
document.body.appendChild(addBtn);

addBtn.addEventListener('click', function() {
 
    if(!nameElem.value || !numElem.value || isNaN(numElem.value)) {
        return;
    }

    let num = Number(numElem.value);

    // If we are editing and the number changed, remove old entry
    if (editingNumber !== null && editingNumber !== num) {
        contacts.delete(editingNumber);
    }

    contacts.set(num, nameElem.value);

    numElem.value = "";    
    nameElem.value = "";
    addBtn.innerText = "Add Contact";

    renderList();
})

let ulElem = document.createElement('ul');

function renderList () {

    ulElem.innerHTML = "";
    
    let listFrag = document.createDocumentFragment();

    contacts.forEach((value, key) => {

        let liElem = document.createElement('li');
        liElem.innerHTML = `<strong>${value}</strong>&nbsp; - &nbsp;<span>${key}</span>&nbsp;`;
        
        let editBtn = document.createElement('button');
        editBtn.innerText = "Edit";
        editBtn.onclick = function () {
            numElem.value = key;
            nameElem.value = value;
            addBtn.innerText = "Update";
            editingNumber = key; // remember old number
        }

        let deleteBtn = document.createElement('button');
        deleteBtn.innerText = "Delete";
        deleteBtn.onclick = function () {
            contacts.delete(key);
            renderList();
        }

        liElem.appendChild(editBtn);
        liElem.appendChild(deleteBtn);
        listFrag.appendChild(liElem);
    })

    ulElem.appendChild(listFrag);

    document.body.appendChild(ulElem);
}

renderList();

searchElem.addEventListener('input', function(e) {
    const number = Number(e.target.value);
    const result = searchNumbers(number);

    if (result) {
        console.log(`Found: ${result}`);
    } else {
        console.log("Contact not found");
    }
});

function searchNumbers(value) {
    
    if(contacts.has(value)) {

        return contacts.get(value);

    } else {

        return null;
    }
}


// ## 5. Remove Duplicates from Array Using Set

// ```js
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana'];
const uniqueArr = Array.from(new Set(fruits));
console.log(uniqueArr);
// ```

// Convert to a Set and back to an array with only unique values.

// ## 6. Track User Logins with Set

// - Add user IDs when users log in.
// - Remove them on logout.
// - Check if a specific user is currently logged in.

const userNew = { id: 1, name: "Sakthi" };

const loggedUsers = new Set();

function login() {
    loggedUsers.add(userNew.id);
    console.log(loggedUsers);
    
}

function logout() {
    loggedUsers.delete(userNew.id);
    console.log(loggedUsers);
}

// ## 7. Create a Map of Book Titles and Authors

// - Add at least 5 entries.
// - Update an author.
// - Count the number of books.

const books = new Map([
    ['Ponniyin Selvan', 'Kalki Krishnamurthy'],
    ['Sivagamiyin Sabatham', 'Kalki Krishnamurthy'],
    ['Thirukkural', 'Thiruvalluvar'],
    ['Silappatikaram', 'Ilango Adigal'],
    ['Parthiban Kanavu', 'Kalki Krishnamurthy']
]);

books.set('Thirukkural', 'Saint Thiruvalluvar');

console.log(books.size);

books.forEach((value, key) => {
    console.log(key, value);
})


// ## 8. Associate Metadata with DOM Elements Using WeakMap

// - Create fake DOM elements (objects).
// - Store related metadata in a WeakMap.
// - Demonstrate benefits for garbage collection.

let div1 = document.createElement('div');
div1.id = "heading";
div1.innerText = "Heading Text";

let div2 = document.createElement('div');
div2.id = "footer";
div2.innerText = "Footer Text";

document.body.appendChild(div1);
document.body.appendChild(div2);

let elementMetaData = new WeakMap();

elementMetaData.set(div1, 'div1');
elementMetaData.set(div2, "div2");

div1.addEventListener('click', () => {
    console.log('div1 clicked');
});

div2.addEventListener('click', () => {
    console.log('div2 clicked');
});

setTimeout(() => {
    
    console.log("Removing footer (div2) from DOM...");
    document.body.removeChild(div2);

    div2 = null;

    console.log("div2 is now eligible for garbage collection. Metadata will auto-clean.");

    console.log(elementMetaData);
  
}, 5000);

// ## 9. Track Instances of a Class with WeakSet

// - Define a `Session` class.
// - Add each instance to a WeakSet when created.
// - Discuss how it avoids memory leaks.

let sessionSet = new WeakSet();

class Session {
    constructor(name) {
        this.name = name;
        sessionSet.add(this);
    }

    end() {
        console.log(`${this.name} ended`);
        // When references to this object are gone, WeakSet auto-cleans it up
    }
}

let session1 = new Session('session 1');
let session2 = new Session('session 2');

// 🧹 Simulate session end (removing reference)
session1.end();
session1 = null; // drop reference, eligible for GC

// WeakSet will automatically forget session1 when garbage collection runs
console.log("Session 1 reference removed. WeakSet will auto-clean it (cannot view directly).");


// ## 10. Build a Shopping Cart Using Map

// - Product IDs as keys and quantity as values.
// - Add, remove, and update quantities.
// - Calculate total items in the cart.

// ## 11. Anagram Checker with Set

// - Write a function that checks if two strings are anagrams.
// - Use Sets to compare character presence.

function anagramChecker(str1, str2) {

    // if(str1.length !== str2.length) return false;

    // console.log(str1.split("").sort());
    // console.log(str2.split("").sort());
    
    // return str1.split("").sort().join("") === str2.split("").sort().join("");

    let set1 = new Set(str1);
    let set2 = new Set(str2);

    console.log(set1);
    console.log(set2);

    for(let char of set1) {
        if(!set2.has(char)) return false;
    }

    if(set1.size !== set2.size) return false;

    const countChars = s =>
        s.split('').reduce((acc, c) => ((acc[c] = (acc[c] || 0) + 1), acc), {});
    
    const map1 = countChars(str1);
    const map2 = countChars(str2);

    console.log(map1);
    

    for (let c in map1) {
        console.log(map1[c]);
        
        if (map1[c] !== map2[c]) return false;
    }

    return true;
    
}

let result = anagramChecker("evil", "vile");
console.log(result);

// ## 12. First Non-Repeating Character with Map

// - Count character frequencies in a string using a Map.
// - Return the first character with count 1.

function freqStr(str) {

    // let occ = str.split("").reduce((acc, curr) => {
    //     acc[curr] = (acc[curr] || 0) + 1;
    //     return acc;
    // }, {});

    // let withOne = Object.entries(occ).filter(([value, count]) => {
    //     return count === 1
    // })

    // let result = Object.fromEntries(withOne);
    
    

    // return Object.keys(result)[0]

    let freqMap = new Map();

    for(let char of str) {
        freqMap.set(char, (freqMap.get(char) || 0) + 1)
    }

    for(let [key, value] of freqMap) {
        if(value === 1) return key 
    }
    
}

console.log(freqStr("tapascript"));


// ## 13. Measure Performance: Object vs Map

// - Insert 100,000 key-value pairs into both.
// - Use `console.time()` to benchmark speed.

const limit = 100000;

let obj11 = {};

console.time("Object insertion");

for(let i = 0; i < limit; i++) {
    obj11[`key_${i}`] = i;
}

console.timeEnd("Object insertion");

let objMap = new Map();

console.time("Map Object insertion");

for(let i = 0; i < limit; i++) {
    objMap.set(`key_${i}`, i);
}

console.timeEnd("Map Object insertion");

console.log(obj11);
console.log(objMap);


// ## 14. Voting App with Set to Prevent Duplicate Votes

// - Track user IDs in a Set.
// - Allow each ID to vote only once.

let votedList = new Set();

function vote(id) {

    if(votedList.has(id)) {
        console.log("Denied. Already Voted");
        return;
    }

    votedList.add(id);

    console.log("Voted successfully.");
}

vote(1);
vote(2);
vote(3);
vote(1);

// ## 15. Employee Registry Using Object Keys in Map

// - Use employee objects as keys.
// - Add and retrieve job-related info.
// - Show that Object keys don't work similarly in plain objects.

// ✅ Using Map
const emp1 = { name: "Sakthi" };
const emp2 = { name: "Arun" };

const employeeRegistry = new Map();

employeeRegistry.set(emp1, { role: "Developer", salary: 80000 });
employeeRegistry.set(emp2, { role: "Designer", salary: 70000 });

console.log("From Map:");
console.log(employeeRegistry.get(emp1)); // { role: "Developer", salary: 80000 }
console.log(employeeRegistry.get(emp2)); // { role: "Designer", salary: 70000 }

// ❌ Using plain Object (wrong behavior)
const employeeObj = {};

employeeObj[emp1] = { role: "Developer", salary: 80000 };
employeeObj[emp2] = { role: "Designer", salary: 70000 };

console.log("\nFrom plain Object:");
console.log(employeeObj); 
// Both keys collapse into one because object keys are strings