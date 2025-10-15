// ==========================================================================================
// ******************************************ARRAYS******************************************
// ==========================================================================================

// WHAT IS AN ARRAY?
// =================================================
// Array is a special type of object that allows us to store and manage a collection of elements in a single variable.
// KEY POINTS:
// 1. Arrays store elements in an ordered list. where each element is accessible via numeric index starting from 0.
// 2. Arrays are zero-based, which means the first element in the array is at index 0. INDEXED COLLECTION
// 3. Arrays can store any data type. - HETEROGENEOUS ELEMENTS
// 4. Arrays are mutable, which means we can change the elements in an array. DYNAMIC SIZE
// 5. Arrays can be created using the array literal syntax or the Array constructor syntax.
    // Array literal syntax: let numbers = [1,2,3,4,5];
    // Array constructor syntax: let numbers = new Array(1,2,3,4,5);

// WHAT IS SPARSE ARRAY?
// =================================================
// Sparse array is an array that has empty slots.
// EXAMPLE:
// let numbers = [1,2,,4,5];
// console.log(numbers); // [1,2,empty,4,5]
// let arr = [];
// arr[10] = "Hello";
// console.log(arr); // [empty x 10, "Hello"]
// console.log(arr.length); // 11
// console.log(arr[0]); // undefined

// COMMON OPERATIONS ON ARRAYS
// =================================================
// 1. Accessing elements in an array
// 2. Adding elements to an array
// 3. Removing elements from an array
// 4. Iterating over an array
// 5. Updating elements in an array


// FOR ABOVE OPERATIONS, WE CAN USE FOLLOWING METHODS:
// =================================================
// 1. Array.isArray() method
// 2. Array.from() method
// 3. Array.of() method
// 4. Array.prototype methods
// 5. Array destructuring
// 6. Array spread operator
// 7. Array methods like map(), filter(), reduce(), etc.
    // ARRAY METHODS
    // =================================================
    // 1. Array.prototype.concat()
    // 2. Array.prototype.copyWithin()
    // 3. Array.prototype.entries()
    // 4. Array.prototype.every()
    // 5. Array.prototype.fill()
    // 6. Array.prototype.filter()
    // 7. Array.prototype.find()
    // 8. Array.prototype.findIndex()
    // 9. Array.prototype.flat()
    // 10. Array.prototype.flatMap()
    // 11. Array.prototype.forEach()
    // 12. Array.prototype.includes()
    // 13. Array.prototype.indexOf()
    // 14. Array.prototype.join()
    // 15. Array.prototype.keys()
    // 16. Array.prototype.lastIndexOf()
    // 17. Array.prototype.map()
    // 18. Array.prototype.pop()
    // 19. Array.prototype.push()
    // 20. Array.prototype.reduce()
    // 21. Array.prototype.reduceRight()
    // 22. Array.prototype.reverse()
    // 23. Array.prototype.shift()
    // 24. Array.prototype.slice()
    // 25. Array.prototype.some()
    // 26. Array.prototype.sort()
    // 27. Array.prototype.splice()
    // 28. Array.prototype.toLocaleString()
    // 29. Array.prototype.toString()
    // 30. Array.prototype.unshift()
    // 31. Array.prototype.values()
// 8. Multidimensional arrays
// 9. Array-like objects
// 10. Typed arrays
// 11. Set and Map objects

// ==========================================================================================
// MORE ADVANCED TOPICS
// =================================================
// 1. Multidimensional arrays
// 2. Array-like objects
// 3. Typed arrays
// 4. Set and Map objects
// 5. WeakSet and WeakMap objects
// 6. Array buffer and views
// 7. ArrayBuffer, DataView, and TypedArray objects
// 8. SharedArrayBuffer and Atomics objects
// 9. Subclassing built-in objects
// ===========================================================================================

// ===========================================================================================
// ACCESSING ELEMENTS IN AN ARRAY
// ===========================================================================================
// Elements in an array can be accessed using their index.
// SYNTAX:
// let element = arrayName[index];
// EXAMPLE:
let arr1 = [1,2,3,4,5];
console.log(arr1[0]); // 1
console.log(arr1[1]); // 2

