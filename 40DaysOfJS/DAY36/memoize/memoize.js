function memoize(func) {

    let cache = {};

    return function(...args) {

        let key = JSON.stringify(args);

        if(cache[key]) {

            console.log("Cache hit");

            return cache[key];
    
        } else {

            console.log("Cache miss");

            let result = func.apply(this, args);

            cache[key] = result;

            return result;           
        }
    }
}

function slowSquare(n) {

    return n * n;
}

let memoizeSquare = memoize(slowSquare);

// console.log(memoizeSquare(4));
// console.log(memoizeSquare(4));
// console.log(memoizeSquare(5));
// console.log(memoizeSquare(6));
// console.log(memoizeSquare(5));

function fib(n) {

    if(n <= 2) return 1;

    return fib(n - 1) + fib(n - 2)
}

const memoFib = memoize(function (n) {

    if(n <= 2) return 1;

    return memoFib(n - 1) + memoFib(n - 2)
})

function runNormal() {

    const n = parseInt(document.getElementById("num").value);
    
    const output = document.getElementById("output");
    
    const start = Date.now();
    
    console.log(start);
    
    const result = fib(n);
    
    const end = Date.now();
    
    console.log(end);
    
    output.innerHTML = `🔁 Normal Fib(${n}) = <strong>${result}</strong><br>⏱️ Time: ${(
        end - start
    )}ms`;
}

function runMemo() {

    const n = parseInt(document.getElementById("num").value);
    
    const output = document.getElementById("output");
    
    const start = Date.now();
    
    console.log(start);
    
    const result = memoFib(n);

    console.log(result);
    
    const end = Date.now();
    
    console.log(end);
    
    output.innerHTML = `🔁 memoize Fib(${n}) = <strong>${result}</strong><br>⏱️ Time: ${(
        end - start
    )}ms`;
}

