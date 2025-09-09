// ************************************************************************************************
// OPERATORS
// ************************************************************************************************

// WHAT IS AN OPERATOR?
// Operators are used to perform operations on varaibles and values.

// TYPES OF OPERATORS
// 1. Arithmetic Operators - +, -, *, /, %, ++, --
// 2. Assignment Operators - =, +=, -=, *=, /=, %=, **=
// 3. Comparision Operators - ==, ===, !=, !==, >, <, >=, <=
// 4. Logical Operators - &&, ||, !
// 5. Bitwise Operators - &, |, ^, ~, <<, >>, >>>
// 6. String Operators - Concatenation (+)
// 7. Conditional (Ternary) Operator - ?:
// 8. Unary Operators - delete, typeof, void
// 9. Relational Operators - in, instanceof

// ===============================================
// ARITHMETIC OPERATORS
// ===============================================
// Arithmetic operators are used to perform arithmetic operations on numbers.
// +	Addition
// -	Subtraction
// *	Multiplication
// /	Division
// %	Modulus
// ++	Increment
// --	Decrement
// **	Exponentiation

// Problems using Arithmetic Operators
// 1. Mixed Operators with Parentheses
// What is the output of the below code?
// let a = 7;
// let b = 3;
// let c = 2;
// let d = 10;
// let result = (a + b) * (c - d) / b; // 10 * -8 / 3 => -80 / 3
// console.log(result); // -26.6666

// 2. Increment and Decrement in Expressions
// What is the output of the below code?
// let x = 5;
// let y = 10;
// let result = ++x * y-- - x++ / --y; // 6 * 10 - 6 / 8 => 60 - 6 / 8 => 60 - 0.75
// console.log(result); // 59.25

// 3. Combining Different Operators
// What is the output of the below code?
// let a = 8;
// let b = 4;
// let c = 6;
// let d = 3;
// let result = (a * b + c) / (d - 1) * (b + c); // => (32 + 6) / (2) * (10) => (38) / (2) * (10) => 19 * 10
// console.log(result); // 190

// 4. Modulus with Negative Numbers
// What is the output of the below code?
// let x = -15;
// let y = 4;
// let result = x % y;
// console.log(result); // -3

// 5. Floating Point Precision and Rounding
// What is the output of the below code?
// let a = 0.1;
// let b = 0.2;
// let c = a + b;
// let rounded = Math.round(c * 100) / 100; // Math.round(0.3 * 100) / 100 => Math.round(30) / 100 => 30 / 100
// console.log(rounded); // 0.3

// 6. Nested Expressions with Different Operators
// What is the output of the below code?
// let x = 3;
// let y = 5;
// let z = 2;
// let result = (x + y) * (y / z) - (z + y) * x; // (3 + 5) * (5 / 2) - (2 + 5) * 3 => (8) * (2.5) - (7) * 3 => (20) - (7) * 3 => (20) - 21
// console.log(result); // -1

// 7. Order of Operations with Mixed Data Types
// What is the output of the below code?
// let a = "5";
// let b = 2;
// let c = a * b + 3; // 13
// let d = c / 2 - 1; // 5.5
// console.log(d); // 5.5

// 8. Complex Calculation with Parentheses
// What is the output of the below code?
// let p = 7;
// let q = 3;
// let r = 5;
// let s = 2;
// let result = (p * (q + r) / s - (r - q) * p) % q; // (7 * (3 + 5) / 2 - (5 - 3) * 7) % 3 => (7 * 8 / 2 - 2 * 7) % 3 => (28 - 14) % 3 => 14 % 3
// console.log(result); // 2

// 9. Combining Increment and Decrement with Arithmetic Operations
// What is the output of the below code?
// let a = 8;
// let b = 4;
// let result = (a++ * b-- + --a) / ++b; // (8 * 4 + 8) / 4 => 40 / 4
// console.log(result); // 10

// 10. Using NaN and Infinity
// What is the output of the below code?
// let x = 10;
// let y = 0;
// let result = x / y - x * y; // Infinity - 0
// console.log(result); // Infinity

// 11. Interactions Between Different Operators
// What is the output of the below code?
// let a = 5;
// let b = 10;
// let c = 3;
// let result = a + b * c - (b / c) ** a % c; // 5 + 10 * 3 - (10/3) ** 5 % 3 => 5 + 10 * 3 - 3.34 ** 5 % 3 => 5 + 10 * 3 - 433.31 % 3 => 5 + 10 * 3 - 1.1 => 5 + 30 - 1.1 => 35 - 1.1
// console.log(result); // 34.47

