async function onSearch(event, customValue) {

    console.log(customValue)

    try {

        let results = await fetch('https://jsonplaceholder.typicode.com/posts?title_like='+event.target.value);
    
        let data = await results.json();
    
        console.log(data)
  
    } catch (err) {
  
        console.log(err)
    }
}

function debounce (fn, delay) {

    let timer;

    return function (...args) {
    
        clearTimeout(timer);

        let context = this;

        timer = setTimeout(function() {
      
            fn.apply(context, args)

        }, delay)
    }
}

const doSearch = debounce((e) => onSearch(e, 'custom'), 400);
