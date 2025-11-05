// // console.log("DAY 33 - Map, Set, WeakMap, WeakSet");

// // const myMap = new Map();
// // console.log(myMap);

// // const map = new Map([
// //     ['name', "Sakthi"],
// //     ['age', 30],
// //     [1, 'One'],
// //     [true, 'boolean true']
// // ])

// // console.log(map);

// // // add values;
// // map.set('org', 'JS');
// // map.set('role', 'Dev');

// // console.log(map);

// // // get values
// // let tru = map.get(true);
// // console.log(tru);

// // console.log(`Age is ${map.get('age')}`);
// // console.log(`One is ${map.get(1)}`);

// // let obj = {
// //     560 : 'Num 560'
// // }

// // map.set(560, 'Map 560');

// // console.log(obj['560'] === obj[560]);

// // console.log(map.get(560) === map.get('560'));

// // const funMap= new Map();
// // funMap.set(180, "My house Number");
// // funMap.set(true, "I Love JS");

// // const obj1 = { name: "Sakthi"};

// // funMap.set(obj, 'Info');

// // console.log(funMap);

// // console.log(funMap.size);

// // console.log(funMap.keys());

// // let keys = funMap.keys();
// // let values = funMap.values();
// // let entries = funMap.entries();

// // keys.forEach(element => {
// //     console.log(element);
// // });

// // values.forEach(element => {
// //     console.log(element);
// // });

// // entries.forEach(([key, value], idex) => {
// //     console.log(key, value);
// // });

// // console.log(funMap.has(180));

// // funMap.delete(180);
// // console.log(funMap);

// // funMap.clear();
// // console.log(funMap);

// // const ageMap = new Map([
// //     ['Alan', 30],
// //     ['Bob', 40],
// //     ['Tom', 50],
// //     ['Ram', 60],
// // ]);

// // console.log(ageMap);

// // ageMap.forEach((value, key) => {
// //     console.log(key, value);
// // })

// // let plainObj = {
// //     name:"Sakthi",
// //     age: 30
// // }

// // for(let key in plainObj) {
// //     console.log(key, plainObj[key]);
// // }

// // let address = {
// //     "Sakthi" : "DPI",
// //     "James" : "London",
// //     "Austin" : "New York"
// // }

// // console.log(Object.entries(address));

// // // object to map
// // const addressMap = new Map(Object.entries(address));
// // console.log(addressMap);


// // // map to object
// // const addr = Object.fromEntries(addressMap);
// // console.log(addr);

// // // map to array

// // const tMap = new Map();
// // tMap.set("tea", 100);
// // tMap.set("milk", 200);
// // tMap.set("coffee", 300);

// // console.log(tMap);

// // let arr = Array.from(tMap);
// // console.log(arr);

// // let arr1 = [...tMap];
// // console.log(arr1);

// // // SET
// // const set = new Set();
// // console.log(set);

// // const fruitSet = new Set(['Melon', 'Apple', 'Orange', 'Grapes']);
// // console.log(fruitSet);

// // console.log(fruitSet.size);

// // fruitSet.add('Guava');
// // fruitSet.add('Guava');
// // console.log(fruitSet);

// // console.log(fruitSet.has("Guava"));

// // fruitSet.delete('Apple');
// // console.log(fruitSet);

// // // console.log(fruitSet[0]);

// // // fruitSet.clear();
// // // console.log(fruitSet);

// // console.log(fruitSet.keys());
// // console.log(fruitSet.values());
// // console.log(fruitSet.entries());

// // fruitSet.forEach(ent => {
// //     console.log(ent);  
// // })

// // let houseNos = new Set([10, 20, 30]);

// // console.log(houseNos);

// // let houseArr = [...houseNos];
// // console.log(houseArr);

// // console.log(Array.from(houseNos));

// // let mult = [1,2,3,4,2,3,4,5,6];
// // let uniq = [...new Set(mult)];
// // console.log(uniq);








// let arr = new Array(1,2);
// console.log(arr);


// let obj = {
//     name: "Sakthi",
//     age :30
// }

// arr.push(obj);

// obj.name = "Velu"

// arr.push(obj);

// console.log(obj);

// console.log(arr);

// let set = new Set();

// let user = {
//     name: "Sakthi",
//     age: 30
// }

// set.add(user);

// console.log(set);

// user = {};

// set.add(user);

// console.log(set);

// let set1 = new Set([1,2,3]);
// let set2 = new Set([3,4,5]);

// // union

// let union = set1.union(set2);
// console.log(union);

// let union1 = new Set([...set1, ...set2]);
// console.log(union1);


// // intersection

// let inter = set1.intersection(set2);
// console.log(inter);

// let inter1 = new Set([...set1].filter(item => set2.has(item)));
// console.log(inter1);


// // difference

// let diff = set1.difference(set2);
// console.log(diff);

// let diff1 = new Set([...set1].filter(item => !set2.has(item)));
// console.log(diff1);

// let numbers = new Set([2,4,6,8,10,12,14,16,18]);
// let the4Table = new Set([4,8,12,16]);

// console.log(numbers.isSupersetOf(the4Table));

// // fallback
// function isSuperSet() {

//     for(let num of the4Table) {
    
//         if(!numbers.has(num)) {
//             return false;
//         }
//     }

//      return true;
// }

// console.log(isSuperSet());

// let allUsers = [];
// let user = { name: "Sakthi" };
// allUsers.push(user);
// console.log(allUsers);
// user = { name: "kjh" };
// allUsers.push(user);
// console.log(allUsers);

let user = { name: "Sakthi" };
const uMap = new Map();
uMap.set(user, true);
console.log(uMap.has(user));
user = null;
console.log(uMap.has(user));


let user1 = { name: "Sakthi" };
const u1Map = new WeakMap();
u1Map.set(user1, true);
console.log(u1Map.has(user1));
user1 = null;
console.log(u1Map.has(user1));

const weakMap = new WeakMap();
const obj1 = { name: 'Alice' };
const obj2 = { name: 'Bob' };
weakMap.set(obj1, true);
weakMap.set(obj2, true);
console.log(weakMap.get(obj1));
weakMap.delete(obj2);
console.log(weakMap.has(obj2));

let user3 = { name: "Velu" };
const weakSet = new WeakSet();
weakSet.add(user3);
console.log(weakSet);
user3 = null;
console.log(weakSet);

const set = new Set();

let p1 = { name: "Sakthi" };

set.add(p1);

p1 = { name : "Velu" };

set.add(p1);

p1 = null;

set.add(p1);


console.log(set);


 



























