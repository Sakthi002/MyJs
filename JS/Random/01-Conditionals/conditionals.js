// *****************************************************************************************************************************
// CONDITIONALS
// *****************************************************************************************************************************
// Conditionals are the fundamental concept of any programing language - that allows us to execute certain code based on condition
// Conditionals enables our code to make decisions and perform different actions under different circumtances

// Key Concepts of Conditionals:
// ==================================
// CONDITION : A condition is an expresion that evalutes to true or false - this expression determines which block of code to execute
// BRANCHING : Conditionals creates branches in our code. Depending on the condition, the code will take different paths
// BLOCKS : Blocks are the code that will be executed if the condition is true. Blocks are enclosed in curly braces {}
// STATEMENTS : Statements are the individual lines of code that make up a block

// Types of Conditionals:
// =======================
// 1. If Statement
// 2. Else Statement
// 3. Else If Statement
// 4. Switch Statement
// 5. Ternary Operator

// 1. IF STATEMENT
// =============================================================================================================================
// Executes a block of code if the specified condition is true
// Syntax: if (condition) { block of code }
// If the condition is true, the block of code will be executed. If the condition is false, the block of code will be skipped

// Example: Check if a number is positive
// let number = 10;
// if (number > 0) {
//     console.log('Number is positive');
// }

// 2. ELSE STATEMENT
// =============================================================================================================================
// Executes a block of code if the specified condition is false
// Syntax: if (condition) { block of code } else { block of code }
// If the condition is true, the first block of code will be executed. If the condition is false, the second block of code will be executed

// Example: Check if a number is positive or negative
// number = -10;
// if (number > 0) {
//     console.log('Number is positive');
// } else {
//     console.log('Number is negative');
// }

// 3. ELSE IF STATEMENT
// =============================================================================================================================
// The else if statement allows us to check multiple conditions if the first condition is false
// Syntax: if (condition) { block of code } else if (condition) { block of code } else { block of code }
// If the first condition is true, the first block of code will be executed. If the first condition is false, the second condition will be checked
// If the second condition is true, the second block of code will be executed. If the second condition is false, the third block of code will be executed

// Example: Check if a number is positive, negative or zero
// number = 0;
// if (number > 0) {
//     console.log('Number is positive');
// } else if (number < 0) {
//     console.log('Number is negative');
// } else {
//     console.log('Number is zero');
// }

// 4. SWITCH STATEMENT
// =============================================================================================================================
// The SWITCH statement is used to perform different actions based on different conditions
// It is often used as a cleaner alternative to multiple `if` statements when comparing single variable against multiple values
// Syntax: switch (expression) { case value: block of code break; case value: block of code break; default: block of code }
// The switch expression is evaluted once and compared with the values of each case. If there is a match, the block of code will be executed
// If there is no match, the default block of code will be executed

// Example: Check the day of the week
// let day = 1;
// switch(day) {
//     case 1:
//         console.log('Monday');
//         break;
//     case 2:
//         console.log('Tuesday');
//         break;
//     case 3:
//         console.log('Wednesday');
//         break;
//     case 4:
//         console.log('Thursday');
//         break;
//     case 5:
//         console.log('Friday');
//         break;
//     case 6:
//         console.log('Saturday');
//         break;
//     case 7:
//         console.log('Sunday');
//         break;
//     default:
//         console.log('Invalid day');
// }

// 5. TERNARY OPERATOR
// =============================================================================================================================
// The Ternary Operator is a shorthand way of writing an `if` statement
// It is used to evaluate a condition and return a value based on the condition
// Syntax: condition ? value if true : value if false
// If the condition is true, the first value will be returned. If the condition is false, the second value will be returned

// Example: Check if a number is positive or negative using Ternary Operator
// number = -10;
// let result = (number > 0) ? 'Positive' : 'Negative';
// console.log(result);
// *****************************************************************************************************************************

