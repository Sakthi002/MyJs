console.log("**************** TASKS DAY 15 ARRAYS ****************");

//  T-001: Create an array of 5 elements using the Array Constructor.

let fiveElems = new Array(1,2,3,4,5);
console.log(fiveElems);

//  T-002: Create an array of 3 empty slots.

let threeEmptySlots = new Array(3);
console.log(threeEmptySlots);

//  T-003: Create an array of 6 elements using the Array literals and access the fourth element in the array using its length property.

let sixElems = ["Tomato","Chilli","Garlic","Onion","Ginger","Oil"];
let fourthElem = sixElems[3];
console.log(fourthElem);
 
//  T-004: Use the for loop on the above array to print elements in the odd index.

for(let i = 0; i <= sixElems.length -1; i++) {
    if(i % 2 !== 0) {
        console.log(`Odd index ${i} : ${sixElems[i]}`);
    }
}

//  T-005: Add one element at the front and the end of an array.

let arrNew = ["Cricket", "Football", "Hockey"];
arrNew.unshift("Chess"); 
console.log(arrNew);// ["Chess", "Cricket", "Football", "Hockey"]
arrNew.push("Carrom");
console.log(arrNew);// ["Chess", "Cricket", "Football", "Hockey","Carrom"]

//  T-006: Remove an element from the front and the end of an array.

let arrNew1 = ["Road", "Bus", "Car", "Cycle", "Scooter", "Shop"];
arrNew1.shift();
console.log(arrNew1); // ["Bus", "Car", "Cycle", "Scooter", "Shop"];
arrNew1.pop();
console.log(arrNew1); // ["Bus", "Car", "Cycle", "Scooter"];

//  T-007: Create an array containing the name of your favourite foods(10 foods). Destructure the 6th food element from the array using destructuring.

let favFoods = ["Idli", "Vada", "Dosa", "Pongal", "Pulav", "Parotta", "Biriyani", "Naan", "Roti", "Grilled Chicken"];

let [,,,,,sixthFood,,,,,] = favFoods;
console.log(sixthFood);

//  T-008: Take out the last 8 food items from the above array using the Array destructuring. Hint: rest parameter.

let [,,...lastEightFoods] = favFoods;
console.log(lastEightFoods);

//  T-009: Clone an Array(Shallow cloning);

let arrNew2 = [1,2,3,4,5];
let cloneArrNew2 = arrNew2.slice();
console.log(cloneArrNew2);

//  T-010: Empty an array using its length property

let arrNew3 = [1,2,3,4];
arrNew3.length = 0;
console.log(arrNew3);

//  T-011: Create an array of 10 elements(number 1 to 10). Resize the array to length 6 once you find the number 5 in that array. Hint: Use for-loop.

let numArr = [1,2,3,4,5,6,7,8,9,10];

for(let i = 0; i <= numArr.length -1; i++) {

    if(numArr[i] === 5) {

        numArr.length = 6;

        break;
    }
}

console.log(numArr);

// T-012: Create an Array of 10 elements. Use the splice() method to empty the array.

let arr10 = [1,2,3,4,5,6,7,8,9,10];
arr10.splice(0,10);
console.log(arr10);


// T-013: Create an Array of 10 elements. You can empty the array in multiple ways: using the length property, using the pop() method, using the shift() method, setting the array with [], or the splice() method. Which among these methods are most efficient and why?

let array10 = [1,2,3,4,5,6,7,8,9,10];
array10.length = 0;
console.log(array10);


// T-014: What happens when you concatenate two empty arrays?

// Creates new empty array.
let emp1 = [];
let emp2 = [];
let conEmp = emp1.concat(emp2);
console.log(conEmp);

// T-015: How can you check if a value is partially matching with any of the elements of an Array?

// We can use some + includes method

let someArr = [1,2,3,4,5,6];

let isMatch = someArr.some((num, i, self) => self.includes(1));

console.log(isMatch);


// T-016: What is the difference between the slice() and splice() methods?

// slice() - method used to copy portion of an array or complete array - returns new array - wont mutate original array
let toSlice = [1,2,3,4];
let slicedArr = toSlice.slice(1);
console.log(slicedArr); // [2,3,4]
console.log(toSlice); // [1,2,3,4]

