// array.concat - does not modifeis the original array

//===========================================================================================================================
// FIBINACCI
function fibonacci(n) {
  if(n === 1) return 0;
  if(n === 2) return 1;
  return fibonacci(n-1) + fibonacci(n-2)
}
//===========================================================================================================================
// BINARY CONVERSION
function findBinary(num) {
  return num.toString(2);
}
//===========================================================================================================================
// FACTORIAL
function findFactorial(num) {
  if(num === 0 || num === 1) {
    return 1
  }
  return num * findFactorial(num - 1);
}
//===========================================================================================================================
// UNIQUE
function unique() {
    let a = [10, 20, 20, 20, 30, 30, 40, 50];
    let res = a.filter((num, i, self) => self.indexOf(num) === i)
    console.log(res);
}
//===========================================================================================================================
// ANAGRAM
function checkAnagram(str1, str2) {
    if(str1.length != str2.length) {
        return false;
    }
    let rev1 = str1.split("").sort().join("");
    let rev2 = str2.split("").sort().join("");
    return rev1 === rev2
}
console.log(checkAnagram('silent', 'listen'));
//===========================================================================================================================
// UNIQ OBJECT
const a = [
    { a: '1', b: '2' },
    { c: '2', d: '4' },
    { c: '2', d: '4' },
    { a: '1', b: '2' }
];

function uniqObj() {
    let uniq = [];
    return a.filter(o => {
        let s = JSON.stringify(o);
        if (!uniq.includes(s)) {
            uniq.push(s);
            return true;
        }
        return false;
    });
}
console.log(uniqObj());
//===========================================================================================================================
// CONSTRUCTOR FUNCTION
function Counter () {
        
    var count = 0;

    this.increment = function () {
        count++;
        console.log(count)
    }

    this.decrement = function () {
        count--;
        console.log(count)
    }
}

var counter1 = new Counter();
counter1.increment(); // 1
counter1.increment(); // 2
counter1.decrement(); // 1
//===========================================================================================================================
// ASYNC SUSPENDS EXECUTION
const prom1 = new Promise((resolve, reject) => {
    setTimeout(()=> {
        resolve("Resolved");
    },300)
})
function checkPromise() {
    console.log('Above promise');
    prom1.then(res => {
        console.log(res);
    })
    console.log(res);   
    console.log("Below Promise"); 
}
checkPromise();
// Above promise
// Below Promise
// Resolved

async function checkPromise1() {
    console.log('Above promise');
    const res = await prom1;
    console.log(res);   
    console.log("Below Promise"); 
}
checkPromise1();
// Above promise
// Resolved
// Below Promise

//=========================================================================================================================
// PROMISE API"S
const promise1 = new Promise((resolve, reject) => {
    setTimeout(()=> {
         resolve("Resolved 1");
    },300)
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(()=> {
        reject("Failed 2");
    },100)
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(()=> {
        resolve("Resolved 3");
    },300)
})

Promise.all([promise1, promise2]).then(res => {
    console.log(res, 'all'); 
}).catch(err => {
    console.log(err, 'all');
})
// Failed 2 all - No results if any one fails

Promise.allSettled(([promise1, promise2])).then(res=>{
    console.log(res, 'allSettled');
}).catch(err => {
    console.log(err, 'allSettled');
})
// Returns all promise results
//  [
//     {
//         "status": "fulfilled",
//         "value": "Resolved 1"
//     },
//     {
//         "status": "rejected",
//         "reason": "Failed 2"
//     }
// ]

Promise.race([promise1, promise2, promise3]).then(res => {
    console.log(res, 'race');
}).catch(err=>{
    console.log(err, 'race');
})
// Failed 2 race - First successful/failed promise

Promise.any([promise1, promise2, promise3]).then(res => {
    console.log(res, 'any');
}).catch(err=>{
    console.log(err, 'any');
})
// Resolved 1 any - First successful promise

// MEMOIZATION
function memoAddTo100() {
  let cache = {};
  return function (num) {
      if(cache[num]) {
      console.log('number present in cache');
      return cache[num];
      }
      cache[num] = 100 + num;
      return cache[num]
  }
}

let memoFunc = memoAddTo100()

console.log(memoFunc(100))
console.log(memoFunc(200))
console.log(memoFunc(100)) // cached result
