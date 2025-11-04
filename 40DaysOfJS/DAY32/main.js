console.log("MAIN FILE");

import * as combine from './combined.js'

console.log(combine.calc.sum(2,3));
console.log(combine.calc.sub(10,5));

combine.sayMyName()


async function loadModule() {
    const {sayHi, sayHola} = await import('./greetings.js');

    sayHi();
    sayHola();
}

// loadModule();

const promise = Promise.all([import('./greetings.js')]);

promise.then(res => {
    res[0].sayHi()
})