// splice() - method used to add remove elements from an array - returns removed elements as result - mutates original array
let toSplice = [1,2,3,4];
let splicedArr = toSplice.splice(1,2);
console.log(splicedArr); // [2,3]
console.log(toSplice); // [1,4]

// T-017: Create an Array of alphanumeric strings. Sort the elements in both ascending and descending orders. You must be doing this in an immutable way such that the source array never gets modified.
let alphanumericArr = [
  "abc123",
  "user456",
  "item789",
  "x1y2z3",
  "test007",
  "a1b2c3d4",
  "code2025",
  "room101",
  "key999",
  "id42"
];

// we can use toSorted() for immutablibility sorting

let immutableSortArrAsc = alphanumericArr.toSorted();
let immutableSortArrDesc = alphanumericArr.toSorted(function(a,b) {
    return a === b ? 0 : a > b ? -1 : 1
})
console.log("Ascending",immutableSortArrAsc);
console.log("Descending",immutableSortArrDesc);
console.log("Original",alphanumericArr);


// T-018: Can you give examples of sparse and dense arrays?

// Dense Array - has all its indexes filled. No holes
let dense = [1,2,3];
for(let i = 0; i < dense.length; i++) {
    console.log(i, dense[i]);
}

// Sparse Array - has missing indexes also called holes

let sparse = [];
sparse[0] = 1;
sparse[5] = 6;
console.log(sparse);
for(let i = 0; i < sparse.length; i++) {
    console.log(i, sparse[i]);
}

// T-019: Give a practical usages of the .fill() method
// Fill method used to fill arrays with provided values
let arrFill = ["red", "green", "yellow", "orange"];
arrFill.fill("red", 2, 3);
console.log(arrFill); //['red', 'green', 'red', 'orange']

let matrix = new Array(3).fill([]).map((item) => new Array(3).fill(0));
console.log(matrix);

// T-020: How to convert an array to a string?

// We can use join or toString method
let toStr = [1,2,3,4];
console.log(toStr.join('-'));
console.log(toStr.join(''));
console.log(toStr.join());
console.log(toStr.toString());

// Consider these input arrays for question T-21 to T-48

// employees array: An array of emplyees working in a department.

const employees = [
{ id: 1, name: "Alice", departmentId: 1, salary: 5000 },
{ id: 2, name: "Bob", departmentId: 2, salary: 7000 },
{ id: 3, name: "Charlie", departmentId: 3, salary: 4500 },
{ id: 4, name: "Diana", departmentId: 1, salary: 5500 },
{ id: 5, name: "Edward", departmentId: 2, salary: 8000 },
{ id: 6, name: "Fiona", departmentId: 4, salary: 6000 },
{ id: 7, name: "George", departmentId: 3, salary: 5200 },
{ id: 8, name: "Helen", departmentId: 4, salary: 7200 },
{ id: 9, name: "Ian", departmentId: 2, salary: 4800 },
{ id: 10, name: "Jane", departmentId: 1, salary: 5100 },
];
// departments array: An array of departments where emplyees work.

const departments = [
{ id: 1, name: "HR" },
{ id: 2, name: "Engineering" },
{ id: 3, name: "Marketing" },
{ id: 4, name: "Sales" },
];

// T-021: Can you filter employees who work in the "Engineering" department?

let engDept = departments.find(dept => dept.name === "Engineering")
let engEmps = employees.filter(emp => emp.departmentId === engDept.id);
console.log(engEmps);

// T-022: Create a new array that combines employee names and department names in the format: "Alice (HR)".

let empDepts = employees.map(emp => {

    let {name : empDeptName} = departments.find(dept => dept.id === emp.departmentId);
 
    return {
        ...emp,
        'name_with_dept' : `${emp.name} (${empDeptName})`
    }
})

console.log(empDepts);
console.log(employees);

// T-023: Find the highest salary among employees.

let highSal = employees.map(emp => emp.salary);
console.log(Math.max(...highSal));

// T-024: Check if there is at least one employee in the "Sales" department.

let salesDept = departments.find(dept => dept.name === 'Sales');
console.log(salesDept);
let atleastOneSalePerson = employees.some(emp => emp.departmentId === salesDept.id);
console.log(atleastOneSalePerson);


// T-025: Write a function to filter employees earning more than 6000.

