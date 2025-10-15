// POJO - Plain Old JavaScript Object
// const key = 'name';
// const pet = { species: 'Dog', name: 'Jambu', age: 10};

// pet.bark = function () {

//     console.log("WOOF WOOF!!!!!!!!")
// }

// pet.bark();

// pet[1] = "hello";
// pet["1"] = "world";

// console.log(pet["1"]);

// pet[true] = "something";

// Properties that doesn't exist evaluates to undefined => pet['undefined'] => undefined
// All the keys are converted to string => pet[true] => pet["true"]
// The function that lives inside the object is called a method => pet.bark()

// function getTriangleArea(a,b) {

//     return (a * b) / 2;
// }

// function getTriangleHypotenuse(a,b) {

//     return Math.sqrt(a**2 + b**2);
// }

// const myTrio = {
//     a: 3,
//     b: 4,
//     getArea : function() {

//         return (this.a * this.b) / 2;
//     },
//     getHypotenuse : function() {

//         return Math.sqrt(this.a**2 + this.b**2);
//     }   
// }

// const myTrio2 = {
//     a: 5,
//     b: 12,
//     getArea : function() {

//         return (this.a * this.b) / 2;
//     },
//     getHypotenuse : function() {

//         return Math.sqrt(this.a**2 + this.b**2);
//     }   
// }

// class BankAccount {

//     constructor(accountNumber, accountHolder, balance = 0){
//         this.accountNumber = accountNumber;
//         this.accountHolder = accountHolder;
//         this.balance = balance;
//     }

//     deposit(amount) {

//         if(Number.isFinite(amount) && amount > 0){

//             this.balance += amount;

//             console.log(`Deposited ${amount}. and the balance is ${this.balance}`)

//         } else {
            
//             throw new Error('Invalid amount');
//         }
//     }

//     withdraw(amount) {

//         if(Number.isFinite(amount) && amount > 0 && amount <= this.balance) {
            
//             this.balance -= amount;

//             console.log(`Withdrawn ${amount}. and the balance is ${this.balance}`)
        
//         } else {
        
//             throw new Error('You do not have enough balance to withdraw');
//         }
//     }
// }

// const myAcc = new BankAccount(1234,'Sakthi');
// console.log(myAcc);

class Triangle {

    constructor(sideA, sideB) {

        if(!Number.isFinite(sideA) || sideA <= 0) {
            throw new Error('Invalid side A');
        }

        if(!Number.isFinite(sideB) || sideB <= 0) {
            throw new Error('Invalid side B');
        }

        this.a = sideA;
        this.b = sideB;
    }

    getArea() {

        return (this.a * this.b) / 2;
    }

    getHypotenuse() {

        return Math.sqrt(this.a**2 + this.b**2);
    }

    describe() {

        return `I am a triangle with area ${this.getArea()} and hypotenuse ${this.getHypotenuse()}`;
    }
}

class ShyTriangle extends Triangle {

    describe() {

        return `runs and hides`;
    }

    beShy() {

        return `I am shy`;
    }
}

class ColorTriangle extends Triangle {

    constructor(a,b,color) {
        super(a,b);
        this.color = color;
    }
}

class ColorMoodTriangle extends ColorTriangle {
    
    constructor(a,b,color,mood) {
        super(a,b,color);
        this.mood = mood;
    }
}

class Cat {

    constructor(name,breed) {
        this.name = name;
        this.breed = breed; 
    }

    static meow() {
        return `This refers to the class itself - ${this}`
    }

    static species = "cat";

    static registerStray() {
        const names = ['Muffin','Biscuit','Sleepy','Dodo','Prince','Princess']
        const name = choice(names);
        return new Cat(name,'unknown');
    }
}

function choice(arr) {

    let randomIdx = Math.floor(Math.random() * arr.length);

    return arr[randomIdx];
}

class Circle {

    static allowedColors = new Set(['red','green','blue']);

    constructor(radius, color) {
        this._radius = this.setRadius(radius);
        this._color = this.setColor(color)
    }

    get diameter() {
        return this._radius * 2;
    }

    set radius(radius) {

        this._radius = this.setRadius(radius);
    }

    setRadius(radius) {
        
        if(radius > 0) {

            return radius;
        
        } else {

            throw new Error('Radius wont be negative');
        }
    }

    get color() {
        return this._color;
    }

    set color(newColor) {

        this._color = this.setColor(newColor);
    }

    setColor(color) {

        if(Circle.allowedColors.has(color)) {

            return color;
        
        } else {

            throw new Error('This color not allowed');
        }
    }
}

class User {

    constructor(fName,lName) {
        this.firstName = fName;
        this.lastName = lName;
    }

    get fullName() {

        return this.firstName + ' ' + this.lastName;
    }

    set fullName(value) {

        const [first, last] = value.split(' ')
        
        this.firstName = first;
        
        this.lastName = last;
    }
}

class CatNew {
    name;
    breed;
    numLegs = 4;
    hasTail = true;
    constructor(name) {
        this.name = name;
    }

    ampuate() {
        this.numLegs -= 1;
    }

    static meow(ins) {
        return ins.name;
    }
}
// const blue = new CatNew('Blue');
// console.log(CatNew.meow(blue)); // blue

class CircleNew {
    #radius;
    constructor(radius) {
        this.#radius = radius;
    }
    get radius() {
        return this.#radius;
    }
    static getRadius(ins) {
        return ins.#radius;
    }
}
// const n1 = new CircleNew(10);
// console.log(n1.#radius); // Property '#radius' is not accessible outside class 'CircleNew' because it has a private identifier
// console.log(n1.radius); // 10
// console.log(CircleNew.getRadius(n1)); // 10
// n1.#radius = 20; // Property '#radius' is not accessible outside class 'CircleNew' because it has a private identifier

class MyClass {

    #privateMethod() {
        console.log('This is private method');
    }

    publicMethod() {
        this.#privateMethod();
    }

    static callMethod(ins) {
        ins.#privateMethod();
    }
}

// const n2 = new MyClass();
// n2.#privateMethod(); // Property '#privateMethod' is not accessible outside class 'MyClass' because it has a private identifier
// n2.publicMethod(); // This is private method
// MyClass.callMethod(n2); // This is private method

const person = {
    name: 'Sakthi',
    place: 'Chennai',
    sing: function() {
        return `${this.name} sings LA LA LA`;
    }
}

// console.log(person.sing()); // Sakthi sings LA LA LA;
// const pSing = person.sing;
// console.log(pSing()); //  sings LA LA LA

class CatNew2 {
    constructor(name) {
        this.name = name;
    }
    meow() {
        return `${this.name} meows`;
    }
}

function greet() {

    console.log('Hello',this); // this => global object
}

function whatIsThis() {
    console.log('The value of this is :',this);
}

const normalObj = {
    name : 'normal',
    whatIsThis: whatIsThis
}

// whatIsThis(); // The value of this is : Window object
// normalObj.whatIsThis(); // The value of this is : normalObj

class CatNew3 {
    constructor(name) {
        this.name = name;
    }
    static getRandom() {
        console.log('This is -',this);
    }
    meow() {
        console.log('This is -',this);
        return `${this.name} meows`;
    }
}

// CatNew3.getRandom(); // This is - class CatNew3
// const nn = new CatNew3('Blue');
// nn.meow(); // This is - CatNew3 {name: 'Blue'}
// const m = nn.meow;
// m(); // This is - undefined

