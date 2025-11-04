// # Tasks

// ## 1. Split a Utility Library

// Create a small utility library (e.g., math functions like add, subtract, multiply, divide) in separate module files and import them into a main index.js file to perform operations.

// utils.js
// function add(a, b) {
//     return a + b;
// }

// function subtract(a, b) {
//     return a - b;
// }

// function multiply(a, b) {
//     return a * b;
// }

// function divide(a, b) {
//     return a / b;
// }

// export { add, subtract, multiply, divide };

// index.js
// import { add, subtract, multiply, divide } from './utils.js'

// console.log(add(2,3));
// console.log(subtract(10,3));
// console.log(multiply(2,3));
// console.log(divide(2,3));

// ## 2. Create a Feature-Based Module Structure

// Create a small blog app where:

// - post.js handles posts
// - user.js handles user info
// - main.js brings it together via import

// blog.html
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <script src="main.js" type="module"></script>
// </head>
// <body>
//     <h1>Blog App</h1>
// </body>
// </html>

// main.js
// import { getPosts, getUserPosts } from "./posts.js";
// import userData from './user.js';

// console.log(getPosts());

// console.log(getUserPosts(userData.id));

//posts.js
// let posts = [
//     {id:1, title: "Post 1", userId : 1},
//     {id:2, title: "Post 2", userId : 2},
//     {id:2, title: "Post 3", userId : 3}
// ];

// function getPosts() {
//     return posts;
// }

// function getUserPosts(userId) {
//     return posts.filter(post => post.userId === userId);
// }

// export { getPosts, getUserPosts };

//user.js
// const user = { id: 1, name: "User 1"};

// export default user;


// ## 3. Use Named vs Default Exports

// Create modules with both named and default exports, and demonstrate:

// - How to import them correctly
// - How to rename named exports during import

// default.js
// export default function sayHi() {
//     console.log("Ii from default export");
// }

// named.js
// function introduce() {
//     console.log("I am named introduction");
// }

// function description() {
//     console.log('I am from named file');
// }

// export { introduce, description };

// main.js
// import { introduce as intro, description } from './named.js';
// import sayHi from './default.js';

// intro();
// description();
// sayHi();

// ## 4. Mock an API Module

// Create api.js that exports functions like fetchUsers, createUser, etc.

// - Simulate network delays using setTimeout
// - Use these in a frontend to display mock data

// ## 5. Quiz App Modularized

// Modularize a quiz app:

// - questions.js: array of questions
// - quizLogic.js: handles quiz flow
// - ui.js: handles DOM updates
// - main.js: runs everything