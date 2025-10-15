console.log("*************** TASKS DAY 13 ******************");

// 1. Create a table of two columns, situation and value. Now add the rows for every situations and the value of this in that situation. Please cover the following situations
// At the Global
// Inside an Object Method
// Inside the Satandalone non-Arrow Function
// Inside an Arrow Function(standalone)
// Inside an Arrow Function(as object method)
// Inside an object created with the Constructor Function
// Please add examples for each of the scenarios.

// =======================================================================================================
// |                  SITUATION                             |                 VALUE                      |    
// =======================================================================================================
// |                  At the Global                         |                 Window Object              |    
// -------------------------------------------------------------------------------------------------------
// |             Inside an Object Method                    |                 Object itself              |    
// -------------------------------------------------------------------------------------------------------
// |    Inside the Standalone non-Arrow Function           |  Window(In Non strict) - Undefined(strict) |    
// -------------------------------------------------------------------------------------------------------
// |        Inside an Arrow Function(standalone)            |                 Window                     |    
// -------------------------------------------------------------------------------------------------------
// |    Inside an Arrow Function(as object method)          |                 Parent's scope             |    
// -------------------------------------------------------------------------------------------------------
// | Inside an object created with the Constructor Function |                 Created Object             |    
// =======================================================================================================

// Global
console.log(this); // window

//Object method
let book = {
    title : "Clean Code",
    author: "Sakthi M",
    getAuthor : function () {
        console.log(this.author);
    }
}
book.getAuthor(); // Sakthi M (this points to object itself)

// Standalone non-Arrow Function
function sayName() {
    console.log(`Hello `, this.title);
}
sayName(); // Hello undefined (this points to window)

// Arrow Function(standalone)
let arrFunc = () => {
    console.log("Hi ", this.title);
}
arrFunc(); // Hi undefined (this points to window)

// Inside an Arrow Function(as object method)
let book2 = {
    title : "Clean Code 2",
    author: "Sakthi M",
    getAuthor : () => {
        console.log("Author name is ",this.author);
    }
}
book2.getAuthor(); // Author name is undefined (this points parent (window))

// Inside an object created with the Constructor Function
var Books = function (title, author) {
    this.title = title;
    this.author = author;
    this.log = function() {
        console.log(this.title, this.author);
    }
}

let bookNew = new Books('Clean Code New', "Author New");
bookNew.log() // this refers to bookNew Object


// 2. What is the problem here? Fix it to log the correct name and explain the fix
const userN = {
  name: "tapaScript",
  greet: () => {
    console.log(`Hello, ${this.name}!`);
  },
};

userN.greet(); // Hello, !

// Answer : Hello, !
// Reason : Because greet is a arrow function inside object - so it refers to its parent (window) - in window there is no name
// Fix 1: as regiualr function
const userNFix = {
    name: "tapaScript",
    greet: function (){
        console.log(`Hello, ${this.name}!`);
    },
}
userNFix.greet(); // Hello, tapaScript!

// Fix 2: One level down arrow function
const userNFix2 = {
    name: "tapaScript",
    greet: function (){
        return () => {
            console.log(`Hello, ${this.name}!`);
        }
    },
}
let func = userNFix2.greet();
func(); //  // Hello, tapaScript!

// 3. Can you explain what is the problem here and fix the issue to log the correct name?
const objN = {
  name: "Tom",
  greet: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

const greetFn = objN.greet;
greetFn(); // Hello, !
// Answer : // Hello, !
// Reason : greetFn unbounded with objN now - now it is a regular function
// Fix : using explicit binding
greetFn.call(objN); // Hello, Tom!


// 4. What is the problem with the following code? Why isn't it logging the name correctly?
const userN1 = {
  name: "Alex",
  greet: function () {
    function inner() {
      console.log(`Hello, ${this.name}!`);
    }
    inner();
  },
};

userN1.greet(); // Hello,  !
// Answer : Hello,  !
// Reason : this used inside objects methods inner regular function - so this inside that refers to window
// Fix : make it arrow function
const userN11 = {
  name: "Alex",
  greet: function () {
    let inner = () => {
      console.log(`Hello, ${this.name}!`);
    }
    inner();
  },
};
userN11.greet();


// 5. Create a Sports constructor function that takes name and number of players as arguments and assigns them using this keyword. Then, create two sports instances and log their details
function Sports(name, noOfPlayers) {
    this.name = name;
    this.noOfPlayers = noOfPlayers;
}

let cricket = new Sports('Cricket' , 11);
console.log(cricket);

let chess = new Sports('Chess', 2);
console.log(chess);

// 6. Can you attach the car1's describe() method to car2 object? Give all possible solutions that you can think of
const car1 = {
  brand: "Audi",
  model: "A8",
  describe: function () {
    console.log(`This car is a ${this.brand} ${this.model}.`);
  },
};

const car2 = {
  brand: "BMW",
  model: "X1",
};

// Solution 1 
// car2.describe = car1.describe;

// Solution 2:
function attachMethod(obj) {
    obj.describe = car1.describe;
}

attachMethod(car2);
console.log(car2);

Object.assign(car2, { describe: car1.describe });


// 7. What will be the output of the following code and why?
const person = {
  name: "Charlie",
  sayHello: function () {
    console.log(this.name);
  },
  sayHelloArrow: () => {
    console.log(this.name);
  },
};

person.sayHello();
person.sayHelloArrow();
// Options are:

// A: "Charlie" and "Charlie"
// B: "Charlie" and undefined
// C: "Charlie" and "" (empty string)
// D: undefined and "Charlie"

// Answer : B: "Charlie" and undefined