// HELPER FUNCTIONS
// ============================================================================================================================

// 1. PARTIAL FUNCTION
// Fixed some arguments - returns a function to get remaining arguments
function partial(fn, ...fixedArgs) {

    return function(...remainingArgs) {

        return fn(...fixedArgs, remainingArgs)
    }
}

// let resp = partial(mulitply, 2);
// console.log(resp(3,4));

// 2. CURRYING
// Transforming a function which takes multiple arguments into sequence of functions
// For Simple Infinite Currying
function recursiveCurry(a) {

    return function (b) {

        if(b === undefined) return a;

        return recursiveCurry(a + b)
    }
} 
// console.log(recursiveCurry(1)(2)(3)(4)());

// WITH ARGUMENTS
function curry(func) {

    return function curried(...args) {

        if(args.length === func.length) {

            return func.apply(null, args)
        }

        return function (...more) {

            return curried(...args, ...more)
        }
    }
}
// let m = curry(multiple);
// console.log(m(1,2)(2,4))

// 3. COMPOSE
// Chaining multiple functions to form a new function - output of a function becomes input to next function
// Right to left

function compose(...functions) {

    return function (value) {

        return functions.reduceRight((acc, func) => {

            acc = func(acc);

            return acc;
        }, value)
    }
}

// 4. PIPE
// Same as compose - difference is - it is left to right

function pipe(...functions) {

    return function(value) {

        return functions.reduce((acc, func) => {

            acc = func(acc);

            return acc;
        }, value)
    }
}