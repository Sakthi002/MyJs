// HIGHER ORDER FUNCTIONS
// A function which takes other function as arguments or return functions

// TOPICS
    // 1. map, filter, reduce
    // 2. currying
    // 3. composition

//===============================================================================================================================
// PROBLEM 1
// Sum of squares of even numbers in an array.
function sumOfEvenSquare(arr) {

    let result = arr.filter(num => num % 2 === 0).map(num => num * num).reduce((acc, num) => acc + num, 0);
    
    return result;
}

console.log(sumOfEvenSquare([2,4,3,5,7, 10,22]));

// USING RECUSRION
function sumOfEvenSquareRecursive(arr, index = 0) {

    if(index >= arr.length) return 0;

    let num = arr[index];

    if(num % 2 === 0) {
        
        return num * num + sumOfEvenSquareRecursive(arr, index + 1);
    
    } else {

        return sumOfEvenSquareRecursive(arr, index + 1);
    }
}

console.log(sumOfEvenSquare([2,4,3,5,7, 10,22]));
//===============================================================================================================================
// PROBLEM 2
// Implement your own map.
// Map - takes array as an input - transforms the element based on logic - returns new array
function double(value) {
    return value * 2
}

function customMap(arr, cb) {

    let result = [];

    for(let i = 0; i < arr.length; i++) {
        
        result.push(cb(arr[i], i, arr))
    }

    return result;
}

console.log(customMap([1,2,3], double));

Array.prototype.myMap = function(cb) {

    let result = [];
    
    for(let i = 0; i < this.length; i++) {
    
        result.push(cb(this[i], i, this))
    }
    
    return result;
}

console.log([10,20,30].myMap((num) => num * 2));
//===============================================================================================================================
// PROBLEM 3
// Implement your own filter.
// Filter - takes array as input - filter the based on condition function - returns new array
function lessThan10(value) {
    
    return value < 10;
}

function customFilter(arr, cb) {

    let result = [];

    for(let i = 0; i < arr.length; i++) {

        if(cb(arr[i], i, arr)) {

            result.push(arr[i])
        }
    }

    return result;
}

console.log(customFilter([7,1,3,11,14,5], lessThan10));

Array.prototype.myFilter = function(cb) {
    let result = [];
    for(let i = 0; i < this.length; i++) {
        if(cb(this[i], i, this)) {
            result.push(this[i])
        }
    }
    return result;
}

console.log([7,1,3,11,14,5].myFilter(lessThan10));
//===============================================================================================================================
// PROBLEM 4
// Implement your own reduce.
// Reduce - iterates over array - applies callback function on each element - and accumulates a single value
// Optionally we can provide initial value else it will take first value of array 

function sum(acc, curr) {

    return acc + curr
}

function customReduce(arr, cb, initValue) {

    let result;
    let i = 0;

    if(initValue !== undefined) {
       
        result = initValue;
    
    } else {
    
        if(arr.length === 0) throw new Error('Empty Array');
    
        result = arr[0];
    
        i = 1
    }

    for(let i = 0; i < arr.length; i++) {

        result = cb(result, arr[i])
    }

    return result;
}

console.log(customReduce([1,2,3,5], sum));

Array.prototype.myReduce = function(cb, initValue) {

    let result;
    let i = 0;

    if(initValue !== undefined) {
       
        result = initValue;
    
    } else {
    
        if(this.length === 0) throw new Error('Empty Array');
    
        result = this[0];
    
        i = 1
    }

    for(; i < this.length; i++) {

        result = cb(result, this[i])
    }

    return result;
}

console.log([3,2,4].myReduce((acc, curr) => acc * curr));
//===============================================================================================================================
// PROBLEM 5
// Compose two functions: double and increment.
// Function Composition
// Chaining multiple functions to form a new function
// Output of one function becomes input of the next function in the chain

