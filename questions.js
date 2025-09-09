// 1.DIFFERENCE BETWEEN Number.isFinite() AND global isFinite()
// ===============================================================
// Number.isFinite() - determines whether the passed value is a finite number
// global isFinite() - converts the argument to a number, and returns true if the result is a finite number
// Example: 
    // Number.isFinite("25"); // false
    // isFinite("25"); // true

// 2. WHAT IS THIS KEYWORD IN JAVASCRIPT?
// ========================================
// The JavaScript this keyword refers to the object it belongs to. It has different values depending on where it is used:
// In a method, this refers to the owner object.
// Alone, this refers to the global object.
// VALUE OF THIS - WILL BE EQUAL TO WHATEVER IS LEFT OF THE DOT
// WHEN YOU CALL THE FUNCTION ON NOTHING, BUT THE FUNCTION COMES FROM A CLASS, THE VALUE OF THIS WILL BE UNDEFINED.
// EXAMPLE:
// function whatIsThis() {
//     console.log('The value of this is :',this);
// }
// const normalObj = {
//     name : 'normal',
//     whatIsThis: whatIsThis
// }
// whatIsThis(); // The value of this is : Window object
// normalObj.whatIsThis(); // The value of this is : normalObj

// 3. WHAT IS STATIC KEYWORD IN JAVASCRIPT?
// =========================================
// The static keyword defines a static method for a class. 
// Static methods are called without instantiating their class and cannot be called through a class instance. 
// Static methods are often used to create utility functions for an application.

// 4. WHAT IS CALL, APPLY AND BIND? AND HOW DO THEY DIFFER?
// ========================================================
// CALL: The call() method calls a function with a given this value and arguments provided individually.
// APPLY: The apply() method calls a function with a given this value, and arguments provided as an array (or an array-like object).
// BIND: The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

// 5. FIND THE OUTPUT OF THE FOLLOWING CODE:
// ==========================================
// ARROW FUNCTION DOES NOT HAVE ITS OWN THIS VALUE, IT USES THE THIS VALUE OF THE ENCLOSING EXECUTION CONTEXT.
// NON ARROW FUNCTION HAS ITS OWN THIS VALUE.
// class CatNew5 {
//     constructor(name) {
//         this.firstName = name;
//     }
//     superGreet() {
//         console.log('#1 : I am ' + this.firstName);
//         setTimeout(function() {
//             console.log(this); // window object
//             console.log('#2 : I am ' + this.firstName);
//         },500);

//         setTimeout(() => {
//             console.log(this); // CatNew5 {firstName: 'Blue'} - Arrow function does not have its own this
//             console.log('#3 : I am ' + this.firstName);
//         },1000);
//     }
// }
// ANSWER:
// const catNew5 = new CatNew5('Blue');
// catNew5.superGreet();
// #1 : I am Blue
// Window object
// #2 : I am undefined
// CatNew5 {firstName: 'Blue'}
// #3 : I am Blue
// Reason : Arrow function does not have its own this, it uses the this value of the enclosing execution context.

// 6. WHAT IS THE DIFFERENCE BETWEEN FUNCTION DECLARATION AND FUNCTION EXPRESSION?
// ================================================================================

// FUNCTION DECLARATION:
// =====================
// Function declarations are hoisted, meaning they are loaded into memory at the 
// creation phase of the execution context. This allows them to be called before 
// they appear in the code.

// FUNCTION EXPRESSION:
// ====================
// Function expressions are not hoisted. They are loaded into memory only when the 
// interpreter reaches that line of code during the execution phase. As a result, 
// they cannot be called before they are defined in the code.

// In JavaScript, a function can be written in two ways:

// Function Declaration:
// function greet() {
//     console.log('Hello');
// }

// Function Expression:
// const greet = function() {
//     console.log('Hello');
// }

// Differences in summary:
// =======================
// 1. Hoisting:
//    - Function declarations are hoisted.
//    - Function expressions are not hoisted.
// 2. Timing of loading:
//    - Function declarations are loaded before any code is executed.
//    - Function expressions are loaded when the interpreter reaches that line of code.

