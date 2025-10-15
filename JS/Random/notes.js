// WHAT IS JAVASCRIPT?
// Javascript is a scripting language used to create dynamic web content

// VARIABLES
// Variables are containers for storing and managing data values
// var, let, const
// var - global-scope/function-scope - variable can be re-declared/updated
// let - block scope - variable can be updated but not re-declared
// const - block scope - variable cannot be updated or re-declared

// DATA TYPES
// Data types are type of data that can be stored and manipulated
// Primitive data types: string, number, boolean, null, undefined, symbol, bigint
// Non-primitive data types: object

// FUNCTIONS
// Functions are blocks of code designed to perform a particular task

// METHODS
// Methods are functions that live inside an object

// CONDITIONALS
// Conditionals are used to perform different actions based on different conditions
// 4 types of conditionals: if, else, else if, switch
// if - specifies a block of code to be executed if a specified condition is true
// else - specifies a block of code to be executed if the same condition is false
// else if - specifies a new condition if the first condition is false
// switch - selects one of many code blocks to be executed

// OPERATORS
// Operators are used to perform operations on variables and values
// 7 types of operators: arithmetic, assignment, comparison, logical, bitwise, string, conditional

// MATH OBJECT
// The Math object allows you to perform mathematical tasks
// 8 properties: Math.E, Math.PI, Math.SQRT2, Math.SQRT1_2, Math.LN2, Math.LN10, Math.LOG2E, Math.LOG10E
// Math.E - Euler's number
// Math.PI - PI
// Math.SQRT2 - square root of 2
// 8 methods: Math.abs(), Math.ceil(), Math.floor(), Math.round(), Math.max(), Math.min(), Math.pow(), Math.sqrt()
// Math.abs() - returns the absolute value of a number
// Math.ceil() - returns the value of a number rounded up to the nearest integer
// Math.floor() - returns the value of a number rounded down to the nearest integer
// Math.round() - returns the value of a number rounded to the nearest integer
// Math.max() - returns the number with the highest value
// Math.min() - returns the number with the lowest value

// LOOPS
// Loops are used to execute the same block of code a specified number of times
// 7 types of loops: for, for/in, for/of, while, do/while, forEach, map
// for - loops through a block of code a number of times
    // for(let i = 0; i < 5; i++) {
    //     console.log(i);
    // }
    // let x = 2;
    // for(;;x++){
    //     console.log(x);
    //     break;
    // }
    // let subjects = ['Math', 'Science', 'History'];
    // let i = 0;
    // let len = subjects.length;
    // let all = "";
    // for(;i < len;){
    //     all += subjects[i] + " ";
    //     i++;
    // }
    // console.log(all);
// for/in - loops through the properties of an object
    // let obj = {a: 1, b: 2, c: 3};
    // for(let prop in obj) {
    //     console.log(prop);
    // }
    // const courses = {
    //     firstCourse: "C++ STL",
    //     secondCourse: "DSA Self Paced",
    //     thirdCourse: "CS Core Subjects"
    // };

    // const student1 = Object.create(courses);
    // student1.id = 1;
    // student1.name = "John Doe";
    // student1.getCourses = function () {
    //     console.log(courses);
    // };
   
    // for(let prop in student1){
    //     console.log(prop + ' => ' + student1[prop]);
    // }
// for/of - loops through the values of an iterable object [arrays, strings]
    // let arr = [1, 2, 3, 4, 5];
    // for(let val of arr) {
    //     console.log(val);
    // }
    // let str = "Helloworld";
    // for(let char of str) {
    //     console.log(char);
    // }
// while - loops through a block of code while a specified condition is true
    // let i = 10;
    // while(i < 15){
    //     console.log(i);
    //     i++;
    // }
// do/while - loops through a block of code once, and then repeats the loop while a specified condition is true
    // let i = 100;
    // do {
    //     console.log(i);
    //     i++;
    // } while(i < 105);
// forEach - calls a function once for each element in an array, in order
    // let arr = [2,4,6,8,10];
    // let copy = [];
    // arr.forEach(function(val,index,arrVal) {
    //     copy.push(val * 2);
    // })
    // console.log(copy);
// map - creates a new array with the results of calling a function for every array element
    // let arr = [2,4,6,8,10];
    // let updArr = arr.map((val) => val * 4);
    // console.log(updArr);

// ARRAYS
// Arrays are used to store multiple values in a single variable
// Arrays are zero-indexed
// Two types of arrays: single-dimensional, multi-dimensional
// Single-dimensional arrays - arrays that contain a single row of elements
// Example: let arr = [1, 2, 3, 4, 5];
// Multi-dimensional arrays - arrays that contain multiple rows of elements
// Example: let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// Array methods: mutator methods, accessor methods, iteration methods

// Mutator methods - methods that modify the original array
// Example: push(), pop(), shift(), unshift(), splice(), sort(), reverse()

// push() - adds new elements to the end of an array
    // let arr = [1, 2, 3]; arr.push(4); console.log(arr); // [1, 2, 3, 4]
// pop() - removes the last element from an array
    // let arr = [1, 2, 3]; arr.pop(); console.log(arr); // [1, 2]
// shift() - removes the first element from an array
    // let arr = [1, 2, 3]; arr.shift(); console.log(arr); // [2, 3]
// unshift() - adds new elements to the beginning of an array
    // let arr = [1, 2, 3]; arr.unshift(0); console.log(arr); // [0, 1, 2, 3]
// splice() - adds/removes elements from an array
    // let arr = [1, 2, 3, 5, 6]; arr.splice(3, 0, 4); console.log(arr); // [1, 4, 2, 3]
// sort() - sorts the elements of an array
    // let arr = [3, 1, 2]; arr.sort(); console.log(arr); // [1, 2, 3]
// reverse() - reverses the elements of an array
    // let arr = [1, 2, 3]; arr.reverse(); console.log(arr); // [3, 2, 1]

// Accessor methods - methods that do not modify the original array
// Example: concat(), includes(), indexOf(), join(), slice(), toString()

// concat() - joins two or more arrays, and returns a copy of the joined arrays
    // let arr1 = [1, 2, 3]; let arr2 = [4, 5, 6]; let arr3 = arr1.concat(arr2); console.log(arr3); // [1, 2, 3, 4, 5, 6]
// includes() - checks if an array contains a specified element
    // let arr = [1, 2, 3]; console.log(arr.includes(2)); // true
// indexOf() - returns the position of the first occurrence of a specified element in an array
    // let arr = [1, 2, 3]; console.log(arr.indexOf(2)); // 1
// join() - joins all elements of an array into a string
    // let arr = [1, 2, 3]; console.log(arr.join()); // 1,2,3
// slice() - selects a part of an array, and returns the new array
    // let arr = [1, 2, 3]; console.log(arr.slice(1)); // [2, 3]
// toString() - converts an array to a string
    // let arr = [1, 2, 3]; console.log(arr.toString()); // 1,2,3

// toString() - always uses a comma , as the separator.
// join() - allows you to specify a custom separator.

// Iteration methods - methods that iterate over the elements of an array
// Example: forEach(), map(), filter(), reduce()

// forEach() - calls a function once for each element in an array
    // let arr = [1, 2, 3]; arr.forEach((val) => console.log(val)); // 1, 2, 3
// map() - creates a new array with the results of calling a function for every array element
    // let arr = [1, 2, 3]; let newArr = arr.map((val) => val * 2); console.log(newArr); // [2, 4, 6]
// filter() - creates a new array with all elements that pass the test implemented by the provided function
    // let arr = [1, 2, 3]; let newArr = arr.filter((val) => val > 1); console.log(newArr); // [2, 3]
// reduce() - executes a reducer function on each element of the array, resulting in a single output value
    // let arr = [1, 2, 3]; let sum = arr.reduce((acc, val) => acc + val, 0); console.log(sum); // 6

