// OBJECT LITERAL

console.log('DAY 12');

let person = {
    name: "Sakthi",
    age: '30'
}

console.log(person);
console.log(person.name);

person.isSeniorCitizen = false;

console.log(person);

person["movie lover"] = true;

console.log(person);

person["movie lover"] = false;

console.log(person);

delete person["movie lover"];
console.log(person);

delete person.age;

console.log(person);


let someKey = "name";

console.log(person[someKey]);

// CONSTRUCTOR FUNCTION

function Car(name, model) {
    this.name = name;
    this.model = model;
}

const bmw = new Car('BMW', 'X1');
console.log(bmw);
const benz = new Car('Benz', 'A8');
console.log(benz);

console.log(bmw instanceof Car);

// FACTORY FUNCTION

function createPerson(name, age) {

    return {
        name,
        age,
        greet() {
            console.log(this.name)
        }
    }
}

let person1 = createPerson("Alpha", 70);
console.log(person1);
person1.greet();

// USING OBJECT

let obj = new Object({
    name : 'Obj1'
})

console.log(obj);

// METHODS IN OBJECT LITERAL
let user = {
    name: 'Sakthi',
    company: 'Faveo',
    greet: function() {
        console.log('Hello ' + this.name);
    },
    address: {
        city: 'Bangalore',
        code: 560038,
        state: "Karnataka",
        country: "India",
        greeting: function () {
            console.log("Welcome to India");
        }
    },
    salary : 0
}
console.log(user.name);
user.greet()
console.log(user.address.city);
user.address.greeting();

console.log(user.salary);

// if(!user.salary) {
//     console.log('Property not exists');
// }

// IN OPERATOR

console.log('salary' in user); // true

// FOR IN LOOP
for(let key in user) {
    console.log(`${key} : ${user[key]}`);
}

// OBJECT.KEYS

console.log(Object.keys(user));

// OBJECT REFFERENCE

let fruit = { name: "mango" };
let anotherFruit = { name: "mango" };

console.log(fruit == anotherFruit); // false
console.log(fruit === anotherFruit); // false

fruit = anotherFruit; // POINTING SAME REFERENCE

console.log(fruit == anotherFruit); // true
console.log(fruit === anotherFruit); // true

let obj2 = Object.create({ name: 'jh'});
console.log(obj2);

// OBJECT.ASSIGN (SHALLOW COPY)

let target = { a: 1, b: 2 };
let source = { c: 3, d: 4 };
let returnedObj = Object.assign(target, source);
console.log(returnedObj);
console.log(target);
console.log(target === returnedObj); // true - because target is modified


const obj3 = { name: "Sakthi" };
const obj4 = Object.assign({}, obj3);
console.log(obj4);
console.log(obj3 === obj4); // false - because target is empty object

let source1 = { a: 10, b : { c: 10 }};

// let clone1 = Object.assign({}, source1) // SHALLOW COPY

// console.log(clone1);

// console.log(clone1.b.c);
// console.log(source1.b.c);

// source1.b.c = 100;

// console.log(clone1.b.c);
// console.log(source1.b.c);

let clone2 = structuredClone(source1)

console.log(clone2);

console.log(clone2.b.c);
console.log(source1.b.c);

source1.b.c = 100;

console.log(clone2.b.c);
console.log(source1.b.c);

// OBJECT.ENTRIES

let entries = {
    name: "Sakthi",
    age: 30,
    location: 'Bangalore'
}

let entriesArr = Object.entries(entries);

console.log(entriesArr);

for(let [key, value] of entriesArr) {

    console.log(key, value );
    
}

console.log(Object.fromEntries(entriesArr));

let freezeObj = {
    name: "Velu"
}

// OBJECT.FREEZE

Object.freeze(freezeObj);

console.log(freezeObj.name); // Velu

freezeObj.name = "Vel";

console.log(freezeObj); // still it will be `Velu` because it is frozen

// OBJECT.ISFROZEN

console.log(Object.isFrozen(freezeObj));

// OBJECT.SEAL

let seal1 = {
    name: "Kavin"
}

console.log(Object.isSealed(seal1)); // false
Object.seal(seal1)
console.log(Object.isSealed(seal1)); // true

seal1.age = 30; // wont be added - bcoz it is sealed
console.log(seal1);
delete seal1.name; // wont be deleted - bcoz it is sealed
console.log(seal1);
seal1.name = "Kavin Nilavan"; // will be updated
console.log(seal1);

// hasOwn

console.log(Object.hasOwn(seal1, 'age'));

let student = {
    name : "Kavin Nilavan",
    age: 4,
    std: 'LKG',
    subjects: ["Tamil", "English", "Maths"],
    parents: {
        father: 'Sakthivel',
        mother: 'Ishwarya',
        email: "parents-kavin@gmail.com"
    },
    address: {
        city: 'Pennagaram',
        state: "Tamilnadu",
        country: "India",
        zip: "636913"
    }
}

// let name = student.name;
// let age = student.age;
// let meal = student.meal ? student.meal : 'Idly';

// new variable with defaulkt value
let { name, age, meal = "Idly" } = student;

console.log(name, age, meal);

// new variable with existing properties calc
const { subjects, noOfSubs = subjects.length } = student;

console.log(subjects, noOfSubs);

// Alias
let { std: standard } = student;
console.log(standard);

// nested object extraction
let { address: { zip } } = student;

console.log(zip);

function sendMail({ parents: {email} }) {
    console.log(`Mail sent to ${email}`);
}
sendMail(student)

function getStudent() {

    return student
}

let { name: anotherStudentName } = getStudent();
console.log(anotherStudentName);

// IN LOOPS

let arr = [
    { 
        name: 'Kavin',
        age: 4
    }, 
    {
        name: "Kathir",
        age: 1
    }
]

for(let { name, age } of arr) {
    console.log(name, age);
}

// OPTIONAL CHNAING

let employee = {
    salary: {
        bonus: 400
    },
    info: function() {
        console.log('Good one');
    }
}

// console.log(employee.department.name);
console.log(employee.department?.name);
employee.info?.()
employee.greet?.();


