// 12. Conditional Arithmetic Operations
// What is the output of the below code?
// let x = 7;
// let y = 10;
// let z = x < y ? (y - x) * 2 : (x - y) / 2; // (10 - 7) * 2 => 3 * 2
// console.log(z); // 6

// 13. Complex Expressions with Unary Operators
// What is the output of the below code?
// let x = 5;
// let y = 2;
// let result = (x-- * ++y) / (x++ - --y) + ~x; // (5 * 3) / (4 - 2) + -6 => 15 / 2 + -6 => 7.5 + -6
// console.log(result); // 1.5

// 14. Combining Operators with String Conversion
// What is the output of the below code?
// let a = 4;
// let b = "2";
// let result = a * b + (a + b); // 4 * '2' + ( 4 + '2') => 4 * '2' + 42 => 8 + '42'
// console.log(result); // 842

// 15. Evaluating Multiple Expressions
// What is the output of the below code?
// let a = 8;
// let b = 2;
// let c = 3;
// let result1 = (a + b) * c; // 30
// let result2 = a * (b + c); // 40
// let finalResult = result1 === result2 ? result1 : result2; //40
// console.log(finalResult); // 40
//==============================================================================================================================

// ===================================================
// ASSIGNMENT OPERATORS
// ===================================================
// Assignment operators are used to assign values to variables.
// =	Assign
// +=	Add and Assign
// -=	Subtract and Assign
// *=	Multiply and Assign
// /=	Divide and Assign
// %=	Modulus and Assign
// **=	Exponent and Assign

// Problems using Assignment Operators
// 1. Complex Assignment with Mixed Operators
// What is the output of the below code?
// let a = 5;
// a += 3 * 2; // a += 6 =>  5 + 6 => 11
// a /= 4; // 11 / 4 => 2.72
// a -= 1; // 1.72
// a *= 2; // 3.44
// console.log(a); // 3.5

// 2. Nested Assignment and Exponentiation
// What is the output of the below code?
// let b = 2;
// b **= (3 + 1) / 2; // 4
// b *= 2 + 3; // 20
// console.log(b); // 20

// 3. Increment and Compound Assignments
// What is the output of the below code?
// let c = 4;
// c++; // 5
// c *= 3; // 15
// c -= 5; // 10
// c /= 2; // 5
// console.log(c); // 5

// 4. Using Assignment Operators in a Loop
// What is the output of the below code?
// let d = 1;
// for (let i = 1; i <= 4; i++) {
//     d *= i;
// }
// console.log(d); // 24


// 5. Combining Modulus and Exponentiation
// What is the output of the below code?
// let e = 10;
// e %= 4;
// e **= 2;
// e += 6;
// console.log(e); // 10


// 6. Complex Expressions with Different Data Types
// What is the output of the below code?
// let f = 10;
// f += "5";
// f *= 2;
// f -= 5;
// console.log(f); // 205

// 7. Compound Assignment with Function Calls
// What is the output of the below code?
// function addTen(n) {
//     return n + 10;
// }
// let g = 5;
// g += addTen(g);
// g *= 2;
// console.log(g); // 40

// 8. Nested Assignment with Multiple Variables
// What is the output of the below code?
// let h = 4;
// let i = 5;
// let j = 6;
// h += i *= j /= 2;
// console.log(h, i, j); // 19,15,3

// 9. Assignment Operators with Conditional Statements
// What is the output of the below code?
// let k = 10;
// k += k > 5 ? k * 2 : k / 2;
// k -= 3;
// console.log(k); // 27

// 10. Compound Assignment with Bitwise Operators
// What is the output of the below code?
// let l = 8;
// l <<= 2;
// l |= 3;
// l ^= 2;
// l >>= 1;
// console.log(l); // 16

// 11. Complex Calculation with Nested Operations
// What is the output of the below code?
// let m = 3;
// m *= (m + 2) ** 2;
// m /= 9 - 1;
// console.log(m); // 9.375

// 12. Using Assignment in Logical Expressions
// What is the output of the below code?
// let n = 5;
// let o = 3;
// n += o && (n *= 2);
// n /= o || (n += 1);
// console.log(n); // 5

// 13. Combination of Increment, Decrement, and Assignment
// What is the output of the below code?
// let p = 7;
// let q = 2;
// p += ++q; // 10, 3
// p *= q--; // 30 , 2
// p -= --q; // 29 , 1
// console.log(p, q); // 29, 1

// 14. Conditional and Compound Assignments
// What is the output of the below code?
// let r = 6;
// let s = r > 5 ? r += 4 : r -= 2;
// s *= 2;
// console.log(s); // 20