// forEach(): Executes a function on each element without returning a new array. Used for side effects.
// map(): Transforms each element and returns a new array with the transformed elements. Used for data transformation.

// OBJECTS
// Objects are used to store collections of data and more complex entities
// Properties that doesn't exist evaluates to undefined => pet['undefined'] => undefined
// All the keys are converted to string => pet[true] => pet["true"]
// The function that lives inside the object is called a method => pet.bark()

// CLASSES
// Classes are a template for creating objects
// Classes are used to create objects with the same properties and methods
// Classes are a blueprint for creating objects
// Classes are not hoisted
// Classes can be defined using class keyword
// this keyword refers to the object it belongs to
// Class name should be UpperCamelCase
// Object that we have created using class is instanceof that class

// CONSTRUCTORS
// Constructors are by default will get called when creating new objects
// We can initialize object properties and validate them using constructors

// INSTANCE METHODS
// Functions which are defined inside the class are called instance methods (formerly called instannce methods)
// To access instance methods inside another instance method, we need to use ```this``` keyword
    // Example
    // class Triangle {
    //     constructor(a,b){
    //         this.a = a;
    //         this.b = b;
    //     }
    //     getArea() {
    //         return (this.a * this.b) / 2;
    //     }
    //     describe() {
    //         return `This is a triangle with base ${this.a} and height ${this.b} and area ${this.getArea()}`;
    //     }
    // }

// INHERITANCE
// Inheritance is a mechanism where a new class inherits properties and methods from an existing class
// The class which inherits properties and methods is called a subclass
// The class from which properties and methods are inherited is called a superclass
// Inheritance is achieved using extends keyword
// Subclass can have its own properties and methods
// Subclass can override superclass methods
    // Example
    // class Triangle {
    //     constructor(a,b){
    //         this.a = a;
    //         this.b = b;
    //     }
    //     getArea() {
    //         return (this.a * this.b) / 2;
    //     }
    //     describe() {
    //         return `This is a triangle with base ${this.a} and height ${this.b} and area ${this.getArea()}`;
    //     }
    // }
    // class RightAngleTriangle extends Triangle {
        // describe() {
        //     return `This is a right angle triangle with base ${this.a} and height ${this.b} and area ${this.getArea()} and hypotenuse ${this.getHypotenuse()}`;
        // }
    // }
//SUPER KEYWORD
// super keyword is used to call the constructor of the superclass
// super keyword is used to call the superclass methods
// super keyword is used to access the superclass properties
    // Example
    // class Triangle {
    //     constructor(a,b){
    //         this.a = a;
    //         this.b = b;
    //     }
    //     getArea() {
    //         return (this.a * this.b) / 2;
    //     }
    //     describe() {
    //         return `This is a triangle with base ${this.a} and height ${this.b} and area ${this.getArea()}`;
    //     }
    // }
    // class ColorTriangle extends Triangle {
        // constructor(a,b,color){
        //     super(a,b);
        //     this.color = color;
        // }
        // describe() {
        //     return `This is a color triangle with base ${this.a} and height ${this.b} and area ${this.getArea()} and color ${this.color()}`;
        // }
    // }
//STATIC PROPERTIES
// Static properties are properties that belong to the class itself, not to its instances
// Static properties are accessed using the class name
// Static properties are defined using static keyword
    // Example
    // class Triangle {
    //     constructor(a,b){
    //         this.a = a;
    //         this.b = b;
    //     }
    //     static description = "This is a triangle";
    // }
    // console.log(Triangle.description); // This is a triangle
//STATIC METHODS
// Static methods are methods that belong to the class itself, not to its instances
// Static methods are accessed using the class name
// Static methods are defined using static keyword
// Static methods are used to perform operations that do not require an instance of the class
// Static methods are used to create utility functions
// Static methods cannot access instance properties
// Static methods cannot access instance methods
    // Example
    // class Triangle {
    //     constructor(a,b){
    //         this.a = a;
    //         this.b = b;
    //     }
    //     static description = "This is a triangle";
    //     static describe() {
    //         return `This is a static method - not accessible from the instance`;
    //     }
    // }
    // console.log(Triangle.describe()); // This is a triangle
// USECASES OF STATIC METHODS
// Utility functions - group related utility functions together
// Example: Math object
    // class MyMath {
    //     static add(a,b) {
    //         return a + b;
    //     }
    //     static subtract(a,b) {
    //         return a - b;
    //     }
    //     static multiply(a,b) {
    //         return a * b;
    //     }
    //     static divide(a,b) {
    //         return a / b;
    //     }
    // }
    // MyMath.add(2,3); // 5
    // MyMath.subtract(5,3); // 2
// Factory methods - create instances of the class
// Example: Array.from()
    // class Cat {
    //     constructor(name,breed) {
    //         this.name = name;
    //         this.breed = breed; 
    //     }
    //     static registerStray() {
    //         const names = ['Muffin','Biscuit','Sleepy','Dodo','Prince','Princess']
    //         const name = choice(names);
    //         return new Cat(name,'unknown');
    //     }
    // }
    // function choice(arr) {
    //     let randomIdx = Math.floor(Math.random() * arr.length);
    //     return arr[randomIdx];
    // }
    // Cat.registerStray(); // Cat { name: 'Muffin', breed: 'unknown' }

// GETTERS
// Getters are used to get the value of a property
// Getters and setters are used to define computed properties
// Getters and setters are defined using get and set keywords
// Getters and setters are used to access and modify private properties
// Getters and setters are used to validate property values
// Getters and setters are used to hide the implementation details
    // Example
    // class Circle {
    //     constructor(radius){
    //         this.radius = radius;
    //     }
    //     get diameter() {
    //         return this.radius * 2;
    //     }
    //     set diameter(diameter) {
    //         this.radius = diameter / 2;
    //     }
    // }
    // const circle = new Circle(5);
    // console.log(circle.diameter); // 10
    // circle.diameter = 20;
    // console.log(circle.radius); // 10
// SETTERS
// Setters are used to access and modify private properties
// Setters are used to set the value of a property
// Setters are used to validate property values
// Setters are used to hide the implementation details
// Setters are used to define computed properties
    // Example
    // class Circle {
    //     constructor(radius){
    //         this.radius = radius;
    //     }
    //     get diameter() {
    //         return this.radius * 2;
    //     }
    //     set diameter(diameter) {
    //         this.radius = diameter / 2;
    //     }
    // }
    // const circle = new Circle(5);
    // console.log(circle.diameter); // 10
    // circle.diameter = 20;
    // console.log(circle.radius); // 10

// PUBLIC FIELDS
// Public fields are properties that are defined outside the constructor
// Public fields are accessible from the instance
// Public fields are accessible from the subclass
// Public fields are accessible from the static methods
    // Example
    // class Cat {
    //     hasTail = true;
    //     static species = "cat";
    //     constructor(name,breed) {
    //         this.name = name;
    //         this.breed = breed; 
    //     }
    //     ampuate() {
    //         this.numLegs -= 1;
    //     }
    //      static meow(ins) {
    //          return ins.name;
    //      }
    // }
    // const blue = new Cat('Blue','Siamese'); // Cat { hasTail: true, name: 'Blue', breed: 'Siamese' }
    // const blue = new CatNew('Blue');
    // console.log(CatNew.meow(blue)); // blue

// PRIVATE FIELDS
// Private fields provide a way to maintain encapsulation and not allow external access to the properties
// Privite fields are accessible only inside the class
// Private fields are defined using # symbol
// We can't directy define private fields in constructor - 
// We have to define them outside the constructor - then only we can use them in constructor
// Private fields are not accessible from the instance
// Private fields are not accessible from the subclass
// Private fields are accessible from the static methods
    // Example
    // class CircleNew {
    //     #radius;
    //     constructor(radius) {
    //         this.#radius = radius;
    //     }
    //     get radius() {
    //         return this.#radius;
    //     }
    //     static getRadius(ins) {
    //         return ins.#radius;
    //     }
    // }
    // const n1 = new CircleNew(10);
    // console.log(n1.#radius); // Property '#radius' is not accessible outside class 'CircleNew' because it has a private identifier
    // console.log(n1.radius); // 10
    // console.log(CircleNew.getRadius(n1)); // 10

