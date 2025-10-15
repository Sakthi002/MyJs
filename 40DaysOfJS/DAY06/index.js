console.log("DAY 06");

// Function defnition/declaration
function printThis() {
    console.log("Print this");
}
printThis();

// Function Expression
let fun = function () {
    console.log("I am expression")
}
fun();

// Parameters & Arguments
function sum (a, b) { // a, b are parameters
    const result = a + b;
    console.log(result);
}
sum(10,4); // 10, 4 are arguments

// Return
function sum1(a, b) {

    return a + b;
}

let result = sum1(10,9);

console.log(result);

function double(x) {

    return 2 * x;
}

console.log(double(result));

// Default parameters

function calc(a = 0, b = 0) {

    return (2 * (a + b))
}

let resVar = calc(2,3);
console.log(resVar);

// Rest Parameter

function multipleArgs(x, y, ...rest) {
    console.log(x,y,rest);
}

multipleArgs(1,2,3,4,5,6,7,8,9)

// Nested functions

function outer() {
    function inner() {
        return "Hello from inner function";
    }
    return inner;
}

let retFunc = outer();
console.log(retFunc());

// Callback functions

let callBuzz = true;

function foo(func) {
    console.log('foo');
    if(callBuzz) {
        func();
    }
}

let buzz = function () {
    console.log('buzz');
}

foo(buzz)

// Pure functions

function greeting(name) {

    return "Hello " + name;
}

console.log(greeting("Sakthi"));
console.log(greeting("Sakthi"));
console.log(greeting("Sakthi"));
console.log(greeting("Sakthi"));

// Impure functions

let greetMsg = "Hi ";

function greeting1(name) {

    return greetMsg + name;
}

console.log(greeting1("Sakthi"));
console.log(greeting1("Sakthi"));
greetMsg = "Hey ";
console.log(greeting1("Sakthi"));

// Higher Order Functions

function getCamera(camera) {
    camera();
}

getCamera(function () {
    console.log("Sony");
})

function applyOperation (x, y, operation) {

    operation(x, y);
}

function add (x, y) {
    console.log(x + y);
}

function multiply (x, y) {
    console.log(x * y);
}

applyOperation(2,3, add)
applyOperation(2,3, multiply)

function createMultiplier(factor) {

    return function (x) {
        console.log(x * factor);
        
    }
}

let multipleBy2 = createMultiplier(2);
let multipleBy3 = createMultiplier(3);

multipleBy2(5); //10
multipleBy3(5); //15

// Arrow function
let greetMe = msg => console.log(msg);
greetMe("Hello there")

let addval = (x, y) => x + y;
console.log(addval(2,3));

// IIFE

(function(count) {
    console.log("IIFE", count);
    
})(1)

// Recursive function

// function foo () {
//     foo()
// }

// foo();

function fetchWater(count) {

    console.log("Fetching water...", count);

    if(count === 0) {
        console.log("No more water to fetch");
        return
    }

    fetchWater(count - 1)
}

fetchWater(5);

function factorial(n) {

    console.log(n);

    if(n === 0) {
        return 1
    }
    
    return n * factorial(n -1)
}

console.log(factorial(5))