// 15. Using Assignment Operators with Arrays
// What is the output of the below code?
// let arr = [1, 2, 3];
// let t = 0;
// t += arr[1] * 2; // 4
// arr[2] -= t; // [1,2,-1]
// arr[0] *= 3; // [3,2,-1]
// console.log(arr, t); // [3,2,-1] 4

// 16. Combining Arithmetic and Logical Operators
// What is the output of the below code?
// let u = 10;
// let v = 5;
// u += (v *= 3) && (u /= 2); // 15
// v %= 2; // 1
// console.log(u, v); //15, 1

// 17. Mixed Type Assignments with Compound Operators
// What is the output of the below code?
// let w = "10";
// let x = 4;
// w *= x; // 40
// x += w / 2; // 24
// w -= x * 3; // -32
// console.log(w, x); // -32, 24

// 18. Multi-Step Assignment with Functions
// What is the output of the below code?
// function double(n) {
//     return n * 2;
// }
// let y = 3;
// y += double(y) - y; // 6
// y *= double(y); // 72
// console.log(y); // 72

// 19. Assignment Operators in Conditional Statements
// What is the output of the below code?
// let z = 12;
// z += (z > 10 ? z * 3 : z / 2); // 48
// z %= 5; // 3
// console.log(z); // 3

// 20. Complex Expressions with Nested Conditions
// What is the output of the below code?
// let a = 5;
// a *= (a < 6 ? (a += 3) : (a -= 2)); // 40
// a /= (a > 10 ? (a -= 5) : (a += 2)); // 1.14
// console.log(a); // 1.14
// ==============================================================================================================================

// ===================================================
// COMPARISON OPERATORS
// ===================================================
// Comparison operators are used to compare two values.
// ==	Equal to
// ===	Equal value and equal type
// !=	Not equal
// !==	Not equal value or not equal type
// >	Greater than
// <	Less than
// >=	Greater than or equal to
// <=	Less than or equal to

//**********************  IMPORTANT ****************************
// In JavaScript, when you compare objects, you are comparing their references (i.e., whether they point to the same memory location), not their contents.
// In JavaScript, null and undefined are considered equal when using ==, but not when using ===.
// typeof null // "object"
// typeof undefined // "undefined"
// null is coerced to 0
// undefined is coerced to NaN
// NaN is unique in that it is not equal to any value, including itself
// Any comparison with NaN is false.
// In JavaScript, when comparing a boolean with another boolean or number, the boolean values are first converted to numbers: true becomes 1 and false becomes 0.
//***************************************************************

// Problems using Comparison Operators
// 1. Combining Comparison Operators with Arithmetic Operations
// let a = 3;
// let b = 5;
// let c = 8;
// console.log((a + b) * c > a * b + c); // (8*8 > 15+8) => 64 > 23
// What is the output of the above code? // true

// 2. Comparison with Different Types and Values
// let x = '10';
// let y = 10;
// let z = '10.0';
// console.log(x == y); // true
// console.log(x === y); // false
// console.log(x == z); // false
// console.log(x === z); // false
//  true,false,false,false

// 3. Multiple Comparisons in a Single Expression
// let a = 4;
// let b = 8;
// let c = 6;
// console.log(a < b < c); // true < 6 => 1 < 6 => true
// console.log(a < (b < c)); // 4 < false => 4 < 0 => false
//  true, false

// 4. Comparison with Logical NOT Operator 
// let a = 0;
// let b = false;
// console.log(!a == b); // false
// console.log(!(a == b)); // false
//  false, false

// 5. Comparison of Different Objects
// 
// let obj1 = { key: 'value' };
// let obj2 = { key: 'value' };
// let obj3 = obj1;
// console.log(obj1 == obj2); // false
// console.log(obj1 === obj2); // false
// console.log(obj1 == obj3); // true
// console.log(obj1 === obj3); // true

// 6. Comparison of Different Arrays
// 
// let arr1 = [1, 2, 3];
// let arr2 = [1, 2, 3];
// let arr3 = arr1;
// console.log(arr1 == arr2); // false
// console.log(arr1 === arr2); // false
// console.log(arr1 == arr3); // true
// console.log(arr1 === arr3); // true

// 7. Comparison of Functions
// 
// function func1() { return 1; }
// function func2() { return 1; }
// let func3 = func1;
// console.log(func1 == func2); // false
// console.log(func1 === func2); // false
// console.log(func1 == func3); // true
// console.log(func1 === func3); // true

// 8. Comparison with NaN and Infinity
// 
// let a = NaN;
// let b = Infinity;
// console.log(a == NaN); // false
// console.log(b > 1000); // true
// console.log(b == Infinity); // true

// 9. Comparison with Different Boolean Expressions
// 
// let a = 5;
// let b = 10;
// console.log((a < b) == (b > a)); // true == true => true
// console.log((a == b) == (b == a)); // false == false => true
// console.log((a != b) == (b != a)); // true == true => true

