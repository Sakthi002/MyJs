console.log("DAY 15 - ARRAYS");

let mixed = [1, "Sakthi", true, null, undefined];
console.log(mixed);

let salad = new Array("Tomato", "Cucumber", "Onion", "Salt", "Pepper");
console.log(salad);

let arr = new Array(4);
console.log(arr);

// Getting elements
console.log(salad[0]); // Tomato
console.log(salad[2]); // Onion

for(let i = 0; i <= salad.length - 1; i++) {
    console.log(`Element at the index ${i} is ${salad[i]}`);
}

// Adding elements

let ret = salad.push('Lemon');
console.log(ret);
console.log(salad);

let unRet = salad.unshift('Cabbage');
console.log(unRet);
console.log(salad);

// Removing an elements
// pop - end
console.log(salad);
let popRet = salad.pop();
console.log(popRet);
console.log(salad);

// shift - start
console.log(salad);
let shiftRet = salad.shift();
console.log(shiftRet);
console.log(salad);

// COPY THE ARRAY
console.log(salad);
let copiedArray = salad.slice();
console.log(copiedArray);

console.log(salad === copiedArray);

console.log(Array.isArray([1,2,3]));
console.log(Array.isArray([]));
console.log(Array.isArray("String"));
console.log(Array.isArray(true));
console.log(Array.isArray({ name: "Sakthi" }));
console.log(Array.isArray(salad));

// ARRAY DESTRUCTURING
let nestedArr = ["Carrot", "Beetroot", "Onion", "Tomato", ["Garlic", "Ginger"]];
let [carrot, ,onion] = nestedArr;

console.log(carrot);
console.log(onion);

let [,,,,[,ginger]] = nestedArr;
console.log(ginger);

// REST
const [carr1,...rest] = ["Carrot", "Beetroot", "Onion", "Tomato", ["Garlic", "Ginger"]];
console.log(carr1);
console.log(rest);

// SPREAD
let vegs = ["Carrot","Tomato"];
let nonVegs = ["Chicken", "Mutton"];
let combined = [...vegs, ...nonVegs];
console.log(combined);

// SWAP VARIABLES

let a = 10;
let b = 20;

console.log(`Before swap a is ${a}, b is ${b}`);

[b, a] = [a, b];

console.log(`After swap a is ${a}, b is ${b}`);


let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,9,10];


console.log(arr1.length);

arr1.length = 3;
console.log(arr1);

arr1.length = 10;
console.log(arr1);

// let newArr = new Array(-1); // rangeError
// arr1.length = 2 ** 32; // rangeError

// Array methods
// concat

let arr3 = [1,2,3];
let arr4 = [4,5,6];
let arr5 = [7,8,9]

let mergedArr = arr3.concat(arr4, arr5);

console.log(mergedArr);
console.log(arr3);
console.log(arr4);

// join

let emotions = ["Sad", "Smile", "Happy", "Love"];

let joinedEmotions = emotions.join("");
console.log(joinedEmotions);

console.log([].join(''));

// fill

let colors = ["red", "blue", "yellow", 'orange', 'green'];
colors.fill("pink", 1,3);
console.log(colors);

// includes

let names = ["tom", "jerry", "dog"];

console.log(names.includes("Tom")); // true
console.log(names.includes("piggy")); // false

// indexOf and lastIndexOf

let names1 = ["tom", "bob", "ram", "tom","jhon"];

console.log(names1.indexOf("bob")); // 1
console.log(names1.indexOf("jerry")); // -1

console.log(names1.indexOf("tom")); // 0
console.log(names1.lastIndexOf("tom")); // 3

// reverse
let names2 = ["tom","ram","bob"];
console.log(names2.reverse());

// sort

let names3 = ["tom", "alex", "babu"];
console.log(names3.sort());

let artists = [
    "Leonardo da vinci",
    "Jhon white",
    "Charles",
    "Barent",
    "Anna Atkins"
]

console.log(artists.sort(function(a,b) {
    return a === b ? 0 : a > b ? 1 : -1
}));

let nums = [1,20,30,1000,52,46];
console.log(nums.sort()); // [1, 1000, 20, 30, 46, 52]

console.log(nums.sort((a,b) => a-b));

// splice

let names4 = ["tom", "alex", "babu"];
names4.splice(2,0)
console.log(names4);

// at

let junkFoods = ["Fried rice", "Tandoor Chicken", "Grilled Chicken", "Pizza", "Burger"];

console.log(junkFoods.at(4)); // Burger
console.log(junkFoods.at(-4)); // Tandoor Chicken

// flat

let nest = [1,2,[3,[4,[5,6]]]];
let flatArr = nest.flat(Infinity)
console.log(flatArr);

// Grouping data

let employees = [
    { name : "Bob", dept: "Engineering", salary: 5000 },
    { name : "Alex", dept: "HR", salary: 3000 },
    { name : "Ravi", dept: "Engineering", salary: 7000 },
    { name : "Jhon", dept: "Engineering", salary: 1000 },
    { name : "TOm", dept: "Sales", salary: 6000 },
]


let groupedData = Object.groupBy(employees, function({ dept}) {
    return dept
});

console.log(groupedData);

let groupedBySalary = Object.groupBy(employees, (employee) => {
    return employee.salary > 5000 ? "More than 5K" : "Less than 5K"
});

console.log(groupedBySalary);

// Immutabilty array methods
// toReversed()

let months = ["Jan","Mar","Dec","Apr"];

let reversedMonths = months.toReversed();

console.log(months, 'original');
console.log(reversedMonths, 'origreversedMonthsinal');

// toSorted();

let months2 = ["Jan","Mar","Dec","Apr"];

let sortedMonths = months.toSorted();

console.log(months2, 'months2 original');
console.log(sortedMonths, 'sortedMonths');

