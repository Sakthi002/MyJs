// console.log("DAY 31 - Tasks");
// # Tasks

// ## 1. Create a Simple Prototype Chain

// - Define a base object animal with a method eat.
// - Create another object dog that inherits from animal using Object.create.
// - Call eat from dog and explain how the prototype chain resolves it.

const animal = {
    eat : function () {
        console.log(`${this.name} eats.`);
    }
}

const dog = Object.create(animal);
dog.name = "Doggy"
dog.eat();

// Explanation : When you call a property or method on an object, JavaScript first looks for it on that object.
// If it’s not found, it looks up the prototype chain.
// In this example, dog inherits from animal, so when eat isn’t found on dog, it’s resolved from animal


// ## 2. Build a Custom Constructor Function

// - Create a constructor function Book(title, author).
// - Add a method getDetails() to the prototype of Book.
// - Instantiate two books and show they share the method from the prototype.

function Book(title, author) {
    this.title = title; 
    this.author = author; 
}

Book.prototype.getDetails = function () {
    console.log(`Here is the description - Title : ${this.title}, Author : ${this.author}`);
}

const book1 = new Book("book1", "author1");
const book2 = new Book("book2", "author2");
book1.getDetails();
book2.getDetails();

// ## 3. Compare Object Creation Patterns

// Create three objects using:

// - Object literals
// - Constructor functions
// - Object.create

// Add similar methods and compare how inheritance works in each pattern.

const obj1 = {
    name: "Object 1",
    printName : function() {
        console.log(this.name);
    }
}

obj1.printName(); // Object 1

// ✅ Characteristics:
// Simple and direct — no constructor or prototype chain involved (beyond Object.prototype).
// printName is defined directly on the object, not inherited.
// Each literal has its own copy of the method.

function ConstructorFunc(name) {
    this.name = name;
}

ConstructorFunc.prototype.printName = function() {
    console.log(this.name);
}

const obj2 = new ConstructorFunc("Object 2");

obj2.printName(); // Object 2

// ✅ Characteristics:
// Created using new.
// Inherits from ConstructorFunc.prototype.
// Methods added to the prototype are shared among all instances.
// obj2’s prototype chain:
// obj2 → ConstructorFunc.prototype → Object.prototype.

const base = {
  printName: function() {
    console.log(this.name);
  }
};

const obj3 = Object.create(base);
obj3.name = "Object 3";
obj3.printName(); // Object 3

// ✅ Characteristics:
// Object.create(proto) creates a new object with its [[Prototype]] set to proto.
// The method (printName) is inherited from the base object.
// obj3 itself doesn’t have printName; it looks up the prototype chain.


// ## 4. Simulate a Real-World Inheritance Chain

// - Simulate a real-life hierarchy: Person → Student → GraduateStudent.
// - Each level should add its own methods or properties using prototypes.
// - Show how a GraduateStudent can access methods from both Student and Person.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        console.log(`Hi I am ${this.name}, ${this.age} years old`);
    }
}

class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }

    myGrade() {
        console.log(`My grade is ${this.grade}`);
    }
}

class GraduateStudent extends Student {

    constructor(name, age, grade, year) {
        super(name, age, grade);
        this.year = year;
    }

    graduatedIn() {
        console.log(`I graduated in ${this.year}`);
    }
}

const gStudent = new GraduateStudent("Bob", 17, 12, 2012);
gStudent.introduce()
gStudent.myGrade()
gStudent.graduatedIn()


// ## 5. Object.create vs Class vs Constructor Function

// - Implement the same User entity using:
//   - Constructor Function
//   - ES6 Class
//   - Object.create
// - Write a summary comparing syntax, readability, and prototype behavior.

const user1 = {
    greet : function() {
        console.log(`I am the user ${this.name}`);
    }
}

let user11 = Object.create(user1);
user11.name = "Bob";
user11.greet() 

// ✅ Explanation:
// Object.create(proto) creates a new object with its prototype set to proto.
// user11 doesn’t have its own greet method.
// When you call user11.greet(), JS looks up the prototype chain and finds greet in user1.
// 🧠 Prototype chain:
// user11 → user1 → Object.prototype

function UserConstructor(name) {
    this.name = name;
}

UserConstructor.prototype.greet = function() {
    console.log(`I am the constructed user ${this.name}`);
}

const user2 = new UserConstructor("Tom");
user2.greet();

// ✅ Explanation:
// When called with new, JavaScript:
// Creates a new empty object.
// Links it to UserConstructor.prototype.
// Calls UserConstructor with this bound to that new object.
// Returns the new object.
// The shared method greet lives on the prototype, not on each instance.
// 🧠 Prototype chain:
// user2 → UserConstructor.prototype → Object.prototype

class User3 {
    constructor(name) {
        this.name = name;
    }

    greet() {
         console.log(`I am the class user ${this.name}`);
    }
}

const user33 = new User3("Jhon");
user33.greet();

// ✅ Explanation:
// ES6 class syntax is syntactic sugar over the constructor function pattern.
// Under the hood:
// A User3 function is created.
// Methods defined inside the class body (greet) are added to User3.prototype.
// Same inheritance behavior, just cleaner syntax.
// 🧠 Prototype chain:
// user33 → User3.prototype → Object.prototype