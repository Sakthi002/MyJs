console.log("DAY 36 - Tasks");
// # Tasks

// ## 1. Debounced Live Character Counter

// Build a character counter for a `<textarea>` that updates the live character count only after the user pauses typing for 500ms.

// - ✅ Use debounce
// - ✅ UI should display: “Characters typed: X”
// - ✅ Bonus: Warn if character count exceeds 200

function debounce(func, delay) {

    let timer;

    return function(...args) {

        clearTimeout(timer);

        timer = setTimeout(() => {

            func.apply(this, args);

        }, delay);
    }
}

const calcChars = (e) => {

    const count = e.target.value.length;
    const counter = document.getElementById("char_count");
    counter.textContent = `Characters typed: ${count}`;
    counter.style.color = count > 200 ? "red" : "black";

    if(e.target.value.length > 200) {
        
        console.warn("Exceeds maximum allowed characters.");
    }
}

const debouncedCalc = debounce(calcChars, 500)

document.getElementById('characters').addEventListener("input", debouncedCalc)

// ## 2. Throttled Window Resize Logger

// Create a page that logs the window dimensions to the console — but only once every 250ms as the user resizes the browser.

// - ✅ Use throttle
// - ✅ Show current width × height on screen
// - ✅ Bonus: Highlight screen size category (Mobile, Tablet, Desktop)

function throttle(fn, interval) {

    let lastCall = 0;

    return function(...args) {

        let now = Date.now();

        if((now - lastCall) >= interval) {

            lastCall = now;

            fn.apply(this, args);
        }
    }
}

const infoBox = document.createElement('div');
infoBox.style.position = 'fixed';
infoBox.style.top = '20px';
infoBox.style.left = '50%';
infoBox.style.transform = 'translateX(-50%)';
infoBox.style.padding = '20px 30px';
infoBox.style.borderRadius = '10px';
infoBox.style.background = '#222';
infoBox.style.color = 'white';
infoBox.style.fontFamily = 'Arial, sans-serif';
infoBox.style.fontSize = '18px';
infoBox.style.textAlign = 'center';
infoBox.style.boxShadow = '0 4px 12px rgba(0,0,0,0.3)';
infoBox.style.transition = 'background 0.3s ease';
document.body.appendChild(infoBox);

function getCategory(width) {
    if (width < 600) return "Mobile"; 
    if (width < 1024) return "Tablet"; 
    return "Desktop"
}

function logResize(e) {

    let width = window.innerWidth;
    
    let height = window.innerHeight;
    
    let category = getCategory(width);

    infoBox.innerHTML = `
        <div><strong>${width} × ${height}</strong></div>
        <div style="margin-top: 5px; font-size: 16px;">${category}</div>
    `;

    console.log(`${category} :: Width: ${width} and Height: ${height}`);
    
}

const throttleResize = throttle(logResize, 250)

window.addEventListener('resize', throttleResize);

logResize();

// ## 3. Memoized Temperature Converter

// Write a function to convert Celsius to Fahrenheit and vice versa.
// Use memoization to cache previous conversions.

// - ✅ Use memoize() wrapper
// - ✅ Bonus: Add a counter to show how many times the real function runs

function memoize(fn) {

    let cache = {};

    return function(...args) {

        let key = JSON.stringify(args);

        if(cache[key]) {

            console.log("Cache hit");
            
            return cache[key];
        
        } else {

            console.log("Cache miss");

            let result = fn.apply(this, args)

            cache[key] = result;

            return result;
        }
    }
}

let runCount = 0;

function celsiusToheat(celsius) {
    runCount++;
    return (celsius * 9 / 5) + 32;
}

let memoizeConv = memoize(celsiusToheat)

console.log(memoizeConv(36));
console.log(memoizeConv(37));
console.log(memoizeConv(36));
console.log(memoizeConv(36));

console.log("Real function run count:", runCount);


// ## 4. Debounced API Search Simulation

// Simulate a fetch to search GitHub users using a mock API.
// Fire the search only when the user pauses typing for 600ms.

// - ✅ Use debounce()
// - ✅ Simulate delay with setTimeout()
// - ✅ Bonus: Show loading spinner during wait

function debounce1(func, delay) {
    let timer;

    return function(...args) {

        clearTimeout(timer);

        timer = setTimeout(() => {

            func.apply(this, args);

        }, delay)
    }
}

const USERS_API = 'https://api.github.com/search/users';

let searchInput = document.getElementById('users');
let loadingDiv = document.getElementById('loading');
let usersList = document.getElementById('usersList');
loadingDiv.style.display = "none";