// 7. WHAT IS NEW KEYWORD IN JAVASCRIPT? AND WHAT IT DOES?
// ========================================================
// The new keyword in JavaScript is used to create a new instance of an object that has a constructor method.
// The new keyword does the following things:
// 1. It creates a new object.
// 2. Sets the value of this to the new object.
// 3. Returns the object.
// 4. Creates a link to the object's prototype.

// 8. WHAT IS CONSTRUCTOR FUNCTION IN JAVASCRIPT?
// ==============================================
// A constructor function is a function that is used to create instances of objects in JavaScript.

// 9. WHAT IS THE DIFFERENCE BETWEEN CREATING OBJECTS USING CONSTRUCTOR FUNCTION AND USING CLASS?
// ==============================================================================================
// Constructor Function:
// =====================
// A constructor function is a regular function used to create multiple instances of objects with the same properties and methods. 
// It is a traditional way of creating objects in JavaScript, primarily before the introduction of classes in ES6.

// Example of Constructor Function:
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.greet = function() {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     };
// }

// Creating instances using the constructor function:
// const person1 = new Person('Alice', 30);
// const person2 = new Person('Bob', 25);

// person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.
// person2.greet(); // Output: Hello, my name is Bob and I am 25 years old.

// person1.greet === person2.greet; // false - EACH INSTANCE HAS ITS OWN COPY OF THE GREET METHOD.

// Class:
// ======
// A class in JavaScript is a syntactic sugar over the constructor function pattern. 
// It provides a clearer and more concise syntax for creating objects and dealing with inheritance. 
// Classes were introduced in ES6 and make the code more readable and easier to understand.

// Example of Class:
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     greet() {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     }
// }

// Creating instances using the class:
// const person3 = new Person('Alice', 30);
// const person4 = new Person('Bob', 25);

// person3.greet(); // Output: Hello, my name is Alice and I am 30 years old.
// person4.greet(); // Output: Hello, my name is Bob and I am 25 years old.

// person3.greet === person4.greet; // true - BOTH INSTANCES SHARE THE SAME GREET METHOD.

// 10. WHAT IS PROTOTYPE IN JAVASCRIPT?
// =====================================
// In JavaScript, each object has a prototype property, which makes inheritance possible in JavaScript.
// The prototype property of an object is where we put methods and properties that we want other objects to inherit.
// The constructor's prototype property is NOT the prototype of the constructor itself, it's the prototype of ALL instances that are created through it.
// When a certain method or property is called on an object, JavaScript will first look for it on the object itself, and if it's not found, it will look in the object's prototype.
// This continues up the prototype chain until the method or property is found or the end of the chain is reached.
// The prototype chain is a series of objects linked together through their prototype properties.
// The prototype chain allows objects to inherit properties and methods from other objects.
// The prototype chain is used to implement inheritance in JavaScript.
// The prototype chain is a series of objects linked together through their prototype properties.
// The prototype chain allows objects to inherit properties and methods from other objects.
// The prototype chain is used to implement inheritance in JavaScript.
// Example:
// function Animal(name) {
//     this.name = name;
//     this.sleep = function() {
//         console.log(`${this.name} is sleeping.`);
//     };
// }
// Animal.prototype.eat = function() {              
//     console.log(`${this.name} is eating.`);
// };

// 11. WHAT IS PROTOTYPE INHERITANCE IN JAVASCRIPT?
// =================================================
// Prototype inheritance is a way of creating objects based on other objects.
// In JavaScript, objects can inherit properties and methods from other objects through the prototype chain.
// When a property or method is accessed on an object, JavaScript will first look for it on the object itself, and if it's not found, it will look in the object's prototype.
// This process continues up the prototype chain until the property or method is found or the end of the chain is reached.
// Prototype inheritance allows objects to share properties and methods with other objects, reducing code duplication and promoting code reuse.
// Example:
    // class Dog4 {
    //     constructor(name,breed) {
    //         this.name = name;
    //         this.breed = breed;
    //     }
    //     bark() {
    //         console.log(`${this.name} says WOOF!`);
    //     }
    //     sleep() {
    //         console.log(`${this.name} is sleeping`);
    //     }
    // }
    // class GuideDog extends Dog4 {
    //     constructor(name,breed,guide) {
    //         super(name,breed);
    //         this.guide = guide;
    //     }
    //     guideTheWay() {
    //         console.log(`${this.name} is guiding the way`);
    //     }
    // } 
    // const g = new GuideDog('Guido','Labrador','Guide');