let moreThan6000 = employees.filter(emp => emp.salary > 6000);
console.log(moreThan6000);

// T-026: Create an array of employee names only.

let onlyNames = employees.map(emp => emp.name);
console.log(onlyNames);

// T-027: Calculate the total salary of all employees using reduce

let totalSalary = employees.reduce((acc, curr) => {
    acc = acc + curr.salary;
    return acc;
}, 0)

console.log(totalSalary);

// T-028: Is there any employee earning less than 5000?

let empSalLess5000 = employees.some(emp => emp.salary < 5000);
console.log(empSalLess5000);

// T-029: Find the first employee who earns exactly 5100.

let firstEmpWith5100 = employees.find(emp => emp.salary === 5100);
console.log(firstEmpWith5100);

// T-030: Find the last employee in the "HR" department.

let hrDept = departments.find(dept => dept.name === "HR");
console.log(hrDept);

let lastHREmp = employees.findLast(emp => emp.departmentId === hrDept.id);
console.log(lastHREmp);

// T-031: Find the first employee in the "Marketing" department.

let markDept = departments.find(dept => dept.name === 'Marketing');
console.log(markDept);

let firstMarkEmp = employees.find(emp => emp.departmentId === markDept.id);
console.log(firstMarkEmp);

// T-032: Check if all employees earn more than 4000.

let allEmpsEarnAbove4000 = employees.every(emp => emp.salary > 4000);
console.log(allEmpsEarnAbove4000);

// T-033: Find the first employee in the "Sales" and "HR" department.

let salesDept1 = departments.find(dept => dept.name === 'Sales');
let firstSaleEmp = employees.find(emp => emp.departmentId === salesDept1.id);

let hrDept1 = departments.find(dept => dept.name === "HR");
let firstHREmp = employees.find(emp => emp.departmentId === hrDept1.id);

console.log(firstSaleEmp);
console.log(firstHREmp);


// T-034: Verify if all employees belong to a department listed in the departments array.

let allDeptsId = departments.map(dept => dept.id);

let allAreBelongToDeptList = employees.every(emp => allDeptsId.includes(emp.departmentId));

console.log(allAreBelongToDeptList);

// T-035: Log each employee's name and department name to the console.

employees.forEach(emp => {

    let {name: deptName} = departments.find(dept => dept.id === emp.departmentId);

    console.log(emp.name, deptName);
    
})

// T-036: Extract all employee names into a single array.

let empNames = employees.map(emp => emp.name);
console.log(empNames);

// T-037: Increment each employee's salary by 10%

let incEmpSalaryBy10 = employees.map((emp) => {
    let updatedSalary = emp.salary + ((emp.salary/100) * 10)
    console.log(updatedSalary);
    return {
        ...emp,
        salary : updatedSalary
    }
})

console.log(incEmpSalaryBy10);
console.log(employees);

// T-038: Assume each employee can have multiple skills. Create an array of employee skills and flatten them. Example: [{name: "Alice", skills: ["Excel", "Management"]}, ...].
const employeesWithSkills = [
  { id: 1, name: "Alice", departmentId: 1, salary: 5000, skills: ["Excel", "Management"] },
  { id: 2, name: "Bob", departmentId: 2, salary: 7000, skills: ["JavaScript", "React"] },
  { id: 3, name: "Charlie", departmentId: 3, salary: 4500, skills: ["SEO", "Content Writing"] },
  { id: 4, name: "Diana", departmentId: 1, salary: 5500, skills: ["Recruitment", "Training"] },
  { id: 5, name: "Edward", departmentId: 2, salary: 8000, skills: ["Node.js", "Databases"] },
  { id: 6, name: "Fiona", departmentId: 4, salary: 6000, skills: ["Sales Pitch", "Negotiation"] },
  { id: 7, name: "George", departmentId: 3, salary: 5200, skills: ["Marketing Strategy", "Analytics"] },
  { id: 8, name: "Helen", departmentId: 4, salary: 7200, skills: ["Client Relations", "CRM"] },
  { id: 9, name: "Ian", departmentId: 2, salary: 4800, skills: ["Python", "Django"] },
  { id: 10, name: "Jane", departmentId: 1, salary: 5100, skills: ["Payroll", "HR Policies"] },
];

