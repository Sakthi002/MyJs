console.log('************* TASKS DAY 11 ****************');
// 1. What will be the output of the following code and why?
function outer() {
    let count = 0;
    return function inner() {
        count++;
        console.log(count);
    };
}
const counter = outer();
counter(); // 1
counter(); // 2

// 2. What will be the output and why?
function testClosure() {
    let x = 10;
    return function () {
        return x * x;
    };
}
console.log(testClosure()()); // 100

// 3. Create a button dynamically and attach a click event handler using a closure. The handler should count and log how many times the button was clicked.

function dynamicElemEvent() {

    let elem = document.createElement('button');
    elem.id = "dynamicBtn";
    elem.innerText = "Dynamic Button";
    document.body.appendChild(elem);
    
    let count = 0;

    elem.addEventListener('click', function() {
        count++;
        console.log('Button clicked', count, 'times');
    })
}

dynamicElemEvent();

// 4. Write a function createMultiplier(multiplier) that returns another function to multiply numbers.

function createMultiplier(multiplier) {

    return function (x) {

        console.log(multiplier * x);     
    }
}

let multiplyBy2 = createMultiplier(2);
multiplyBy2(4);

let multiplyBy4 = createMultiplier(4);
multiplyBy4(4);


// 5. What happens if a closure references an object?
// The object is garbage collected immediately
// The object remains in memory as long as the closure exists
// The object is automatically cloned
// None of the Above.

// Ans : The object remains in memory as long as the closure exists

// 6. Write a function factory of counter to increment, decrement, and reset a counter. Use closure to refer the count value across the functuions.

function createCounter(initValue) {

    let count = initValue;

    return {
        increment: () => {
            count++;
            console.log('Count Incremented', count);
        },
        decrement: () => {
            count--;
            console.log('Count Decremented', count);
        },
        reset: () => {
            count = 0;
            console.log('Count Resetted', count);
        },
        getCount: () => count
    }
}

let counterFac = createCounter(0);
counterFac.increment();
counterFac.increment();
counterFac.decrement();
counterFac.increment();
counterFac.increment();
counterFac.increment();
console.log(counterFac.getCount());
counterFac.reset();
console.log(counterFac.getCount());

