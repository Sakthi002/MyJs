console.log("DAY 27 - TASKS - ***********");
// # Tasks

// ## 1. What's the output of the code below?

// ```js
// function f1() {
//     console.log('f1');
// }

// function f2() {
//     console.log('f2');
// }

// function f3() {
//     console.log('f3');
// }

// function f4() {
//     console.log('f4');
// }

// console.log("Let's do it!");

// setTimeout(function() {f1();}, 0);

// f4();

// setTimeout(function() {f2();}, 5000);

// setTimeout(function() {f3();}, 3000);

// Let's do it!, f4, f1, f3, f2
// ```

// Options are,

// - Let's do it!, f4, f1, f3, f2
// - Let's do it!, f1, f3, f2, f4
// - Let's do it!, f1, f2, f3, f4
// - Let's do it!, f1, f4, f2, f3

// ## Example Answer: Let's do it!, f4, f1, f3, f2

// Explanation:

// "Let's do it!" is executed immediately on the Execution Stack.
// setTimeout(f1, 0) is handed off to the browser’s Web API, which sets a 0 ms timer. Once complete, f1 is placed in the Callback Queue
// f4() is called synchronously, added to the Execution Stack, and executed.
// After the main script finishes, the call stack is empty, so the Event Loop checks the callback queue.
// The Event Loop finds f1 in the queue and pushes it to the call stack for execution.
// Meanwhile, setTimeout(f3, 3000) and setTimeout(f2, 5000) start their timers in the browser’s Web API environment.
// After 3 seconds, the timer for f3 expires, and f3 is added to the callback queue. The Event Loop moves it to the stack and executes it.
// After 5 seconds, the timer for f2 expires, and f2 is added to the callback queue. The Event Loop moves it to the stack and executes it.

// ## 2. What's the output of the code below?

// ```js
// function f1() {
//     console.log('f1');
// }

// console.log("Let's do it!");

// setTimeout(function() {console.log('in settimeout');}, 0);

// f1();
// f1();
// f1();
// f1();
// ```

// Let's do it!, f1, f1, f1, f1, in settimeout

// Options are,

// - Let's do it!, in settimeout, f1, f1, f1, f1
// - Let's do it!, f1, f1, f1, f1, in settimeout
// - Let's do it!, f1, , in settimeout, f1, f1, f1

// ## Answer: Let's do it!, f1, f1, f1, f1, in settimeout

// Explanation

// "Let's do it!" is executed immediately on the call stack.
// setTimeout(..., 0) is handed to the Web API, which sets a 0 ms timer. When it finishes, the callback (console.log('in settimeout')) is placed in the callback queue.
// f1() is called synchronously four times. Each call is pushed onto the call stack, executed, and logs 'f1' immediately.
// Once all synchronous code (f1() calls) has finished, the call stack becomes empty.
// The event loop checks the callback queue, finds the pending setTimeout callback, and moves it to the call stack for execution.
// The callback executes, printing 'in settimeout'.

// ## 3. Which statements are `true`? Select multiple

// - [ ] JavaScript is single-threaded
// - [ ] By default, JavaScript is synchronous
// - [ ] Only promises make JavaScript asynchronous
// - [ ] All function callbacks are asynchronous

// ## Answer
    // - [ ] JavaScript is single-threaded
    // - [ ] By default, JavaScript is synchronous

// ## 4. Which statement is `true`? Select Only one

// - (_) JavaScript Function Execution Stack(Call Stack) never gets empty.
// - (_) The job queue gets higher priority than the callback queue.
// - (_) The only job of Event Loop is to manage the Call Stack
// - (_) The StackOverflow exception is random.

// ## Answer
    // - (_) The job queue gets higher priority than the callback queue.

// ### 5. Guess the output

// ```js
// const tom = () => console.log('Tom');

// const jerry = () => console.log('Jerry');

// const cartoon = () => {
//   console.log('Cartoon');

//   setTimeout(tom, 5000);

//   new Promise((resolve, reject) =>
//     resolve('should it be right after Tom, before Jerry?')
//   ).then(resolve => console.log(resolve))

//   jerry();
// }

// cartoon();

// ```

// Options are,

// - Cartoon, Jerry, should it be right after Tom, before Jerry?, tom
// - Cartoon, Tom, Jerry, should it be right after Tom, before Jerry?,
// - Cartoon, Tom, should it be right after Tom, before Jerry?, Jerry
// - Error

// ## Answer : Cartoon, Jerry, should it be right after Tom, before Jerry?, Tom

// "Cartoon" is executed immediately on the call stack.
// setTimeout(tom, 5000) is handed to the Web API, which sets a 5-second timer. After 5 seconds, tom will be placed in the callback queue.
// The Promise is created and resolved immediately, scheduling its .then() callback in the microtask queue.
// jerry() is called synchronously, pushed onto the call stack, and executed.
// Once all synchronous code finishes, the call stack becomes empty.
// The event loop checks the microtask queue first, finds the pending .then() callback, and moves it to the call stack for execution.
// After the 5-second timer expires, the event loop moves tom from the callback queue to the call stack for execution.
// The tom() function executes, printing "Tom".


// ### 6. Guess the output

// ```js
// const tom = () => console.log('Tom');
// const jerry = () => console.log('Jerry');
// const doggy = () => console.log('Doggy');

// const cartoon = () => {
//   console.log('Cartoon');

//   setTimeout(tom, 50);
//   setTimeout(doggy, 30);

//   new Promise((resolve, reject) =>
//     resolve('I am a Promise, right after tom and doggy! Really?')
//   ).then(resolve => console.log(resolve));
//   new Promise((resolve, reject) =>
//     resolve('I am a Promise after Promise!')
//   ).then(resolve => console.log(resolve));

//   jerry();
// }

