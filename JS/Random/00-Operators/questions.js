// Q1.What are the different types of operators in JavaScript?
// ===========================================================
// Javacript operatiors are used to perform operations on variables and values
// There are different types of operators in JavaScript:
// 1. Arithmetic operators - used to perform arithmetic operations on numbers (+, -, *, /, %, **)
// 2. Assignment operators - used to assign values to variables (=, +=, -=, *=, /=, %=, **=)
// 3. Comparison operators - used to compare two values (==, ===, !=, !==, >, <, >=, <=)
// 4. Logical operators - used to determine the logic between variables or values (&&, ||, !)
// 5. Bitwise operators - used to perform bitwise operations on binary numbers (&, |, ~, ^, <<, >>, >>>)
// 6. String operators - used to concatenate strings (+)
// 7. Conditional (ternary) operator - used to assign a value to a variable based on a condition (condition ? value1 : value2)
// 8. Comma operator - used to separate multiple expressions (,)
// 9. Unary operators - used to perform operations on a single operand (++, --, typeof, delete, void)
// 10. Relational operators - used to determine the relationship between two variables or values (in, instanceof)

// Q2. How does the == operator differ from the === operator in JavaScript?
// ========================================================================
// The == operator is usedto compare the values of two variables, but it does not compare the data type of the variables.
// The === operator is used to compare both values and datatypes of two variables.

// Q3. What is the purpose of the typeof operator?
// ===============================================
// the typeof operator is ued to determine the data type of a value stored in a variable.
// It returns a string indicating the type of the operand.

// Q4. How do the && and || operators work?
// ========================================
// The && operator is the logical AND operator. It returns true if both operands are true, otherwise it returns false.
// The || operator is logical OR operator. It returns true if either one of the operands is true, otherwise it returns false.

// Q5.What does the ! operator do?
// ===============================
// It is used to negate the value of boolean expression.
// It returns true if the expression is false, and false if the expression is true.

// Q6. Explain the difference between the & and && operators
// ==========================================================
// The & operator is a bitwise AND operator. It performs a bitwise AND operation on two operands.
// The && operator is a logical AND operator. It returns true if both operands are true, otherwise it returns false.

// Q7. How does the + operator work with strings and numbers?
// ==========================================================
// The + operator is used for addition when used with numbers.
// When used with strings, it concatenates the strings.

// Q8. What is the purpose of the delete operator in JavaScript?
// =============================================================
// The delete operator is used to delete a property from an object.
// It can also be used to delete an element from an array.

// Q9. What is the difference between the delete operator and setting a property to undefined in JavaScript?
// =========================================================================================================
// The delete operator removes a property from an object, while setting a property to undefined leaves the property in the object but assigns it the value of undefined.

// Q10. What is the difference between the void operator and the undefined value in JavaScript?
// ============================================================================================
// The void operator evaluates an expression and returns undefined.
// The undefined value is a global property whose initial value is undefined.

// Q11. What is the result of the expression 5 + '5'? Why?
// ========================================================
// '55'. This is because the + operator is used for addition when used with numbers, and concatenation when used with strings.

// Q12. What is the result of the expression 5 * '5'? Why?
// =======================================================
// 25. This is because the * operator is used for multiplication, and the string '5' is coerced into a number before the operation is performed.

// Q13. What is the output of the expression null == undefined? Why?
// =================================================================
// true. This is because null and undefined are considered equal when using the == operator.

// Q14. What is the output of the expression null === undefined? Why?
// ==================================================================
// false. This is because null and undefined are of different types, and the === operator checks for both value and type equality.

// Q15. How does the ternary operator work?
// ========================================
// The ternary operator is a shorthand way of writing an if-else statement.
// It takes three operands: a condition, a value to return if the condition is true, and a value to return if the condition is false.
// It has the following syntax: condition ? value1 : value2

// Q16. What does the typeof operator return for arrays and functions?
// ===================================================================
// The typeof operator returns 'object' for arrays and 'function' for functions.

// Q17. Explain the use of the instanceof operator.
// ================================================
// The instanceof operator is used to check if an object is an instance of a particular class or constructor function.
// It returns true if the object is an instance of the specified class, otherwise it returns false.

// Q18. How does the conditional (ternary) operator differ from an if-else statement?
// ==================================================================================
// The conditional (ternary) operator is a shorthand way of writing an if-else statement.
// It takes three operands: a condition, a value to return if the condition is true, and a value to return if the condition is false.
// It is used for simple conditional expressions, while an if-else statement is used for more complex conditional logic.