// g.bark(); // Guido says WOOF! - GuideDog inherits the bark method from Dog4 through prototype chain

// 12. WHAT IS PROTOTYPE CHAIN IN JAVASCRIPT?
// ===========================================
// The prototype chain is a series of objects linked together through their prototype properties.

// 13. WHAT IS PROTOTYPE OBJECT IN JAVASCRIPT?
// ============================================
// In JavaScript, each object has a prototype property, which makes inheritance possible in JavaScript.
// The prototype property of an object is where we put methods and properties that we want other objects to inherit.
// The constructor's prototype property is NOT the prototype of the constructor itself, it's the prototype of ALL instances that are created through it.

// 14. WHAT IS DIFFERENCE BETWEEN __proto AND .prototype?
// ======================================================
// __proto__: Directly references the prototype of an object. It is mainly used to get or set the prototype of an existing object.
// prototype: It is a property of a constructor function that is used to set the prototype of objects created by that constructor function.

// 15. DIFFERENCE BETWEEN OBJECT.CREATE() AND NEW KEYWORD?
// ======================================================
// Object.create(): It creates a new object with the specified prototype object and properties.
// new keyword: It creates a new instance of an object that has a constructor method.

// 16. WHAT IS THE DIFFERNCE BETWEEN FUNCTION DECLARATION AND FUNCTION EXPRESSION?
// ==============================================================================
// Function declaration - function that is declared as a statement
// Function expression - function that is assigned to a variable
// Function declaration are hoisted
// Function expressions are not hoisted
// Example: FUNCTION DECLARATION
    // greet('Sakthi'); // Hello Sakthi - hoisted 
    // function greet(name) {
    //     console.log(`Hello ${name}`);
    // }
    // greet('Kutti'); // Hello Kutti 
// Example: FUNCTION EXPRESSION
    // greet2('Sakthi'); // ERROR - not hoisted - Cannot access 'greet2' before initialization
    // const greet2 = function(name) {
    //     console.log(`Hello ${name}`);
    // }
    // greet2('Kutti'); // Hello Kutti 

// 17. WHAT IS CALLBACK FUNCTION IN JAVASCRIPT?
// ============================================
// A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed.
// Callback functions are used to handle asynchronous operations, such as reading a file or making an HTTP request.
// Callback functions are commonly used in JavaScript to handle events, timers, and AJAX requests.

// 18. WHAT IS PROMISE IN JAVASCRIPT?
// ==================================
// A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// A promise can be in one of three states: pending, fulfilled, or rejected.
// A promise is used to handle asynchronous operations in JavaScript, such as reading a file or making an HTTP request.
// Promises provide a cleaner and more readable way to write asynchronous code compared to callbacks.

// 19. BENEFITS OF USING PROMISES OVER CALLBACKS?
// ==============================================
// Promises provide a cleaner and more readable way to write asynchronous code compared to callbacks.
// Promises allow you to chain multiple asynchronous operations together using the then() method.
// Promises provide better error handling through the catch() method.

// 20. WHAT IS ASYNC/AWAIT IN JAVASCRIPT?
// =======================================
// Async/await is a modern way to handle asynchronous code in JavaScript.
// Async/await is built on top of promises and provides a more readable and concise syntax for writing asynchronous code.
// The async keyword is used to define an asynchronous function, which returns a promise.
// The await keyword is used to pause the execution of an async function until a promise is settled (fulfilled or rejected).
// Async/await makes asynchronous code look and behave more like synchronous code, which is easier to understand and maintain.  

// 21. WHAT IS OPTIONAL CHAINING IN JAVASCRIPT?
// ============================================
// Optional chaning is the way to safely access nested properties of an object

