// Currying is the phinomina of transfroming a function which takes multiple arguments into sequence of functions 
// untill all the arguments provided
// useful for creating functions that can be partially applied
// partial application means - fixing some arguments and get the rest from function

function multiply(a, b, c) {
    console.log(a * b * c)
}
multiply(1,2,4);
let multiplyBy2 = multiply.bind(null, 4,5);
multiplyBy2(2);
let multiplyBy3 = multiply.bind(null, 4,5);
multiplyBy2(3);

function cmultiply(a) {

    return function (b) {

        return function(c) {

            console.log(a * b * c);
        }
    }
}
cmultiply(2)(3)(4)

/**
 * Problem 1: Infinite Currying
 * Description: Sum function that can be called infinitely
 */
function rmultiply(a) {

    return function(b) {

        if(b === undefined) return a;

        return rmultiply(a * b)
    }
}
console.log(rmultiply(1)(3)(0)(21)())

/**
 * Problem 2: Curry with Fixed Arguments
 * Description: Convert normal function to curried version
 */

function multiple(a, b, c) {
    console.log(a * b * c);
}

function curry(fn) {

    return function curried(...args) {

        if(args.length >= fn.length) {
            return fn.apply(this, args);
        }

        return function(...more) {
            return curried(...args, ...more);
        }
    }
}

let m = curry(multiple);
console.log(m(1,2)(2,4))

function expensiveMultiple(a, b, c) {
    console.log('Calcu');
    return a * b * c;
}

function memoizedCurry(fn) {

    const cache = {};

    return function curried(...args) {

        if(args.length >= fn.length) {

            const key = JSON.stringify(args);

            if(cache[key]) {
                
                console.log("From cache");
                
                return cache[key]
            }

            let result = fn.apply(this, args);
            
            cache[key] = result;
            
            return result
        }

        return function (...more) {
            return curried(...args, ...more);
        }
    }
}

let m1 = memoizedCurry(expensiveMultiple);
console.log(m1(1,2,3));
console.log(m1(1,2,3));

