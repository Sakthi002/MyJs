console.log("Tasks - Day 38");
// # Tasks

// ## 1. Identify Reachable vs Unreachable Objects

// Write a small program where:

// - You create an object user
// - Create a second object profile that references user
// - Then set user = null

// Is the original user object still reachable? Why or why not?

let user = { name: "Sakthi" };

let second = user;

user = null;

console.log(user); // reference removed - not reachable
console.log(second); // points the user object - reachable

// original object user - yes reachable - second object still references it

// ## 2. Simulate and Break a Cyclic Reference

// Observe how cyclic references can cause memory retention.

// - Create two objects a and b
// - Make them reference each other (a.ref = b and b.ref = a)
// - Nullify external references to both

// Explain why this may or may not cause a memory leak. Add a.ref = null; b.ref = null; and explain how it helps

function createCycle1(a, b) {
    a.ref = b;
    b.ref = a;
    a= null;
    b.ref= null;
    return {
        a: a,
        b: b
    }
}

const cycle1 = createCycle1({salary: 100},{salary: 200});

console.log(cycle1);


// ## 3. DOM Leak Detection and Fix

// Learn how DOM elements and closures can create memory leaks.

// - Create a button using JavaScript
// - Add an event listener that references a variable outside the listener
// - Remove the button from the DOM, but not the event listener

// Identify the leak & fix it.

const btn = document.createElement('button');
btn.setAttribute('type', 'button');
btn.textContent = "Click Me";

document.body.appendChild(btn);

let count = 0;

function handleClick() {
    count++;
    console.log(count);
}

btn.addEventListener('click', handleClick);
btn.removeEventListener('click', handleClick);

btn.remove();