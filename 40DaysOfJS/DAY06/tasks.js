console.log("*******************************TASKS 06********************************");
// 1. Write a Function to Convert Celsius to Fahrenheit
// Create a function celsiusToFahrenheit(celsius) that converts a temperature from Celsius to Fahrenheit. Formula: (Celsius * 9/5) + 32 = Fahrenheit

function celsiusToFahrenheit(celsius) {

    return (celsius * 9/5) + 32;
}

console.log("In Fahrenheit :: ", celsiusToFahrenheit(36));

// 2. Create a Function to Find the Maximum of Two Numbers
// Write a function findMax(num1, num2) that returns the larger of the two numbers. It should work for negative numbers as well.

function findMax(num1, num2) {

    return num1 >= num2 ? num1 : num2;
}

console.log("Larger number is :: ", findMax(10, -1));

// 3. Function to Check if a String is a Palindrome
// Create a function isPalindrome(str) that checks if a given string is a palindrome (reads the same forward and backward). You can not use any string function that we have not learned in the series so far.

function isPalindrome(str) {

    // let revStr = str.split("").reverse().join("");

    let revStr = "";

    for(let i = str.length - 1; i >= 0; i--){
        revStr += str[i]
    }    
    
    return str === revStr
}

console.log(isPalindrome('madam'))

// 4. Write a Function to Find Factorial of a Number
// Create a function factorial(n) that returns the factorial of n. Example 5! = 5 * 4 * 3 * 2 * 1

function factorial(n) {

    if(n===0) {
        return 1;
    }

    return n * factorial(n - 1);
}

console.log(factorial(5));

// 5. Write a function to Count Vowels in a String
// Write a function countVowels(str) that counts the number of vowels (a, e, i, o, u) in a given string.

function countVowels(str) {

    let lowStr = str.toLowerCase();

    let vowels = ["a","e",'i','o','u'];

    let counts = {};

    for(let i = 0; i < str.length; i++) {

        if(vowels.includes(lowStr.charAt(i))) {

            counts[lowStr.charAt(i)] = (counts[lowStr.charAt(i)] || 0 ) + 1
        }
    }

    return counts;
}

console.log(countVowels('Sakthi'));


// 6. Write a Function to Capitalize the First Letter of Each Word in a Sentence
// Write a function capitalizeWords(sentence) that takes a sentence and capitalizes the first letter of each word. You can use the toUpperCase() method of string to convert the lowercase to uppercase.

function capitalizeWords(sentence) {

    let result = "";

    let splitWords = sentence.split(" ");

    for(let i = 0; i < splitWords.length; i++) {

        result += splitWords[i].charAt(0).toUpperCase() + splitWords[i].slice(1) + " "
    }

    return result.trim()
}

console.log(capitalizeWords("hello from tasks"));

// 7. Use an IIFE to Print “Hello, JavaScript!”
// Write an IIFE that prints "Hello, JavaScript!" to the console. Here the Second word must be supplied using paramneter and argument.

(function(value) {
    console.log("Hello, " + value + "!");
})('JavaScript');

// 8. Create a Simple Callback Function
// Write a function greet(name, callback), where callback prints a message using the name parameter.

function callback(name) {
    console.log("Hello " + name);
}

function greet(name, callback) {
    callback(name)
}

greet("Sakthi", callback)