// PRIVATE METHODS
// Private methods are methods that are accessible only inside the class
// Private methods are defined using # symbol
// Private methods are not accessible from the instance
// Private methods are not accessible from the subclass
// Private methods are accessible from the static methods
    // Example
    // class MyClass {
    //     #privateMethod() {
    //         console.log('This is a private method');
    //     }
    //     publicMethod() {
    //         this.#privateMethod();
    //     }
    //     static callMethod(ins) {
    //         return ins.#privateMethod();
    //     }
    // }
    // const n2 = new MyClass();
    // console.log(n2.#privateMethod); // Property '#privateMethod' is not accessible outside class 'CircleNew' because it has a private identifier
    // console.log(n2.publicMethod); // This is a private method
    // console.log(MyClass.callMethod(n2)); // This is a private method

// STATIC INITIALIZATION BLOCKS
// Static initialization blocks are used to initialize static fields
// Static initialization blocks are executed only once when the class is loaded
// Static initialization blocks are defined using static keyword
// Static initialization blocks are defined using {} braces
    // Example
    // class MyClass {
    //     static #PI;
    //     static {
    //         MyClass.#PI = 3.14;
    //     }
    //     static getPI() {
    //         return MyClass.#PI;
    //     }
    // }
    // console.log(MyClass.getPI()); // 3.14

// THIS KEYWORD
// this keyword refers to the object it belongs to
// this keyword is used to access object properties and methods
// MYSTERY OF THIS
    // const person = {
    //     name: 'Sakthi',
    //     place: 'Chennai',
    //     sing: function() {
    //         return `${this.name} sings LA LA LA`;
    //     }
    // }

    // console.log(person.sing()); // Sakthi sings LA LA LA;
    // const pSing = person.sing;
    // console.log(pSing()); //  sings LA LA LA
//    ******************************************************************************************
//    *******************************************************************************************
    // If we call the function directly, this keyword will refer to the global object
    // If we call the function as a method of an object, this keyword will refer to the object
    // If we call the function on class, this keyword will refer to the class
    // When you call the function on nothing, but the function comes from class, the value of this will be undefined
    // VALUE OF THIS - WILL BE EQUAL TO WHATEVER IS LEFT OF THE DOT
    // EXAMPLE
    // function whatIsThis() {
    //     console.log('The value of this is :',this);
    // }
    
    // const normalObj = {
    //     name : 'normal',
    //     whatIsThis: whatIsThis
    // }
    
    // whatIsThis(); // The value of this is : Window object
    // normalObj.whatIsThis(); // The value of this is : normalObj
// ******************************************************************************************
// *******************************************************************************************

// WHEN YOU CALL THE FUNCTION ON NOTHING, BUT THE FUNCTION COMES FROM A CLASS, THE VALUE OF THIS WILL BE UNDEFINED.
// class CatNew3 {
//     constructor(name) {
//         this.name = name;
//     }
//     static getRandom() {
//         console.log('This is -',this);
//     }
//     meow() {
//         console.log('This is -',this);
//         return `${this.name} meows`;
//     }
// }

// CatNew3.getRandom(); // This is - class CatNew3
// const nn = new CatNew3('Blue');
// nn.meow(); // This is - CatNew3 {name: 'Blue'}
// const m = nn.meow;
// m(); // This is - undefined

// GLOBAL OBJECT
// The global object is the top-level object in a JavaScript environment
// The global object is accessible from any part of the code
// The global object is the window object in a browser
// If you are calling a function on nothing, it will be called on the global object
// Example: greet(); // Hello [object Window]
    // function greet() {
    //     console.log('Hello',this); // this => global object
    // }

// CALL METHOD
// The call() method is a predefined JavaScript method
// The call() method is used to call a function with a given this value and arguments provided individually
// ``CALL THIS FUNCTION ON THIS OBJECT`` - this is the main purpose of call method - mm.call(nl)
// Example
    // class CatNew4 {
    //     constructor(name) {
    //         this.name = name;
    //     }
    //     dance(style = "tango") {
    //         return `I am ${this.name} and I dance ${style}`;
    //     }
    // }
    // const nl = new CatNew4('Blue');
    // nl.dance(); // I am Blue and I dance tango
    // const mm = nl.dance;
    // mm(); // ERROR
    // mm.call(nl); // I am Blue and I dance tango

// APPLY METHOD
// The apply() method is a predefined JavaScript method
// The apply() method is used to call a function with a given this value and arguments provided as an array
// Example
    // function sum(a,b) {
    //     return a + b;
    // }
    // sum.apply(null,[2,3]); // 5
    // sum.apply(null,[4,5]); // 9
    // const ringo = {
    //     firstName: 'Ringo',
    //     greet: function(greeting, punctuation) {
    //         console.log(`${this.firstName} says ${greeting}${punctuation}`);
    //     }
    // }
    // const paul = {
    //     firstName: 'Paul'
    // }
    // ringo.greet('Hello','!'); // Ringo says Hello!
    // ringo.greet.call(paul,'Hi','!!!'); // Paul says Hello!
    // ringo.greet.apply(paul,['Heyoooo', '!!!!!!!!!!']) // Paul says Heyoooo!!!!!!!!!!

// BIND METHOD
// The bind() method is a predefined JavaScript method
// The bind() method is used to create a new function with a given this value and arguments
// The bind() method does not call the function immediately
// The bind() method returns a new function
// Example
    // const johnn = {
    //     firstName: 'John',
    //     greet: function(greeting, punctuation) {
    //         console.log(`${this.firstName} says ${greeting}${punctuation}`);
    //     }
    // }
    // const georgee = {
    //     firstName: 'George'
    // }
    // const johnGreet = johnn.greet.bind(johnn);
    // johnGreet('Hello','!'); // George says Hello!

// BINDING ARGUMENTS
// The bind() method can be used to bind arguments to a function
// The bind() method can be used to bind the value of this to a function
// Example 
    // function multiply(a,b) {
    //     return a * b;
    // }

    // const double = multiply.bind(null,2); // return 2 * b
    // double(3); // 6
    // const triple = multiply.bind(null,3); // return 3 * b
    // triple(3); // 9

// BIND WITH EVENT LISTENERS
// The bind() method can be used to bind the value of this to an event listener
// Example
    // const sakthi = {
    //     name: 'Sakthi',
    //     age: 30,
    //     sing: function() {
    //         console.log(`${this.name} sings LA LA LA`);
    //     }
    // }
    // const btn = document.getElementById('button');
    // btn.addEventListener('click', sakthi.sing.bind(sakthi));

// BIND WITH TIMERS
// The bind() method can be used to bind the value of this to a timer
// Example
    // class Counter {
    //     constructor(startingNum = 0, inc = 1) {
    //         this.count = startingNum;
    //         this.inc = inc;
    //     }
    //     start() {
    //         setInterval(this.incrementAndPrint.bind(this), 1000);
    //     }
    //     incrementAndPrint() {
    //         console.log(this.count);
    //         this.count += this.inc;
    //     }
    // }

// USECASES OF BIND
// Bind this to a function
// Bind this to an event listener
// Bind this to a timer
// Bind arguments to a function
// Bind this to a function and arguments
// Bind this to a function and arguments and use it as a new function

// ARROW FUNCTIONS AND THIS
// Arrow functions do not have their own this
// Arrow functions inherit this from the parent scope
// Example:
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

