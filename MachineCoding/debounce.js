document.getElementById("search").addEventListener('input', function(e) {
    console.log("Inputted values : ", e.target.value);
    debouncedApi(e.target.value)
})

function makeApi(value) {

    console.log("API called with value : ", value);
}

function debounce(fn, delay) {

    let timer;

    return function(...args) {

        clearTimeout(timer);

        let context = this;

        timer = setTimeout(() => {

            fn.apply(context, args);

        }, delay);
    }
}

let debouncedApi = debounce(makeApi, 600);