// CALL Method
//================================================================================================
class CatNew4 {
    constructor(name) {
        this.name = name;
    }
    dance(style = "tango") {
        return `I am ${this.name} and I dance ${style}`;
    }
}

// const nl = new CatNew4('Blue');
// nl.dance(); // I am Blue and I dance tango
// const mm = nl.dance;
// mm(); // ERROR
// mm.call(nl); // I am Blue and I dance tango
// mm.call(nl.'salsa'); // I am Blue and I dance salsa

const sakthi = {
    name: 'Sakthi',
    age: 30,
    sing: function() {
        console.log(`${this.name} sings LA LA LA`);
    }
}

const jambu = { 
    name: 'Jambu',
    age: 10
}

// sakthi.sing(); // Sakthi sings LA LA LA
// const singFunc = sakthi.sing;
// singFunc(); // sings LA LA LA
// singFunc.call(sakthi); // Sakthi sings LA LA LA
// singFunc.call(jambu); // Jambu sings LA LA LA
// sakthi.sing.call(jambu); // Jambu sings LA LA LA

// APPLY Method
const ringo = {
    firstName: 'Ringo',
    greet: function(greeting, punctuation) {
        console.log(`${this.firstName} says ${greeting}${punctuation}`);
    }
}

const paul = {
    firstName: 'Paul'
}

// ringo.greet('Hello','!'); // Ringo says Hello!
// ringo.greet.call(paul,'Hi','!!!'); // Paul says Hello!
// ringo.greet.apply(paul,['Heyoooo', '!!!!!!!!!!']) // Paul says Heyoooo!!!!!!!!!!

// BIND Method
const john = {
    firstName: 'John',
    greet: function(greeting, punctuation) {
        console.log(`${this.firstName} says ${greeting}${punctuation}`, this);
    }
}

const george = {
    firstName: 'George'
}

// const johnGreet = john.greet.bind(george);
// johnGreet('Hi','!!!'); // George says Hi!!!

// BIND Method with arguments
const applySalesTax = function(taxRate, price) {
    return price + (price * taxRate);
}
const applyVat = applySalesTax.bind(null,0.2);
// console.log(applyVat(100)); // 120
const applyGst = applySalesTax.bind(null,0.1);
// console.log(applyGst(100)); // 110

// BIND with arrow function
const multiply = (a,b) => a * b;
const multiplyByTwo = multiply.bind(null,2);
// console.log(multiplyByTwo(10)); // 20

// BIND with event listener
const btn = document.querySelector("#clickMe");
// btn.addEventListener('click', function() {
//     console.log('Button clicked', this); // this => button element
// });

btn.addEventListener('click', sakthi.sing.bind(sakthi));

// BIND with timers

class Counter {

    constructor(startingNum = 1, increment = 1) {
        this.count = startingNum;
        this.increment = increment;
    }

    start() {

        // setInterval(function() {
        //     console.log(this); // this => window object
        //     console.log(this.count); // undefined
        // },1000)

        //ONE WAY
        // setInterval((function() {
        //     // console.log(this); // Counter {count: 0, increment: 1}
        //     console.log(this.count);
        //     this.count += this.increment;
        // }).bind(this),1000)

        //ANOTHER WAY
        setInterval(this.incrementAndPrint.bind(this),1000)
    }

    incrementAndPrint() {
        console.log(this.count);
        this.count += this.increment;
    }
}

// ARROW FUNCTIONS AND THIS
class CatNew5 {
    constructor(name) {
        this.firstName = name;
    }
    superGreet() {

        console.log('#1 : I am ' + this.firstName);

        setTimeout(function() {

            console.log(this); // window object

            console.log('#2 : I am ' + this.firstName);

        },500);

        setTimeout(() => {

            console.log(this); // CatNew5 {firstName: 'Blue'} - Arrow function does not have its own this

            console.log('#3 : I am ' + this.firstName);

        },1000);
    }
}

// RECAP OF THIS
// 1. In a method, this refers to the owner object.
// 2. Alone, this refers to the global object.
// 3. Value of this - will be equal to whatever is left of the dot
// 4. When you call the function on nothing, but the function comes from a class, the value of this will be undefined.

function greets() {

    console.log('Hello',this.user_name); // Hello undefined - this => global object - there is no user_name in global object
}

const kutti = {
    user_name: 'Kutti',
    greet: greets
}

// kutti.greet(); // Hello Kutti - In greets function this refers to kutti object
// const k = kutti.greet;
// k(); // Hello undefined - In greets function this refers to global object
// k.call(kutti); // Hello Kutti - In greets function this refers to kutti object
// k.apply(kutti); // Hello Kutti - In greets function this refers to kutti object
// const kk = k.bind(kutti);
// kk(); // Hello Kutti - In greets function this refers to kutti object

class CounterGame {

    constructor(startingNum = 1, button) {
        this.count = startingNum;
        this.btn = button;
        // this.btn.addEventListener('click', this.increment.bind(this)) // One way
        this.btn.addEventListener('click', () => this.increment())
    }

    increment() {
        this.count += 1;
        console.log(this.count);
    }
}

const butn = document.querySelector('#clickMe2');
const nnn = new CounterGame(100,butn)

class Doggy {

    constructor(name,breed) {
        this.dog_name = name;
        this.breed = breed;
    }

    bark () {

        return "WOOF!";
    }
}

const n = new Doggy('Jambu','Naatti');

function Dog1(name,breed) {
    this.name = name;
    this.breed = breed;
    this.bark = function() {
        console.log(`${this.name} says WOOF!`);
    }
    this.sleep = function() {
        console.log(`${this.name} is sleeping`);
    }
}

// const d = new Dog1('Jambu','Naatti');
// d.bark();

// const d2 = new Dog1('Biscuit','Naatti');
// d2.bark();

// console.log(d2.bark === d.bark); // false - Each object has its own copy of the function

class Dog2 {

    constructor(name,breed) {
        this.name = name;
        this.breed = breed;
    }

    bark() {
        console.log(`${this.name} says WOOF!`);
    }

    sleep() {
        console.log(`${this.name} is sleeping`);
    }
}

// const d3 = new Dog2('Jambu','Naatti');
// d3.bark();
// const d4 = new Dog2('Biscuit','Naatti');
// d4.bark();
// console.log(d3.bark === d4.bark); // true - The function is shared among all the objects

// PROTOTYPE
 const myObj = {
    color: 'blue',
    score: 90,
    greet() {
        console.log('Hello')
    }
 }

 function Animal(name) {
    this.name = name;
    this.sleep = function() {
        console.log(`${this.name} is sleeping`);
    }
 }

 Animal.prototype.eat = function() {
    console.log(`${this.name} is eating`);
 }

 const n4 = new Animal('Jambu');

 class Dog3 {

    constructor(name,breed) {
        this.name = name;
        this.breed = breed;
    }

    bark() {
        console.log(`${this.name} says WOOF!`);
    }

    sleep() {
        console.log(`${this.name} is sleeping`);
    }
 }

 const pep = new Dog3('Pep','Naatti');
 const beep = new Dog3('Beep','Aussie');

//  console.log(pep.bark === beep.bark); // true - The function is shared among all the objects
// console.log(pep.__proto__ === beep.__proto__); // true - The prototype is shared among all the objects

// PROTOTYPE INHERITANCE
// Prototype Inheritance allows objects to share properties and methods with other objects, reducing the code duplication and promoting code reuse.
// In JS, Objects can inherit properties and methods through the prototype chain.
// When a property or method accessed on object, first it will look into the object itself, if not found, it will look in the object's prototype.
// This process continues up the prototype chain until the property or method in found or end of the chain is reached
// Prototype chain is a series of objects linked together through their prototype properties.