// RECAP OF THIS
// 1. In a method, this refers to the owner object.
// 2. Alone, this refers to the global object.
// 3. Value of this - will be equal to whatever is left of the dot
// 4. When you call the function on nothing, but the function comes from a class, the value of this will be undefined.
// 5. THIS is a reserved keyword whose value is determined ONLY AT THE POINT OF FUNCTION EXECUTION

// function greets() {

//     console.log('Hello',this.user_name); // Hello undefined - this => global object - there is no user_name in global object
// }

// const kutti = {
//     user_name: 'Kutti',
//     greet: greets
// }

// kutti.greet(); // Hello Kutti - In greets function this refers to kutti object
// const k = kutti.greet;
// k(); // Hello undefined - In greets function this refers to global object
// k.call(kutti); // Hello Kutti - In greets function this refers to kutti object
// k.apply(kutti); // Hello Kutti - In greets function this refers to kutti object
// const kk = k.bind(kutti);
// kk(); // Hello Kutti - In greets function this refers to kutti object

// class CounterGame {

//     constructor(startingNum = 1, button) {
//         this.count = startingNum;
//         this.btn = button;
//         // this.btn.addEventListener('click', this.increment.bind(this)) // One way
//         this.btn.addEventListener('click', () => this.increment())
//     }

//     increment() {
//         this.count += 1;
//         console.log(this.count);
//     }
// }

// const butn = document.querySelector('#clickMe2');
// const nnn = new CounterGame(100,butn)

// OOPS - BEHIND THE SCENES
// new KEYWORD
// The new keyword is used to create an instance of a class
// new keyword does four 4 things:
// 1. Creates an empty object // {}
// 2. Sets the keyword this to the newly created object // this => {}
// 3. Returns the object // return this
// 4. Creates a link to the object's prototype // __proto__

// CONSTRUCTOR FUNCTION
// A constructor function is a function that is used to create an object
// Example
    // function Person(name,age) {
    //     this.name = name;
    //     this.age = age;
    //     this.greet = function() {
    //         return `Hello ${this.name}`;
    //     }
    // }
    // const p1 = new Person('Sakthi',30);
    // const p2 = new Person('Kutti',1);

// PROTOTYPE
// Prototype is a basic mechanism that gives JS objects the ability inherit features and functionality from each other
// Every single JS object has a special built in property called prototype
// Prototype itself an object which has its own protytype
// Prototype chain is a series of objects connected by the prototype property
// In class, if we add any method, it will be added to the prototype of the class
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

// PROTOTYPE CHAIN
// Prototype chain is a series of objects connected by the prototype property
// The prototype chain is a series of objects linked together through their prototype properties.
// EXAMPLE:
// function Animal(name) {
//     this.name = name;
//     this.sleep = function() {
//         console.log(`${this.name} is sleeping.`);
//     };
// }
// const n5 = new Animal('Blue');
// n5.sleep(); // Blue is sleeping. - sleep method is available in n5 object
// n5.toString(); // [object Object] - toString method is available in Object.prototype


// PROTOTYPE INHERITANCE
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

// USEFUL PROTOTYPE METHODS

// Object.create() - creates a new object with the argument as its prototype
// Example: 
    // const person1 = { name: 'Sakthi', sing() { return 'LA LA LA'; } };
    // const person2 = Object.create(person1); // person2 is an empty object with person1 as its prototype
    // person2.sing(); // LA LA LA - person2 inherits the sing method from person1

// Object.getPrototypeOf() - returns the prototype of an object
// Example:
    // const person1 = { name: 'Sakthi', sing() { return 'LA LA LA'; } };
    // const person2 = Object.create(person1); // person2 is an empty object with person1 as its prototype
    // Object.getPrototypeOf(person2); // { name: 'Sakthi', sing: [Function: sing] }

// Object.setPrototypeOf() - sets the prototype of an object
// Example:
    // const person1 = { name: 'Sakthi', sing() { return 'LA LA LA'; } };
    // const person2 = {};
    // Object.setPrototypeOf(person2,{isHuman : false}); // person2 is an empty object with isHuman as its prototype
    // console.log(person2); // { isHuman: false }

// isPrototypeOf() - checks if an object is in the prototype chain of another object
// Example:
    // const person1 = { name: 'Sakthi', sing() { return 'LA LA LA'; } };
    // const person2 = Object.create(person1); // person2 is an empty object with person1 as its prototype
    // person1.isPrototypeOf(person2); // true

// FUNCTION DECLARATION VS FUNCTION EXPRESSION
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

// ASYNCHRONOUS JAVASCRIPT
// Asynchronous in JS allows operations to run in the background, enabling other code to execute without waiting for the asynchronous operation to complete
// Asynchronous JavaScript is a way of writing code that allows multiple things to happen at the same time
// Fetching DATA from a server - SetTimeout - SetInterval - DOM events
// Asynchronous JavaScript uses callbacks, promises, and async/await to handle asynchronous operations
// Asynchronous JavaScript is important for building fast, responsive, and interactive web applications
// Example:
    // console.log('Start');
    // setTimeout(() => {
    //     console.log('Hello');
    // },2000);
    // console.log('End');
    // Above code will print Start, End, Hello - setTimeout is an asynchronous function

// CALLBACK FUNCTIONS
// A callback function is a function that is passed as an argument to another function
// Callback functions are used to perform an action after a certain task is completed
// Callback functions are used to handle asynchronous operations
// Examples:
    // const btn3 = document.querySelector('#clickMe3');
    // function greetMe() {
    //     alert('Say Hello');
    // }
    // setTimeout(greetMe,1000);
    // setInterval(greetMe,1000);
    // btn3.addEventListener('click',greetMe);

// CALLBACK HELL
// Callback hell is a situation where multiple nested callbacks make the code hard to read and maintain
// Callback hell is a common problem in asynchronous programming
// Callback hell can be avoided by using promises, async/await, and other asynchronous patterns
// Example:
    // setTimeout(() => {
    //     console.log('First');
    //     setTimeout(() => {
    //         console.log('Second');
    //         setTimeout(() => {
    //             console.log('Third');
    //         },1000);
    //     },1000);
    // },1000);

// PROMISES
// A promise is an object that represents the eventual completion or failure of an asynchronous operation
// Promises provide an alternate way to handle asynchronous operations
// A promise is a placeholder for a value that may not be available yet
// A promise can be in one of three states: pending, fulfilled, or rejected
    // Pending - initial state, neither fulfilled nor rejected - does not have a value
    // Fulfilled - operation completed successfully - has a value
    // Rejected - operation failed - has a reason for the failure

// .then and .catch
// .then() - is used to handle the fulfillment of a promise
// .catch() - is used to handle the rejection of a promise

// PROMISE CHAINING
// Promise chaining is a way to chain multiple promises together
// Promise chaining is used to perform a sequence of asynchronous operations
// When we calling then() method on a promise, can return new promise in callback
// Only one catch block is enough to handle all the errors in the promise chain
// Example: REFER aap.js file

// ASYNC/AWAIT
// Async/Await is a modern way of handling asynchronous operations in JavaScript
// Async/Await is built on top of promises
// Async/Await makes asynchronous code look and behave like synchronous code
// Async/Await is syntactic sugar for promises
// Async/Await makes it easier to write and maintain asynchronous code
// Async/Await is non-blocking
// Async functions always return a promise
// Await - waits for a promise to be resolved - like pause button

// COMPARING .then()/.catch() AND ASYNC/AWAIT
// .then()/.catch() - used to handle promises
// Async/Await - used to handle promises
// .then()/.catch() - chaining multiple promises
// Async/Await - chaining multiple promises
// .then()/.catch() - handling errors using catch
// Async/Await - handling errors using try/catch

// PROMISE.ALL
// Promise.all() is a method that takes an array of promises and returns a single promise
// Promise.all() will reject if any of the promises in the array rejects

