// 1. Generate a Pyramid Pattern using Nested Loop as it is shown below:
// *
// * *
// * * *
// * * * *
// * * * * *

// let pyramid = "";

// for(let i = 1; i <= 5; i++) {
//     pyramid = pyramid + "*" + " ";
//     console.log(pyramid);
// }

for(let i = 1; i <= 5; i++) {

    let row = "";

    for(let j = 1; j <= i; j++) {

        row = row + "* ";
    }

    console.log(row);
}


// 2. Craete Multiplication Table (Using for loop)
// Write a program to print the multiplication table of a given number up to 10. For Example: If N = 3, output should be:

// 3 x 1 = 3
// 3 x 2 = 6
// ...
// 3 x 10 = 30

let N = 3;
for(let i = 1; i <= 10; i++) {
    console.log(`${N} * ${i} = ${i * N}`);
}


// 3. Find the summation of all odd numbers between 1 to 500 and print them on the console log.

let oddSum = 0;

for(let i = 1; i <= 500; i++) {

    if(i % 2 !== 0) {

        oddSum += i;
    }
}

console.log(oddSum);


// 4. Skipping Multiples of 3
// Write a program to print numbers from 1 to 20, but skip multiples of 3.

for(let i = 1; i <= 20; i++) {

    if(i % 3 === 0) {
        continue;
    }

    console.log(i);   
}

// 5. Reverse Digits of a Number (Using while loop)
// Write a program to reverse the digits of a given number using a while loop.
// Example:
// Input: 6789
// Output: 9876

let num = 6789;
let output = "";
let i = String(num).length - 1

while(i >= 0) {
    output += String(num).charAt(i)
    i--;
}
console.log(Number(output));

// 6. Write your understanding on the difefrences between for, while, and do-while loop. Create their flow charts.
// for
    // - Useful when we know the iteration count
    // - Loop executes until condition is true
// while
    // - Useful when we dont know the exact iteration count
    // - Loop executes until condition is true
// do__while
    // - Same as while loop - but executes block of code before checking the condition