const searchUsers = async (query) => {

    loadingDiv.style.display = "block";

    usersList.innerHTML = "";

    try {
        
        let response = await fetch(`${USERS_API}?per_page=10&q=${query}`);

        if(!response.ok) throw new Error("Error while fetching users data.");

        let users = await response.json();

        if (users.items.length === 0) {

            usersList.innerHTML = "<li>No users found</li>";
        
        } else {
            users.items.forEach(element => {

                let liElem = document.createElement('li');

                liElem.textContent = element.login;

                usersList.appendChild(liElem);
            });
        }
        
    } catch (error) {
        
        console.error('Error Occurred:', error)
        
    } finally {

        loadingDiv.style.display = "none";
    }
}

const onSearch = (e) => {

    const query = e.target.value.trim();

    if (!query) {
        usersList.innerHTML = "";
        loadingDiv.style.display = "none";
        return;
    }
    searchUsers(query)
}

const debouncedSearch = debounce1(onSearch, 600)

searchInput.addEventListener('input', debouncedSearch)

// ## 5. Cleanup Forgotten Event Listeners

// Create a modal popup that registers keyboard events (Esc to close)
// Ensure those listeners are properly cleaned up when the modal closes.

// - ✅ Prevent memory leaks
// - ✅ Bonus: Log to console when cleanup happens

// Create modal and overlay elements dynamically
const overlay = document.createElement('div');
overlay.style.position = 'fixed';
overlay.style.top = '0';
overlay.style.left = '0';
overlay.style.width = '100%';
overlay.style.height = '100%';
overlay.style.background = 'rgba(0, 0, 0, 0.5)';
overlay.style.display = 'none';
overlay.style.zIndex = '999';

const modal = document.createElement('div');
modal.style.position = 'fixed';
modal.style.top = '50%';
modal.style.left = '50%';
modal.style.transform = 'translate(-50%, -50%)';
modal.style.background = 'white';
modal.style.padding = '20px';
modal.style.borderRadius = '8px';
modal.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
modal.style.display = 'none';
modal.style.zIndex = '1000';

const content = document.createElement('div');
content.innerHTML = `
  <h2>Dynamic Modal</h2>
  <p>Press <strong>Esc</strong> to close this modal.</p>
`;
modal.appendChild(content);

// Buttons
const openBtn = document.createElement('button');
openBtn.textContent = 'Open Modal';
openBtn.style.margin = '20px';
const closeBtn = document.createElement('button');
closeBtn.textContent = 'Close';
modal.appendChild(closeBtn);

// Add to body
// document.body.appendChild(openBtn);
// document.body.appendChild(overlay);
// document.body.appendChild(modal);

function closeModal() {
    modal.style.display = "none";
    overlay.style.display = 'none';
    document.removeEventListener('keydown', handleEsc);
    console.log('Modal closed — ESC listener removed');
}

function handleEsc(e) {
    if(e.key === 'Escape') {
        closeModal();
    }
}

function openModal() {
    modal.style.display = "block";
    overlay.style.display = 'block';
    document.addEventListener('keydown', handleEsc);
    console.log('Modal opened — ESC listener added');
}

openBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// ## 6. Profile and Optimize List Rendering

// Render a list of 1,000 items with buttons to sort, filter, and shuffle.
// Measure and optimize for performance.

// - ✅ Use performance.now() or console.time()
// - ✅ Use batching or virtual DOM-like diffing
// - ✅ Bonus: Only update DOM for changed rows

const listContainer = document.getElementById('listContainer');
const stats = document.getElementById('stats');

let items = Array.from({ length: 1000}, (_, i) => ({ id: i+1, value: Math.floor(Math.random() * 1000)}));

function renderList(newItems) {
    
    let t0 = performance.now();

    let fragment = document.createDocumentFragment();

    newItems.forEach(item => {
        let liElem = document.createElement('li');
        liElem.textContent = `#${item.id}: ${item.value}`;
        liElem.dataset.id = item.id;
        liElem.style.padding = '4px 8px';
        liElem.style.borderBottom = '1px solid #ccc';
        fragment.appendChild(liElem)
    });

    listContainer.innerHTML = "";
    listContainer.appendChild(fragment);

    let t1 = performance.now();
    stats.textContent = `Rendered ${newItems.length} items in ${(t1 - t0).toFixed(2)} ms`;
}

renderList(items);

function sortItems() {
    items.sort((a, b) => a.value - b.value);
    renderList(items)
}

document.getElementById('sortBtn').addEventListener('click', sortItems)

document.getElementById('filterBtn').addEventListener('click', () => {
    const filtered = items.filter(item => item.value > 500);
    renderList(filtered);
});

 function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

document.getElementById('shuffleBtn').addEventListener('click', () => {
    shuffleArray(items);
    renderList(items);
});


// ## 7. Performance Race: Debounce vs Throttle vs Memoization

// Build a demo that lets users toggle between debounce, throttle, and memoized search strategies in a large dataset (e.g., products, cities).

// ✅ Compare:

// - Number of function calls
// - Time taken
// - Smoothness of UI

// ✅ Display performance metrics live