// 22. WHAT IS NULLISH COALESCING OPERATOR IN JAVASCRIPT?
// ======================================================
// The nullish coalescing operator (??) is a logical operator that returns right hand side operand only if left hand side operand is null or undefined.
// It is used to provide a default value when the left hand side operand is NULL or UNEFINED.
// not to be confused with || operator, which returns right hand side operand if left hand side operand is falsy (0, '', false, null, undefined, NaN)

// 23. WHAT IS THE DIFFERENCE BETWEEN || AND ?? OPERATOR?
// =====================================================
// || operator returns right hand side operand if left hand side operand is falsy (0, '', false, null, undefined, NaN)
// ?? operator returns right hand side operand only if left hand side operand is null or undefined.
// EXAMPLE:
    // const name = '';
    // const defaultName = name || 'Guest'; // Guest
    // const defaultName2 = name ?? 'Guest'; // '' - nullish coalescing operator

// 24. WHAT IS NUMERIC SEPARATOR IN JAVASCRIPT?
// ============================================
// Numeric separator is used make large numbers more readble by separating them with underscores.

// 24. DIFFERENCE BETWEEN ||= AND &&= AND ??= OPERATORS?
// ====================================================
// ||= - assigns the right side value to the variable only if the variable is falsy (0, '', false, null, undefined, NaN)
// &&= - assigns the right side value to the variable only if the variable is truthy (not 0, not '', not false, not null, not undefined, not NaN)
// ??= - assigns the right side value to the variable only if the variable is null or undefined
// EXAMPLE:
    // let x = 0;
    // x ||= 5; // 5
    // x &&= 10; // 10
    // x ??= 15; // 10

// 25. DIFFERENCE BETWEEN PROMISE.ALL, PROMISE.RACE, PROMISE.ANY AND PROMISE.ALLSETTLED ?
// =======================================================================================
// Promise.any - resolves when any of the promises is resolved and rejects if all the promises are rejected
// Promise.all - resolves when all the promises are resolved and rejects if any of the promises is rejected
// Promise.race - resolves or rejects as soon as one of the promises resolves or rejects
// Promise.allSettled - resolves when all the promises are settled (either resolved or rejected)

// 26. DIFFERENCE BETWEEN isNaN() AND Number.isNaN() ?
// ===================================================
// isNaN() - converts the argument to a number before checking if it is NaN
// Number.isNaN() - it does not convert the argument to a number before checking if it is NaN
// EXAMPLE:
    // isNaN('25'); // false - '25' is converted to number 25 and it is not NaN
    // Number.isNaN('25'); // false - '25' is a string and it is not NaN

// 27. EXPLAIN LET, VAR AND CONST KEYWORDS AND ITS SCOPES?
// ========================================================
// var - function scope
// let - block scope
// const - block scope
// var - hoisted
// let - not hoisted
// const - not hoisted
// var - can be redeclared
// let - cannot be redeclared
// const - cannot be redeclared
// var - can be reassigned
// let - can be reassigned
// const - cannot be reassigned
// If we declare a variable using VAR with window object name, it will be added to the window object and overwrite the existing value.
// POINT TO REMEMBER :: 
// VARIALBES DECLARED GLOBALLY USING VAR WILL BE ADDED TO THE WINDOW OBJECT,
// WHEREAS VARIABLES DECLARED GLOBALLY USING LET AND CONST WILL NOT BE ADDED TO THE WINDOW OBJECT

// 28. WHAT IS THE OUTPUT OF THE FOLLOWING CODE?
// ============================================
// var x = 10;
// function foo() {
//     console.log(x); // undefined
//     var x = 20;
// }
// foo();
// Reason: Variables declared using VAR are hoisted to the top of the function scope, but their value is not hoisted.

// 29. WHAT IS THE OUTPUT OF THE FOLLOWING CODE?
// ============================================
// let x = 10;
// function foo() {
//     console.log(x); // ReferenceError: Cannot access 'x' before initialization
//     let x = 20;
// }
// foo();
// Reason: Variables declared using LET are hoisted to the top of the block scope, but their value is not hoisted.