// WITH REDUCERIGHT AND SINGLE ARGUMENTS
function compose(...functions) {

    return function(value) {

        return functions.reduceRight((acc, curr) => {

            return curr(acc)
        }, value)
    }
}

// FOR MORE GENERIC MULTIPLE ARGUMENTS
function genericCompose(...funcs) {
    
    return function(...args) {

        let result = funcs[funcs.length - 1](...args);
        
        for(let i = funcs.length - 2 ; i >= 0; i--) {

            result = funcs[i](result)
        }

        return result
    }
}

function double(x) {
    return x * 2;
}

function increment(x) {
    return x + 1
}

let doubleAndIncrement = genericCompose(double, increment);
console.log(doubleAndIncrement(10));

function pipe(...functions) {

    return function(...args) {

        let result = functions[0](...args);
        
        for(let i = 1; i < functions.length; i++) {

            result = functions[i](result)
        }

        return result
    }
}

function add(x, y) {
    return x + y;
}

function increment(x) {
    return x + 1
}

let doubleAndIncrement1 = pipe(add, increment);
console.log(doubleAndIncrement1(10, 20));

//===============================================================================================================================
// PROBLEM 6
// Use map to double all numbers in an array.
const doubleArr = (arr) => arr.map(num => num * 2)
console.log(doubleArr([1,2,3,4,5]), 'map');
//===============================================================================================================================
// PROBLEM 7
// Use filter to get all even numbers.
const filterEvenNums = (arr) => arr.filter(num => num % 2 === 0);
console.log(filterEvenNums([1,2,3,4,5]), 'filter');
//===============================================================================================================================
// PROBLEM 8
// Use reduce to calculate the sum of numbers.
const reduceSum = (arr) => arr.reduce((acc, cur) => acc + cur);
console.log(reduceSum([1,2,3,4,5]), 'reduce');
//===============================================================================================================================
// PROBLEM 9
// Implement a function that takes an array and a callback, and returns the first element passing the callback.
function returnTest(arr, cb) {
    for(let i = 0; i < arr.length; i++) {
        if(cb(arr[i])) {
            return arr[i]
        }
    }
}
function cb1(num) {
    return num
}
console.log(returnTest([1,2,3], cb1));
//===============================================================================================================================
// PROBLEM 10
// Count occurrences of each element in an array using reduce.
function occurrences(arr) {
    return arr.reduce((acc, cur) => {
        cur = String(cur).toLowerCase()
        acc[cur] = (acc[cur] || 0) + 1  
        return acc;
    }, {})
}
console.log(occurrences([1,2,3,4,3,2]));
console.log(occurrences(['Apple', 'Orange', 'Banana', 'apple']));
//===============================================================================================================================
// PROBLEM 11
// Flatten an array of arrays using reduce.
function flatArrs(arr) {

    return arr.reduce((acc, cur) => {

        if(Array.isArray(cur)) {
           
            return acc.concat(flatArrs(cur))
        
        } else {
           
            return acc.concat(cur);
        }

    }, []);
}

console.log(flatArrs([1,2,3,[4,5, [6,7]]]));
//===============================================================================================================================
// PROBLEM 12
// PARTIAL FUNCTION
// Fixed some arguments and returns a function to get remaining arguments
// We can do partial functions in 2 ways - Partial helper and with bind
function mulitply(a,b,c) {
    return a * b * c;
}

function multiplyBy2(b,c) {
    return mulitply(2, b, c)
}

console.log(multiplyBy2(3,4));

function partial(fn, ...fixedArgs) {

    return function(...remainingArgs) {

        return fn(...fixedArgs, ...remainingArgs)
    }
}

let resp = partial(mulitply, 2);
console.log(resp(3,4));

function greeting(greet, name) {
    return `${greet}, ${name}`
}

let greetFunc = greeting.bind(null, 'Hello');
console.log(greetFunc('Sakthi'));
//===============================================================================================================================
// PROBLEM 13
// CURRYING
// Transforming a function which takes multiple arguments into sequence functions each takes single argument until all args provided
function multiple3(x,y,z) {
    return x * y * z;
}

