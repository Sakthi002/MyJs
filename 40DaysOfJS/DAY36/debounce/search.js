const data = Array.from({ length: 10000 }, (_, i) => `Item ${i+1}`);

function searchArray(query) {

    console.log("Search Executed", performance.now());

    let resultBox = document.querySelector("#results");

    let filteredData = data.filter(item => item.toLowerCase().includes(query.toLowerCase()));

    if(!query.trim()) {
        resultBox.innerHTML = "";
        return;
    }

    const limited = filteredData.slice(0, 20);

    resultBox.innerHTML = `
        <strong>Showing ${limited.length} of ${
        filteredData.length
    } result(s)</strong>
        <ul>${limited.map((item) => `<li>${item}</li>`).join("")}</ul>
      `;
}

const doSearch = (e) => {
    const query = e.target.value;
    searchArray(query);
}

function debounce (fn, delay) {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this,args)
        }, delay)
    }
}
const debouncedSearch = debounce((e) => {
    const query = e.target.value;
    searchArray(query);
},500)

document.getElementById("search").addEventListener('input', debouncedSearch);
