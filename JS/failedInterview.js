// ============================================================================================
// const promise = new Promise((resolve, reject) => {
//   console.log(1);
//   setTimeout(() => {
//     console.log("timerStart");
//     resolve("success");
//     console.log("timerEnd");
//   }, 0);
//   console.log(2);
// });

// promise.then((res) => {
//   console.log(res);
// });

// console.log(4);

// OUTPUT
  // 1, 2, 4, timerStart, timerEnd, success 
// ============================================================================================

// <script setup>
// import { ref, computed } from 'vue';

// const firstName = ref("Sakthi");
// const lastName = ref("Velu");

// Use computed instead of watch
// const fullName = computed(() => firstName.value + " " + lastName.value);

// console.log(fullName.value); // Access .value to get the current value
// </script>

// <template>
//  <div>
//    {{ fullName }}
// </div>
// </template>
// ✅ Key points:

// watch → for running code when something changes (side effects).

// computed → for creating reactive values derived from other reactive sources.

// ============================================================================================

// deepClone

// const original={a:1,b:{c:2},d:[3,4]}
// const cloneTest=deepClone(original)

// console.log(cloneTest)//{a:1,b:{c:2},d:[3,4]}
// console.log(cloneTest!==original)//true

// console.log(cloneTest.b!==original.b)//true

// console.log(cloneTest.d!==original.d)//true

function deepClone(original) {
  // Step 1: Handle primitives
  if (original === null || typeof original !== 'object') {
    return original; // just return numbers, strings, booleans, null, undefined
  }

  // Step 2: Handle arrays
  if (Array.isArray(original)) {
    return original.map(item => deepClone(item)); // recursively clone each element
  }

  // Step 3: Handle objects
  const clonedObj = {};
  for (const key in original) {
    if (original.hasOwnProperty(key)) {
      clonedObj[key] = deepClone(original[key]); // recursively clone each property
    }
  }
  return clonedObj;
}

// ============================================================================================
// WHAT IS WRONG IN THIS CODE?
// ===================================

let appConfig = null;

async function fetchConfig() {

    return new Promise(resolve => {
        
        setTimeout(() => {

            console.log('timerStart');

            resolve({ apiKey: '1234' })

            console.log('timerEnd');

        }, 100)
    })
}

function initApplication() {

    console.log("1. Initializing application...");

    fetchConfig().then(config => {
        appConfig = config;
        console.log("2. Config loaded and set:", appConfig.apiKey);
    })

    console.log("3. Using config in main logic:");
}

initApplication();

// EXPLANATION
// OUTPUT WILL BE
  // 1. Initializing application...
  // 3. Using config in main logic:
  // timerStart
  // timerEnd
  // 2. Config loaded and set:

  // Wrong is in this - third console will get executed before it fetches config
  // JavaScript does not pause for Promises unless you explicitly tell it to (using await or return in a chain).
  // Solution : await - await, it pauses that function only, not the whole program
    // JavaScript waits for the Promise to resolve before moving to the next line.

  //   async function initApplication() {

  //     console.log("1. Initializing application...");

  //     await fetchConfig().then(config => {
  //         appConfig = config;
  //         console.log("2. Config loaded and set:", appConfig.apiKey);
  //     })

  //     console.log("3. Using config in main logic:");
  // }
// ============================================================================================
// RETURN IN FOR LOOP
// =======================
  // let numbers = [1,2,3,4,5];
  // for(let i = 0; i < numbers.length; i++) {
  //     if(numbers[i] === 3) {
  //         return
  //     }
  //     console.log(numbers[i]);
  // }

  // THIS IS INVALID - throws error - in global level we can use return
  function nums() {
    let numbers = [1,2,3,4,5];
    for(let i = 0; i < numbers.length; i++) {
        if(numbers[i] === 3) {
            return
        }
        console.log(numbers[i]);
    }
  }
  // THIS IS VALID - 1, 2 => it will stops execution
// ============================================================================================
// BREAK AND CONTINUE AND RETIURN IN forEach
// ==============================
  numbers = [1,2,3,4,5]
  // numbers.forEach(num => {
  //       if(num === 3) {
  //           break;
  //       }
  //       console.log(num)
  //   })

  // break and continue wont work in forEach 

  numbers.forEach(num => {
    if(num === 3) {
        return;
    }
    console.log(num)
  })

  // return act like a continue in forEach // 1,2,4,5
// =============================================================================================
// SUM ARRAY VALUES WITHOUT ANY ARRAY METHODS OR LOOPS
// =====================================================
// SOLUTION USING RECURSION
function sum(arr, i = 0) {

    if(i === arr.length) return 0

    return arr[i] + sum(arr, i + 1);
}

console.log(sum(numbers))
// ==============================================================================================
// // form
// fname
// lnmame
// mail
// address | city | country
// persist

// need to learn - persist state when reloading without using global state

// ============================================================================================

// HTML CSS - must before next interview

// ============================================================================================

//COOKIES

// ============================================================================================