// 10. Chained Comparisons with Logical AND/OR
// 
// let a = 7;
// let b = 7;
// let c = 5;
// console.log(a >= b && b >= c); // true && true => true
// console.log(a >= b || b >= c); // true || true => true

// 11. Comparison Using Ternary Operator
// 
// let a = 10;
// let b = 20;
// let result = a > b ? a : b; // 20
// console.log(result); // 20
// result = a < b ? a + b : a - b; // 30
// console.log(result); // 30

// 12. Comparing Different Types Using Strict Equality
// 
// let a = '10';
// let b = 10;
// let c = true;
// console.log(a === b); // false
// console.log(b === c); // false
// console.log(a === c); // false

// 13. Complex Logical Expressions with Comparisons
// 
// let a = 5;
// let b = 10;
// let c = 15;
// console.log(a < b && b < c && a < c); // true && true && true => true
// console.log(a < b || b > c && a < c); // true || false && true => true || false => true

// 14. Comparison with Null and Undefined in Expressions
// 
// let a = null;
// let b;
// console.log(a == b); // true
// console.log(a === b); // false
// console.log(a < 1); //  0 < 1 => true
// console.log(b < 1); // NaN < 1 => false

// 15. Comparing Dates
// 
// let date1 = new Date('2024-01-01');
// let date2 = new Date('2024-01-01');
// let date3 = new Date('2023-12-31');
// console.log(date1 == date2); // false
// console.log(date1 === date2); // false
// console.log(date1 > date3); // true

// 16. Complex Boolean Logic with Comparisons
// 
// let a = 8;
// let b = 12;
// let c = 10;
// console.log((a < b && b > c) || (a > c && b < c)); // (true && true) || (false && false) => true || false => true

// 17. Comparison with Different NaN Scenarios
// 
// let a = NaN;
// let b = 'NaN';
// let c = 0 / 0;
// console.log(a == NaN); // false
// console.log(b == NaN); // false
// console.log(c == NaN); // false
// console.log(a == c); // false

// 18. Mixed Comparisons with Arrays and Objects
// 
// let arr = [1, 2, 3];
// let obj = { key: 'value' };
// console.log(arr == obj); // false
// console.log(arr === obj); // false
// console.log(arr > obj); // false

// 19. Comparing Implicit Type Coercion
// 
// let a = '5';
// let b = 5;
// let c = '5.0';
// let d = 5.0;
// console.log(a == b); // true
// console.log(a === b); // false
// console.log(c == d); // true
// console.log(c === d); // false

// 20. Nested Logical Comparisons
// 
// let a = 2;
// let b = 3;
// let c = 4;
// console.log((a < b && b < c) || (a > b && b > c)); // (true&&true) || (false&&false) => true || false => true
// console.log((a < b || b < c) && (a > b || b > c)); // (true || true) && (false || false) => true && false => false
//========================================================================================================================

//====================================
// LOGICAL OPERATORS
// ====================================
// Logical operators are used to determine the logic between variables or values.
// &&	Logical AND
// ||	Logical OR
// !	Logical NOT
// ****************IMPORTANT**************************************************
// Infinity vs. NaN:
// Infinity represents an infinitely large number.
// Infinity is always greater than any finite number
// Infinity equals Infinity 
// NaN stands for "Not-a-Number" and is used to represent undefined or unrepresentable values, such as the result of dividing zero by zero.
// Any comparison with NaN is false.
// ***************************************************************************

// Problems using Logical Operators
// 1. Combining Logical Operators with Short-Circuit Evaluation
// What is the output of the below code?
// let a = 5;
// let b = 10;
// let c = 0;
// let d = 15;
// console.log(a < b && (b > c || d < a)); // true && (true || false) => true && true => true
// console.log((a < b && b > c) || d < a); // (true && true) || false => true || false => true
// console.log(a > b || (b < c && d > a)); // false || (false && true) => false || false => false

// 2. Nested Logical Operations
// What is the output of the below code?
// let x = true;
// let y = false;
// let z = true;
// let w = false;
// console.log((x && (y || z)) && !(w && x)); // (true && (false || true)) && !(false && true) => (true && true && !false) => true && true && true => true
// console.log(!((x || y) && (z && w))); // !((true || false) && (true && false)) => !(true && false) => !false => true

// 3. Logical Operators with Mixed Data Types and Functions
// What is the output of the below code?
// function isEven(n) {
//     return n % 2 === 0;
// }
// function isPositive(n) {
//     return n > 0;
// }
// let num = -4;
// console.log(isEven(num) || (isPositive(num) && num > 0)); // true || (false && false) => true || false => true
// console.log(!(isEven(num) && isPositive(num))); // !(true && false) => !false => true
// console.log(isEven(num) && !isPositive(num)); // true && true => true