class Dog4 {

    constructor(name,breed) {
        this.name = name;
        this.breed = breed;
    }

    bark() {
        console.log(`${this.name} says WOOF!`);
    }

    sleep() {
        console.log(`${this.name} is sleeping`);
    }
}

class GuideDog extends Dog4 {
    
    constructor(name,breed,guide) {
        super(name,breed);
        this.guide = guide;
    }

    guideTheWay() {
        console.log(`${this.name} is guiding the way`);
    }
} 

const g = new GuideDog('Guido','Labrador','Guide');
// g.bark(); // Guido says WOOF! - GuideDog inherits the bark method from Dog4 through prototype chain

// CALLBACKS
const nbers = [1,2,3,4,5];
nbers.filter(function(num) {
    return num % 2 === 0;
}) // [2,4]

const btn3 = document.querySelector('#clickMe3');
// Normally passing a function to another function
    // btn3.addEventListener('click',function(){
    //     alert('Say HI');
    // })
// Passing a function to another function
    // function greetMe() {
    //     alert('Say HIIII2');
    // }
    // btn3.addEventListener('click',greetMe);
    // btn3.addEventListener('click', () => this.greetMe()); // as arrow function

// IN SETTIMEOUT
    function greetMe() {
        alert('Say Hello');
    }
// setTimeout(greetMe,1000);
// setInterval(greetMe,1000);

// CALLBACKS IN ACTION
// console.log('Start');
// setTimeout(()=>{
//     console.log('First')
// },1000)
// console.log('End');
// Start, End, First - setTimeout is asynchronous

// CALLBACK HELL
// setTimeout(()=>{
//     console.log('First');
//     setTimeout(()=>{
//         console.log('Second');
//         setTimeout(()=>{
//             console.log('Third');
//             setTimeout(()=>{
//                 console.log('Fourth');
//             },1000);
//         },1000)
//     },1000);
// },1000);

// PROMISES
// A promise represents the eventual result of an asynchronous operation.
// A promise is in one of the three states - pending, fulfilled, rejected.

const baseURL = 'https://jsonplaceholder.typicode.com/posts';
const url = `${baseURL}/1`;

// fetch(url); // returns a promise - Promise {<pending>}

// fetch(url)
// .then((res) => {
//     console.log(res); // Response {type: "cors", url: "https://jsonplaceholder.typicode.com/posts/1", redirected: false, status: 200, ok: true, …}
// })
// .catch((err) => {
//     console.log('ERROR::', err); // ERROR:: TypeError: Failed to fetch
// })

// HELL
// fetch(`${baseURL}/1`).then((res) => {

//     console.log('Response 1::',res);

//     fetch(`${baseURL}/2`).then((res2) => {

//         console.log('Response 2::',res2);
        
//         fetch(`${baseURL}/3`).then((res3) => {

//             console.log('Response 3::',res3);
            
//             fetch(`${baseURL}/4`).then((res4) => {

//                 console.log('Response 4::',res4);
                
//             }).catch((err4) => {
            
//                 console.log('ERROR 4::', err4);
//             })

//         }).catch((err3) => {

//             console.log('ERROR 3::', err3);
//         })
//     }).catch((err2) => {

//         console.log('ERROR:: 2', err2);
//     })
// }).catch((err) => {

//     console.log('ERROR 1::', err);
// })

// PROMISE CHAIN
    // fetch(`${baseURL}/1`).then((res) => {

    //     console.log('Response 1::',res);

    //     return fetch(`${baseURL}/2`);

    // }).then((res2) => {

    //     console.log('Response 2::',res2);

    //     return fetch(`${baseURL}/3`);

    // }).then((res3) => {
        
    //         console.log('Response 3::',res3);
        
    //         return fetch(`${baseURL}/4`);
    // }).then((res4) => {
        
    //         console.log('Response 4::',res4);
    // })
    // .catch((err) => {

    //     console.log('ERROR::', err);
    // })

// ASYNC AWAIT

function hello() {
    return 'Hello';
}   
// console.log(hello()); // Hello

async function hello1(){
    return 'Hello';
}
// console.log(hello1()); // Promise {<fulfilled>: "Hello"}

function getPostOne() {

    fetch(`${baseURL}/1`).then((res) => {

        console.log('Response 1::',res);

    }).catch((err) => {

        console.log('ERROR 1::', err);
    })
}

// getPostOne(); // One way of doing

// By using async await
async function getPostOne1() {
    const response = await fetch(`${baseURL}/1`);
    console.log('Response 1::',response); // Response 1.....
    console.log('Hello after await')
}
// getPostOne1();

// if we do same function without async await
// function getPostOne1() {
//     const response = fetch(`${baseURL}/1`);
//     console.log('Response 1::',response); // Promise {<pending>}
// }

// COMPARISON
// ONE:
// fetch(`${baseURL}/1`).then((res) => {
//     console.log('Response 1::',res);
// }).catch((err) => {
//     console.log('ERROR 1::', err);
// })
// TWO: 
// await fetch(`${baseURL}/1`);

// ONE AND TWO => SAME
// await is more readable and easier to understand

async function getFourPosts() {

    try {

        const res1 = await fetch(`${baseURL}/1`);
        console.log('Response 1::',res1);
        
        const res2 = await fetch(`http://nope.nope`);
        console.log('Response 2::',res2);

        const res3 = await fetch(`${baseURL}/3`);
        console.log('Response 3::',res3);

        const res4 = await fetch(`${baseURL}/4`);
        console.log('Response 4::',res4);

    } catch(err) {

        console.log('ERROR::', err);
    }
}

// console.blah(); // Uncaught TypeError: console.blah is not a function

// try {
//     console.blah(); 
// } catch(err) { 
//     console.log('ERROR::',err); // ERROR:: TypeError: console.blah is not a function
// }   

// MANY CALLS IN PARALLEL
// =======================================

// BY USING .then AND .catch
// const results = [];
// fetch(`${baseURL}/1`).then(res => {

//     results.push(res);

//     console.log("REQUEST 1 DONE");
// })

// fetch(`${baseURL}/2`).then(res => {
    
//     results.push(res);

//     console.log("REQUEST 2 DONE");
// });

// fetch(`${baseURL}/3`).then(res => {
    
//     results.push(res);

//     console.log("REQUEST 3 DONE");
// });

// console.log("WAITING FOR REQUESTS TO COMPLETE");

// BY USING ASYNC AWAIT
// const results = [];

// async function getPost(num) {

//     const res = await fetch(`${baseURL}/${num}`);

//     console.log(`REQUEST ${num} DONE`);

//     results.push(res);
// }

// getPost(1);
// getPost(2);
// getPost(3);

// console.log("WAITING FOR REQUESTS TO COMPLETE");

// MANY CALLS IN SEQUENCE
// =======================================
// BY USING .then AND .catch
function getPostss() {
    fetch(`${baseURL}/1`).then(res => {

        console.log("REQUEST 1 DONE");
    
        return fetch(`${baseURL}/2`);
    
    }).then(res => {
    
        console.log("REQUEST 2 DONE");
    
        return fetch(`${baseURL}/3`);
    
    }).then(res => {
    
        console.log("REQUEST 3 DONE");
    })
    
    console.log("WAITING FOR REQUESTS TO COMPLETE");    
}
// BY USING ASYNC AWAIT
async function getPosts() {

    const res1 = await fetch(`${baseURL}/1`);
    console.log("REQUEST 1 DONE");


    const res2 = await fetch(`${baseURL}/2`);
    console.log("REQUEST 2 DONE");

    const res3 = await fetch(`${baseURL}/3`);
    console.log("REQUEST 3 DONE");

    const results = [res1,res2,res3];

    console.log("WAITING FOR REQUESTS TO COMPLETE");
}

