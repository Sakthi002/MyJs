console.log("*********************TASKS DAY 22*********************");
// 1. Pass a function to greet a user and then thank them
function greet(name, callback) {
    console.log(`Hello ${name}`);
    callback()
}

greet("Sakthi", function() {
    console.log("Thank you");
})
// 2. Implement a calculator function that accepts two numbers and a callback to perform operations like add, subtract
// function calculator(a, b, operationCallback) {
//   // Complete this function
// }

// function add(x, y) {
//   return x + y;
// }

// // Test calculator(5, 3, add);
// Also test it with subtract, multiply, divide functions.

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function calculator(x, y, callback) {
    return callback(x, y);
}

console.log(calculator(5, 3, add));
console.log(calculator(5, 3, subtract));
console.log(calculator(5, 3, multiply));
console.log(calculator(5, 3, divide));
 
// 3. Create a delayedMessage function that prints a message after a delay using setTimeout
// function delayedMessage(message, delay, callback) {
//   // Your code here
// }

// // delayedMessage("Task complete", 2000, () => console.log("Callback Fired!"))

function delayedMessage(message, delay, callback) {

    setTimeout(() => {
        console.log(message);
        callback();
    }, delay)
}

delayedMessage("Task complete", 2000, () => console.log("Callback Fired!"))

// 4. Implement a function that filters numbers in an array based on a condition provided via callback
// function filterNumbers(arr, conditionCallback) {
//   // Use loop and callback to return filtered array
// }

// // Example: filterNumbers([1, 2, 3, 4], n => n > 2) // should return [3, 4]

function filterNumbers(arr, conditionCallback) {

    let result = [];

    for(let i = 0; i < arr.length; i++) {
        
        if(conditionCallback(arr[i])) {

            result.push(arr[i])
        }
    }

    return result;
}

console.log(filterNumbers([1, 2, 3, 4], n => n > 2));

// 5. Execute a sequence of tasks one after another using callbacks
function task1(callback) {
  console.log("Task 1 done");
  callback();
}

function task2(callback) {
  console.log("Task 2 done");
  callback();
}

function task3() {
  console.log("Task 3 done");
}

// // Call them in sequence using nested callbacks

task1(function () {
    task2(function () {
        task3()
    })
})