// 4. Complex Boolean Expressions
// What is the output of the below code?
// let a = 3;
// let b = 5;
// let c = 7;
// let d = 9;
// console.log((a < b && b < c) || (c > d && a < d)); // (true && true) || (false && true) => true || false => true
// console.log(!(a > b) && (b < c || d > c)); // !(false) && (true || true) => true && true => true 
// console.log((a < b && b < c) || (a > d && c < d)); // (true && true) || (false && true) => true || false => true

// 5. Logical Operations with Arrays and Objects
// What is the output of the below code?
// let arr1 = [1, 2, 3];
// let arr2 = [1, 2, 3];
// let obj1 = { key: 'value' };
// let obj2 = { key: 'value' };
// console.log(arr1.length == arr2.length && obj1 !== obj2); // true && true => true
// console.log(arr1.length > 2 || (obj1 == obj2 && obj2.key === 'value')); // true ||(false && true) => true || false => true
// console.log(!(arr1.length < arr2.length) && (obj1 !== obj2 || obj1.key === 'value')); // !(false) && (true || false) => true && true => true

// 6. Logical Operators with NaN and Infinity
// What is the output of the below code?
// let a = Infinity;
// let b = NaN;
// let c = 0;
// console.log(a > b || (c === 0 && a !== Infinity)); // false || (true && false) => false || false => false
// console.log(!(a === Infinity) && (b < c || a > 0)); // !(true) && (false || true) => false && false => false
// console.log((a > b && c < 1) || !(b > a)); // (false && true) || !(false) => false || true => true

// 7. Logical NOT with Complex Conditions
// What is the output of the below code?
// let a = 7;
// let b = 10;
// let c = 5;
// let d = 15;
// console.log(!(a > b || b < c) && (c < d || d > a)); // !(false || false) && (true || true) => !(false) && true => true && true => true
// console.log(!((a < b) && (b > c) || (c === d))); // !((true) && (true) || (false)) => !(true || false) => !(true) => false
// console.log((!(a === b) || (c < d && a > c)) && !(d < a)); // (!(false) || (true && true)) && !(false) => (true || true) && true => true

// 8. Logical Operations with Functions and Mixed Conditions
// What is the output of the below code?
// function isAdult(age) {
//     return age >= 18;
// }
// function isSenior(age) {
//     return age >= 65;
// }
// let age = 30;
// console.log(isAdult(age) && !isSenior(age)); // true && !false => true && true => true
// console.log(!isAdult(age) || isSenior(age)); // !true || false => false || false => false
// console.log(!(isAdult(age) && isSenior(age)) || age < 50); // !(true && false) || true => !(false) || true => true || true => true

// 9. Chained Logical Operators with Multiple Conditions
// What is the output of the below code?
// let a = true;
// let b = false;
// let c = true;
// let d = false;
// let e = true;
// console.log(a && (b || c) && !(d && e)); // true && (false || true) && !(false && true) => true && true && true => true
// console.log(!((a && b) || (c && !d)) || e); // !(false || true) || true => true
// console.log((a || b) && (c && d) || !e); // true && false || false => false

// 10. Logical Operators with Dynamic Conditions
// What is the output of the below code?
// let a = 12;
// let b = 15;
// let c = 18;
// let d = 20;
// console.log((a < b && b < c) || (c > d && a < d)); // (true && true) || (false && true) => true || false => true
// console.log(!((a > b || b < c) && (c > d || d > a))); // !((false || true) && (false || true)) => !(true && true) => false
// console.log((a < b && !(b > c)) || (c > d && a === d)); // (true && !(false)) || (false && false) => true || false => true
// ==========================================================================================================================

// ===============================================
// STRING OPERATORS
// ===============================================
// The + operator can be used to concatenate strings.
// The += operator can be used to concatenate and assign strings.

// Problems using String Operators
// 1. Basic String Concatenation
// What is the output of the below code?
// let firstName = 'John';
// let lastName = 'Doe';
// let fullName = firstName + ' ' + lastName;
// console.log(fullName); // John Doe

// 2. Concatenation with Different Data Types
// What is the output of the below code?
// let num = 5;
// let str = 'The number is: ';
// let result = str + num;
// console.log(result); // The number is: 5

// 3. Concatenation Using += Operator
// What is the output of the below code?
// let greeting = 'Hello';
// greeting += ' ';
// greeting += 'World!';
// console.log(greeting); // 'Hello World!'

