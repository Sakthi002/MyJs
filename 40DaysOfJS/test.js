console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

let pro = Promise.resolve('Promise');

console.log("End");

pro.then(res => console.log(res));
