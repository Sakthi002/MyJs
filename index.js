document.getElementById('search').addEventListener('input', function(e) {
    debouncedApi(e.target.value, 'ss');
})

function makeApi(value) {
    console.log('Api Called', value);
}

const debouncedApi = debounce(makeApi, 600);

function debounce(fn, delay) {

    let timer;

    return function(...args) {

        console.log(args, 'rfg');
        
        let context = this;

        clearTimeout(timer);

        timer = setTimeout(() => {

            fn.apply(context, args)
        }, delay)
    }
}

function recursiveCurry(a) {

    return function (b) {

        if(b === undefined) return a;

        return recursiveCurry(a + b);
    }
}

let res = recursiveCurry(1)(2)(10)();
console.log(res);

let arr = [1,2,3,4,5,6,4,4];

console.log(arr.filter((num, index, self) => self.indexOf(num) === index));

let arr1 = [1,2,5,4,3];

// arr1.sort((a,b) => b - a);

// console.log(arr1);

for(let i = 0; i < arr1.length;i++) {

    for(let j = i + 1; j < arr1.length; j++) {

        if(arr1[i] < arr1[j]) {
            let temp = arr1[i];
            arr1[i] = arr1[j]
            arr1[j] = temp
        }
    }
}

console.log(arr1, 'k');