// 4. Concatenation with Undefined and Null
// What is the output of the below code?
// let str1 = 'Value: ';
// let str2 = undefined;
// let str3 = null;
// let result = str1 + str2 + str3;
// console.log(result); // Value: undefinednull

// 5. Using Template Literals
// What is the output of the below code?
// let name = 'Alice';
// let age = 30;
// let introduction = `My name is ${name} and I am ${age} years old.`;
// console.log(introduction); // My name is Alice and I am 30 years old.

// 6. Concatenation in a Loop
// What is the output of the below code?
// let base = 'Item';
// let result = '';
// for (let i = 1; i <= 3; i++) {
//     result += base + i + ' ';
// }
// console.log(result); // Item1 Item2 Item3

// 7. String Concatenation with Functions
// What is the output of the below code?
// function getGreeting(name) {
//     return 'Hello, ' + name + '!';
// }
// let name = 'Sarah';
// let message = getGreeting(name);
// console.log(message); // Hello, Sarah!

// 8. Concatenation with Arrays
// What is the output of the below code?
// let arr = ['a', 'b', 'c'];
// let str = 'Array elements: ';
// for (let i = 0; i < arr.length; i++) {
//     str += arr[i] + ' ';
// }
// console.log(str); // Array elements: a b c 

// 9. Concatenation with Boolean Values
// What is the output of the below code?
// let a = 'The result is: ';
// let b = 5 > 3;
// let result = a + b;
// console.log(result); // The result is: true

// 10. Using repeat() Method
// What is the output of the below code?
// let repeat = 'Hello';
// let times = 3;
// let result = repeat.repeat(times);
// console.log(result); // HelloHelloHello
// ========================================================================================================================

// ===============================================
// CONDITIONAL (TERNARY) OPERATOR
// ===============================================
// It is the concise way to perform conditional operations.
// it serves as a shorthand for if...else statements.
// Syntax: condition ? expression1 : expression2;

// Problems using Conditional Operator
// 1. Conditional Assignment Based on Multiple Conditions
// What is the output of the below code?
// let age = 25;
// let membership = 'gold';
// let discount = (age > 18 && membership === 'gold') ? '20%' : (age <= 18 || membership === 'silver') ? '10%' : 'No Discount';
// console.log(discount); // (true && true) ? '20%' : .... // 20%

// 2. Nested Conditional Operations
// What is the output of the below code?
// let score = 85;
// let grade = (score >= 90) ? 'A' : (score >= 80) ? 'B' : (score >= 70) ? 'C' : 'F';
// console.log(grade); // B

// 3. Conditional Logic with Mixed Data Types
// What is the output of the below code?
// let input = 0;
// let result = (input === 0) ? 'Zero' : (input === '0') ? 'String Zero' : 'Non-zero';
// console.log(result); // Zero

// 4. Conditional Output Based on Multiple Expressions
// What is the output of the below code?
// let a = 10;
// let b = 15;
// let c = 20;
// let result = (a < b && b < c) ? (a + b < c ? 'True' : 'False') : (a > c ? 'High' : 'Low');
// console.log(result); // False

// 5. Complex Nested Conditional with Arrays
// What is the output of the below code?
// let arr = [1, 2, 3];
// let index = 2;
// let value = (arr.length > index) ? (arr[index] % 2 === 0 ? 'Even' : 'Odd') : 'Out of Range';
// console.log(value); // Odd
// ========================================================================================================================

// ===============================================
// TYPEOF OPERATOR
// ===============================================
// The typeof operator is used to get the type of the operand.
// typeof operand
// The typeof operator returns a string indicating the type of the unevaluated operand.
// typeof null // "object"
// typeof undefined // "undefined"

// Problems using typeof Operator
// 1. Checking Multiple Data Types
// What is the output of the below code?
// let values = [42, 'Hello', true, null, undefined, { a: 1 }, [1, 2, 3], function() {}];
// values.forEach(value => {
//     console.log(`${value}: ${typeof value}`);
//     // 42: number
//     // operators.js:801 Hello: string
//     // operators.js:801 true: boolean
//     // operators.js:801 null: object
//     // operators.js:801 undefined: undefined
//     // operators.js:801 [object Object]: object
//     // operators.js:801 1,2,3: object
//     // operators.js:801 function() {}: function
// });

// 2. Typeof with Object Properties
// What is the output of the below code?
// let obj = {
//     a: 1,
//     b: 'text',
//     c: true,
//     d: null,
//     e: undefined,
//     f: function() {},
//     g: [1, 2, 3]
// };
// console.log(typeof obj.a); // number
// console.log(typeof obj.b); // string
// console.log(typeof obj.c); // boolean
// console.log(typeof obj.d); // object
// console.log(typeof obj.e); // undefined
// console.log(typeof obj.f); // function
// console.log(typeof obj.g); // object