// PROMISE.ALLSETTLED
// Promise.allSettled() is a method that takes an array of promises and returns a single promise
// Promise.allSettled() will always resolve, even if some of the promises in the array reject

// PROMISE.RACE
// takes array of promises and returns a single promise as soon as one of the promises in the array 
// resolves or rejects

// BUILDING OWN PROMISE
// We can use new keyword with Promise constructor to create a new promise
// Promise constructor takes a function as an argument
// The function takes two arguments - resolve and reject
// resolve is a function that is called when the promise is fulfilled
// reject is a function that is called when the promise is rejected
// Example:
    // const myPromise = new Promise((resolve,reject) => {
    //     setTimeout(() => {
    //         resolve('Hello');
    //     },2000);
    // });
    // myPromise.then((res) => console.log(res)); // Hello

// LATEST JAVASCRIPT FEATURES
// OPTIONAL CHAINING
// Optional chaining is a way to safely access nested properties of an object
// Optional chaining is denoted by the ?. operator
// Example:
    // const person = {
    //     name: 'Sakthi',
    //     address: {
    //         city: 'Chennai'
    //     }
    // }
    // console.log(person.address.city); // Chennai
    // console.log(person.address.country); // ERROR
    // console.log(person.address?.country); // undefined

// NULLISH COALESCING
// Nullish coalescing is a way to provide a default value for null or undefined
// Nullish coalescing is denoted by the ?? operator
// Example:
    // const firstName = null;
    // console.log(firstName || 'Sakthi'); // Sakthi
    // console.log(firstName ?? 'Sakthi'); // Sakthi
    // const lastName = "";
    // console.log(lastName || 'Vel'); // Vel
    // console.log(lastName ?? 'Vel'); // "" - nullish coalescing will not consider empty string as null or undefined

// NUMERIC SEPARATORS
// Numeric separators are a way to make numbers more readable by separating them with underscores
// Numeric separators are denoted by the _ character
// Example:
    // const num = 1_000_000;
    // console.log(num); // 1000000
    // const num2 = 1000000;
    // console.log(num2); // 1000000
    // console.log(num === num2); // true

// ARRAY.PROTOTYPE.AT()
// Array.prototype.at() is a method that returns the element at the specifeid index of an array
// Array.prototype.at() is similar to array indexing
// Additionaly, Array.prototype.at() supports negative indexing
// Negative index - will start from the end of the array

// STRING.PROTOTYPE.REPLACEALL()
// String.prototype.replaceAll() is a method that replaces all occurrences of a substring in a string with another substring
// String.prototype.replaceAll() is case-sensitive

// STRING.PROTOTYPE.MATCHALL()
// String.prototype.matchAll() is a method that returns an iterator of all matches of a regular expression in a string
// String.prototype.matchAll() is useful for extracting multiple matches from a string

// LOGICAL OR+ASSIGNMENT OPERATOR
// Logical OR+Assignment operator is a way to assign a value to a variable only if the variable is falsy
// Logical OR+Assignment operator is denoted by the ||= operator
// Example:
    // let name = 'Sakthi';
    // name ||= 'Kutti';
    // console.log(name); // Sakthi
    // let name2 = '';
    // name2 ||= 'Kutti';
    // console.log(name2); // Kutti

// LOGICAL AND+ASSIGNMENT OPERATOR
// Logical AND+Assignment operator is a way to assign a value to a variable only if the variable is truthy
// Logical AND+Assignment operator is denoted by the &&= operator
// Example:
    // let name = 'Sakthi';
    // name &&= 'Kutti';
    // console.log(name); // Kutti
    // let name2 = '';
    // name2 &&= 'Kutti';
    // console.log(name2); // ""

// LOGICAL NULLISH+ASSIGNMENT OPERATOR
// Logical nullish+Assignment operator is a way to assign a value to a variable only if the variable is null or undefined
// Logical nullish+Assignment operator is denoted by the ??= operator
// Example:
    // let name = 'Sakthi';
    // name ??= 'Kutti';
    // console.log(name); // Sakthi
    // let name2; // undefined
    // name2 ??= 'Kutti';
    // console.log(name2); // "Kutti"

// THREE THINGS TO REMEMBER
// 1. ??= only assigns if the value is null or undefined
// 2. ||= only assigns if the value is falsy
// 3. &&= only assigns if the value is truthy

// PROIMISE.ANY
// Promise.any() is a method that takes an array of promises and returns a single promise
// Promise.any() will resolve as soon as one of the promises in the array resolves
// Promise.any() will reject if all the promises in the array reject

// FLOAT IMPRECISION
// Floating point numbers in JavaScript are represented as 64-bit floating point numbers
// Floating point numbers are not precise
// Floating point numbers can result in rounding errors
// Example:
    // console.log(0.1 + 0.2); // 0.30000000000000004
    // console.log(0.1 + 0.2 === 0.3); // false

// BIGINT
// BigInt is a new primitive type in JavaScript
// BigInt is used to represent integers that are larger than the maximum safe integer
// BigInt is denoted by appending n to the end of a number
// BigInt is useful for working with large numbers
// BigInt is not implicitly converted to a number
// BigInt is not allowed to be used with Math object
// EXAMPLE:
    // const bigNum = 1234567890123456789012345678901234567890n;
    // console.log(bigNum); // 1234567890123456789012345678901234567890n
    // console.log(typeof bigNum); // bigint
    // console.log(bigNum + 1n); // 1234567890123456789012345678901234567891n
    // console.log(bigNum + 1); // ERROR
    // console.log(Math.sqrt(bigNum)); // ERROR

// NaN
// NaN is a special value in JavaScript that represents "Not a Number"
// All NaN values are considered unique and are not equal to each other
// NaN === NaN is false
// 0/0 === 0/0 is false

// isNaN()
// isNaN() is a function that checks if a value is NaN
// isNaN() returns true if the value is NaN, false otherwise
// isNaN() converts the value to a number before checking if it is NaN
// isNaN() returns true for undefined, null, and non-numeric values
// isNaN() returns false for empty strings, strings with only whitespace, and strings that can be converted to numbers
// EXAMPLE:
    // console.log(isNaN(NaN)); // true
    // console.log(isNaN(0/0)); // true
    // console.log(isNaN('hello')); // true
    // console.log(isNaN('123')); // false
    // console.log(isNaN(' ')); // false
    // console.log(isNaN('')); // false
    // console.log(isNaN(null)); // false
    // console.log(isNaN(undefined)); // true

// Number.isNaN()
// Number.isNaN() is a function that checks if a value is NaN
// Number.isNaN() returns true if the value is NaN, false otherwise
// Number.isNaN() does not convert the value to a number before checking if it is NaN
// Number.isNaN() returns false for undefined, null, and non-numeric values
// Number.isNaN() returns false for empty strings, strings with only whitespace, and strings that can be converted to numbers
// EXAMPLE:
    // console.log(Number.isNaN(NaN)); // true
    // console.log(Number.isNaN(0/0)); // true
    // console.log(Number.isNaN('hello')); // false
    // console.log(Number.isNaN('123')); // false
    // console.log(Number.isNaN(' ')); // false
    // console.log(Number.isNaN('')); // false
    // console.log(Number.isNaN(null)); // false
    // console.log(Number.isNaN(undefined)); // false

