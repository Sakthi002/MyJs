// # Tasks

// ## 1. Create a Book Class

// - Create a Book class with properties: title, author, pages.
// - Add a method describe() that logs:
//     "Title: [title], Author: [author], Pages: [pages]"
// - Create at least two book objects and call the describe() method.

class Book {

    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    describe() {
        console.log(`Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`)
    }
}

const book1 = new Book("Book1", "Author1", 100);
const book2 = new Book("Book2", "Author2", 200);

book1.describe();
book2.describe();

// ## 2. Use Getters and Setters with a Temperature Class

// - Create a Temperature class with a private field _celsius.
// - Add a getter to return Fahrenheit value.
// - Add a setter to set Celsius temperature.
// - Test setting temperature and logging Fahrenheit.

// ```js
// this._celsius * 1.8 + 32;
// ```

class Temperature {

    #_celsius = 0;

    get celsius() {

        return this.#_celsius * 1.8 + 32
    }

    set celsius (value) {

        this.#_celsius = value;
    }
}

const temp = new Temperature();
temp.celsius = 36;

console.log(temp.celsius);


// ## 3. Build a User Class with Public & Private Fields

// - Fields: name, `#password`
// - Add a method checkPassword(pw) that checks if it matches #password.
// - Show how private fields can’t be accessed directly outside the class.

class User {

    #password = "";
    
    constructor(name, password) {
    
        this.name = name;
    
        this.#password = password;
    }

    checkPassword(pw) {

        return pw === this.#password;
    }
}

const user1 = new User("Sakthi", "123456");
// console.log(user1.#password) // we cant access
console.log(user1.checkPassword("123456"))

// ## 4. Inheritance — Vehicle and Car

// - Vehicle class has fields: make, model, and method start()
// - Car extends Vehicle, adds fuelType
// - Override the start() method in Car to print: "Starting [fuelType] car: [make] [model]"

class Vehicle {

    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    start() {
        console.log("Vehicle started...");
    }
}

class Car extends Vehicle {

    constructor(make, model, fuelType) {
        super(make, model);
        this.fuelType = fuelType;
    }

    start() {
        console.log(`Starting ${this.fuelType} car: ${this.make} ${this.model}`)
    }
}

const toyota = new Car("Toyota", "V1", "Petrol");
toyota.start();

// ## 5. Use a Static Method

// - Create a class MathUtils with static methods:
//     add(a, b), subtract(a, b), randomInt(min, max)
// - Call the methods without creating an object.

class MathUtils {

    static add(a,b) {
        return a + b;
    }

    static subtract(a,b) {
        return a - b;
    }

    static randomInt(min,max) {
        return Math.floor(Math.random() *  (max - min + 1)) + min
    }
}

let res1 = MathUtils.add(10,20);
let res2 = MathUtils.subtract(10,20);
let res3 = MathUtils.randomInt(10,20);

console.log(res1);
console.log(res2);
console.log(res3);


// ## 6. Smart Light Bulb Class with Access Control

// - Create a SmartLightBulb class:
//   - Public method: turnOn(), turnOff()
//   - Private method: #connectToWiFi()
//   - turnOn() first calls #connectToWiFi() and then logs: "Light is ON"
//   - Static method: info() — logs "SmartLightBulb v1.0 supports remote control and scheduling."
// - Try accessing the private method directly and observe the error.

class SmartLightBulb {

    turnOn() {
        console.log("Connecting to Wifi...");
        this.#connectToWiFi();
    }

    turnOff() {
        console.log("Turning On...");
    }

    #connectToWiFi() {
        console.log('Light is ON')
    }

    static info() {
        console.log("SmartLightBulb v1.0 supports remote control and scheduling.");
    }
}

const bulb = new SmartLightBulb();
// bulb.#connectToWiFi(); // Error : Cannot access private methods

// ## 7. Animal Class and Subclasses

// - Base Class: Animal(name, sound)
//   - Method: makeSound() logs: "The [name] says [sound]"
// - Subclass 1: Dog(name) — inherits from Animal
//   - Overrides makeSound() → "The Dog [name] barks!"
// - Subclass 2: Cat(name)
//   — overrides makeSound() → "The Cat [name] meows!"
// - Call super() inside each subclass constructor
// - Add a shared method sleep() in Animal and test with both Dog and Cat instances.

class Animal {

    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }

    makeSound() {
        console.log(`The ${this.name} says ${this.sound}`);
    }

    sleep() {
        console.log(`The ${this.name} is sleeping.`)
    }
}

class Dog extends Animal {

    constructor(name) {
        super(name)
    }

    makeSound() {
        console.log(`The Dog ${this.name} barks!`);
    }
}

class Cat extends Animal {

    constructor(name) {
        super(name)
    }

    makeSound() {
        console.log(`The Cat ${this.name} meows!`);
    }
}

const jhon = new Dog("Jhon");
jhon.makeSound();
jhon.sleep();

const meow = new Cat("Meow");
meow.makeSound();
meow.sleep();