console.log("DAY 30 - Classes");

class AClass {

    constructor() {}
    method1() {}
    method2() {}
    method3() {}
    method4() {}
}

const a = new AClass();
const b = new AClass();
console.log(a === b);


class Car {

    constructor(model) {
        this.model = model
    }

    printThis() {
        console.log(this);
    }

    printModel() {
        console.log(this.model);
    }
}

const bmw = new Car('BMW');
const audi = new Car('Audi');
bmw.printModel()
bmw.printThis()
audi.printThis()

const Employee = class {
    constructor() {}
}

const emp1 = new Employee();
console.log(emp1);

const Dept = class Department {
    constructor() {}
    welcome() {
        console.log("Welcome to department");
    }
}

const dept = new Dept()
dept.welcome()

class Phone {

    brand = "Apple";

    make() {
        console.log(this.brand);
    }
}

const phone = new Phone();
console.log(phone);
phone.make();


class Animal {

    constructor(title) {
        this._title = title;
    }

    get title() {
        return `I am ${this._title}`
    }

    set title(value) {

        if(!value) {
            console.warn("Empty name not allowed");
            return;
        }

        this._title = value;
    }
}

const tiger = new Animal("Tiger");

console.log(tiger.title);

tiger.title = "Tigor"

console.log(tiger.title);

class MyClass {

    static name = "Sakthi"

    static printThis() {
        console.log(this);
    }


}

console.log(MyClass.printThis)

class User {

    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    static email = "test@gmail.com";

    greet() {
        console.log(this.validEmail);
        
        console.log(`Hi I am, ${this.email}`);
    }

    static validEmail(email) {
        return email.includes('@');
    }
}

const user1 = new User("Sakthi", "sakthi@gmail.com");

console.log(User.validEmail('kjh'));
user1.greet();

class WashingMachine {

    brand;
    #powerStatus = false;
    #currentCycle = null;

    constructor(brand) {
        this.brand = brand;
    }

    start(cycle) {
        if(!this.#powerStatus) {
            this.#turnOn()
        }
        this.#currentCycle = cycle;
        console.log(`The ${this.#currentCycle} is started`);

        this.#spin();

        this.#drain();

        this.#turnOff();
    }

    #spin() {
        console.log("Spinning");
    }

    #drain() {
        console.log("Draining");
    }

    #turnOn() {
        this.#powerStatus = true;
        console.log("Powering ON...");
    }

    #turnOff() {
        this.#powerStatus = false;
        console.log("Powering OFF...");
    }

    stop() {
        this.#turnOff()
    }
}

const lgMachine = new WashingMachine("LG");
console.log(lgMachine);
lgMachine.start("Quick Wash")

class Human {
    #pirate = "I am private";
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Hi I am ${this.name}, ${this.age} years old.`);
    }

    sleep() {
        console.log(`I am ${this.name}, sleeping.`);
    }

    static general() {
        console.log("I am a human");
    }
}

const human = new Human("Sakthi", 30);
console.log(human);
human.introduce();
human.sleep();

class Student extends Human {

    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }

    introduce() {
        super.sleep();
        
        console.log(`Hi I am ${this.name}, I am studying ${this.grade}`);
    }
}

const student = new Student("Alice", 16, 11);
student.introduce()