// POST INCREMENT/DECREMENT && PRE INCREMENT/DECREMENT
// Post increment/decrement - returns the value before incrementing/decrementing
// Pre increment/decrement - returns the value after incrementing/decrementing
// EXAMPLE:
    // let num = 5;
    // console.log(num++); // 5
    // console.log(num); // 6
    // let num2 = 5;
    // console.log(++num2); // 6
    // console.log(num2); // 6
    // let num3 = 10;
    // console.log(num3--) // - 10
    // console.log(num3) // - 9
    // console.log(--num3) // - 8
    // console.log(5 + '5'); // 55 - concatenation operator converts number to string
    // console.log(5 - '5'); // 0 - subtraction operator converts string to number
    // console.log(5 * '5'); // 25 - multiplication operator converts string to number
    // console.log(5 / '5'); // 1 - division operator converts string to number
    // console.log(5 % '5'); // 0 - modulus operator converts string to number
    // console.log(5 + '5' + 5); // 555 - concatenation operator converts number to string
    // console.log(5 + 5 + '5'); // 105 - concatenation operator converts number to string
    // console.log('5' + 5 + 5); // 555 - concatenation operator converts number to string
    // console.log(5 + '5' - 5); // 50 - subtraction operator converts string to number
    // console.log(5 - '5' + 5); // 5 - subtraction operator converts string to number
    // console.log('5' + 5 - 5); // 50 - subtraction operator converts string to number
    // console.log(5 + '5' * 5); // 30 - multiplication operator converts string to number and multiplication has higher precedence
    // console.log(5 * '5' + 5); // 30 - multiplication operator converts string to number and multiplication has higher precedence
    // console.log('5' * 5 + 5); // 30 - multiplication operator converts string to number and multiplication has higher precedence
    
// AUTOMATIC SEMICOLON INSERTION
// Semicolons are optional in JavaScript
// JavaScript automatically inserts semicolons at the end of statements
// EXAMPLE:
    // function greet() {
    //     return
    //     'Hello';
    // }
    // console.log(greet()); // undefined - automatic semicolon insertion will insert semicolon after return
    // function greet2() {
    //     return 'Hello';
    // }
    // console.log(greet2()); // Hello

// GENERATORS
// Generators are functions that can be paused and resumed
// Generators are defined using the function* syntax
// Generators use the yield keyword to pause the function
// Generators return an iterator
// Generators are useful for creating iterators
// EXAMPLE:
    // function* count() {
    //     yield 1;
    //     yield 2;
    //     yield 3;
    // }
    // const counter = count();
    // console.log(counter.next().value); // 1
    // console.log(counter.next().value); // 2
    // console.log(counter.next().value); // 3

// ARRAY.FROM()
// Array.from() is method that creates new array from an array-like or iterabel object
// Array.from() is useful for converting array-like objects to arrays
// EXAMPLE:
    // const arr = Array.from('hello');
    // console.log(arr); // [ 'h', 'e', 'l', 'l', 'o' ]

// VAR and ITS SCOPE
// var is function scoped
// var is hoisted to the top of the function
// var can be redeclared within the same scope
// var can be reassigned
// var can be accessed before it is declared
// EXAMPLE:
    // function greet() {
    //     console.log(name); // undefined - hoisted
    //     var name = 'Sakthi';
    //     console.log(name); // Sakthi
    // }
    // greet();
    // function greet1() {
    //     var name = 'Sakthi';
    //     var name = "Kutti";
    //     console.log(name); // Kutti - var can be redeclared within the same scope
    // }
    // greet1();

// LET and ITS SCOPE
// let is block scoped
// let cannot be redeclared within the same scope
// let can be reassigned
// let cannot be accessed before it is declared
// EXAMPLE:
    // function greet2() {
    //     console.log(name); // ERROR - Cannot access 'name' before initialization
    //     let name = 'Sakthi';
    //     console.log(name); // Sakthi
    // }
    // greet2();
    // function greet3() {
    //     let name = 'Sakthi';
    //     let name = 'Kutti'; // ERROR - Identifier 'name' has already been declared
    //     console.log(name);
    // }
    // greet3();

// CONST and ITS SCOPE
// const is block scoped
// const cannot be redeclared within the same scope
// const cannot be reassigned
// const cannot be accessed before it is declared
// EXAMPLE:
    // function greet4() {
    //     console.log(name); // ERROR - Cannot access 'name' before initialization
    //     const name = 'Sakthi';
    //     console.log(name); // Sakthi
    // }
    // greet4();
    // function greet5() {
    //     const name = 'Sakthi';
    //     const name = 'Kutti'; // ERROR - Identifier 'name' has already been declared
    //     console.log(name);
    // }
    // greet5();

// SCOPE
// Scope is the context in which variables are declared
// Scope determines the visibility and lifetime of variables
// JavaScript has function scope and block scope
// Function scope - variables are visible within the function they are declared
// Block scope - variables are visible within the block they are declared
// EXAMPLE:
    // let name = 'Sakthi'; // global scope
    // function greet6() {
    //     let name = 'Kutti'; // function scope
    //     console.log(name); // Kutti
    // }
    // greet6();
    // console.log(name); // Sakthi

// SCOPE CHAIN
// Scope chain is the hierarchy of scopes in JavaScript
// Scope chain determines the visibility of variables
// FLOW OF SCOPE CHAIN
// 1. Start with the current scope
// 2. Move up to the parent scope
// 3. Continue moving up until the global scope is reached
// 4. Stop when the variable is found
// EXAMPLE:
    // let name = 'Sakthi'; // global scope
    // function greet7() {
    //     let name = 'Kutti'; // function scope
    //     function greet8() {
    //         console.log(name); // Kutti - name is found in the function scope
    //     }
    //     greet8();
    // }
    // greet7();

// LEXICAL SCOPE
// Lexical scope is the scope of a variable defined by its location in the source code
// Lexical scope is determined by the location of the variable declaration
// Lexical scope is also known as static scope
// Lexical scope allows variables to be accessed from the parent scope

// HOISTING
// Hoisting is a mechanism where variables and function declarations are moved to the top of their scope before code excution
// Hoisting only applies to function declarations and var variables
// Hoisting does not apply to let and const variables
// EXAMPLE:
    // console.log(name); // undefined - hoisted
    // var name = 'Sakthi';
    // console.log(name); // Sakthi
    // console.log(age); // ERROR - Cannot access 'age' before initialization
    // let age = 30;
    // console.log(age); // 30
// Function declarations are hoisted
// Function expressions are not hoisted
// EXAMPLE:
    // greet9(); // Hello - hoisted
    // function greet9() {
    //     console.log('Hello');
    // }
    // greet10(); // ERROR - greet10 is not a function
    // const greet10 = function() {
    //     console.log('Hello');
    // }

// IIFE - IMMEDIATELY INVOKED FUNCTION EXPRESSION
// IIFE is function that is executed immediately after it is defined
// IIFE is useful for creating a new scope
// IIFE is defined using the function expression syntax
// EXAMPLE:
    // (function() {
    //     console.log('Hello');
    // })();
    // (function(name) {
    //     console.log(`Hello ${name}`);
    // })('Sakthi');

// CLOSURE
// Closure is a function which defined inside another function has access to the outer function's variables
// Closure has access to the outer function's variables even after the outer function has returned
// Closure is created every time a function is created
// EXAMPLE:
    // function outer() {
    //     let name = 'Sakthi';
    //     function inner() {
    //         console.log(name);
    //     }
    //     return inner;
    // }
    // const innerFn = outer();
    // innerFn(); // Sakthi

// BUILT-IN BROWSER API's
// Browser API's are built-in JS functions which allws us to interact with the browser
// Browser API's are not part of the JavaScript language itself
// Browser API's are provided by the browser
// Browser API's are used to interact with the DOM, make HTTP requests, and more
// TIMERS - setTimeout, setInterval, clearTimeout, clearInterval
// DOM - document, window, Element, Node, Event, EventListener
// NETWORK - fetch, XMLHttpRequest, WebSocket
// STORAGE - localStorage, sessionStorage, indexedDB
// LOCATION - location, history, navigator

