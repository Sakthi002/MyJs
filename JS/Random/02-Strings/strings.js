// ======================================================================================================================
// STRINGS
// ======================================================================================================================
// 1. Understanding Strings
// ======================================================================================================================
// DEFNITION : A string is a sequence of characters used to represent text.
// CREATION : Strings can be created by using single('') or double("") quotes or backticks(````).
// let string1 = 'Hello';
// let string2 = "World";
// let string3 = `Hello World`;
// console.log(string1, string2, string3);
// OUTPUT : Hello World Hello World Hello World
// ======================================================================================================================
// 2. Common String Methods
//=======================================================================================================================
// 2.1 LENGTH:
// The length property returns the length of a string.
// let string = 'Hello World!';
// console.log(string.length); // OUTPUT : 12
// ----------------------------------------------------------------------------------------------------------------------
// 2.2 ACCESSING CHARACTERS: 
// Strings can be accessed using bracket notation([]) or the charAt() method.
// const str = "Hello World!";
// console.log(str[4]); // OUTPUT : o
// console.log(str.charAt(6)) // OUTPUT : W
// ----------------------------------------------------------------------------------------------------------------------
// 2.3 CHANGING CASE:
// `.toUpperCase()` and `.toLowerCase()` methods are used to changes the case of a string.
// let str = 'Hello World!';
// console.log(str.toUpperCase()); // OUTPUT : HELLO WORLD!
// console.log(str.toLowerCase()); // OUTPUT : hello world!
// ----------------------------------------------------------------------------------------------------------------------
// 2.4 SUBSTRING EXTRACTION:
// `.slice()`, `.substring()`, and `.sbstr()` methods are used to extract a part of a string.
// let str = 'Hello World!';
// console.log(str.slice(0,5)); // 0 is inclusive and 5 is exclusive. OUTPUT : Hello
// console.log(str.substring(6,11)); // 6 is inclusive and 11 is exclusive. OUTPUT : World
// console.log(str.substr(6,5)); // 6 is the starting index and 5 is the length. OUTPUT : World
// ----------------------------------------------------------------------------------------------------------------------
// 2.5 STRING SEARCHING:
// `.indexOf()`, `.lastIndexOf()`, `.startsWith()`, `.endsWith()`, and `.includes()` methods are used to search within a string.
// let str = 'Hello World!';
// console.log(str.indexOf('o')); // OUTPUT : 4 - returns a first index of a character.
// console.log(str.lastIndexOf('World')); // OUTPUT : 6 - returns a last index of a character.
// console.log(str.startsWith('H')); // OUTPUT : true - returns true if a string starts with a specified character or characters.
// console.log(str.endsWith('World!')); // OUTPUT : true - returns true if a string ends with a specified character or characters.
// console.log(str.includes('World')); // OUTPUT : true - returns true if a string contains a specified character or characters.
// ----------------------------------------------------------------------------------------------------------------------
// 2.6 STRING REPLACEMENT:
// `.replace()` and `.replaceAll()` methods are used to replace a specified value with another value in a string.
// let str = 'Hello World!';
// console.log(str.replace('World', 'Javascript')); // OUTPUT : Hello Javascript! - replaces the first occurrence of a specified value.
// console.log(str.replaceAll('o', '0')); // OUTPUT : Hell0 W0rld! - replaces all occurrences of a specified value.
// ----------------------------------------------------------------------------------------------------------------------
// 2.7 STRING TRIMMING:
// `.trim()`, `.trimStart()` and `.trimEnd()` methods are used to remove whitespaces from a string.
// let str = '    Hello World!    ';
// console.log(str.trim()); // OUTPUT : Hello World! - removes whitespaces from both ends of a string.
// console.log(str.trimStart()); // OUTPUT : Hello World!    - removes whitespaces from the start of a string.
// console.log(str.trimEnd()); // OUTPUT :     Hello World! - removes whitespaces from the end of a string.
// ----------------------------------------------------------------------------------------------------------------------
// 2.8 STRING SPLITTNG AND JOINING:
// `.split()` and `.join()` methods are used to split a string into an array of substrings and join an array of substrings into a single string.
// let str = 'Hello World!';
// console.log(str.split(' ')) 
// OUTPUT : ['Hello', 'World!'] - splits a string into an array of substrings based on a specified separator.
// console.log(str.split('')) 
// OUTPUT : ['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd', '!'] - splits a string into an array of substrings based 
// on a specified separator. if we don't specify a separator, it will split each character.
// let arr = ['Hello', 'World!'];
// console.log(arr.join(' ')); // OUTPUT : Hello World! - joins an array of substrings into a single string with a specified separator.
// ----------------------------------------------------------------------------------------------------------------------