// PROMISE.ALL
// =======================================

const fetchLotsOfPosts = [fetch(`${baseURL}/1`),fetch(`${baseURL}/2`),fetch(`${baseURL}/3`),fetch(`${baseURL}/4`),fetch(`${baseURL}/5`)];

// BY USING .then AND .catch
// Promise.all(fetchLotsOfPosts).then(res => {

//     console.log("ALL REQUESTS DONE");

//     console.log(res);

// }).catch(err => {    
    
//     console.log("ERROR:: One of promise failed",err);
// })

// BY USING ASYNC AWAIT
async function getManyPosts() {

    try {

        const res = await Promise.all(fetchLotsOfPosts);

        console.log("ALL REQUESTS DONE");

        console.log(res);

    } catch(err) {

        console.log("ERROR:: One of promise failed",err);
    }
}

// Promise.allSettled
// =======================================
// Promise.allSettled waits for all promises to be settled (either resolved or rejected) and returns an array of objects with the status of each promise.

async function getPostsSettled() {

    const gitBaseURL = 'https://api.github.com/users';

    let  elieP = fetch(`${gitBaseURL}/elie`);
    let  tim = fetch(`${gitBaseURL}/tim`);
    let badUser = fetch(`http://defniteydoesnotexist.com`);
    let  colt = fetch(`${gitBaseURL}/colt`);

    const results1 = await Promise.allSettled([elieP,tim,badUser,colt]);
    console.log(results1);

    const fullfielld = results1.filter(p => p.status === 'fulfilled');
    const rejected = results1.filter(p => p.status === 'rejected');

    console.log(fullfielld);
    console.log(rejected);
}

// Promise.race
// =================================
// Fastest completed promise wins

async function getFastestPost() {

    try {

        const res = await Promise.race([fetch(`${baseURL}/1`),fetch(`http://nope.nope`),fetch(`${baseURL}/3`)]);

        console.log("FASTEST REQUEST DONE");

        console.log(res);

    } catch(err) {

        console.log("ERROR:: Promise failed",err);
    }
}

// BUILDING PROMISES

function wait(duration) {

    const p = new Promise(function(resolve, reject) {

        setTimeout(()=>{

            resolve('ddd');
        },duration)
    });

    return p;
}

async function demo() {

    console.log('hi');

    const val = await wait(2000);

    console.log('there');

    console.log(val)
}

// wait().then(res => console.log(res,'in res')).catch(e => console.log(e, 'in err'));

async function randomResolveAndReject() {

    return new Promise(function(resolve, reject) {

        setTimeout(()=>{

            const random = Math.random()

            if(random < 0.5) {

                resolve("RESOLVED!!!!")
            
            } else {

                reject("ERROR!!!");
            }
        },2000);
    })
}

// randomResolveAndReject()
// .then(res => { 
//     console.log(res, 'INSIDE RES 1st .then');
//     return randomResolveAndReject()
// }).then(res => { 
//     console.log(res, 'INSIDE RES 2nd .then');
//     return randomResolveAndReject()
// }).then(res => { 
//     console.log(res, 'INSIDE RES 3rd .then');
// })
// .catch(err => console.log(err, 'INSIDE CATCH'))

// Part 1: Number Facts»

// Write a function, showNumberTrivia, that makes a request to the Numbers API (http://numbersapi.com) to get trivia about your favorite number. (Make sure you get back JSON — you may need to look at the documentation of the API to see how to do this: Details.) Log the piece of trivia to the console.

// Have a “race”: make a new function, showNumberRace, that asks for trivia about four different numbers (using four separate requests), but, as soon as one request returns, log the piece of trivia for the winning number to the console.

// Get all: make a new function, showNumberAll. that asks for trivia about about different numbers. Make all of the requests at the same time, but handle them once all requests are completed.

// However, at least one of the “numbers” you use should be an invalid thing, like the string “WRONG”.

// Log to the console the array of trivia for responses with a successful status code, and the array of error messages for the responses with a failed status code.

// Write a function, main, which calls all three of those functions, in order, moving onto the next function only after the current function fully completes.

// Call main; your console should look like this:

// showNumberTrivia: 5 is the number of appendages on most starfish.

// showNumberRace: 42 is the number of laws of cricket.

// GET http://numbersapi.com/WRONG?json 404 (Not Found)
// showNumberAll fulfilled: ['7 is the number of colors of the rainbow.',
//   '11 is the number of incarnations of The Doctor in Doctor Who.',
//   '22 is the typical length in minutes of a half hour sitcom.']
// showNumberAll rejected: ['Request failed with status code 404']

const baseNumberURL = 'http://numbersapi.com';

async function showNumberTrivia(number) {

    const url = `${baseNumberURL}/${number}?json`
    const response = await fetch(url);
    const numberTrivia = await response.json();
    console.log('showNumberTrivia:', numberTrivia.text)
}

async function showNumberRace(nums) {

    const respPromises = nums.map(n => fetch(`${baseNumberURL}/${n}?json`));

    const winningResponse = await Promise.race(respPromises);
    const winningNumber = await winningResponse.json();

    console.log("showNumberRace:",winningNumber.text)
}

async function showNumberAll(numbs) {

    try {

        const allPromises = numbs.map(n => fetch(`${baseNumberURL}/${n}?json`))

        const allResponse = await Promise.allSettled(allPromises);

        const okResponses = allResponse.filter(r => r.status === 'fulfilled' && r.value.ok === true);

        const numDataJsonPromises = okResponses.map(r => r.value.json());

        const numberData = await Promise.all(numDataJsonPromises);
   
        const facts = numberData.map(d => d.text);

        console.log('showNumberAll fulfilled:', facts)

        const errors = allResponse
        .filter(r => r.status === "fulfilled" && r.value.ok === false)
        .map(r => `${r.value.status}: ${r.value.statusText}`);

        console.log("showNumberAll rejected:", errors);

    } catch(e) {

        console.log(e)
    }
}

async function main() {

    await showNumberTrivia(10);

    await showNumberRace([4,5,6]);

    await showNumberAll([67,43,'WRONG'])
}

// main();

// LATEST JAVASCRIPT FEATURES
// =======================================
// OPTIONAL CHAINING
const user = {
    name: 'Sakthi',
    email: 'sakthi@gmail.com',
    address: {
        street: '123 Main St',
        city: 'Chennai',
        country: 'India'
    }
}
// console.log(user.address.zipcode.city); // Uncaught TypeError: Cannot read property 'city' of undefined
// console.log(user.address.zipcode && user.address.zipcode.city); // undefined
// console.log(user?.address?.zipcode?.city); // undefined - OPTIONAL CHAINING

// NULLISH COALESCING
// const name = '';
// const username = name || 'Guest';
// console.log(username); // Guest
// const username1 = name ?? 'Guest';
// console.log(username1); // '' - NULLISH COALESCING - gives the right side value only if the left side is null or undefined

// NUMERIC SEPARATORS
// const number = 1000000000;
// console.log(number); // 1000000000
// const number1 = 1_000_000_000;
// console.log(number1); // 1000000000
// console.log(number === number1); // true