// SETTIMEOUT 
// setTimeout() is a method that calls a function or evaluates an expression after a specified number of milliseconds
// setTimeout() returns a unique ID for the timer
// clearTimeout() is a method that cancels a timer set with setTimeout()
// EXAMPLE:
    // const timer = setTimeout(() => {
    //     console.log('Hello');
    // },2000);
    // clearTimeout(timer);

// CLEARTIMEOUT
// clearTimeout() is a method that cancels a timer set with setTimeout()
// clearTimeout() takes the ID returned by setTimeout() as an argument
// EXAMPLE:
    // const timer = setTimeout(() => {
    //     console.log('Hello');
    // },2000);
    // clearTimeout(timer);

// SETINTERVAL
// setInterval() is a method that calls a function a evalutes an expression at specified intervals
// setInterval() returns a unique ID for the timer
// clearInterval() is a method that cancels a timer set with setInterval()
// EXAMPLE:
    // const interval = setInterval(() => {
    //     console.log('Hello');
    // },2000);
    // clearInterval(interval);

// CLEARINTERVAL
// clearInterval() is a method that cancel a timer set with setInterval()
// clearInterval() takes the ID returned by setInterval() as an argument    
// EXAMPLE:
    // const interval = setInterval(() => {
    //     console.log('Hello');
    // },2000);
    // clearInterval(interval);

// DEBOUNCING
// Debouncing is a technique used to limit the number of times a function is called
// Debouncing is used to ensure that a function is only called after a certain amount of time has passed
// Debouncing is useful for handling events that are triggered frequently
// Basically it controls the rate of function execution, in response to some sort of event
// Debouncing makes sure that the function is called only after certain amount of time has passed since the last time it was called

// THROTTLING
// Throttling is a technique used to limit the number of times a function is called
// Throttling is used to ensure that a function is only called at a certain rate
// Throttling is useful for handling events that are triggered frequently
// Basically it controls the rate of function execution, in response to some sort of event

// FUNCTIONAL PROGRAMMING
// Functional programming is a programming paradigm that treats computation as the evaluation of mathematical functions
// FP is the process of building software by composing pure functions, avoiding shared state, mutable data, and side-effects.

// FUNCTIONAL PROGRAMMING PRINCIPLES
// 1. Pure functions - A function that always produces the same output for the same input
// 2. Immutability - Data that cannot be changed after it is created
// 3. Side effects - Any change in the system that is observable outside the function
// 4. Higher-order functions - A function that takes another function as an argument or returns a function
// 5. Recursion - A function that calls itself
// 6. Composition - Combining functions to create more complex functions
// 7. Currying - A technique of translating the evaluation of a function that takes multiple arguments into evaluating a sequence of functions, each with a single argument

// FUNCTIONAL PROGRAMMING LIBRARIES
// 1. Lodash - A modern JavaScript utility library delivering modularity, performance, & extras
// 2. Ramda - A practical functional library for JavaScript programmers
// 3. Immutable.js - Immutable data collections for JavaScript
// 4. RxJS - Reactive Extensions for JavaScript
// 5. Underscore.js - A JavaScript library that provides a whole mess of useful functional programming helpers

// FUNCTIONAL PROGRAMMING EXAMPLES
// 1. MAP
// Map is a method that creates a new array by calling a function on each element of an existing array
// Map does not change the original array
// EXAMPLE:
    // const numbers = [1,2,3,4,5];
    // const doubled = numbers.map((num) => num * 2);
    // console.log(doubled); // [ 2, 4, 6, 8, 10 ]
// 2. FILTER
// Filter is a method that creates a new array with all elements that pass the test implemented by the provided function    
// Filter does not change the original array
// EXAMPLE:
    // const numbers = [1,2,3,4,5];
    // const even = numbers.filter((num) => num % 2 === 0);
    // console.log(even); // [ 2, 4 ]
// 3. REDUCE
// Reduce is a method that reduces an array to a single value by calling a function on each element of the array
// Reduce does not change the original array
// EXAMPLE:
    // const numbers = [1,2,3,4,5];
    // const sum = numbers.reduce((acc,num) => acc + num,0);
    // console.log(sum); // 15
// 4. EVERY
// Every is a method that tests whether all elements in the array pass the test implemented by the provided function    
// Every returns true if all elements pass the test, false otherwise
// EXAMPLE:
    // const numbers = [1,2,3,4,5];
    // const isPositive = numbers.every((num) => num > 0);
    // console.log(isPositive); // true
// 5. SOME
// Some is a method that tests whether at least one element in the array passes the test implemented by the provided function
// Some returns true if at least one element passes the test, false otherwise   
// EXAMPLE:
    // const numbers = [1,2,3,4,5];
    // const hasNegative = numbers.some((num) => num < 0);
    // console.log(hasNegative); // false
// 6. SORT
// Sort is a method that sorts the elements of an array in place and returns the sorted array
// Sort changes the original array
// EXAMPLE:
    // const numbers = [3,1,2,5,4];
    // const sorted = numbers.sort();
    // console.log(sorted); // [ 1, 2, 3, 4, 5 ]
// 7. FLAT
// Flat is a method that creates a new array with all sub-array elements concatenated into it recursively up to the specified depth
// Flat does not change the original array
// EXAMPLE:
    // const numbers = [1,[2,3],[4,5]];
    // const flat = numbers.flat();
    // console.log(flat); // [ 1, 2, 3, 4, 5 ]
// 8. FLATMAP
// FlatMap is a method that first maps each element using a mapping function, then flattens the result into a new array
// FlatMap does not change the original array
// EXAMPLE:
    // const numbers = [1,2,3];
    // const doubled = numbers.flatMap((num) => [num * 2]);
    // console.log(doubled); // [ 2, 4, 6 ]
// 9. FIND
// Find is a method that returns the value of the first element in the array that satisfies the provided testing function
// Find returns undefined if no element satisfies the testing function
// EXAMPLE:
    // const numbers = [1,2,3,4,5];
    // const found = numbers.find((num) => num > 3);
    // console.log(found); // 4
// 10. FINDINDEX
// FindIndex is a method that returns the index of the first element in the array that satisfies the provided testing function  
// FindIndex returns -1 if no element satisfies the testing function    
// EXAMPLE:
    // const numbers = [1,2,3,4,5];
    // const index = numbers.findIndex((num) => num > 3);
    // console.log(index); // 3
// 11. INCLUDES
// Includes is a method that determines whether an array includes a certain value among its entries
// Includes returns true if the value is found, false otherwise
// EXAMPLE:
    // const numbers = [1,2,3,4,5];
    // const hasThree = numbers.includes(3);
    // console.log(hasThree); // true
// 12. KEYS
// Keys is a method that returns an array of a given object's own enumerable property names
// EXAMPLE:
    // const person = {
    //     name: 'Sakthi',
    //     age: 30
    // }
    // const keys = Object.keys(person);
    // console.log(keys); // [ 'name', 'age' ]
// 13. VALUES
// Values is a method that returns an array of a given object's own enumerable property values
// EXAMPLE:
    // const person = {
    //     name: 'Sakthi',
    //     age: 30
    // }
    // const values = Object.values(person);
    // console.log(values); // [ 'Sakthi', 30 ]
// 14. ENTRIES
// Entries is a method that returns an array of a given object's own enumerable property [key, value] pairs
// EXAMPLE:
    // const person = {
    //     name: 'Sakthi',
    //     age: 30
    // }
    // const entries = Object.entries(person);
    // console.log(entries); // [ [ 'name', 'Sakthi' ], [ 'age', 30 ] ]
// 15. FROMENTRIES
// FromEntries is a method that transforms a list of key-value pairs into an object
// EXAMPLE:
    // const entries = [ [ 'name', 'Sakthi' ], [ 'age', 30 ] ];
    // const person = Object.fromEntries(entries);
    // console.log(person); // { name: 'Sakthi', age: 30 }