// =============================================================================================================================
// EXERCISES - ***************************************************************************************************************
// =============================================================================================================================
// 1. How does the switch statement work in JavaScript?
// =============================================================================================================================
// Switch statement evalutes an expression and matches its value against multiple cases.
// If there is a match, the block of code associated with that case will be executed.
// If there is no match, the block of code associated with the default case will be executed.
// Example:
// let fruit = 'Apple';
// switch(fruit) {
//     case 'Apple':
//         console.log('It is an Apple');
//         break;
//     case 'Banana':
//         console.log('It is a Banana');
//         break;
//     default:
//         console.log('Invalid fruit');
// }
// If we are not using the break statement, all the cases after the matching case will be executed
// =============================================================================================================================
// 2. Explain how the ternary operator works.
// =============================================================================================================================
// The ternary operator is a shorthand way of writing if-else statements
// it is used to evaluate an expression and retturn a value based on the condition
// Example:
// let number = 10;
// let result = (number > 0) ? 'Positive' : 'Negative';
// console.log(result);
// =============================================================================================================================
// 3. Write a function to check if a number is even or odd.
// =============================================================================================================================
// function checkEvenOrOdd(number) {
    
//     if(Number.isInteger(number)) {

//         return number % 2 === 0 ? 'Even' : 'Odd';

//     } else {
        
//         return 'Number is not an integer';
//     }
// }
// console.log(checkEvenOrOdd(11)); // Odd
// console.log(checkEvenOrOdd(20)); // Even
// console.log(checkEvenOrOdd(5.5)); // Odd - decimal numbers always odd - it does not have concept of even/odd
// =============================================================================================================================
// 4. Write a function to find the largest number among three numbers.
// =============================================================================================================================
// function largestNum(a,b,c) {
//     // if(a > b && a > c) {
//     //     return a;
//     // } else if(b > a && b > c){
//     //     return b;
//     // } else {
//     //     return c;
//     // }
//     return Math.max(a,b,c)
// }
// console.log(largestNum(20,15,10)); // 20
// console.log(largestNum(15,20,10)); // 20
// console.log(largestNum(10,15,20)); // 20
// =============================================================================================================================
// 5. Write a function that takes a score (0-100) and returns the corresponding letter grade (A, B, C, D, F).
// =============================================================================================================================
// function grade(mark) {
//     if(mark >= 90) {
//         return 'A'
//     } else if(mark >= 80) {
//         return 'B'
//     } else if(mark >= 70) {
//         return 'C'
//     } else if(mark >= 60) {
//         return 'D'
//     } else {
//         return 'F'
//     }
// }
// console.log(grade(95));
// console.log(grade(85));
// console.log(grade(75));
// console.log(grade(65));
// console.log(grade(25));
// =============================================================================================================================
// 6. Write a function that takes a month (1-12) and returns the number of days in that month.
// =============================================================================================================================
// function daysInMonth(month) {
//     switch(month) {
//         case 1: case 3: case 5: case 7: case 8: case 10: case 12:
//             return 31;
//         case 4: case 6: case 9: case 11:
//             return 30;
//         case 2:
//             return 28;
//         default:
//             return 'Invalid month';
//     }
// }
// console.log(daysInMonth(1)); // 31
// console.log(daysInMonth(2)); // 28
// console.log(daysInMonth(4)); // 30
// console.log(daysInMonth(13)); // Invalid month
// =============================================================================================================================
// 7. Write a function to determine if a given year is a leap year.
// ==========================================================================================================================
// function isLeapYear(year) {
//     if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//         return true;
//     } else {   
//         return false;
//     }
// }