// 30. WHAT IS THE OUTPUT OF THE FOLLOWING CODE?
// ============================================
// const x = 10;
// function foo() {
//     console.log(x); // ReferenceError: Cannot access 'x' before initialization
//     const x = 20;
// }
// foo();
// Reason: Variables declared using CONST are hoisted to the top of the block scope, but their value is not hoisted.

// 31. WHAT IS THE OUTPUT OF THE FOLLOWING CODE?
// ============================================
// var x = 10;
// function foo() {
//     console.log(x); // 10
// }
// foo();
// Reason: Variables declared using VAR are hoisted to the top of the function scope, and their value is hoisted as well.

// 32. WHAT IS THE OUTPUT OF THE FOLLOWING CODE?
// ============================================
// let x = 10;
// function foo() {
//     console.log(x); // 10
// }
// foo();
// Reason: Variables declared using LET are hoisted to the top of the block scope, and their value is hoisted as well.

// 33. WHAT IS THE OUTPUT OF THE FOLLOWING CODE?
// ============================================
// const x = 10;
// function foo() {
//     console.log(x); // 10
// }
// foo();
// Reason: Variables declared using CONST are hoisted to the top of the block scope, and their value is hoisted as well.

// 34. WHAT IS THE OUTPUT OF THE FOLLOWING CODE?
// ============================================
// var x = 10;
// function foo() {
//     console.log(x); // 10
//     x = 20;
// }
// foo();
// console.log(x); // 20
// Reason: Variables declared using VAR are hoisted to the top of the function scope, and their value can be reassigned.

// 35. WHAT IS THE OUTPUT OF THE FOLLOWING CODE?
// ============================================
// let x = 10;
// function foo() {
//     console.log(x); // 10
//     x = 20;
// }
// foo();
// console.log(x); // 20
// Reason: Variables declared using LET are hoisted to the top of the block scope, and their value can be reassigned.

// 36. WHAT IS THE OUTPUT OF THE FOLLOWING CODE?
// ============================================
// const x = 10;
// function foo() {
//     console.log(x); // 10
//     x = 20;
// }
// foo();
// console.log(x); // TypeError: Assignment to constant variable.
// Reason: Variables declared using CONST are hoisted to the top of the block scope, and their value cannot be reassigned.

// 37. WHAT IS THE OUTPUT OF THE FOLLOWING CODE?
// ============================================
// var x = 10;
// if(true) {
//     console.log(x); // 10
//     var x = 20;
// }
// console.log(x); // 20
// Reason: Variables declared using VAR are hoisted to the top of the function scope, and their value can be reassigned.

// 38. WHAT IS THE OUTPUT OF THE FOLLOWING CODE?
// ============================================
// let x = 10;
// if(true) {
//     console.log(x); // ReferenceError: Cannot access 'x' before initialization
//     let x = 20; 
// }
// console.log(x); // 10
// Reason: Variables declared using LET are hoisted to the top of the block scope, but their value is not hoisted.

// 39. WHAT IS THE OUTPUT OF THE FOLLOWING CODE?
// ============================================
// const x = 10;
// if(true) {
//     console.log(x); // ReferenceError: Cannot access 'x' before initialization
//     const x = 20;
// }
// console.log(x); // 10
// Reason: Variables declared using CONST are hoisted to the top of the block scope, but their value is not hoisted.

// 40. WHAT IS THE OUTPUT OF THE FOLLOWING CODE?
// ============================================
// var x = 10;
// function foo() {
//     var x = 20;
// }
// foo();
// console.log(x); // 10
// Reason: The variable x inside the function foo is a different variable than the global variable x.

// 41. WHAT IS THE OUTPUT OF THE FOLLOWING CODE?
// ============================================
// let x = 10;
// function foo() {
//     let x = 20;
// }
// foo();
// console.log(x); // 10
// Reason: The variable x inside the function foo is a different variable than the global variable x.

// 42. WHAT IS THE OUTPUT OF THE FOLLOWING CODE?
// ============================================
// const x = 10;
// function foo() {
//     const x = 20;
// }
// foo();
// console.log(x); // 10
// Reason: The variable x inside the function foo is a different variable than the global variable x.