// 16. PADSTART
// PadStart is a method that pads the current string with another string until the resulting string reaches the given length
// PadStart does not change the original string
// EXAMPLE:
    // const str = 'hello';
    // const padded = str.padStart(10,'*');
    // console.log(padded); // *****hello
// 17. PADEND
// PadEnd is a method that pads the current string with another string until the resulting string reaches the given length
// PadEnd does not change the original string
// EXAMPLE:
    // const str = 'hello';
    // const padded = str.padEnd(10,'*');
    // console.log(padded); // hello*****
// 18. TRIM
// Trim is a method that removes whitespace from both ends of a string
// Trim does not change the original string
// EXAMPLE:
    // const str = ' hello ';
    // const trimmed = str.trim();
    // console.log(trimmed); // hello
// 19. TRIMSTART
// TrimStart is a method that removes whitespace from the beginning of a string
// TrimStart does not change the original string
// EXAMPLE:
    // const str = ' hello ';
    // const trimmed = str.trimStart();
    // console.log(trimmed); // hello
// 20. TRIMEND
// TrimEnd is a method that removes whitespace from the end of a string
// TrimEnd does not change the original string
// EXAMPLE:
    // const str = ' hello ';
    // const trimmed = str.trimEnd();
    // console.log(trimmed); // hello
// 21. REPEAT
// Repeat is a method that constructs and returns a new string which contains the specified number of copies of the string on which it was called
// Repeat does not change the original string
// EXAMPLE:
    // const str = 'hello';
    // const repeated = str.repeat(3);
    // console.log(repeated); // hellohellohello    
// 22. MATCH
// Match is a method that retrieves the result of matching a string against a regular expression
// Match returns an array of results or null if no match is found
// EXAMPLE:
    // const str = 'hello world';
    // const matches = str.match(/o/g);
    // console.log(matches); // [ 'o', 'o' ]
// 23. REPLACE
// Replace is a method that replaces a specified value with another value in a string
// Replace does not change the original string
// EXAMPLE:
    // const str = 'hello world';
    // const replaced = str.replace('world','there');
    // console.log(replaced); // hello there
// 24. SEARCH
// Search is a method that searches a string for a specified value and returns the position of the match
// Search returns -1 if no match is found
// EXAMPLE:
    // const str = 'hello world';
    // const position = str.search('world');
    // console.log(position); // 6
// 25. SLICE
// Slice is a method that extracts a section of a string and returns it as a new string
// Slice does not change the original string
// EXAMPLE:
    // const str = 'hello world';
    // const sliced = str.slice(6,11);
    // console.log(sliced); // world
// 26. SPLIT
// Split is a method that splits a string into an array of substrings   
// Split does not change the original string
// EXAMPLE:
    // const str = 'hello world';
    // const splitted = str.split(' ');
    // console.log(splitted); // [ 'hello', 'world' ]
// 27. TOLOWERCASE
// ToLowerCase is a method that converts a string to lowercase
// ToLowerCase does not change the original string
// EXAMPLE:
    // const str = 'HELLO';
    // const lower = str.toLowerCase();
    // console.log(lower); // hello
// 28. TOUPPERCASE
// ToUpperCase is a method that converts a string to uppercase
// ToUpperCase does not change the original string
// EXAMPLE:
    // const str = 'hello';
    // const upper = str.toUpperCase();
    // console.log(upper); // HELLO
// 29. CHARAT
// CharAt is a method that returns the character at a specified index in a string
// EXAMPLE:
    // const str = 'hello';
    // const char = str.charAt(0);
    // console.log(char); // h
// 30. CHARCODEAT
// CharCodeAt is a method that returns the Unicode of the character at a specified index in a string
// EXAMPLE:
    // const str = 'hello';
    // const charCode = str.charCodeAt(0);
    // console.log(charCode); // 104
// 31. CONCAT
// Concat is a method that combines two or more strings
// Concat does not change the original string
// EXAMPLE:
    // const str1 = 'hello';
    // const str2 = 'world';
    // const combined = str1.concat(' ',str2);
    // console.log(combined); // hello world
// 32. ENDSWITH
// EndsWith is a method that determines whether a string ends with a specified value
// EndsWith returns true if the string ends with the value, false otherwise
// EXAMPLE:
    // const str = 'hello world';
    // const endsWith = str.endsWith('world');
    // console.log(endsWith); // true
// 33. INCLUDES
// Includes is a method that determines whether a string contains a specified value
// Includes returns true if the string contains the value, false otherwise
// EXAMPLE:
    // const str = 'hello world';
    // const includes = str.includes('world');
    // console.log(includes); // true
// 34. INDEXOF
// IndexOf is a method that returns the position of the first occurrence of a specified value in a string
// IndexOf returns -1 if the value is not found
// EXAMPLE:
    // const str = 'hello world';
    // const index = str.indexOf('world');
    // console.log(index); // 6
// 35. LASTINDEXOF
// LastIndexOf is a method that returns the position of the last occurrence of a specified value in a string
// LastIndexOf returns -1 if the value is not found
// EXAMPLE:
    // const str = 'hello world';
    // const lastIndex = str.lastIndexOf('o');
    // console.log(lastIndex); // 7

// FIRST CLASS FUNCTIONS
// First class functions are functions that can be treated like any other value
// First class functions can be assigned to variables
// First class functions can be passed as arguments to other functions
// First class functions can be returned by other functions
// First class functions can be stored in data structures
// EXAMPLE:
    // function greet() {
    //     console.log('Hello');
    // }
    // const sayHello = greet;
    // sayHello(); // Hello

// PURE FUNCTIONS
// Pure functions are functions that always return the same output to the same input
// Pure functions do not have any side effects
// Pure functions should rely on any external state
// Pure functions should not modify the any external state

// HIGH ORDER FUNCTIONS
// Higher order functions are functions that take other functions as arguments or return functions or does both
// Higher order functions are functions that operate on other functions
// Higher order functions are functions that can be assigned to variables
// Higher order functions are functions that can be returned by other functions
// Higher order functions are functions that can be passed as arguments to other functions
// EXAMPLE:
    // function greet() {
    //     return function() {
    //         console.log('Hello');
    //     }
    // }
    // const sayHello = greet();
    // sayHello(); // Hello

// IMMUTABILITY
// Immutability is the concept that data cannot be changed after it is created
// Immutability is the idea that data should be treated as read-only
// Immutability is the idea that data should be copied instead of modified
// EXAMPLE:
    // const person = {
    //     name: 'Sakthi'
    // }
    // const updatedPerson = {
    //     ...person,
    //     name: 'Kutti'
    // }
    // console.log(updatedPerson); // { name: 'Kutti' }

// RECURSION
// Recursion is a technique where a function calls itself
// Recursion is useful for solving problems that can be broken down into smaller problems

// PARTIAL APPLICATION
// Partial application is a technique where a function is called with fewer arguments than it expects
// Partial application returns a new function that takes the remaining arguments
// Partial application is useful for creating functions with preset arguments
// This partial takes a function `func` and some fixed arguments `...fixedArgs`. 
// It returns a new function that takes the remaining arguments `...remainingArgs`.
// When this new function is called, it calls the original function `func` with the fixed arguments `...fixedArgs` and the remaining arguments `...remainingArgs`.
// EXAMPLE:
    // function greet(greeting,name) {
    //     console.log(`${greeting} ${name}`);
    // }
    // const sayHello = greet.bind(null,'Hello');
    // sayHello('Sakthi'); // Hello Sakthi

// COMPOSITION
// Composition is a technique where functions are combined to create more complex functions
// Composition is useful for creating reusable functions
// Passing the output of one function as the argument to another function

// CURRYING
// Currying is a technique of translating the evaluation of a function that takes multiple arguments into evaluating a sequence of functions, each with a single argument
// Currying is useful for creating functions that can be partially applied
// Currying is useful for creating functions with preset arguments