// ARRAY.PROTOTYPE.AT
// const colors = ['red','green','blue','yellow','orange'];
// console.log(colors[0]) // red
// console.log(colors[1]) // green
// console.log(colors.at(0)) // red
// console.log(colors.at(1)) // green
// console.log(colors[-1]) // undefined - it will not work with negative index
// console.log(colors.at(-1)) // orange - it will start from the end of the array

// STRING.REPLACEALL()
// const str = "I really love cats. I have 2 cats. My cats are the best cats. I wish I had more cats. cat CAT cAt";
// console.log(str.replaceAll('cat', 'dog')); // - it replaces all the occurences of the word cat with dog but it is case sensitive
// console.log(str.replaceAll(/cat/gi, 'dog')); // - it replaces all the occurences of the word cat with dog and it is case insensitive

// STRING.MATCHALL()
// const str1 = "I really love cats. I have 2 cats. My cats are the best cats. I wish I had more cats. cat CAT cAt";
// const matches = str1.matchAll('cat');
// for(const match of matches) {
//     console.log(match);
// }

// LOGICAL OR ASSIGNMENT OPERATOR
// let todo = { priority: "", task : "Clean the house" };
// todo.priority = todo.priority || "low"; // it will assign low to priority only if it is falsy
// console.log(todo); // {priority: "low", task: "Clean the house"}
// // BY USING LOGICAL OR ASSIGNMENT OPERATOR
// let todo1 = { priority: "", task : "Clean the bike" };
// todo1.priority ||= "high"; // it will assign low to priority only if it is falsy
// console.log(todo1); // {priority: "low", task: "Clean the house"}

// LOGICAL AND ASSIGNMENT OPERATOR
// let loggenInUser = { name: 'Sakthi', isAdmin: true };
// loggenInUser &&= { ...loggenInUser, role: 'admin' } // it will add role: 'admin' only if loggenInUser is truthy

// LOGICAL NULLISH ASSIGNMENT OPERATOR
// let user1 = { name: 'Sakthi' };
// user1.email ??= 'test@gmailcom'; // it will assign test@gmailcom to email only if email is null or undefined

// EXAMPLE OF ABOVE 3 OPERATORS
function doSomeSetup(options = {}) {
    options.timeout ??= 1000;
    options.retries ??= 3;
    console.log(options);
}

// doSomeSetup(); // {timeout: 1000, retries: 3}
// doSomeSetup({timeout: 2000}); // {timeout: 2000, retries: 3}
// doSomeSetup({retries: 5}); // {timeout: 1000, retries: 5}

// THREE THINGS TO REMEMBER
// 1. ??= only assigns if the value is null or undefined
// 2. ||= only assigns if the value is falsy
// 3. &&= only assigns if the value is truthy

// PROMISE.ANY
// Promise.any([
//     fetch(`http://nope.nope`),
//     fetch(`http://nope.nope`),
//     fetch(`http://nope.nope`),
//     fetch(`http://nope.nope`),
//     fetch(`http://nope.nope`)
// ]).then(res => {

//     console.log("FIRST EXECUTED",res);

// }).catch(err => {

//     console.log('OH NO ALL THE PROMISES ARE FAILED', err); // AggregateError: All promises were rejected
// })

// AUTOMATIC SEMICOLON INSERTION
// function createPerson(name) {

//     return  // ASI will insert a semicolon after return - below code will not be executed
//     {
//         name: name
//     }
// }

// console.log(createPerson('Sakthi')); // undefined - ASI will insert a semicolon after return

// GENERATOR FUNCTIONS
// function* countDown(count) {

//     while(count > 0) {
//         yield count;
//         count--;
//     }
// }

// const counter = countDown(5);
// console.log(counter.next().value); // 5
// console.log(counter.next().value); // 4
// console.log(counter.next().value); // 3
// console.log(counter.next().value); // 2
// console.log(counter.next().value); // 1
// console.log(counter.next().value); // undefined

// ARRAY.FROM()
// const str = 'hello';
// console.log(Array.from(str)); // ['h','e','l','l','o']
// console.log(Array.from(str, letter => letter.toUpperCase())); // ['H','E','L','L','O']
// console.log(Array.from({ length: 5 }, (_, i) => i + 1)); // [1,2,3,4,5]
// console.log(Array.from({id:1,name:'Sakthi'})); // [] - it will return empty array as it is not iterable
// console.log(Array.from({length: 5})); // [undefined, undefined, undefined, undefined, undefined]
// const btns = document.querySelectorAll('button');
// console.log(btns); // NodeList(3) [button, button, button] - we cant use array methods on NodeList like map, filter etc
// console.log(Array.from(btns)); // [button, button, button] - we can use array methods on array

// VAR & SCOPE
// var is function scoped
// var color = "red";
// function getColor() {
//     console.log(color); // red - var is function scoped
//     var animal = "cat";
//     console.log(animal); // cat - var is function scoped
// }
// if(true) {
//     console.log(color); // red - var is function scoped
//     var food = "pizza";
// }
// console.log(color); // red - var is function scoped
// console.log(food); // pizza - var is function scoped
// console.log(animal); // Uncaught ReferenceError: animal is not defined - var is function scoped

// for(var i = 0; i < 10; i++) {
//     console.log(i); // 0,1,2,3,4,5,6,7,8,9
// }
// console.log("AFTER VAR FOR LOOP", i); // 10 - var is function scoped

// let color1 = "blue";
// function getColor1() {
//     console.log(color1); // red - let is block scoped
//     let animal1 = "rat";
//     console.log(animal1); // cat - let is block scoped
// }

// if(true) {
//     console.log(color1); // blue - let is block scoped
//     let food1 = "burger";
// }

// console.log(color1); // blue - let is block scoped
// console.log(animal1); // Uncaught ReferenceError: animal1 is not defined - let is block scoped
// console.log(food1); // Uncaught ReferenceError: food1 is not defined - let is block scoped

// for(let j = 0; j < 10; j++) {
//     console.log(j); // 0,1,2,3,4,5,6,7,8,9
// }
// console.log("AFTER LET FOR LOOP", j); // Uncaught ReferenceError: j is not defined - let is block scoped

function checkScope() {

    var color = "red";
    let food = "pizza";
    const drink = "coffee";

    console.log("INSIDE FUNCTION",color,food,drink); // red pizza coffee

    if(true) {
        console.log("INSIDE IF",color,food,drink); // red pizza coffee
    }

    // WE CAN RE-DECLARE ALL THE VARIABLES INSIDE ANOTHER BLOCK
    if(true) {
        var color = "blue";
        let food = "burger";
        const drink = "tea";
        console.log("REDECLARED INSIDE IF",color,food,drink); // blue burger tea
    }

    // DEFINE INSIDE A BLOCK AND USE OUTSIDE
    if(true) {
        var color1 = "green";
        let food1 = "sandwich";
        const drink1 = "juice";
    }

    if(true) {
        console.log("INSIDE BLOCK color1",color1); // green
        // console.log("INSIDE BLOCK food1",food1); // Uncaught ReferenceError: food1 is not defined Uncaught ReferenceError: food1 is not defined
        // console.log("INSIDE BLOCK drink1",drink1); // Uncaught ReferenceError: drink1 is not defined Uncaught ReferenceError: drink1 is not defined
    }

    console.log("OUTSIDE BLOCK color1",color1); // green
    // console.log("OUTSIDE BLOCK food1",food1); // Uncaught ReferenceError: food1 is not defined Uncaught ReferenceError: food1 is not defined
    // console.log("OUTSIDE BLOCK drink1",drink1); // Uncaught ReferenceError: drink1 is not defined Uncaught ReferenceError: drink1 is not defined
    
    // var color = "blue";
    // let food = "burger"; // Uncaught SyntaxError: Identifier 'food' has already been declared
    // const drink = "tea"; // Uncaught SyntaxError: Identifier 'drink' has already been declared
};

