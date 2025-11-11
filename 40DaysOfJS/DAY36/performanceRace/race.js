
let resultsContainer = document.getElementById('results');

let items = Array.from({ length: 1000 }, (_, i) => `City-${i+1}`);

let mode = "debounce";
let calls = 0;

let callsEl = document.getElementById('calls');
let timeEl = document.getElementById("time");
const modeEl = document.getElementById('mode');

function debounce(fn, delay) {

    let timer;
    
    return function(...args) {
    
        clearTimeout(timer);
    
        timer = setTimeout(() => {
    
            fn.apply(this, args);
    
        }, delay);
    }
}

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

function memoize(fn) {

    let cache = {};

    return function(...args) {

        let key = JSON.stringify(args);

        if(cache[key]) {

            console.log("Cache hit:");
            
            return cache[key];
        
        } else {

            console.log("Cache miss:");

            let result = fn.apply(this, args);

            cache[key] = result;
            
            return result;
        }
    }
}

function renderResults(list) {
    
    let resultsFragment = document.createDocumentFragment();

    list.slice(0, 100).forEach(city => {

        let liElem = document.createElement('li');

        liElem.textContent = city;

        resultsFragment.appendChild(liElem)
    })

    resultsContainer.appendChild(resultsFragment);
}

function searchCities(query) {

    calls++;

    callsEl.textContent = calls;

    resultsContainer.innerHTML = "";

    let start = performance.now();

    let filtered = items.filter(city => city.toLowerCase().includes(query.toLowerCase()));

    let end = performance.now();

    timeEl.textContent = (end - start).toFixed(2);

    renderResults(filtered);
}

let debouncedSearch = debounce(searchCities, 500);
let throttledSearch = throttle(searchCities, 500);
let memoizeSearch = memoize(searchCities);

const doSearch = (e) => {

    let query = e.target.value;

    if(!query.trim()) {

        resultsContainer.innerHTML = "";

        return;
    }

    if (mode === 'debounce') debouncedSearch(query);
    else if (mode === 'throttle') throttledSearch(query);
    else if (mode === 'memo') memoizeSearch(query); 
}

document.getElementById('mode-debounce').onclick = () => setMode('debounce');
document.getElementById('mode-throttle').onclick = () => setMode('throttle');
document.getElementById('mode-memo').onclick = () => setMode('memo');
  
function setMode(newMode) {
    mode = newMode;
    modeEl.textContent = newMode[0].toUpperCase() + newMode.slice(1);
    calls = 0;
    callsEl.textContent = 0;
    timeEl.textContent = 0;
    resultsContainer.innerHTML = '';
    document.getElementById("searchBox").value = '';
}

document.getElementById("searchBox").addEventListener('input', doSearch);