// cartoon();
// ```

// Options are,

// - Cartoon, Jerry, I am a Promise, right after tom and doggy! Really?, I am a Promise after Promise!, , Tom, Doggy
// - Cartoon, Jerry, I am a Promise after Promise!, I am a Promise, right after tom and doggy! Really?, Doggy, Tom
// - Cartoon, Jerry, I am a Promise, right after tom and doggy! Really?, I am a Promise after Promise!, Doggy, Tom
// - Cartoon, Tom, Doggy, I am a Promise, right after tom and doggy! Really?, I am a Promise after Promise!, Jerry
// - None of the above.

// ## Answer : Cartoon, Jerry, I am a Promise, right after tom and doggy! Really?, I am a Promise after Promise!, Doggy, Tom

// Explanation

// "Cartoon" is executed immediately on the call stack.
// setTimeout(tom, 50) is handed to the Web API, which sets a 50 ms timer.
// setTimeout(doggy, 30) is handed to the Web API, which sets a 30 ms timer.
// The first Promise is created and resolved immediately, scheduling its .then() callback ("I am a Promise, right after tom and doggy! Really?") in the microtask queue.
// The second Promise is also created and resolved immediately, scheduling its .then() callback ("I am a Promise after Promise!") in the microtask queue.
// jerry() is called synchronously, pushed onto the call stack, and executed.
// Once all synchronous code finishes, the call stack becomes empty.
// The event loop checks the microtask queue first and executes all pending Promise callbacks in order of creation:
// 1. "I am a Promise, right after tom and doggy! Really?"
// 2. "I am a Promise after Promise!"
// After all microtasks are complete, the event loop checks the callback queue.
// The 30 ms timer expires first, moving doggy() to the call stack and executing it.
// Then, the 50 ms timer expires, moving tom() to the call stack and executing it.


// ### 7. Guess the output

// ```js
// const f1 = () => console.log('f1');
// const f2 = () => console.log('f2');
// const f3 = () => console.log('f3');
// const f4 = () => console.log('f4');

// f4();

// setTimeout(f1, 0);

// new Promise((resolve, reject) => {
//     resolve('Boom');
// }).then(result => console.log(result));

// setTimeout(f2, 2000);

// new Promise((resolve, reject) => {
//     resolve('Sonic');
// }).then(result => console.log(result));

// setTimeout(f3, 0);

// new Promise((resolve, reject) => {
//     resolve('Albert');
// }).then(result => console.log(result));
// ```

// Options are,

// - f4, Boom, Sonic, Albert, f1, f3, f2
// - f4, f1, Boom, f2, Sonic, f3, Albert
// - f4, Boom, Sonic, Albert, f3, f1, f2
// - f4, Boom, Sonic, Albert, f1, f2, f3

// ## Answer: f4, Boom, Sonic, Albert, f1, f3, f2

// Explanation

// f4() is called synchronously and executed first, printing "f4".
// setTimeout(f1, 0) is handed to the Web API, which sets a 0 ms timer. Once complete, f1 is placed in the callback queue.
// A Promise is created and immediately resolved with "Boom". Its .then() callback is scheduled in the microtask queue.
// setTimeout(f2, 2000) is handed to the Web API, which sets a 2-second timer.
// Another Promise is created and resolved with "Sonic". Its .then() callback is also added to the microtask queue (after Boom’s).
// setTimeout(f3, 0) is handed to the Web API, which sets a 0 ms timer. Once complete, f3 is placed in the callback queue (after f1).
// A final Promise is created and resolved with "Albert". Its .then() callback is scheduled in the microtask queue (after Sonic’s).
// All synchronous code finishes — the call stack is empty.
// The Event Loop now checks the microtask queue first:
// 1. Logs "Boom"
// 2. Logs "Sonic"
// 3. Logs "Albert"
// After all microtasks finish, the Event Loop processes the callback (macrotask) queue:
// 1. Executes f1 (0 ms timeout)
// 2. Executes f3 (0 ms timeout)
// 3. Executes f2 (after 2000 ms delay)

// ### 8. Guess the output

// ```js
const f1 = () => {
    console.log('f1');
    f2();
}
const f2 = () => console.log('f2');
const f3 = () => console.log('f3');
const f4 = () => console.log('f4');

f4();

setTimeout(f1, 0);

new Promise((resolve, reject) => {
    resolve('Sonic');
}).then(result => console.log(result));

setTimeout(f3, 0);

new Promise((resolve, reject) => {
    resolve('Albert');
}).then(result => console.log(result));
// ```

// Options are,

// - f4, f1, f2, Sonic, f3, Albert
// - f4, Sonic, Albert, f3, f1, f2
// - f4, Sonic, Albert, f1, f2, f3
// - f4, Albert, Sonic, f1, f2, f3

// ## Answer: f4, Sonic, Albert, f1, f2, f3

// Explanation

// f4() is called synchronously and executed first, printing "f4".
// setTimeout(f1, 0) is handed to the Web API, which sets a 0 ms timer. Once complete, f1 will be added to the callback queue.
// A Promise is created and immediately resolved with "Sonic". Its .then() callback is placed in the microtask queue.
// setTimeout(f3, 0) is handed to the Web API, which sets a 0 ms timer. Once complete, f3 will also be added to the callback queue (after f1).
// Another Promise is created and immediately resolved with "Albert". Its .then() callback is placed in the microtask queue (after Sonic).
// The synchronous code is now finished, and the call stack is empty.
// The Event Loop checks the microtask queue first:
// 1. Logs "Sonic"
// 2. Logs "Albert"
// After all microtasks finish, the Event Loop processes the callback (macrotask) queue:
// 1. Executes f1 → logs "f1" and then immediately calls f2(), which logs "f2".
// 2. Executes f3 → logs "f3".