// var origin = "India"; // if we define a variable in global scope using var, it will be added to the window object and it will overwrite the existing variable

function ori() {
    var origin = "India"; // if we define a variable in function scope using var, it will not be added to the window object
}

// let crossOriginIsolated = "Chennai"; // if we define a variable in global scope using let, it will not be added to the window object and it will not overwrite the existing variable

// var vehicle = "Car";
// console.log(vehicle) // Car
// console.log(window.vehicle); // Car - var is function scoped

// let vehicle1 = "Bike";
// console.log(vehicle1) // Bike
// console.log(window.vehicle1); // undefined - let is block scoped

// POINT TO REMEMBER :: 
// VARIALBES DECLARED GLOBALLY USING VAR WILL BE ADDED TO THE WINDOW OBJECT,
// WHEREAS VARIABLES DECLARED GLOBALLY USING LET AND CONST WILL NOT BE ADDED TO THE WINDOW OBJECT

// SCOPE CHAIN
// 1. In the local scope
// 2. Any outer function scope
// 3. Global scope
// EXAMPLE 1:
// let age = 100;
// console.log(age); // 100
// function outer() {
//     let age = "ageless";
//     console.log(age, 'outer'); // ageless
//     if(true) {
//         let age = 200;
//         console.log(age, 'above inner'); // 200
//     }
//     function inner() {
//         let age = 300;
//         console.log(age,'inner'); // 300
//     }
//     inner();
// }

// EXAMPLE: 2
// let age = 100;
// console.log(age); // 100
// function outer() {
//     console.log(age, 'outer'); // 100
//     if(true) {
//         let age = 200;
//         console.log(age, 'above inner'); // 200
//     }
//     function inner() {
//         console.log(age,'inner'); // 100
//     }
//     inner();
// }

// EXAMPLE: 3
// let age = 100;
// function outer() {
//     let age = "ageless";
//     function inner() {
//         age = [];
//         console.log(age,'inner'); // []
//     }
//     inner();
// }
// outer();
// console.log(age); // 100

// EXAMPLE: 4
// let age = 100;
// function outer() {
//     function inner() {
//         age = [];
//         console.log(age,'inner'); // []
//     }
//     inner();
// }
// outer();
// console.log(age); // []

// STATIC/LEXICAL SCOPE
// let animal = "cat";
// function getAnimal() {
//     console.log(animal); // cat
// }
// function alsoGetAnimal() {
//     let animal = "dog";
//     getAnimal();
// }
// alsoGetAnimal();

// HOISTING
// console.log(color); // undefined - var is hoisted
// var color = "red";
// console.log(color); // red

// // console.log(color1); // Uncaught ReferenceError: Cannot access 'color1' before initialization - let is not hoisted
// let color1 = "blue";
// console.log(color1); // blue

// // console.log(color2); // Uncaught ReferenceError: Cannot access 'color2' before initialization - const is not hoisted
// const color2 = "green";
// console.log(color2); // green   

function blah() {
    console.log(color3); // undefined - var is hoisted
    // console.log(color4); // Uncaught ReferenceError: Cannot access 'color4' before initialization - let is not hoisted
    // console.log(color5); // Uncaught ReferenceError: Cannot access 'color5' before initialization - const is not hoisted
    var color3 = "red";
    let color4 = "blue";
    const color5 = "green";

    if(false) {
        var color6 = "yellow";
    }

    console.log(color6); // undefined - var is hoisted

    if(false) {
        let color7 = "orange";
    }

    console.log(color7); // Uncaught ReferenceError: color7 is not defined - let is not hoisted
}

// fun1(); // ERROR - Cannot access 'fun1' before initialization
let fun1 = function() {
    console.log("I am a let function expression");
}

// fun2(); // fun2 is not a function - var function expression is not hoisted
var fun2 = function() {
    console.log("I am a var function expression");
}

// TO ACHIVE HOISTING FOR FUNCTIONS - USE FUNCTION DECLARATION
// FUNCTION EXPRESSIONS ARE NOT HOISTED

// fun3(); // I am a function declaration
function fun3() {
    console.log("I am a function declaration");
}

// IIFE - IMMEDIATELY INVOKED FUNCTION EXPRESSION
// (function() {
//     var origin = "India";
//     console.log("IIFE");
//     console.log("Origin is : ",origin);
// })();
// console.log("Origin is : ",window.origin); 

// CLOSURES
function outerFunc() {

    let outerVar = "I am the outer variable";
    console.log('in out')
    
    function innerFunc() {
        console.log("I AM INNER FUNCTION");
        console.log('Outer Variable is : ', outerVar);
    }

    return innerFunc;
}

// const myClosure = outerFunc();
// console.log(myClosure); // It contains the inner function
// myClosure(); // It will execute the inner function - I AM INNER FUNCTION, Outer Variable is :  I am the outer variable

function idGenerator() {

    let id = 1;
    console.log(id,'in outer');

    return function() {
        console.log(id);
        return id++;
    }
}

// const nextId = idGenerator(); // 1, in outer
// console.log(nextId()); // 1, 1 - it wont print the console.log(id,'in outer') as it is already executed
// console.log(nextId()); // 2, 2
// console.log(nextId()); // 3, 3

// CLOSURE EXAMPLE - FOR CREATE PRIVATE VARIABLES
const counter = (function createCounter() {

    let count = 0;

    return {

        increment : function() {
            return count++;
        },

        decrement: function() {
            return count--;
        },
        
        getCount: function() {
            return count;
        }
    }
})()
// console.log(counter.increment()); // 0
// console.log(counter.increment()); // 1
// From above example, count is a private variable and it is not accessible outside the counter function
// We cant manipulate the count variable directly, we can only manipulate it using the increment and decrement functions

// CLOSURE EXAMPLE - FACTORY FUNCTION
function createExponentFunction(exponent) {

    return function(base) {

        return Math.pow(base, exponent);
    }
}

const square = createExponentFunction(2);
const cube = createExponentFunction(3);
// console.log(square(2)); // 4 - 2 * 2
// console.log(cube(2)); // 8   - 2 * 2 * 2

function uniqueIdGenerator(prefix) {

    let id = 0;

    return function() {

        id += 1;

        return `${prefix}${id}`;
    }
}

const bookId = uniqueIdGenerator('book-');
const userId = uniqueIdGenerator('user-');
// console.log(bookId()); // book-1
// console.log(bookId()); // book-2
// console.log(userId()); // user-1
// console.log(userId()); // user-2