// toSpliced()

let months3 = ["Jan","Mar","Dec","Apr"];
let splicedMonths = months3.toSpliced(1,0,"Feb");

console.log(months3, "months3 original");
console.log(splicedMonths, "splicedMonths");

// with()

let nums2 = [1,2,3,4,5,6];
let withWith = nums2.with(3,10);
console.log(nums2, 'nums2');
console.log(withWith,'withWith');

// Array-like

let elems = document.getElementsByTagName('li');
console.log(elems.length);
console.log(elems[0]);

// error - forEach not a function on this
// elems.forEach((item) => {
//     console.log(item);
// })

// using Array.from
console.log(Array.from(elems)); // Array

// Using spread
let elemsS = [...elems];
console.log(elemsS); // Array


function withArgs() {
    console.log(arguments);
    let arrArgs = [...arguments];
    console.log(arrArgs);
}

withArgs(1,20)

// Array.fromAsync

let arrayLikePromise = Array.fromAsync({
    0: Promise.resolve("tapaScript"),
    1: Promise.resolve("Google"),
    2: Promise.resolve("Apple"),
    length: 3
}).then(res=> console.log(res));

let a1 = new Array(1,2,3);
console.log(a1);
let b1 = [4,5];
console.log(b1);
let c1 = Array.of(1);
console.log(c1);

// filter

let customers = [
    {
        id : 001,
        f_name: "Abby",
        l_name: "Thomas",
        gender: "M",
        married: true,
        age: 32,
        expense: 500,
        purchased: ["Shampoo", "Toys", "Book"]
    },
    {
        id : 002,
        f_name: "Jerry",
        l_name: "Tom",
        gender: "M",
        married: true,
        age: 64,
        expense: 100,
        purchased: ["Stick", "Blade"]
    },
    {
        id : 003,
        f_name: "Dianna",
        l_name: "Cherry",
        gender: "F",
        married: true,
        age: 22,
        expense: 1500,
        purchased: ["Lipstick", "Nail Polish", "Bag", "Book"]
    },
    {
        id : 004,
        f_name: "Dev",
        l_name: "Curian",
        gender: "M",
        married: true,
        age: 82,
        expense: 90,
        purchased: ["Book"]
    },
    {
        id : 005,
        f_name: "Maria",
        l_name: "Gomes",
        gender: "F",
        married: false,
        age: 7,
        expense: 300,
        purchased: ["Toys"]
    },

    {
        id : 006,
        f_name: "Marry",
        l_name: "Gomes",
        gender: "F",
        married: false,
        age: 6,
        expense: 200,
        purchased: ["Chocolates"]
    }
]

let seniors = customers.filter((customer) => {
    return customer.age > 60;
})

console.log(seniors);

// map

let customerFullnameArr = customers.map(function(customer) {

    let title;

    if(customer.gender === "M") {
        title = "Mr."
    } else if(customer.gender === "F" && customer.married) {
        title = "Mrs."
    } else {
        title = "Miss."
    }

    customer['full_name'] = `${title} ${customer.f_name} ${customer.l_name}`;

    return customer;
})

console.log(customerFullnameArr);

// reduce

let count = 0 ;

let total = customers.reduce((acc, cur) => {

    if(cur.purchased.includes("Book")) {

        acc = acc + cur.age;

        count = count + 1;
    }

    return acc;
}, 0)

console.log("Customer Average age to purchase book is : ", Math.floor(total/count));

// reduceRight

let right = [1,2,3,4,5].reduceRight((acc, cur) => {
    return acc - cur
})

console.log(right);

// some

let res = customers.some((customer) => {

    return customer.age < 10;
})

console.log("Customer age < 10 : " , res);

// every

let isAllMarried = customers.every((customer) => {
    return customer.married;
})

console.log(isAllMarried);

// find

let youngCustomer = customers.find((customer) => {
    return customer.age < 10;
})

console.log("Youngest first customer", youngCustomer);

// findIndex

let youngCustomerIndex = customers.findIndex((customer) => {
    return customer.age < 10;
})

console.log("Youngest first customer index", youngCustomerIndex);

// findLast

let lastYoungCustomer = customers.findLast((customer) => {
    return customer.age < 10;
})

console.log("Youngest last customer", lastYoungCustomer);

// findIndex

let lastYoungCustomerIndex = customers.findLastIndex((customer) => {
    return customer.age < 10;
})

console.log("Youngest last customer index", lastYoungCustomerIndex);

// CHAINING

// find all married customers expenses

// filter - to get married peoples
// map - to get expeses only array
// reduce - to sum

let totalExpenses = customers.filter((cust) => cust.married).map((cus) => cus.expense).reduce((acc, curr) => acc + curr, 0);
console.log(totalExpenses);

// forEach

let arr11 = [1,2,3,4,5];

let sum = 0;
arr11.forEach((item) => {
    sum = sum + item
})

console.log(sum);

// entries

let arrItr = arr11.entries();

for(let [idx, elem] of arrItr) {
    console.log(idx, elem);
}

// values

let arrItr2 = arr11.values();

for(let val of arrItr2) {
    console.log(val);
    
}

// flatmap

let arr12 = [1,2,3,4];

let mapped1 = arr12.map((item) => item * 2);
console.log(mapped1);

let fmapped1 = arr12.flatMap((item) => item * 2);
console.log(fmapped1);

let mapped2 = arr12.map((item) => [item * 2]);
console.log(mapped2);

let fmapped2 = arr12.flatMap((item) => [item * 2]);
console.log(fmapped2);


let mapped3 = arr12.map((item) => [[item * 2]]);
console.log(mapped3);

let fmapped3 = arr12.flatMap((item) => [[item * 2]]);
console.log(fmapped3);
 