let allSkills = [];

for(let i = 0; i < employeesWithSkills.length; i++) {
    allSkills.push(employeesWithSkills[i].skills)    
}

console.log(allSkills);

let flattedSkills = allSkills.flat();
console.log(flattedSkills);

let flattedByReduce = allSkills.reduce((acc, curr) => {
    acc = acc.concat(curr);
    return acc;
}, []);

console.log(flattedByReduce);

// T-039: Find the total salary of all employees working in the "Engineering" department.

let enggDept = departments.find(dept => dept.name === "Engineering");
console.log(enggDept);

let totalSalaryEnggDept = employees.filter(emp => emp.departmentId === enggDept.id).reduce((acc, curr) => acc + curr.salary, 0)
console.log(totalSalaryEnggDept);

// T-040: Check if there is any department where all employees earn more than 5000.

const result = departments.some(dept => {
    return employees.filter(emp => emp.departmentId === dept.id).every(emp => emp.salary > 5000)
})

console.log(result);

// T-041: Assume each employee has a projects array (e.g., { id: 1, name: "Alice", projects: ["Project A", "Project B"] }). 
// Find the total number of unique projects being handled across all employees.

const employeesWithProjects = [
  { id: 1, name: "Alice", departmentId: 1, salary: 5000, projects: ["Website Redesign", "Payroll System"] },
  { id: 2, name: "Bob", departmentId: 2, salary: 7000, projects: ["React App", "API Development", "Website Redesign"] },
  { id: 3, name: "Charlie", departmentId: 3, salary: 4500, projects: ["SEO Campaign", "Content Strategy", "Website Redesign"] },
  { id: 4, name: "Diana", departmentId: 1, salary: 5500, projects: ["Employee Onboarding", "Training Module"] },
  { id: 5, name: "Edward", departmentId: 2, salary: 8000, projects: ["Database Optimization", "Node.js Backend", "API Development"] },
  { id: 6, name: "Fiona", departmentId: 4, salary: 6000, projects: ["Sales Pitch Deck", "Client Negotiation"] },
  { id: 7, name: "George", departmentId: 3, salary: 5200, projects: ["Marketing Strategy", "Analytics Dashboard", "Website Redesign"] },
  { id: 8, name: "Helen", departmentId: 4, salary: 7200, projects: ["CRM Implementation", "Client Relations", "Sales Pitch Deck"] },
  { id: 9, name: "Ian", departmentId: 2, salary: 4800, projects: ["Python Automation", "Django App", "API Development"] },
  { id: 10, name: "Jane", departmentId: 1, salary: 5100, projects: ["Payroll Upgrade", "HR Policies Review", "Website Redesign"] },
];

let allProjects = employeesWithProjects.reduce((acc, curr) => {
    acc = acc.concat(curr.projects);
    return acc;
}, [])

let uniqueProjects = allProjects.filter((project, i, self) => self.indexOf(project) === i);
console.log(allProjects);
console.log(uniqueProjects.length);


// T-042: For each employee, find their department name and return an array of employee names with their department names.

let nameWithDeptNames = employees.map((emp) => {
    let dept = departments.find(dept => emp.departmentId === dept.id);
    return `${emp.name} (${dept.name})`
}) 

console.log(nameWithDeptNames);

// T-043: Get a list of names of employees earning more than 6000.

let empSalAbove6000 = employees.filter(emp => emp.salary > 6000).map(emp => emp.name);
console.log(empSalAbove6000);

// T-044: Write a for-of loop to print the names of all employees from the employees array.

for(let employee of employees) {
    console.log(employee.name);
}

// T-045: Using a for-of loop, print the names of employees earning more than 5000.

for(let emp of employees) {

    if(emp.salary > 5000) {

        console.log(emp.name);
    }
}

// T-046: Modify the for-of loop to destructure each employee object and log their name and salary.

for(let {name, salary} of employees) {
    console.log(name, salary);
}

// T-047: Write a for-of loop to match employees with their departments and print the results.

for(let emp of employees) {

    let dept = departments.find(dept => dept.id === emp.departmentId);

    console.log(`${emp.name} works in ${dept.name}`);
    
}

// T-048: Use Array.prototype.entries() with a for-of loop to print the index and name of each employee.