// Q19. What is the purpose of the void operator in JavaScript? and use usecases?
// ==============================================================================
// The void operator evaluates an expression and returns undefined.
// It is often used to prevent the browser from navigating to a new page when clicking on a link.
// Example: <a href="javascript:void(0)">Click me</a>

// Q20. How does the ++ operator work in JavaScript?
// =================================================
// The ++ operator is the increment operator. It increases the value of a variable by 1.
// It can be used as a prefix (++i) or postfix (i++) operator.

// Q21. What is the difference between x = 5 and x == 5?
// =====================================================
// x = 5 is an assignment operator that assigns the value 5 to the variable x.
// x == 5 is a comparison operator that checks if the value of x is equal to 5.

// Q22. WHAT IS THE DIFFERENCE BETWEEN in and hasOwnProperty?
// ==========================================================
// in - operator checks if the property is in the object or in its prototype chain.
// hasOwnProperty - method checks if the property is in the object itself.

// Q23.Can you explain the use cases and differences between === and Object.is()?
// ==============================================================================
// The === operator checks for both value and type equality.
// Object.is() method checks for both value and type equality, but it treats NaN and -0 differntly.

// Q24. How would you use the typeof operator to differentiate between arrays, functions, and other objects?
// =========================================================================================================
// typeof returns "object" for arrays and objects, so it is not sufficient alone to differentiate between them. 
// To check if something is an array, use Array.isArray(value). 
// Functions return "function" with typeof, so use typeof value === 'function' for functions.

// Q25. How can you leverage short-circuit evaluation with logical operators for performance optimization?
// =======================================================================================================
// Short-Circuit Evaluation is a technique where the evaluation of logical expressions stops as soon as the result is determined.
// Logical AND (&&) stops evaluating as soon as it finds a falsy value.
// Logical OR (||) stops evaluating as soon as it finds a truthy value.

// Q26. What is the difference between the && and || and ?? operators in JavaScript?
// =================================================================================
// && - Logical AND operator. Returns the first falsy value or the last value if all are truthy.
// || - Logical OR operator. Returns the first truthy value or the last value if all are falsy.
// ?? - Nullish Coalescing operator. Returns the right-hand operand if the left-hand operand is null or undefined.

// Q27. How does the delete operator work with arrays in JavaScript?
// =================================================================
// The delete operator can be used to delete elements from an array, but it does not update the length of the array.
// It leaves a hole in the array where the deleted element used to be.

// Q29. What are some common pitfalls with the + operator when dealing with mixed types, and how can they be avoided?
// The + operator can cause unintended concatenation when used with strings. 
// For example, 5 + "5" results in "55". To avoid this, explicitly convert operands using Number() or String(), or use arithmetic operations to ensure the desired type.

// Q30. How does the delete operator work with objects in JavaScript?
// =================================================================
// The delete operator can be used to delete properties from an object.
// It removes the specified property from the object.

// Q31. Explain the differences between the != and !== operators with examples
// ===========================================================================
// != - Not Equal operator. It coerces the operands to the same type before comparison. 5 != "5" returns false. - 5 != 5 returns false.
// !== - Strict Not Equal operator. It does not coerce the operands to the same type before comparison. 5 !== "5" returns true.

// Q32. How does JavaScript handle operator precedence and associativity, and how does it affect complex expressions?
// ===================================================================================================================
// Operator precedence determines the order in which operators are evaluated in an expression.
// Associativity determines the order of operations for operators with the same precedence.
// Complex expressions are evaluated based on operator precedence and associativity rules.

// Q34. How would you implement custom operators or extend operator functionality in JavaScript?
// =============================================================================================
// Javascript does not support custom oeprators directly.
// You can achive sililar functionality using functions or methods.

// Q34. How does the instanceof operator work with prototype chains and inherited properties?
// ==========================================================================================
// The instanceof operator checks if an object is an instance of a particular class or constructor function.
// It also checks if the object inherits properties from its prototype chain.

// Q35. How does the ternary operator compare with other conditional constructs in terms of readability and performance?
// ===================================================================================================================
// The ternary operator is a shorthand way of writing an if-else statement.
// It is more concise and can improve readability in some cases.
// Performance-wise, the ternary operator is similar to an if-else statement.
// ternary operator slightly more effiecient in terms of code size and execution

// Q36. How would you use the Object.is() method to handle edge cases with floating-point numbers and NaN values?
// ===============================================================================================================
// Object.is() method can be used to handle edge cases with floating-point numbers and NaN values.
// It treats NaN and -0 differently than the === operator.