function multiple1(x) {

    return function multiple2(y) {

        return function multiple3(z) {

            return x * y * z;
        }
    }
}

console.log(multiple3(1,2,3));
console.log(multiple1(1)(2)(3));

// Infinite Currying
function rcurry(a) {

    return function (b) {

        if(b === undefined) return a;

        return rcurry(a + b)
    }
}

console.log(rcurry(1)(2)(3)(4)());

function curry(func) {

    let cache = {};

    return function curried(...args) {

        if(func.length === args.length) {

            let key = JSON.stringify(args);

            if(cache[key]) {

                return cache[key]
            }

            let result = func.apply(null, args)

            cache[key] = result;

            return result;
        }

        return function(...more) {

            return curried(...args, ...more)
        }
    }
}

function cAdd(a, b, c) {

    return a + b + c;
}

let cFunc = curry(cAdd);
console.log(cFunc(1,2)(4))
//===============================================================================================================================
// PROBLEM 14
// COMPOSE
// Chanining multiple functions to form a new function - output of one function becomes input to the next function

function double(x) {
    return x * 2;
}

function increment(x) {
    return x + 1;
}

function subtract(x) {
    return x - 1;
}

console.log(subtract(increment(double(10))));

function compose(...functions) {

    return function (value) {

        return functions.reduceRight((acc, fun) => {

            acc = fun(acc);

            return acc;

        }, value)
    }
}

let compFunc = compose(double, increment);
console.log(compFunc(10));

function addC(a, b){

    return a + b;
}

function argCompose(...functions) {

    return function(...args) {

        let result = functions[functions.length - 1](...args);

        for(let i = functions.length - 2; i >= 0; i--) {

            result = functions[i](result)
        }

        return result;
    }
}

let compFunc1 = argCompose(increment, add);
console.log(compFunc1(3,4));
//===============================================================================================================================
// PROBLEM 15
// Implement once — a function that can be called only once.

function once(fn) {

    let called;
    let result;
    let error;

    return function (...args) {

        if(called) {

            if(error) return error;

            return result;
        }

        called = true;

        try {

            result = fn.apply(null, args);

            return result;

        } catch(err) {

            error = err;

            return error;
        }
    }
}

async function setup () {
    console.log('Iniitializing setup');
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let result = await response.json()
    
    return result;
}

const init = once(setup);
init().then(data => console.log("First call:", data));
init().then(data => console.log("Second call (cached):", data));


//===============================================================================================================================
//===============================================================================================================================
//===============================================================================================================================
//===============================================================================================================================
//===============================================================================================================================
//===============================================================================================================================
//===============================================================================================================================
//===============================================================================================================================
//===============================================================================================================================
//===============================================================================================================================
//===============================================================================================================================
//===============================================================================================================================
//===============================================================================================================================
//===============================================================================================================================
//===============================================================================================================================
//===============================================================================================================================
//===============================================================================================================================
//===============================================================================================================================
//===============================================================================================================================
//===============================================================================================================================
//===============================================================================================================================
//===============================================================================================================================
//===============================================================================================================================
//===============================================================================================================================
//===============================================================================================================================
//===============================================================================================================================
//===============================================================================================================================
//===============================================================================================================================
//===============================================================================================================================
//===============================================================================================================================
//===============================================================================================================================
//===============================================================================================================================
//===============================================================================================================================
//===============================================================================================================================
//===============================================================================================================================
//===============================================================================================================================
//===============================================================================================================================
//===============================================================================================================================
//===============================================================================================================================
//===============================================================================================================================
//===============================================================================================================================
//===============================================================================================================================
//===============================================================================================================================
//===============================================================================================================================
//===============================================================================================================================
//===============================================================================================================================
//===============================================================================================================================
//===============================================================================================================================
//===============================================================================================================================