// 3. Typeof with Dynamic Values
// What is the output of the below code?
// let x = 1;
// let y = 'string';
// let z = [1, 2, 3];
// let w = { key: 'value' };
// let checkType = (value) => typeof value === 'number' ? 'Number' : 'Not a Number';
// console.log(checkType(x)); // Number
// console.log(checkType(y)); // Not a Number
// console.log(checkType(z)); // Not a Number
// console.log(checkType(w)); // Not a Number

// 4. Checking typeof on NaN and Infinity
// What is the output of the below code?
// let values = [NaN, Infinity, -Infinity];
// values.forEach(value => {
//     console.log(`${value}: ${typeof value}`);
//     // NaN: number
//     // operators.js:847 Infinity: number
//     // operators.js:847 -Infinity: number
// });
// ========================================================================================================================

// ===============================================
// UNARY OPERATORS
// ===============================================
// Unary operators are used to perform operations on a single operand.
// Unary plus (+)	Converts an operand into a number
// Unary minus (-)	Negates an operand
// Increment (++)	Increments an operand
// Decrement (--)	Decrements an operand
// Logical NOT (!)	Converts to boolean value then negates it
// typeof	Returns a string indicating the type of the unevaluated operand
// delete	Deletes specific index of an array or specific property of an object
// void	Discards a return value of an expression

// Problems using Unary Operators
// 1. Unary Plus for Type Conversion
// What is the output of the below code?
// let str1 = '5';
// let str2 = '10';
// let result = +str1 + +str2; // 5 + 10 => 15 - converts string to number
// console.log(result); // 15

// 2. Unary Minus for Negation
// What is the output of the below code?
// let num = -3;
// let result = -num; // -(-3)
// console.log(result); // 3

// 3. Increment and Decrement Operators
// What is the output of the below code?
// let a = 5;
// let b = ++a;
// let c = a--;
// console.log(b); // What is b? 6
// console.log(c); // What is c? 6
// console.log(a); // What is a? 5

// 4. Logical NOT with Various Values
// What is the output of the below code?
// let values = [0, '', false, NaN, undefined, null, 1, 'text', true];
// values.forEach(value => {
//     console.log(`Logical NOT of ${value}: ${!value}`);
//     // Logical NOT of 0: true
//     // Logical NOT of : true
//     // Logical NOT of false: true
//     // Logical NOT of NaN: true
//     // Logical NOT of undefined: true
//     // Logical NOT of null: true
//     // Logical NOT of 1: false
//     // Logical NOT of text: false
//     // Logical NOT of true: false
// });

// 5. typeof Operator on Different Values
// What is the output of the below code?
// let x = 10;
// let y = 'hello';
// let z = false;
// let obj = { key: 'value' };
// let arr = [1, 2, 3];
// let func = () => {};
// let result = [x, y, z, obj, arr, func].map(value => typeof value);
// console.log(result); // [number, string, boolean, object, object, function, ]

// 6. Delete Operator on Object Properties
// What is the output of the below code?
// let obj = { a: 1, b: 2, c: 3 };
// delete obj.b;
// console.log(obj); // { a: 1, c: 3 }

// 7. Delete Operator on Array Elements
// What is the output of the below code?
// let arr = [1, 2, 3, 4];
// delete arr[2];
// console.log(arr); // [1, 2, empty, 4]
// console.log(arr.length); // 4

// 8. Void Operator Usage
// What is the output of the below code?
// let result = void (0);
// console.log(result); // undefined

// 9. Unary Operators in Expressions
// What is the output of the below code?
// let a = 10;
// let b = -a + (++a) * (a--); // -10 + 11 * 11 => -10 + 121 = > 111
// console.log(b); // 111

// 10. Combination of Unary Operators
// What is the output of the below code?
// let value = '8';
// let result = !!(+value - 5); // !!(3) => true
// console.log(result); // true
// ========================================================================================================================

// ===============================================
// RELATIONAL OPERATORS
// ===============================================
// Relational operators are used to compare two values.
// in     Returns true if the specified property is in the specified object
// instanceof	Returns true if the specified object is an instance of the specified object

// Problems using Relational Operators
// 1. in Operator with Nested Objects
// What is the output of the below code?
// let obj = {
//     name: 'Alice',
//     details: {
//         age: 30,
//         profession: 'Engineer'
//     }
// };

// console.log('name' in obj); // true
// console.log('age' in obj); // false
// console.log('age' in obj.details); // true

// 2. instanceof with Custom Objects
// What is the output of the below code?
// function Person(name) {
//     this.name = name;
// }

