console.log("DAY 13");

console.log(this); // window

// IMPLICIT BINDING

let employee = {
    id: "LWS001",
    firstName: "Sakthivel",
    lastName: "Munusami",

    returnThis: function() {
        return this;
    },

    getFullName: function () {
        return `${this.firstName} ${this.lastName}`
    }
}

console.log(employee.id);
console.log(employee.returnThis()); // this refers to the object itself
console.log(employee.getFullName());

let tom = {
    name: 'Tom',
    age: 7
}

let jerry = {
    name: "Jerry",
    age: 3
}

function greetMe(obj) {

    obj.logMessage = function() {
        return `${this.name} is ${this.age} years old.`
    }
}

greetMe(tom);
console.log(tom.logMessage());

greetMe(jerry);
console.log(jerry.logMessage());

// let testFunc = jerry.logMessage;
// console.log(testFunc())

function sayName() {
    console.log(this); // window object
}

sayName();

function outer (x) {

    console.log("Outer function ", this);

    return function inner(y) {

        console.log("Inner function ", this);
    }
}

let outFunc = outer();
outFunc();

const getName = () => this;

console.log("In arrow functions in global scope this value is : ", getName());

let emp = {
    name: "test",
    // getName: () => `Name is ${this.name}` // this refers to global obj - name not there in global

    // SOLUTION 1
    // getName: function () {
    //     return `Name is ${this.name}`
    // }

    // SOLUTION 2
    getName: function () {
        return () => `Name is ${this.name}`
    }
}

let descMethod = emp.getName();

console.log(descMethod());

// CALL

function standAloneFunc() {
    console.log(`Hello ${this.firstName}`);
}

let obj1 = {
    firstName : "Sakthi"
}

standAloneFunc.call(obj1) // we are explicitly telling to standAloneFunc `this` refers to obj1

function pInfo(hobby1, hobby2) {
    console.log(`I am ${this.name}, my hoobies are ${hobby1} and ${hobby2}`);
}

let officer = {
    name: "Kathir"
}

pInfo.call(officer, "Dancing", "Singing");
pInfo.apply(officer, ["Dancing", "Singing"])
let myFun = pInfo.bind(officer, "Dancing", "Singing");
myFun();

// IN CONSTRUCTOR FUNCTION

var Cartoon = function(name, animal) {
    this.name = name;
    this.animal = animal;
    this.log = function() {
        console.log(this.name, ' is a ', this.animal);
    }
}

let tomCartoon = new Cartoon('Tom', "Cat");
let jerryCartoon = new Cartoon('Jerry', "Mouse");

tomCartoon.log();
jerryCartoon.log();

// PROBLEM 1

let user = {
    name : "Manish",
    getName: function() {
        // function inner() {
        //     console.log(`Hello ${this.name} !`); // this will refers to window object - because this is inside standalone function of object method
        // }
        let inner = () => {
            console.log(`Hello ${this.name} !`); // this will refers to parents scope - because this is inside arrow function
        }
        inner()
    }
}
user.getName() // this will refers to window object - because this is inside standalone function of object method

// PROBLEM 2
let jhon = {
    name: 'Jhon',
    greet: function (){
        console.log('hi', this.name);
    }
}

let newFunc = jhon.greet;

newFunc() // unbounded with jhon obj nw - this will refers to global object

// solution
let bindFunc = newFunc.bind(jhon);
bindFunc()


