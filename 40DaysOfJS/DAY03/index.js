console.log("DAY 03");

let a = 12
let b = 5;
console.log('***Arithmatic Operators***');
console.log(a + b); // 17
console.log(a - b); // 7
console.log(a * b); // 60
console.log(a / b); // 2.4
console.log(a ** b); // 248832
console.log(a % b); // 2

let count = 5;
console.log(count++); // 5
console.log(count); // 6
console.log(++count); // 7

let num = 5;
console.log(num--); // 5
console.log(num); // 4
console.log(--num); // 3

console.log('***Assignment Operators***');
let x = 10;
console.log(x);
x += 5; // x = x + 5 (15)
console.log(x);
x -= 3; // x = x - 3 (12)
console.log(x);
x *= 2 // x = x * 2  (24)
console.log(x);
x /= 4; // x = x / 4 (6)
console.log(x);

console.log('***Comparision Operators***');
console.log(5 == 4); // false
console.log("5" == 5); // true
console.log(0 == false); // true
console.log(undefined == null); // true

console.log(10 === "10"); // false
console.log(true === true);
console.log(null === null);
console.log(undefined === undefined);
console.log(undefined === null); // type is different

let obj1 = { name: "Sakthi" };
let obj2 = { name: "Sakthi" };

console.log(obj1 !== obj2);

console.log('***Logical Operators***');
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

console.log(5 && 10); // 10
console.log("Cow" && "Horse"); // Horse
console.log(false && 10); // false
console.log("Value" && ""); // ""

console.log(true || true); // true
console.log(true ||false); // true
console.log(false || true); // true
console.log(false || false); // false

console.log(5 || 10); // 5
console.log("Cow" && "Horse"); // Cow
console.log(false && 10); // 10
console.log("Value" && ""); // "Value"
console.log("" || undefined); // undefined

let res1 = 4 / 2 * 3; // 2 * 3 => 6
console.log(res1);

let res2 = 4 * 2 / 3; // 8 / 3 => 2.6
console.log(res2);















 