// 43. WHAT IS THE OUTPUT OF THE FOLLOWING CODE?
// ============================================
// var x = 10;
// function foo() {
//     x = 20;
// }
// foo();
// console.log(x); // 20
// Reason: The variable x inside the function foo is the global variable x, and its value is reassigned.

// 44. WHAT IS THE OUTPUT OF THE FOLLOWING CODE?
// ============================================
// let x = 10;
// function foo() {
//     x = 20;
// }
// foo();
// console.log(x); // 20
// Reason: The variable x inside the function foo is the global variable x, and its value is reassigned.

// 45. WHAT IS THE OUTPUT OF THE FOLLOWING CODE?
// ============================================
// const x = 10;
// function foo() {
//     x = 20;
// }
// foo();
// console.log(x); // TypeError: Assignment to constant variable.

// 46. WHAT IS THE OUTPUT OF THE FOLLOWING CODE?
// ============================================
// var x = 10;
// if(true){
//     var x = 20;
// }
// console.log(x); // 20
// Reason: The variable x inside the if block is the same variable as the global variable x, and its value is reassigned.

// 47. WHAT IS THE OUTPUT OF THE FOLLOWING CODE?
// ============================================
// let x = 10;
// if(true){
//     let x = 20;
// }
// console.log(x); // 10
// Reason: The variable x inside the if block is a different variable than the global variable x.

// 48. WHAT IS SCOPE CHAIN IN JAVASCRIPT?
// ======================================
// The scope chain is the order in which Javascript looks for variables when they are referenced.
// When a variable is referenced, JavaScript first looks in the current scope, and if it doesn't find the variable, it looks in the outer scope, and so on.
// The scope chain is used to resolve variable names and access variables in different scopes.

// 49. WHAT IS SCOPE?
// ==================
// Scope refers to the visibility and accessibility of variables and functions in different parts of a program.
// In JavaScript, variables have function scope, block scope, and global scope.
// Function scope: Variables declared inside a function are only accessible within that function.
// Block scope: Variables declared inside a block (e.g., if statement or loop) are only accessible within that block.
// Global scope: Variables declared outside any function or block are accessible throughout the program.

// 50. WHAT IS LEXICAL SCOPE/STATIC SCOPE?
// ======================================
// Lexical scope refers to the visibility and accessibility of variables and functions based on their location in the source code.

// 51. WHAT IS HOISTING IN JAVASCRIPT?
// ===================================
// Hoisting is a mechanism where variables and functions are moved to the top of their containing scope during the compilation phase.
// Variables declared using VAR are hoisted to the top of the function scope.
// Variables declared using LET and CONST are hoisted to the top of the block scope. but their value is not hoisted.

// 52. WHAT IS THE USE OF HOISTING IN JAVASCRIPT?
// ===============================================
// Hoisting allows you to use variables and functions before they are declared in the code.

// 53, WHAT IS TEMPORAL DEAD ZONE?
// ===============================
// The temporal dead zone is the period between the start of the block scope and the actual declaration of a variable.
// During the temporal dead zone, the variable exists but cannot be accessed or assigned a value.
// Variables declared using LET and CONST are hoisted to the top of the block scope, but their value is not hoisted.
// Accessing or assigning a value to a variable during the temporal dead zone will result in a ReferenceError.

// 54. WHAT IS IIFE and ITS USES?
// ==============================
// IIFE stands for Immediately Invoked Function Expression.
// It is a function that is executed immediately after it is defined.
// IIFE is used to create a new scope for variables and functions to avoid polluting the global scope.
// IIFE is commonly used to encapsulate code and prevent naming conflicts.
// EXAMPLE:
    // (function() {
    //     var x = 10;
    //     console.log(x); // 10
    // })();
    // console.log(x); // ReferenceError: x is not defined

// 55. WHAT IS CLOSURE IN JAVASCRIPT?
// ==================================
// A closure is the combination of a function and the lexical environment within which that function was declared.
// Closures allow functions to access variables from their outer scope even after the outer scope has finished executing.
// Closures are commonly used to create private variables and encapsulate code.
// Closure - function defined inside of a function that has access to the outer function's variables.