// CLOSURE EXAMPLE - EVENT LISTENERS
// const btn4 = document.querySelector('#clickMe4');
// 1 - Without closure
// let count = 0;
// btn4.addEventListener('click', function() {
//     count += 1;
//     console.log(`You clicked the button ${count} times`);
// });
// 2 - With closure
// btn4.addEventListener('click', (function() {
//     let count = 0;
//     return function() {
//         count += 1;
//         console.log(`You clicked the button ${count} times`);
//     }
// })())
// 3 - With closure
// function incCount() {
//     let count = 0;
//     btn4.addEventListener('click', function() {
//         count += 1;
//         console.log(`You clicked the button ${count} times`);
//     });
// }
// incCount()
// 4 - With closure
// function createCounterBtn(id) {
//     let count = 0;
//     const btn = document.getElementById(id);
//     btn.addEventListener('click', function() {
//         count += 1;
//         btn.innerText = `Clicked ${count} times`;
//     })
// }
// createCounterBtn('clickMe');
// createCounterBtn('clickMe2');
// createCounterBtn('clickMe3');
// createCounterBtn('clickMe4');

// CLOSURE EXAMPLE - LOOPS
// for(var i = 0; i < 5; i++) {
//     setTimeout(function() {
//         console.log(i); // 5,5,5,5,5
//     }, 1000 * i)
// }
// SOLUTION - 1
// for(let i = 0; i < 5; i++) {
//     setTimeout(function() {
//         console.log(i); // 0,1,2,3,4
//     }, 1000 * i)
// }
// SOLUTION - 2 - IIFE
// for(var i = 0; i < 5; i++) {
//     (function(j){
//         setTimeout(function() {
//             console.log(j); // 0,1,2,3,4
//         }, 1000 * j)
//     })(i)
// }

// BUILT-IN BROWSER API's
// SETTIMEOUT
// setTimeout(function() {
//     console.log('Hello from setTimeout');
// }, 3000)

// setTimeout(()=>{
//     alert('Hello from setTimeout');
// },5000)

function showNotification(message, duration) {
    const notification = document.createElement("DIV");
    notification.innerText = message;
    notification.className = "notification";
    document.body.appendChild(notification);
    setTimeout(() => {
        notification.remove();
    }, duration);
}
// showNotification("You signed in....", 3000);
// showNotification("Welcome back....", 5000);
// showNotification("You have a new message....", 6000);
// showNotification("You have a new friend request....", 7000);

// SETINTERVAL / CLEARINTERVAL
// setInterval(() => {
//     console.log('Hello from setInterval');
// },2000) // it will print Hello from setInterval every 2 seconds

function countDown(duration) {
    let count = duration;
    const h1 = document.getElementById('timer');
    h1.innerText = count;
    count -= 1;
    const intervalId = setInterval(() => {
        h1.innerText = count;
        count -= 1;
        if(count < 0) {
            clearInterval(intervalId);
            h1.innerText = "TIME'S UP";
        }
    },1000)
}
// countDown(10);

// CLEAR TIMEOUT
// const cancelBtn = document.querySelector('#cancel');

// const timeout = setTimeout(() => {
//     window.location.href = 'https://www.google.com';
// },5000)

// cancelBtn.addEventListener('click', ()=>{
//     clearTimeout(timeout);
//     console.log('Redirection Cancelled');
// })

// DEBOUNCE
function queryAPI(searchTerm){
    console.log('Querying API.... for', searchTerm);
}
const search = document.getElementById('search');
// let debounceTimeout;
// search.addEventListener('input', () => {
//     clearTimeout(debounceTimeout);
//     debounceTimeout = setTimeout(() => {
//         queryAPI();
//     }, 400);
// })

function debounce(callback, delay) {
    let timeout;
    return (...args) => {
        if(timeout) {
            clearTimeout(timeout)
        };   
        timeout = setTimeout(() => {
            callback(...args);
        },delay)
    }
}
// const debouncedQueryAPI = debounce(queryAPI, 400);
// search.addEventListener('input', (e) => {
//     debouncedQueryAPI(e.target.value);
// })

// THRORTTLE
function getRandomColor() {
    let colors = [
        '#FF6633', 
        '#FFB399', 
        '#FF33FF', 
        '#00B3E6', 
        '#E6B333', 
        '#3366E6', 
        '#999966', 
        '#99FF99', 
        '#B34D4D', 
        '#80B300', 
        '#809900', 
        '#E6B3B3', 
        '#6680B3', 
        '#66991A', 
        '#FF99E6', 
        '#CCFF1A'
    ]
    let color = Math.floor(Math.random() * colors.length);
    return colors[color];
}
const content = document.querySelector('#content');
function loadMoreItems() {
    const scrollDistanceToBottom = document.documentElement.scrollHeight - window.innerHeight - window.scrollY;
    if(scrollDistanceToBottom < 200) {
        console.log("LOADING DATA FROM AN API....");
        for(let i = 0; i < 10; i++) {
            const item = document.createElement('DIV');
            item.classList.add('item');
            item.textContent = "Item " + (content.children.length + 1);
            item.style.backgroundColor = getRandomColor();
            content.appendChild(item);
        }
    }
}

// let isThrotteld = false;
// window.addEventListener('scroll', function() {
//     if(!isThrotteld) {
//         loadMoreItems();
//         isThrotteld = true;
//         setTimeout(()=>{
//             isThrotteld = false;
//         },200)
//     }
// });

// loadMoreItems();

// FUNCTIONAL PROGRAMMING
// SUM ALL THE NUMBERS BETWEEN 0 AND 5
// IMPERATIVE WAY
let sum = 0;
for(let i = 0; i <= 5; i++) {
    sum += i;
}
// FUNCTIONAL PROGRAMMING WAY
[1,2,3,4,5].reduce((acc,val) => acc + val, 0);

// FIND EVEN NUMBERS FROM GIVEN ARRAY
let nums = [1,2,3,4,5,6,7,8,9,10];
// IMPERATIVE WAY
let evens = [];
for(let i = 0; i < nums.length; i++) {
    if(nums[i] % 2 === 0) {
        evens.push(nums[i])
    }
}
// console.log(evens,'evens')
// FP WAY
let evens1 = nums.filter(n => n % 2 === 0);
// console.log(evens1)

// FINDING MAX VALUE FROM AN ARRAY
let numbersArr = [9,3,445,67,89,54,22];
// IMPERATIVE
let maxVal = numbersArr[0];
for(let i = 1; i < numbersArr.length; i++){
    if(numbersArr[i] > maxVal) {
        maxVal = numbersArr[i]
    }
}
// console.log(maxVal);
// FP WAY
let mxVal = Math.max(...numbersArr);
// console.log(mxVal)

// FROM ABOVE SIMPLE EXAMPLES, WE CAN SEE THAT FUNCTIONAL PROGRAMMING IS MORE CONCISE AND EASIER TO READ

// FIRST CLASS FUNCTIONS
// 1. FUNCTIONS CAN BE STORED IN VARIABLES
// 2. FUNCTIONS CAN BE PASSED AS ARGUMENTS
// 3. FUNCTIONS CAN BE RETURNED FROM OTHER FUNCTIONS

// 1. FUNCTIONS CAN BE STORED IN VARIABLES
const func = function greet(name) {
    return `Hello ${name}`;
}
const funcs = [
    function (name) {
        return `Hello ${name}`;
    },
    function (name) {
        return `Hi ${name}`;
    }
]
// 2. FUNCTIONS CAN BE PASSED AS ARGUMENTS
function greet1(name) {
    console.log("Moring " + name);
}
function hate(name) {
    console.log("I hate " + name);
}
function callWithJambu(func) {
    func('Jambu');
}
// callWithJambu(greet1);
// callWithJambu(hate);
// callWithJambu(function(name) {
//     console.log("I love " + name);
// })
// 3. FUNCTIONS CAN BE RETURNED FROM OTHER FUNCTIONS
function createGreeter() {
    return function(name) {
        console.log(`Hello ${name}`);
    }
}
const greeter = createGreeter();
// greeter('Sakthi');