let entriesOfArr =  employees.entries();
console.log(entriesOfArr);

for(let [index, value] of entriesOfArr) {
    console.log(index, value.name)
}

// T-049: Given the array-like object below, access the second element and log it:

const arrayLike = { 0: "First", 1: "Second", length: 2 };

console.log(arrayLike[1]);

// T-050: Write a function that takes a variable number of arguments and converts the arguments object into a real array using Array.from.

function takesManyArgs() {

    let argsArr = Array.from(arguments);

    argsArr.forEach(arg => {
        console.log(arg);
    })
}

takesManyArgs(1,2,3,4)

// T-051: Write a snippet to select all div elements on a webpage (using document.querySelectorAll) and convert the resulting NodeList into an array.

let divNodes = document.querySelectorAll('div');

let arrNodes = Array.from(divNodes);

arrNodes.forEach((item) => {
    console.log(item);
})

// T-052: Merge these two arrays into a single array:

const arr1 = [1, 2];
const arr2 = [3, 4];

let mergedArr = [...arr1, ...arr2];
console.log(mergedArr);

// T-053: Create an array of n duplicate values using Array.from. 
// Input: Create an array with 5 "A" values. Output: ["A", "A", "A", "A", "A"]

const n = 5;
const dupArr = Array.from({length:n}, () => "A");
console.log(dupArr);

// T-054: Use Array.from to convert a string like "Hello" into an array of characters.

console.log(Array.from("Hello"));

// T-055: For the array, ['apple', 'banana', 'apricot', 'mango', 'blueberry'], group words by their first letter using group().
let fruits = ['apple', 'banana', 'apricot', 'mango', 'blueberry'];
let groupByWords = Object.groupBy(fruits, function (fruit) {
    return fruit.charAt(0)
})
console.log(groupByWords);

let groupByWordsByReduce = fruits.reduce((acc, cur) => {
    
    let firstLetter = cur.charAt(0);

    if(!acc[firstLetter]) {
        acc[firstLetter] = [];
    }

    acc[firstLetter].push(cur);

    return acc
},{})

console.log(groupByWordsByReduce);

let numss = [1,2,3,4,5,3,4,5];

let occs = numss.reduce((acc, curr) => {

    acc[curr] = (acc[curr] || 0 ) + 1

    return acc;

}, {});

console.log(occs);

// T-057: From this array [3, 7, 3, 2, 3, 8, 7, 7], find the most repeated number. Hint: Use array method.

let nums1 = [3, 7, 3, 2, 3, 8, 7, 7];

let repeatedNums = nums1.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
}, {})

let maxCount = 0;

for(let key in repeatedNums) {
    if(repeatedNums[key] > maxCount) {
        maxCount = repeatedNums[key]
    }
}

let mostRepeatedCount = [];

for(let i in repeatedNums) {
    if(repeatedNums[i] === maxCount) {
        mostRepeatedCount.push(i)
    }
}

console.log(mostRepeatedCount);

// T-058: Find the median of [5, 2, 9, 1, 3, 6, 8].

// T-059: Convert this array [['a', 1], ['b', 2], ['c', 3]], into { a: 1, b: 2, c: 3 } using array method(s).

// T-060: Flatten and convert all letters to uppercase in one step using flatMap(). Here is input array: [['a', 'b'], ['c', 'd']].

// T-061: Count the occurrences of each fruit in this array: ['apple', 'banana', 'apple', 'mango', 'banana', 'banana']

// T-062: Extract extract [‘b’, ‘c’, ‘d’] using slice() from this array: ['a', 'b', 'c', 'd', 'e']

// T-063: Sort the array [9, 3, 1, 6, 8] in ascending order using toSorted()

// T-064: Reverse [1, 2, 3, 4, 5] using toReversed() and compare it with reverse()

// T-065: Group the follwing array elements based on age(Adult vs Non-Adult):

// const users = [
// { name: 'Alice', age: 55 },
// { name: 'Bob', age: 3 },
// { name: 'Charlie', age: 25 },
// ];
// T-066: Find the longest word in this sentence using Array and Array methods: "40 Days of JavaScript by tapaScript is a powerful initiative".
// T-067: Find common elements between two arrays, [1, 2, 3, 4], [3, 4, 5, 6]
