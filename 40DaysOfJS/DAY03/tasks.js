// 1. Odd or Even?
//  Take a number and find if the number is an odd or even number.
//  Print the number and result in the console.

let num = 12;
let res1 = num % 2 === 0 ? 'Even Number' : 'Odd Number';
console.log(`${num} is ${res1}`);

// 2. Do you have a Driving License?
// Let's check if you are eligible to get a driving license. The eligibility to get a driving licence is 18 years.

//  Manage age as a variable.
//  Check if the age is elligible for a driving license and print it on the console accordingly.
let age = 30;
let res2 = age >= 18 ? 'Eligible' : 'Not Eligible';
console.log(`${age} is ${res2}`);


// 3. Calculate CTC with a Bonus
// Let's calculate how much you earn from your office.

//  You get 12,300 rupees as your monthly salary.
//  You get a 20% bonus on your annual salary.
//  How much money do you make per annum as a CTC?

let salary = 12300;
let bonus = 20;

let prevSalary = 12 * salary;
let bonusSalary = (prevSalary/100) * bonus;
let totalCTC = prevSalary + bonusSalary;
console.log(totalCTC);


// 4. Write a program for the Traffic Light Simulation.
// Red Light... Green Light... Let's Play!

//  Create a color variable.
//  Based on the color variable's value print in the console if a traveller needs to STOP or GO. The Red color is for STOP and the Green color is for GO.

let color = "red";

let res3 = color === 'red' ? 'Red Light...' : color === 'green' ? 'Green Light...' : ''

console.log(res3);


// 5. Create an Electricity Bill Calculator
// Let's calculate how much you pay for electricity bills per month and annually.

//  Create a units variable. Based on this value you will calculate the total electricity bill for a months.
//  If each day you consume the units and each unit cost 150 rupees, how much will you be charged per month?
//  If there is a 20% discount on the annual payment, how much will you be charged for an annual payment?
let units;
let cost = 150;
let perMonth = 100;
console.log(`Electricity charge per month :: total units: ${perMonth} and 1 unit : 150 :: ${perMonth * cost}`);
let discount = 20;
let annualUnits = 1200;
let totalAnnulaAmount = annualUnits * cost;
let discountAmount = totalAnnulaAmount / 100 * 20;
console.log(`Electricity charge per annum after discount :: ${totalAnnulaAmount - discountAmount}`);



// 6. Leap Year Checker
// Is 2025 a Leap Year?

//  Take year as input.
//  Use the arithmetic operator and ternary operator to print if a year is a leap year or not.

let year = 2000;
console.log(`${year} is  ${(year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0) ? 'Leap year' : 'Not a leap year'}`);


// 7. Max of Three Numbers
// Find the max number from the lot.

//  Take three numbers and assign them to variables p, q, and r.
//  Now find the maximum of these three numbers using the comparison operators.

let p = 50;
let q = 40;
let r = 30;

let result = (p > q) && (p > r) ? p : (q > p) && (q > r) ? q : r;
console.log(result);
 