// PURE FUNCTIONS
// 1. A function should always return the same output for the same input
// 2. A function should not have any side effects
// 3. A function should not rely on any external state
// 4. A function should not modify any external state
// IMPURE
let value = 2;
function squareAndUpdate(num) {
    value = num * num;
    return value;
} // - this is impure as it is modifying the external state
// PURE
function squareTheNum(num) {
    return num * num;
} // - this is pure as it is not modifying the external state
const colorsArr = ['red','green','blue'];
function addColorToArr(arr, color) {
    arr.push(color);
} // - this is impure as it is modifying the external state
function pureAddColorToArr(arr, color) {
    return [...arr, color];
} // - this is pure as it is not modifying the external state

// HIGHER ORDER FUNCTIONS
// 1. A function that takes another function as an argument
// 2. A function that returns another function
// 3. A function that does both
function doTwice(func) {
    func();
    func();
}
function sayHello() {
    console.log("Hello");
}
// doTwice(sayHello);
function multiplyBy(factor) {
    return function(num) {
        return num * factor;
    }
}
const double = multiplyBy(2);
const triple = multiplyBy(3);
const multiBy10 = multiplyBy(10);
// console.log(double(2)) // 4
// console.log(triple(3)) // 9
// console.log(multiBy10(5)) // 50

// IMMUTABILITY
// A variable should not be reassigned
const num = 10;
// num = 20; // Uncaught TypeError: Assignment to constant variable. We cant reassign a constant variable
const arr = [1,2,3,4,5];
// arr.push(6); // we can modify the array 
// arr.pop(); 
// arr = "str" // but we cant reassign the array - Uncaught TypeError: Assignment to constant variable. We cant reassign a constant variable
const obj = { name: 'Sakthi', age: 30 };
// obj = { name: "Viji" }; // Uncaught TypeError: Assignment to constant variable. We cant reassign a constant variable
obj.name = "Viji"; // but we can modify(mutate) the object
Object.freeze(obj); // it will make the object immutable
obj.age = 31; // it will not update the object as it is immutable
const numss = [1,2,3,4,5];
function push(arr,num) {
    // arr.push(num); // impure way - it will mutate the original array
    return [...arr, num]; // pure way - it will return a new array
}
function removeLastElement(arr) {
    // arr.pop(); // impure way - it will mutate the original array
    return arr.slice(0, arr.length - 1); // pure way - it will return a new array
}
const p1 = { name: "Sakthi" };
// p1.age = 4; // impure way of adding a property to an object
// const p1c = {...p1, age: 4}; // pure way of adding a property to an object

// RECURSION
// A function that calls itself

// FACTORIAL
// IMPERATIVE WAY
// function factorial(num) {
//     let total = 1;
//     for(let i = num; i > 0; i--) {
//         total *= i;
//     }
//     return total;
// }
// RECURSIVE WAY
function factorial(num) {
    if(num === 0 || num === 1) {
        return 1;
    }
    return num * factorial(num-1);
}
// console.log(factorial(5)); // 120

// PARTIAL APPLICATION WITH BIND
function greet(greeting, name) {
    console.log(`${greeting}, ${name}!!!!!!!!!!`);
}
const sayHiTo = greet.bind(null, 'Hi'); // it will bind the first argument to Hi
// sayHiTo('Sakkkku'); // Hi, Sakkkku!!!!!!!!!!

function multiplyNums(a,b) {
    return a * b;
}

function partial(func, ...fixedArgs) {

    return function(...remainingArgs) {

        return func(...fixedArgs, ...remainingArgs);
    }
}
// WITH BIND
const doubleX = multiplyNums.bind(null,2);
const tripleX = multiplyNums.bind(null,3);
// console.log(tripleX(10))
// WITH PARTIAL
const doubleWithPartial = partial(multiplyNums, 2); // - multiply(2,)
const tripleWithPartial = partial(multiplyNums, 3);
// console.log(doubleWithPartial(10)) // - with remaining args - multiply(, 10)
// ANOTHER EXAMPLE
function fetchData(url, apiKey, params) {

    const queryStr = new URLSearchParams(params).toString();
    const fullUrl = `${url}?${queryStr}`;

    console.log(`Sending request to ${fullUrl} with api key ${apiKey}`);
}

const myApiKey = '123456';
const myUrl = 'https://api.example.com';
const fetchFromApi = partial(fetchData, myUrl, myApiKey);
// fetchFromApi({ q: 'JavaScript' });

const googleApiKey = '654321';
const googleUrl = 'https://api.google.com';
const fetchGoogleApi = partial(fetchData, googleUrl, googleApiKey);
// fetchGoogleApi({ id: 12 });

// EXPLANAION
function partial(func, ...fixedArgs) {

    return function(...remainingArgs) {

        return func(...fixedArgs, ...remainingArgs);
    }
}
// This partial takes a function `func` and some fixed arguments `...fixedArgs`. 
// It returns a new function that takes the remaining arguments `...remainingArgs`.
// When this new function is called, it calls the original function `func` with the fixed arguments `...fixedArgs` and the remaining arguments `...remainingArgs`.

// COMPOSITION
// Combining multiple functions to create a complex function
const addVal = (a,b) => a+b;
const squareVal = (a) => a * a;
// console.log(squareVal(addVal(2,3))); // 25
// console.log(addVal(square(2), square(3))) // 13
const addAndSquare = (a,b) => square(addVal(a,b));
// console.log(addAndSquare(3,3)) // 36

function toLower(str) {
    return str.toLowerCase();
}
function splitIntoWords(str) {
    return str.split(' ');
}
function joinWithDash(arr) {
    return arr.join('-');
}

function replaceS(str) {
    return str.replaceAll('s', '$');
}
let val = joinWithDash(splitIntoWords(toLower('Hello World')));
// console.log(val); // hello-world

// function compose(fn1, fn2) {
//     return function(value) {
//         return fn1(fn2(value));
//     }
// }
const double1 = (a) => a * 2;
const square1 = (a) => a * a;
const doubleAndSquare = compose(square1, double1);
// console.log(doubleAndSquare(2)); // 16

function compose(...functions) {
    return function(data) {
        return functions.reduceRight((val, func) => func(val), data)
    }
}

const sluggify = compose(joinWithDash, splitIntoWords, toLower);
// console.log(sluggify('Hello js how are you')); // hello-js-how-are-you

const replaceWithS = compose(replaceS, joinWithDash, splitIntoWords, toLower);
// console.log(replaceWithS('Sorry for js sucking with js')); // $orry-for-j$-$ucking-with-j$

// CURRYING
// A function that takes multiple arguments and returns a series of functions that each take a single argument
function addInts(a,b,c) {
    return a + b + c;
}
// console.log(addInts(1,2,3)); // 6
function addCurry(a) {
    return function(b) {
        return function(c) {
            return a + b + c; 
        }
    }
}
// console.log(addCurry(4)(5)(1)); // 10

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

const curriedAdd = curry(addInts);
curriedAdd(1)(2)(3); // 6
curriedAdd(1,2)(3); // 6
curriedAdd(1)(2,3); // 6
curriedAdd(1,2,3); // 6
curriedAdd(1,2,3,4); // 6 - it will ignore the extra arguments
curriedAdd(1); // returns a function which takes 2 arguments
curriedAdd(1)(2); // returns a function which takes 1 argument
curriedAdd(1,2); // returns a function which takes 1 argument