// let alice = new Person('Alice');
// let arr = [1, 2, 3];

// console.log(alice instanceof Person); // true
// console.log(arr instanceof Array); // true
// console.log(arr instanceof Person); // false

// 3. in Operator with Arrays
// What is the output of the below code?
// let arr = [1, 2, 3, 4];
// console.log(2 in arr); // true - checks index
// console.log(4 in arr); // false - checks index
// console.log('length' in arr); // true - checks property

// 4. instanceof with Prototype Chain
// What is the output of the below code?
// function Animal(name) {
//     this.name = name;
// }

// function Dog(name) {
//     Animal.call(this, name);
// }

// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;

// let dog = new Dog('Rex');
// console.log(dog instanceof Dog); // true
// console.log(dog instanceof Animal); // true
// console.log(dog instanceof Object); // true
// ========================================================================================================================

// ===============================================
// COMMA OPERATOR
// ===============================================
// Comma operator is used to evaluate multiple expressions sequentially.
// It evaluates each of its operands from Left to Right and returns the value of the last operand
// expression1, expression2, expression3, ..., expressionN
// Problems using Comma Operator

// let x = (1, 2, 3);
// console.log(x); // 3

// let i = 0;
// for (let j = 0; j < 5; j++, i++) {
//     console.log(`j: ${j}, i: ${i}`);
// } // j: 0, i: 0, j: 1, i: 1, j: 2, i: 2, j: 3, i: 3, j: 4, i: 4

// let a = 1, b = 2;
// let result = (a += 5, b += 10);
// console.log(result); // 12
// console.log(a, b); // 6, 12

// function foo() {
//     console.log('foo');
// }
// function bar() {
//     console.log('bar');
// }

// let result = (foo(), bar());
// // Output: 'foo' followed by 'bar'
// console.log(result); // undefined

// ===================================================
// Object.is()
// ===================================================
// The Object.is() method determines whether two values are the same value.
// Object.is(value1, value2)
// // console.log(Object.is(10,'10'))
// console.log(Object.is(NaN,NaN))
// console.log(Object.is(null,null)) // true
// console.log(Object.is(undefined,undefined)) // true
// console.log(Object.is(true,true)) // true
// console.log(Object.is(false,false)) // true
// console.log(Object.is(0,-0)) // false
// console.log(NaN === NaN);
// console.log(0 === -0) // false
// console.log(undefined === undefined) // true
// console.log(undefined == undefined) // true
// console.log(undefined == null) // true
// console.log(undefined === null) // false
// console.log(isNaN(NaN))
// console.log(isNaN('10')) // false
// ========================================================================================================================

// ===============================================
// Short-Circuit Evaluation
// ===============================================
// Short-circuit evaluation is the programming technique, used in logical expressions where evaluation is stops as soon as the result is determined.
// It is used in logical operations to improve performance and avoid errors.
// The logical AND (&&) and OR (||) operators use short-circuit evaluation.

// Example:
// let A = false;
// let B = true;
// let result = A && B; // false - as A is falsy value so it wont evaluate B
// console.log(result); // false

// let C = true;
// let D = false;
// let result1 = C || D; // true - as C is truthy value so it wont evaluate D
// console.log(result1); // true

// // WITH LOGICAL AND (&&)
// let x = 0;
// let result = x && 'Hello'; // x is falsy value so it wont evaluate 'Hello'
// console.log(result); // 0

// let y = 10;
// let result1 = y && 'Hello'; // y is truthy value so it will evaluate 'Hello'
// console.log(result1); // Hello

// WITH LOGICAL OR (||)
// let x = 0;
// let result = x || 'Hello'; // x is falsy value so it will evaluate 'Hello'
// console.log(result); // Hello

// let y = 10;
// let result1 = y || 'Hello'; // y is truthy value so it wont evaluate 'Hello'
// console.log(result1); // 10

// function getName() {
//     return 'John Doe';
// }

// let name = getName() || 'Default Name'; // getName() is truthy value so it wont evaluate 'Default Name'
// console.log(name); // John Doe

// let user = null;
// let defaultName = 'Guest';
// let name = user || defaultName; // user is falsy value so it will evaluate defaultName
// console.log(name); // Guest

// function first() {
//     console.log('First function');
//     return false;
// }

// function second() {
//     console.log('Second function');
//     return true;
// }

// first() && second(); // First function - as first() is falsy value so it wont evaluate second()
// // First function

// function processData(data) {
//     if (!data) return 'No Data';

//     // Processing data
//     return 'Data Processed';
// }

// console.log(processData(null)); // 'No Data'
// console.log(processData('Valid Data')); // 'Data Processed'