// 56. WHAT IS THE USE OF CLOSURE IN JAVASCRIPT?
// =============================================
// Closures are used to create private variables and encapsulate code.  

// 57. WHAT IS BUILT-IN BROWSER API's in JAVASCRIPT?
// ==================================================
// Browser APIs are built-in interfaces provided by the browser to interact with the browser environment.
// Some common browser APIs include:
// DOM API - Document Object Model for manipulating HTML and XML documents. document, window, etc.
// Fetch API - for making HTTP requests. fetch()
// Web Storage API - for storing data in the browser. localStorage and sessionStorage.
// Geolocation API - for getting the user's location. navigator.geolocation
// Timer API - for scheduling tasks. setTimeout, setInterval, etc.

// 58. WHAT IS THE DIFFERENCE BETWEEN WINDOW AND DOCUMENT OBJECT?
// ============================================================
// Window object represents the browser window and is the global object in the browser environment.
// Document object represents the HTML document loaded in the browser window.
// Window object provides properties and methods related to the browser window, such as location, history, and alert.
// Document object provides properties and methods related to the HTML document, such as getElementById, querySelector, and createElement.

// 59. WHAT IS THE DIFFERENCE BETWEEN WINDOW.LOCATION AND DOCUMENT.LOCATION?
// =========================================================================
// window.location - refers to the location of the browser window and provides information about the current URL.
// document.location - is an alias for window.location and refers to the same location object.

// 60. WHAT IS THE DIFFERENCE BETWEEN WINDOW.LOCATION.HREF AND WINDOW.LOCATION.URL?
// ===============================================================================
// window.location.href - returns the entire URL of the current page, including the protocol, domain, path, and query parameters.
// window.location.url - returns the full URL of the current page, including the protocol, domain, path, and query parameters.

// 61. WHAT IS SETTIMEOUT AND SETINTERVAL IN JAVASCRIPT?
// ======================================================
// setTimeout - is a method that executes a function or evaluates an expression after a specified delay in milliseconds.
// setInterval - is a method that executes a function or evaluates an expression at specified intervals in milliseconds.

// 62. WHAT IS THE DIFFERENCE BETWEEN SETTIMEOUT AND SETINTERVAL?
// ==============================================================
// setTimeout - executes a function or evaluates an expression after a specified delay in milliseconds.
// setInterval - executes a function or evaluates an expression at specified intervals in milliseconds.

// 63. WHAT IS CLEARINTERVAL AND CLEARTIMEOUT IN JAVASCRIPT?
// =========================================================
// clearTimeout - is a method that cancels a timeout previously established by setTimeout.
// clearInterval - is a method that cancels an interval previously established by setInterval.

// 64. WHAT IS DEBOUNCING IN JAVASCRIPT?
// ======================================
// Debouncing is a technique used to limit the number of times a function is called.
// Debouncing is used to ensure that a function is not called multiple times in a short period.
// Basically it controls how often a function is executed , often in response to some sort of event like scroll, click, input etc.
// Debouncing is used to make sure the function is called only after certain amount of time has passed since the last call.
// Normally, if you type in the search bar, the input event triggered multiple times. Debouncing is used to limit the number of times the event is triggered. if we specify the delay is 400ms, the event will be called at last after 400ms.
 
// 65. WHAT IS THROTTLING IN JAVASCRIPT?
// =====================================
// Throttling is a technique used to limit the number of times a function is called.
// Throttling is used to ensure that a function is not called more than once in a specified time interval.
// Throttling is used to control the rate at which a function is called, often in response to some sort of event like scroll, click, input etc.
// ***** Normally, if you scroll the page, the scroll event is triggered multiple times. 
// Throttling is used to limit the number of times the event is triggered. 
// ***** if we specify the time interval as 400ms, the event will be triggered only once in 400ms