// console.log(isLeapYear(2024)); // true
// console.log(isLeapYear(2000)); // true 
// =========================================================================================================================
// 8. Print numbers from 1 to 100. For multiples of 3, print "Fizz", for multiples of 5, print "Buzz", 
//    and for multiples of both, print "FizzBuzz".
// function fizzBuzz() {
//     for(let i = 1; i <= 100; i++) {
//         if(i % 3 === 0 && i % 5 === 0) {
//             console.log('FizzBuzz');
//         } else if(i % 3 === 0) {
//             console.log('Fizz');
//         } else if(i % 5 === 0) {
//             console.log('Buzz');
//         } else {
//             console.log(i)
//         }
//     }
// }
// fizzBuzz()
// =========================================================================================================================
// 9. Write a function to determine if a given character is a vowel or consonant.
// =========================================================================================================================
// function isVowelChar(value) {
//     if(value === 'a' || value === 'e' || value === 'i' || value === 'o' || value === 'u') {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(isVowelChar('a'));
// console.log(isVowelChar('b'));
// console.log(isVowelChar('c'));
// console.log(isVowelChar('d'));
// console.log(isVowelChar('e'));
// =========================================================================================================================
// 10. Write a function to check if a given string is a palindrome.
// =========================================================================================================================
// function isPalindrome(value) {
//     let reversedStr = value.toString().split('').reverse().join('');
//     if(value == reversedStr) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(isPalindrome('sakthi'));
// console.log(isPalindrome('level'));
// console.log(isPalindrome(10001));
// =========================================================================================================================
// 11. Write a function that takes an age as input and prints a message saying whether the person is eligible to 
// vote (18 years or older) or not.
// =========================================================================================================================
// function eligibleForVote(age) {
//     if(age >= 18) {
//         console.log('Eligible to vote');
//     } else {
//         console.log('Not eligible');
//     }
// }
// eligibleForVote(18); // Eligible to vote
// eligibleForVote(17); // Not eligible
// ==========================================================================================================================
// 12. Write a function that takes a number as input and prints whether the number is positive, negative, or zero.
// ==========================================================================================================================
// function checkNum(number) {
//     if(number < 0) {
//         console.log('Number is :: Negative');
//     } else if(number === 0) {
//         console.log('Number is :: Zero');
//     } else {
//         console.log('Number is :: Positive');
//     }
// }
// checkNum(90); // Number is :: Positive
// checkNum(0); // Number is :: Zero
// checkNum(-34); // Number is :: Negative
// ===========================================================================================================================
// 13. Write a function that takes a temperature in Celsius as input and prints "Cold" if the temperature is below 10°C, 
// "Warm" if it is between 10°C and 25°C, and "Hot" if it is above 25°C.
// ===========================================================================================================================
// function temperatureWarning(temperature){
//     if(temperature < 10) {
//         console.log(`Cold : ${temperature} C`);
//     } else if(temperature >= 10 && temperature <= 25) {
//         console.log(`Warm : ${temperature} C`)
//     } else {
//         console.log(`Hot : ${temperature} C`)
//     }
// }
// temperatureWarning(9); // Cold 9 C
// temperatureWarning(90); // Hot 90 C
// temperatureWarning(24); // Warm 24 C
// ===========================================================================================================================
// 14. Write a function that performs basic arithmetic operations based on the operator provided (+, -, *, /). 
// The function should use else for handling cases when the operator is not recognized.
// ==========================================================================================================================
// function calculator(a,b,operator) {
//     if(operator === '+') {
//         console.log('Addition :: ' + (a + b))
//     } else if(operator === '-') {
//         console.log('Subtraction :: ' + (a - b))
//     } else if(operator === '*') {
//         console.log('Multiplication :: ' + (a * b))
//     } else if(operator === '/') {
//         console.log('Division :: ' + (a / b))
//     } else {
//         console.log('Operator not recognized');
//     }
// }
// calculator(2,3,'+'); // Addition :: 5
// calculator(25,5,'-'); // Subtraction :: 20
// calculator(10,10,'*'); // Multiplication :: 100
// calculator(20,2,'/'); // Division :: 10
// calculator(10, 2, '%'); // Operator not recognized
// ============================================================================================================================
// 15. Write a function that assigns a letter grade based on a numerical score (0-100). 
// Use else if to handle the different ranges for grades.
// ============================================================================================================================
// function grade(score) {
//     if(score >= 90) {
//         console.log('A');
//     } else if(score >= 70) {
//         console.log('B');
//     } else if(score >= 60) {
//         console.log('C');
//     } else if(score >= 50) {
//         console.log('D')
//     } else {
//         console.log('F');
//     }
// }
// grade(96);
// grade(75);
// grade(65);
// grade(55);
// grade(35);
// ==========================================================================================================================
// 16. Write a function that takes a number (1-7) and prints the corresponding day of the week. 
// Use else if for the days of the week.
// ==========================================================================================================================
// function dayOfWeek(number) {
//     if(number === 1) {
//         console.log('Sunday');
//     } else if(number === 2) {
//         console.log('Monday');
//     } else if(number === 3) {
//         console.log('Tuesday');
//     } else if(number === 4) {
//         console.log('Wednesday');
//     } else if(number === 5) {
//         console.log('Thursday');
//     } else if(number === 6) {
//         console.log('Friday');
//     } else if(number === 7) {
//         console.log('Saturday');
//     } else {
//         console.log('Invalid day');
//     }
// }
// dayOfWeek(5); // Thursday
// dayOfWeek(4); // Wednesday
// dayOfWeek(7); // Staturday
// dayOfWeek(3); // Tuesday
// dayOfWeek(1); // Sunday
// dayOfWeek(2); // Monday
// dayOfWeek(6); // Friday
// dayOfWeek(8); // Invalid day
// ============================================================================================================================
// 17. Write a function that takes the name of a fruit and prints its price. 
// Use a switch statement to handle different fruit names.
// ============================================================================================================================
// function fruitPrice(fruit) {
//     switch(fruit) {
//         case 'apple':
//             console.log('1Kg Apple price is : 250');
//             break;
//         case 'orange':
//             console.log('1Kg Orange price is : 200');
//             break;
//         case 'mango':
//             console.log('1Kg Mango price is : 50');
//             break;
//         default:
//             console.log('Invalid');
//     }
// }
// fruitPrice('apple');
// fruitPrice('mango');
// fruitPrice('grapes');
// fruitPrice('orange');
// ============================================================================================================================
// 18. Write a function that takes the color of a traffic light (red, yellow, green) 
// and prints the corresponding action (stop, caution, go).
// function trafficLight(color) {
//     switch(color) {
//         case 'red':
//             console.log('STOP');
//             break;
//             case 'yellow':
//                 console.log('CAUTION');
//                 break;
//                 case 'green':
//                     console.log('GO');
//                     break;
//                     default:
//                         console.log('NO SIGNAL');
//     }
// }
// trafficLight();
// trafficLight('yellow');
// trafficLight('red');
// trafficLight('green');
// ============================================================================================================================
// 19. Write a function that checks if a person is eligible to vote using the ternary operator.
// ============================================================================================================================
// function isVoter(age) {
//     const eligiblility = age >= 18 ? 'Eligible' : 'Not Eligible';
//     console.log(eligiblility)
// }
// isVoter(17)
// isVoter(23)
// ============================================================================================================================
// 20. Write a function that returns the maximum of two numbers using the ternary operator.
// ============================================================================================================================
// function isMax(a,b) {
//     return (a > b) ? a : b;
// }
// console.log(isMax(10,2)) // 10
// console.log(isMax(2,34)) // 34
// ============================================================================================================================
// 21. Problem: Write a function to determine if a person is eligible for a specific program based on age, employment status, 
// and income. Eligibility criteria are:
//  > Age should be between 25 and 40.
//  > Employment status must be "employed".
//  > Income must be greater than $50,000.
//  > Use if, else, else if, and switch for different checks.
// ============================================================================================================================
// function eligibleForProgram(age, employmentStatus, income) {
//     if(age < 25 || age > 40) {
//         console.log('Not eligible due to age.')
//     } else if(employmentStatus !== 'employed') {
//         console.log('Not eligible due to employment status')
//     } else if(income < 50000) {
//         console.log('Not eligibel due to income');
//     } else {
//         console.log('You are ELIGIBLE!!!!')
//     }
// }
// eligibleForProgram(23, 'employed', 50000);
// eligibleForProgram(39, 'unemployed', 50000);
// eligibleForProgram(39, 'employed', 49999);
// eligibleForProgram(30, 'employed', 90000);
// ============================================================================================================================
// 22. Problem: In a web application, you need to handle routing based on user roles (admin, editor, viewer) 
// and request type (GET, POST). Use a switch statement to manage these routes and print the appropriate message.
// ============================================================================================================================
// function handleRoutes(role, requestType) {
//     switch(role) {
//         case 'admin':
//             switch(requestType) {
//                 case 'GET':
//                     console.log('Admin GET Request');
//                     break;
//                     case 'POST':
//                         console.log('Admin POST Request');
//                         break;
//                         default:
//                             console.log('Invalid Admin Request');
//             }
//             break;
//             case 'editor':
//                 switch(requestType){
//                     case 'GET':
//                         console.log('Editor GET Request');
//                         break;
//                         case 'POST':
//                             console.log('Editor POST Request');
//                             break;
//                             default:
//                                 console.log('Invalid Editor Request');
//                 }
//                 break;
//                 case 'viewer':
//                     switch(requestType){
//                         case 'GET':
//                             console.log('Viewer GET Request');
//                             break;
//                             case 'POST':
//                                 console.log('Viewer POST Request');
//                                 break;
//                                 default:
//                                     console.log('Invalid Viewer Request');
//                     }
//                     break;
//                     default:
//                         console.log('INVALID ROLE')
//     }
// }
// handleRoutes('editor', 'POST');
// handleRoutes('viewer', 'GET');
// handleRoutes('admin', 'POST');
// handleRoutes('user', 'POST');
// ===========================================================================================================================
// 23. Write a function that takes a user’s score and the difficulty level of a game (easy, medium, hard) and returns a 
// ranking based on the combination of score and difficulty. Use nested if statements to handle the different rankings. 
// ===========================================================================================================================
// function ranking(score,level) {
//     if(level === 'easy') {
//         if(score >= 50) {
//             console.log('Bronze medal')
//         } else if(score >= 30) {
//             console.log('Silver medal')
//         } else {
//             console.log('No medal!')
//         }
//     } else if(level === 'medium') {
//         if(score >= 70) {
//             console.log('Gold medal');
//         } else if(score >= 50) {
//             console.log('Bronze medal')
//         } else {
//             console.log('No medal!')
//         }
//     } else if(level === 'hard') {
//         if(score >= 90) {
//             console.log('Gold medal')
//         } else if(score >= 70) {
//             console.log('Platinum medal')
//         } else {
//             console.log('No medal!')
//         }
//     } else {
//         console.log('No medal.')
//     }
// }
// ranking(75, 'hard')
// ==========================================================================================================================
// 24. Write a function to determine the pricing tier for a subscription service based on the number of months. 
// Use a chain of ternary operators to handle different pricing tiers.
// ==========================================================================================================================
// function pricingTier(months) {
//     let tier = (months <= 1) ? 'Monthly Plan' : (months <=3) ? 'Quaterly Plan' : (months <= 6) ? 'Half yearly plan' : (months <= 12) ? 'Full year plan' : 'Endless subcsription';
//     return tier
// }
// console.log(pricingTier(71));
// ==========================================================================================================================
// 25. Create a function to simulate a traffic light system where you need to handle transitions between 
// states (Red, Green, Yellow) with additional checks for maintenance or special modes (e.g., blinking red)
// ==========================================================================================================================
// function trafficSystem(color, mode) {
//     switch(color) {
//         case 'red':
//             switch(mode){
//                 case 'blinking':
//                     console.log('Maintainence mode');
//                     break;
//                     default:
//                         console.log('STOP');
//             }
//             break;
//             case 'yellow':
//                 console.log('Caution')
//                 break;
//                 case 'green':
//                     console.log('Go')
//                     break;
//                     default:
//                         console.log('No signal, Free to go');
//     }
// }
// trafficSystem('red','blinking');
// =========================================================================================================================
