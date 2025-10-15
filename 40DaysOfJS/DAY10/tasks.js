console.log("************* TASKS DAY 10 ****************");
// 1. What will be the output of the following code and why?
let user = "Alice";
function outer0() {
    function inner0() {
        console.log(user);
    }
    let user = "Bob";
    inner0();
}
outer0();
// Bob


// 2. What is the mistake in the code below?
let total = 0; // Global, bad practice
function add(num) {
    total += num;
}
add(5);
add(10);
console.log(total);
// ?

// 3. Create a function with a nested function and log a variable from the parent function.

function parent() {

    let parentVar = "I am parent variable";

    function child() {

        console.log(parentVar);
    }

    child();
}

parent()

// 4. Use a loop inside a function and declare a variable inside the loop. Can you access it outside?
function loopFunc() {
    for(let i = 0; i <= 5; i++) {
        // var loopVar = "Init";
        let loopVar = "Init";
    }
    // console.log(loopVar);
}
loopFunc();
// Ans : If variable declared with var - accessible - let and const wont be - bcoz of block scope

// 5. Write a function that tries to access a variable declared inside another function.
function firstFunc() {
    let firstVar = "Var 1"
}
function anotherFunc() {
    console.log(firstVar);
}

// 6. What will be the output and why?
// console.log(a);
// let a = 10;
// Referenceerror - because we are trying to accessing the let variable before it initialized - it is in the Temporal dead zone

// 7. Where is the age variable accessible?
function showAge() {
    let age = 25;
    console.log(age);
}
// console.log(age);
// Options:
// A: In Global
// B: Only inside showAge
// C: It will cause an error
// D: None of the above
// Ans : C : It will cause an error - because it is not defined outside function

// 8. What will be the output and explain the output?
let message = "Hello";
function outer() {
    let message = "Hi";
    function inner() {
        console.log(message);
    }
    inner();
}
outer();
// Hi - Scope chain

// 9. What will be the output and why?
let x = "Global";
function outer() {
    let x = "Outer";
    function inner() {
        let x = "Inner";
        console.log(x);
    }
    inner();
}
outer();
// Inner - outer function variable shadows global variable

// 10. What will be the output and why?
function counter() {
    let count = 0;
    return function () {
        count--;
        console.log(count);
    };
}
const reduce = counter();
reduce(); // -1
reduce(); // -2

// scope chain