// 66.WHAT IS FUNCTIONAL PROGRAMMING?
// ==================================
// Functional programming is a programming paradigm that treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data.
// Functional programming is based on the principles of pure functions, immutability, and higher-order functions.
// Functional programming languages include Haskell, Lisp, and Erlang.
// Functional programming promotes the use of pure functions, which have no side effects and always return the same output for the same input.
// Functional programming avoids changing-state and mutable data, which can lead to bugs and unpredictable behavior.
// FP is the process of building software by composing pure functions, avoiding shared state, mutable data, and side effects.

// 67. WHAT IS FIRST CLASS FUNCTION IN JAVASCRIPT?
// ==============================================
// First-class functions are functions tht can be treated like any other value in JavaScript.
// First-class functions can be assigned to variables, passed as arguments to other functions, and returned from other functions.

// 68. WHAT IS PURE FUNCTION IN JAVASCRIPT?
// ========================================
// A pure function is a function that always returns the same output for the same input and has no side effects.
// Pure functions do not modify the state of variables outside their scope or have any observable side effects.
// Pure functions are easier to test, debug, and reason about, as they are predictable and deterministic.

// 69. WHAT IS IMPURE FUNCTION IN JAVASCRIPT?
// ==========================================
// An impure function is a function that has side effects or does not always return the same output for the same input.
// Impure functions may modify the state of variables outside their scope or have observable side effects.

// 70. WHAT IS HIGHER ORDER FUNCTION IN JAVASCRIPT?
// =================================================
// A higher-order function is a function that takes one or more functions as arguments or returns a function as its result.
// Higher-order functions are used to abstract and encapsulate common patterns in code and promote code reusability.

// 71. WHAT IS IMMUTABILITY IN JAVASCRIPT?
// =======================================  
// Immutability is the concept of making data unchangeable or read-only
// In JavaScript, objects and arrays are mutable by default, meaning their values can be changed.
// Immutability is achieved by creating new objects or arrays instead of modifying existing ones.
// Immutability is used to prevent unintended side effects and make code more predictable and easier to reason about.

// 72. WHAT IS RECURSION IN JAVASCRIPT?
// ====================================
// Recursion is a technique in which a function calls itself to solve a problem.
// Recursion is used to solve problems that can be broken down into smaller, similar subproblems.
// Recursion consists of two main parts: the base case and the recursive case.
// The base case is the condition under which the function stops calling itself.
// The recursive case is the condition under which the function calls itself.

// 73. WHAT IS PARTIAL APPLICATION IN JAVASCRIPT?
// ==============================================
// Partial application is a technique where a function is called with fewer arguments then it expects. and returns a new function that takes the remaining arguments.
// This partial takes a function `func` and some fixed arguments `...fixedArgs`. 
// It returns a new function that takes the remaining arguments `...remainingArgs`.
// When this new function is called, it calls the original function `func` with the fixed arguments `...fixedArgs` and the remaining arguments `...remainingArgs`.
function partial(func, ...fixedArgs) {
    return function(...remainingArgs) {
        return func(...fixedArgs, ...remainingArgs);
    }
}
// 74. WHAT IS COMPOSITION IN JAVASCRIPT?
// ======================================
// Composition is a technique where multiple functions are combined to create a new function.
// Composition is used to build complex functions by combining simpler functions.
// Composition allows you to break down a problem into smaller, more manageable parts and combine them to create a solution.
// Pass the output of one function as the input to another function.
function compose(...functions) {
    return function(data) {
        return functions.reduceRight((val, func) => func(val), data)
    }
}

// 75. WHAT IS CURRYING IN JAVASCRIPT?
// ====================================
// Currying is a technique where a function with multiple arguments is transformed into a sequence of functions, each taking a single argument.
// Currying is used to create specialized functions by partially applying arguments to a function.
// Currying allows you to create new functions by passing fewer arguments than the original function expects.
// Currying is used to create reusable and composable functions.
// Currying is the process of converting a function that takes multiple arguments into a sequence of functions that each take a single argument
function curry(func) {
    return function curried(...args1) {
        if(args1.length >= func.length) {
            return func(...args1);
        } else {
            return function(...args2) {
                return curried(...args1, ...args2);
            }
        }
    }
}
// It keeps returning a new function untill it has recceived enough arguments to call the original function.


