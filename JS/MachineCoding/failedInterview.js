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