// ============================================================================================
// ADDING ELEMENTS TO AN ARRAY
// ============================================================================================
// Elements can be added to an array using the following methods:
// 1. Using the push() method
// 2. Using the unshift() method
// 3. Using the splice() method
// 4. Using the length property
// 5. Using the spread operator

let numbers = [1,2,3,4,5];
console.log(numbers);
// 1. Using the push() method - adds the elements at the end of the array and returns the new length of the array
let n1 = numbers.push(6,7);
console.log(numbers); // [1,2,3,4,5,6,7]
console.log(n1); // 7 - length of the array

// 2. Using the unshift() method - adds the elements at the beginning of the array and returns the new length of the array
let n2 = numbers.unshift(-2,-1,0);
console.log(numbers); // [-2,-1,0,1,2,3,4,5]
console.log(n2); // 9 - length of the array

// 3. Using the splice() method - adds/removes elements at the specified index and returns the removed elements
// (start, deleteCount, item1,item2,....)
let n3 = numbers.splice(5, 0, 2.5);
console.log(numbers); // [-2,-1,0,1,2,2.5,3,4,5,6,7]
console.log(n3); // 0 - number of elements removed

// 4. Using the length property - adds empty slots to the array and changes the length of the array
numbers.length = 12;
console.log(numbers); // [-2,-1,0,1,2,2.5,3,4,5,6,7,empty]

// 5. Using the spread operator - adds the elements in the array and returns a new array - it does not modify the original array
let newNumbers = [...numbers, 8,9,10]; // adds elements at the end of the array
numbers = newNumbers;
console.log(newNumbers); // [-2,-1,0,1,2,2.5,3,4,5,6,7,empty,8,9,10]
let begAdd = [-5,-4,-3, ...numbers]; // adds elements at the beginning of the array
console.log(begAdd); // [-5,-4,-3,-2,-1,0,1,2,2.5,3,4,5,6,7,empty,8,9,10]
numbers = begAdd;

// ============================================================================================
// REMOVING ELEMENTS FROM AN ARRAY
// ============================================================================================
// Elements can be removed from an array using the following methods:
// 1. Using the pop() method
// 2 Using the shift() method
// 3. Using the splice() method
// 4. Using the length property
// 5. Using the filter() method
// 6. Using the slice() method
// 7. Using the delete operator

// 1. Using the pop() method - removes the last element from the array and returns the removed element
let lastElement = numbers.pop();
console.log(numbers); // [-5,-4,-3,-2,-1,0,1,2,2.5,3,4,5,6,7,empty,8,9]
console.log(lastElement); // 10

// 2. Using the shift() method - removes the first element from the array and returns the removed element
let firtElement = numbers.shift();
console.log(numbers); // [-4,-3,-2,-1,0,1,2,2.5,3,4,5,6,7,empty,8,9]
console.log(firtElement); // -5

// 3. Using the splice() method - removes the elements at the specified index and returns the removed elements
let removedElements = numbers.splice(0, 5);
console.log(numbers); // [1,2,2.5,3,4,5,6,7,empty,8,9]
console.log(removedElements); // [-4,-3,-2,-1, 0]

// 4. Using the length property - removes the elements from the end of the array and chnages the length of the array
numbers.length = 8;
console.log(numbers); // [1,2,2.5,3,4,5,6,7]

// 5. Using the filter() method - removes the elements that do not pass the test and returns a new array
let filteredNumbers = numbers.filter((num) => num !== 2.5);
console.log(filteredNumbers); // [1,2,3,4,5,6,7]
console.log(numbers); // [1,2,2.5,3,4,5,6,7]

// 6. Using the slice() method - removes the elements from the specified index and returns a new array
let slicedNumbers = numbers.slice(2, 6);
console.log(slicedNumbers); // [2.5,3,4,5]
console.log(numbers); // [1,2,2.5,3,4,5,6,7]

// 7. Using the delete operator - removes the element at the specified index and sets it to undefined
// Creates SPARSE array
delete numbers[2];
console.log(numbers); // [1,2,empty,3,4,5,6,7]
console.log(numbers[2]); // undefined

// ============================================================================================
// UPDATING ELEMENTS IN AN ARRAY
// ============================================================================================




