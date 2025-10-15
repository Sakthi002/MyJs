console.log('**************** TASKS DAY 12 **************');

// 1. What will be the output and why?
const user1 = { name: "Alex", age: undefined };
console.log(user1.age ?? "Not provided");
// Not provided - nullish coalesc operator returns right side data if left is undefined or null


// 2. What will happen if we try to modify a frozen object?
const objNew = Object.freeze({ a: 1 });
objNew.a = 2;
console.log(objNew.a);
// 1 - because Object.freeze makes objNew immutable


// 3. Given an object with deeply nested properties, extract name1, company, and location.city using destructuring
const personNew = {
  name1: "Tapas",
  company: {
    name: "tapaScript",
    location: {
      city: "Bangalore",
      zip: "94107"
    }
  }
};
// Answer
const { name1, company, company: { location : { city }} } = personNew;
console.log(name1, company, city);


// 4. Build a Student Management System
// Store student details in an object (name, age, grades).
// Implement a method to calculate the average grade.

let studentDetails = {
    name: "Kavin",
    age: 4,
    grades: [100, 98, 100, 100, 100],
    average: function () {
        let totalMarks = 0;
        for(let i = 0; i < this.grades.length; i++) {
            totalMarks += this.grades[i]
        }
        return totalMarks / this.grades.length
    }
}
console.log(studentDetails.average());


// 5. Book Store Inventory System
// Store books in an object.
// Add functionality to check availability and restock books.

let bookDetails = {
    title: "Clean Code",
    author: "Sakthi",
    price: 1000,
    stock: 0,
    category: "Coding",
    checkAvailabilty: function() {
        return this.stock > 0;
    },
    restoreStock: function(qty) {
        this.stock += qty; 
    }
}

console.log(bookDetails.checkAvailabilty());
console.log(bookDetails.stock);
bookDetails.restoreStock(10);
console.log(bookDetails.checkAvailabilty());
console.log(bookDetails.stock);


// 6. What is the difference between Object.keys() and Object.entries()? Explain with examples

// Object.keys - returns array keys present in the provided object
// Object.entries - returns array of key-value pairs

// 7. How do you check if an object has a certain property?

// By using `in` operator


// 8. What will be the output and why?
const person3 = { name: "John" };
const newPerson = person3;
newPerson.name = "Doe";
console.log(person3.name);
// Doe - because newPerson points the same object value of person3


// 9. What’s the best way to deeply copy a nested object? Expalin with examples

// structuredClone is the best way to copy nested objects
// If we clone object using Object.assign - for nested objects it copies the reference to the target not actual value

let objTest = { a: 1, b: { c: 10 }};
let shallowObj = Object.assign({}, objTest);

console.log(objTest);
console.log(shallowObj);

// If i change the shallowObj nested object values it will modify in sourceObj also
shallowObj.b.c = 20;
console.log(objTest.b.c);
console.log(shallowObj.b.c);

let deepObj = structuredClone(objTest);
console.log(objTest.b.c);
console.log(deepObj.b.c);
deepObj.b.c = 1000;
console.log(objTest.b.c);
console.log(deepObj.b.c);


// 10. Loop and print values using Object destructuiring
const users = [
  {
      'name': 'Alex',
      'address': '15th Park Avenue',
      'age': 43
  },
  {
      'name': 'Bob',
      'address': 'Canada',
      'age': 53
  },
  {
      'name': 'Carl',
      'address': 'Bangalore',
      'age': 26
  }
];

for(let { name, address, age} of users) {
    console.log(name, age, address);
}