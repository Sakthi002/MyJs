// ==================================================================================================================================
// Q1. What happens if you omit the else block in an if-else statement? 
// How does JavaScript handle the situation when the condition in the if statement is not met?
// ----------------------------------------------------------------------------------------------------------------------------------
// Answer: If we omit else block in if-else statement, Javascript will simply skip the code inside if block - if the 
// condition not met and continue executing the code that follows
// ==================================================================================================================================
// Q2: How do you handle cases where multiple conditions need to be checked within a single if statement? Can you provide an example?
// ----------------------------------------------------------------------------------------------------------------------------------
// Answer: We can use logical operators (&&, ||, !) to combine multiple conditions within a single if statement.
// ==================================================================================================================================
// Q3. Can you explain the difference between == and === in the context of an if statement? Why is === generally preferred?
// ----------------------------------------------------------------------------------------------------------------------------------
// Answer: == is used for comparison and === is used for strict comparison. 
// In case of ==, it will try to convert the operands to the same type before making the comparison,
// while in case of ===, it will not do any type conversion (strict comparison).
// === is generally preferred because it avoids the pitfalls of type coercion in ==.
// pitfalls are like 0 == false, 1 == true, null == undefined, '5' == 5, etc.
// ==================================================================================================================================
// Q4. What are the potential pitfalls of using if statements with falsy values in JavaScript? 
// Can you give examples where this might cause unexpected behavior?
// ----------------------------------------------------------------------------------------------------------------------------------
// Answer: Falsy values are values that are considered false when encountered in a boolean context.
// Examples of falsy values include 0, '', null, undefined, NaN, false.
// Using if statements with falsy values can cause unexpected behavior because these values may not be what we expect.
// For example, if we have a variable x that is set to 0, it will be considered falsy in an if statement,
// which may not be the intended behavior.
// let x = 0;
// if (x) {
//     console.log('This will not be executed because x is falsy');
// } else {
//     console.log('This else will be executed because x is falsy');
// }
// ==================================================================================================================================
// Q5. How does the else statement improve the readability and maintainability of your code? Can you provide a scenario where 
// omitting else could lead to complex and hard-to-read code?
// ----------------------------------------------------------------------------------------------------------------------------------
// Answer: The else statement provides a clear and concise way to handle the case when the condition in the if statement is not met.
// It improves the readability and maintainability of the code by clearly indicating the alternative path of execution.
// Omitting the else statement can lead to complex and hard-to-read code when there are multiple nested if statements.
// For example, consider the following code snippet without using else:
// if (condition1) {
//     // code block 1
// }
// if (condition2) {
//     // code block 2
// }
// if (condition3) {
//     // code block 3
// }
// This code can be hard to read and understand, especially when there are multiple conditions to check.
// Using else statements can make the code more readable and maintainable by clearly indicating the alternative paths of execution. 
// ==================================================================================================================================
// Q6. What are some best practices for using else statements in nested conditions? 
// How can you avoid deep nesting, which can make code harder to follow?
// ----------------------------------------------------------------------------------------------------------------------------------
// Answer: Some best practices for using else statements in nested conditions include:
// 1. Limit the depth of nesting to improve readability and maintainability.
// 2. Use early returns or guard clauses to handle exceptional cases first and reduce the nesting level.
// 3. Refactor complex nested conditions into separate functions or modules to improve code organization.
// 4. Use descriptive variable names and comments to explain the logic of nested conditions.
// 5. Consider using switch statements or object literals for handling multiple conditions instead of nested if-else statements.
// By following these best practices, you can avoid deep nesting and make your code easier to follow and maintain.
// ==================================================================================================================================
// Q7. In what scenarios might you prefer to use early returns or guards instead of else statements? Can you demonstrate this with an example?
// ----------------------------------------------------------------------------------------------------------------------------------
// Answer: Early returns or guard clauses are useful when you want to handle exceptional cases first and exit the function early.
// This can help reduce the nesting level and make the code more readable.
// For example, consider the following code snippet using early returns:
// function calculatePrice(quantity, price) {
//     if (quantity <= 0) {
//         return 'Quantity must be greater than 0';
//     }
//     if (price <= 0) {
//         return 'Price must be greater than 0';
//     }
//     return quantity * price;
// }
// In this example, we use early returns to handle the exceptional cases of quantity and price being less than or equal to 0.   
// ==================================================================================================================================
// Q8. When would you use multiple else if statements instead of a switch statement? What are the pros and cons of each approach?
// ----------------------------------------------------------------------------------------------------------------------------------
// Answer: Multiple else if statements are typically used when you have a series of conditions to check and each condition requires a different action.
// Pros of using multiple else if statements:   
// 1. It allows you to check multiple conditions in a linear sequence.
// 2. It is easy to understand and implement.
// Cons of using multiple else if statements:
// 1. It can become verbose and repetitive when there are many conditions to check.
// 2. It may not be as efficient as a switch statement for handling multiple conditions.
// A switch statement is typically used when you have a single value to check against multiple cases.
// Pros of using a switch statement:
// 1. It provides a more concise and readable way to handle multiple conditions.
// 2. It can be more efficient than multiple else if statements in some cases.
// Cons of using a switch statement:
// 1. It can only check for equality and does not support complex conditions.
// 2. It requires a break statement to prevent fall-through behavior.
// In general, the choice between multiple else if statements and a switch statement depends on the specific requirements of the situation.
// ==================================================================================================================================
// Q9. How do you handle complex conditions in else if statements that involve logical operators like && and ||? 
// Can you provide an example of a scenario that would require such complexity?
// ----------------------------------------------------------------------------------------------------------------------------------
// Answer: Complex conditions in else if statements involving logical operators like && and || can be handled by combining multiple conditions.
// For example, consider the following scenario where we need to check if a number is between two ranges:   
// let number = 10;
// if (number >= 0 && number <= 10) {
//     console.log('Number is between 0 and 10');
// } else if (number >= 11 && number <= 20) {
//     console.log('Number is between 11 and 20');
// } else {
//     console.log('Number is outside the range');
// }
// In this example, we use logical operators && and || to combine multiple conditions in else if statements to handle complex scenarios.
// ==================================================================================================================================
// Q10. Can you explain how JavaScript evaluates conditions in a chain of else if statements? 
// What happens if multiple conditions are true?
// ----------------------------------------------------------------------------------------------------------------------------------
// Answer: JavaScript evaluates conditions in a chain of else if statements sequentially from top to bottom.
// If multiple conditions are true, only the code block associated with the first true condition will be executed.
// Subsequent conditions will not be evaluated once a true condition is found.
// ==================================================================================================================================
// Q11: What are some common mistakes developers make when using switch statements in JavaScript? How do you avoid issues like fall-through?
// ----------------------------------------------------------------------------------------------------------------------------------
// Answer: Some common mistakes developers make when using switch statements in JavaScript include:
// 1. Forgetting to include a break statement after each case, which can lead to fall-through behavior.
// 2. Using non-constant expressions or variables in case statements.
// 3. Not handling default cases or unexpected values.
// To avoid issues like fall-through, always include a break statement after each case to prevent the execution of subsequent cases.
// You can also use a default case to handle unexpected values and provide a fallback option.
// ==================================================================================================================================
// Q12. How would you refactor a switch statement with many cases into a more maintainable form? Is there an alternative approach you can suggest?
// ----------------------------------------------------------------------------------------------------------------------------------
// Answer: To refactor a switch statement with many cases into a more maintainable form, you can consider using object literals or functions.
// Object literals can be used to map cases to actions, while functions can encapsulate the logic for each case.    
// For example, consider the following refactoring using object literals:
// const actions = {
//     case1: () => {
//         // code block for case 1
//     },
//     case2: () => {
//         // code block for case 2
//     },
//     // add more cases as needed
// };
// const action = actions[caseValue];   
// if (action) {
//     action();
// } else {
//     // handle default case
// }
// In this example, we use an object literal to map case values to actions, which makes the code more maintainable and extensible.
// ==================================================================================================================================
// Q13. What are some common pitfalls to avoid when using if-else statements in JavaScript?
// ----------------------------------------------------------------------------------------------------------------------------------
// Answer: Some common pitfalls to avoid when using if-else statements in JavaScript include:
// 1. Using == instead of === for strict comparison.
// 2. Not handling all possible cases or edge cases.
// 3. Nesting too many if-else statements, which can make the code hard to read.
// 4. Using complex conditions that are difficult to understand or maintain.    
// To avoid these pitfalls, use === for strict comparison, handle all possible cases, limit the depth of nesting, and use descriptive variable names.
// ==================================================================================================================================
// Q14. How do you handle asynchronous code in if-else statements in JavaScript?
// ----------------------------------------------------------------------------------------------------------------------------------
// Answer: Asynchronous code in if-else statements can be handled using promises, async/await, or callback functions.
// You can use promises to handle asynchronous operations and chain multiple then() methods to handle different conditions.
// For example, consider the following code snippet using promises:
// function fetchData() {
//     return new Promise((resolve, reject) => {
//         // simulate asynchronous operation
//         setTimeout(() => {
//             resolve('Data fetched successfully');
//         }, 1000);
//     });
// }
// fetchData()
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.error(error);
//     });
// In this example, we use promises to handle asynchronous code in if-else statements by chaining then() and catch() methods.
// ==================================================================================================================================
// Q15. Can you explain the significance of the default case in a switch statement? What happens if it is omitted?
// ----------------------------------------------------------------------------------------------------------------------------------
// Answer: The default case in a switch statement is used to handle unexpected values or cases that do not match any of the specified cases.
// If the default case is omitted, the switch statement will not have a fallback option for unexpected values, which may lead to unexpected behavior.
// It is recommended to include a default case in a switch statement to handle such scenarios and provide a fallback option.
// ==================================================================================================================================
// Q16.  When is it appropriate to use the ternary operator instead of an if-else statement? 
// Can you provide an example of a situation where the ternary operator improves code clarity?
// ----------------------------------------------------------------------------------------------------------------------------------
// Answer: The ternary operator is appropriate when you have a simple conditional expression with two possible outcomes.
// It can improve code clarity by providing a concise and readable way to handle conditional logic.
// When we want to assign value to variable based on simple condition, ternary operator is preferred.
// For example, consider the following code snippet using the ternary operator:
// let age = 20;
// let message = age >= 18 ? 'You are an adult' : 'You are a minor';
// console.log(message);
// In this example, we use the ternary operator to assign a message based on the age value, which improves code clarity and readability.
// ==================================================================================================================================
// Q17. What are the limitations of the ternary operator? 
// Can you demonstrate a scenario where using a ternary operator might lead to less readable or maintainable code?
// ----------------------------------------------------------------------------------------------------------------------------------
// Answer: The ternary operator is limited to handling simple conditional expressions with two possible outcomes.
// It may lead to less readable or maintainable code when the conditional logic becomes complex or nested.
// ==================================================================================================================================
// Q18.  How do you decide when to use each type of conditional statement? Can you walk through a real-world scenario where you had to make these decisions?
// ----------------------------------------------------------------------------------------------------------------------------------
// Answer: The choice between if-else statements, switch statements, and the ternary operator depends on the specific requirements of the situation.
// If-else statements are suitable for handling multiple conditions with different actions.
// Switch statements are ideal for checking a single value against multiple cases.
// The ternary operator is appropriate for simple conditional expressions with two possible outcomes.
// For example, in a real-world scenario, if we need to implement a grading system based on a student's score:
// If the score is between 90 and 100, the grade is 'A'.
// If the score is between 80 and 89, the grade is 'B'.
// If the score is between 70 and 79, the grade is 'C'.
// If the score is between 60 and 69, the grade is 'D'.
// If the score is below 60, the grade is 'F'.
// In this scenario, we can use if-else statements to handle the multiple conditions and assign grades based on the score.
// ==================================================================================================================================
// Q19: Can you explain how JavaScript's type coercion affects conditional logic? 
// What are some common pitfalls, and how do you guard against them?
// ----------------------------------------------------------------------------------------------------------------------------------
// Answer: JavaScript's type coercion can affect conditional logic when comparing values of different types.
// Type coercion can lead to unexpected results, especially when using the == operator for comparison.
// Some common pitfalls of type coercion include:
// 1. Comparing values of different types, such as numbers and strings.
// 2. Treating falsy values as equivalent, such as 0 and false.
// if (0 == false) {
//     console.log("This is true due to type coercion.");
// }
// To guard against these pitfalls, use the === operator for strict comparison to avoid type coercion.
// Always compare values of the same type to ensure consistent and predictable behavior in conditional logic.
// ==================================================================================================================================
// Q20: Have you ever had to optimize conditional logic for performance in a large-scale JavaScript application? Can you describe the process and the outcome?
// ----------------------------------------------------------------------------------------------------------------------------------
// Answer: Yes, I have optimized conditional logic for performance in large-scale JavaScript applications by:
// 1. Refactoring complex if-else statements into switch statements or object literals for better performance.
// 2. Using early returns or guard clauses to handle exceptional cases first and reduce the nesting level.
// 3. Avoiding deep nesting and limiting the depth of conditional logic to improve readability and maintainability.
// 4. Using memoization or caching to store the results of conditional checks and avoid redundant computations.
// By optimizing conditional logic for performance, I was able to improve the efficiency and responsiveness of the application.
// ==================================================================================================================================