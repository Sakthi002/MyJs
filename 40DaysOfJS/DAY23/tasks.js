console.log("*********** TASKS - DAY 23 - PROMISES - **************");
// 1. Create Your First Promise
// Create a Promise that resolves with the string "Hello, Promises!" after 1 second.
// Log the result using .then().

let promise1 = new Promise(function(resolve, reject) {

    setTimeout(() => {
        
        resolve("Hello, Promises!");
                
    }, 1000);
});

promise1.then((result) => {
    console.log(result); 
});


// 2. Reject a Promise
// Create a Promise that immediately rejects with the message "Something went wrong!".
// Handle the error using .catch().

let promise2 = new Promise((resolve, reject) => {
    reject("Something went wrong!")
});

promise2.catch(err => {
    console.error(`Error occured: ${err}`)
})


// 3. Simulate Coin Toss
// Return a Promise that randomly resolves to "Heads" or "Tails" after 1 second.

function coinPromise () {

    return new Promise((resolve, reject) => {

        setTimeout(()=>{

            let random = Math.floor(Math.random() * 2);
            
            let toss = random === 1 ? 'Heads' : "Tails";

            resolve(toss)
        }, 1000)
    })
}

coinPromise().then(result => {
    console.log(result);
})


// 4. Promise with Condition
// Create a function checkAge(age) that returns a Promise.
// Resolve if age >= 18, reject otherwise.

function checkAge(age) {

    return new Promise((resolve, reject) => {

        if(age >= 18) {

            resolve("Eligible for voting");

        } else {
            
            reject("Not Eligible for voting");
        }
    })
}

checkAge(18).then(result => {

    console.log(result);

}).catch(error => {

    console.error(error);
})


// 5. Chain Promises Sequentially
// Create three Promises that log:
// "Step 1 done"
// "Step 2 done"
// "Step 3 done"
// Chain them using .then().

let promise3 = new Promise((resolve, reject) => {
    resolve();
});

promise3
.then(() => {
    console.log("Step 1 done");
})
.then(() => {
    console.log("Step 2 done");
})
.then(() => {
    console.log("Step 3 done");
})

new Promise(resolve => {
    setTimeout(() => {
        resolve();
    }, 1000)
}).then(() => {
    console.log("STEP ONE");
    return new Promise((resolve) => setTimeout(resolve, 1000))
}).then(() => {
    console.log("STEP TWO");
    return new Promise((resolve) => setTimeout(resolve, 1000))
}).then(() => {
    console.log("STEP THREE");
})


// 6. Value Transformation in Chain
// Create a Promise that resolves with 5.
// Chain .then() handlers to double it, then square it.
// Final output should be 100.

new Promise((resolve) => {
    resolve(5);
})
.then(value => {
    value = value * 2
    return value;
})
.then(value => {
    value = value * value;
    console.log(value);
})


// 7. Chain with Random Rejection
// First .then() resolves to "Start".
// Second .then() randomly throws an error or returns "Continue".
// Handle rejection gracefully.

let promise4 = new Promise((resolve, reject) => {
    resolve("Start");
})

promise4
.then(res => {
    console.log(res);
})
.then(res => {
    
    let random = Math.floor(Math.random() * 2);
    
    if(random) {
        return "Continue";
    } else {
        throw new Error("Random Error")
    }
})
.then(res => {
    console.log(res);
})
.catch(err => {
    console.error(err);
})


// 8. Multiple then() calls on same Promise
// Create a single resolved Promise.
// Attach two different .then() handlers to it.
// Explain that both run independently.

let promise5 = new Promise((resolve, reject) => {
    resolve(100);
});

promise5.then(value => {
    value = value + 100;
    console.log(value);    
})

promise5.then(value => {
    console.log(value);    
})


// 9. Return New Promises in .then()
// Chain multiple .then() where each returns a new Promise with a delay and logs a step like:
// “First”
// “Second”
// “Third”

new Promise((resolve, reject) => {
    setTimeout(resolve, 1000)
}).then(()=>{
    console.log("First");
    return new Promise((resolve) => setTimeout(resolve, 1000));
}).then(()=>{
    console.log("Second");
    return new Promise((resolve) => setTimeout(resolve, 1000));
}).then(()=>{
    console.log("Third");
})

// 10. Implement fakeDBQuery()
// Create a function that simulates a DB query with a random delay and returns data (like a user object).
// Chain multiple fake queries.

function fakeDBQuery() {

    return new Promise((resolve, reject) => {

        let random = Math.floor(Math.random() * 3) + 1;

        setTimeout(() => {

            let user = { id: 1, name: "User"};

            resolve(user);

        }, random * 1000)
    })
}

fakeDBQuery().then(result => {
    console.log(result);
    return fakeDBQuery()
}).then(result => {
    console.log(result);
    return fakeDBQuery()
}).then(result => {
    console.log(result);
})