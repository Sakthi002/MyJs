console.log("DAY 23 - PROMISES");

const promise1 = new Promise(function (resolve, reject) {
    resolve("I am done!")
});

let loading = false;
const promise2 = new Promise((resolve, reject) => {
    loading = true;
    reject("Something is not correct!!");
});

promise2
    .then(
        (response)=>{
            console.log(response);
            
        },
        (error) => {
           console.error(error) 
        }
    )
    .catch((error) => {
        console.error(error) 
    })
    .finally(() => {
        loading = false;
    })

// Promise Chain

// returning promise
let getUser = new Promise(function(resolve, reject) {

    let user = {
        id: 1,
        name: "Jhon",
        email: "jdoe@gmail.com",
        department: ['db', 'dev']
    }

    resolve(user);
})

getUser.then((result) => {
    console.log(result);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(result.name)
        })
    })
}).then(res => {
    console.log(res);
}).catch(err => {
    console.error(err);
})

// returning a value
getUser.then(res => {
    return res.email;
}).then(email => {
    console.log(email);
}).catch(err => {
    console.log(err);
})

// returning an error
getUser.then((res) => {
    if(!res.department.includes('hr')) {
        throw new Error("Something went wrong")
    }
}).catch((err) => {
    console.error(err);
})

// returning a promise from catch block
getUser.then(res=>{
    throw new Error("Not valid");
}).catch(err=>{
    console.error(err);
    return "hi"
}).then(res=>{
    console.log(res);
    
})

// rethrow error from catch block

let processData = new Promise((resolve, reject) => {
    let success = false;
    if(success){
        resolve("I am resolved.")
    } else{
        reject("I am rejected.")
    }
})

processData.then((result) => {
    console.log(result);
}).catch(error => {
    console.error(error);
    throw new Error("Rethrowing error!!!");
}).then((result) => {
    console.log(result);
}).catch(err=>{
    console.error(err);
})

// finally passes

let finallyPromise = new Promise((resolve, reject) => {
    resolve("Finally I am resolved")
});

finallyPromise.finally(res => {
    console.log(res,"Finally executing");

}).then(res=>{
    console.log(res);
})

// multiple .then() in same promise

let numPromise = new Promise((resolve, reject)=> {
    resolve(10)
});

numPromise.then(value => {
    value++;
    return value;
})

numPromise.then(value => {
    value = value + 10;
    return value;
})

numPromise.then(value => {
    value = value + 20;
    console.log(value);
})

numPromise.then(value => {
    value++;
    return value;
}).then(value => {
    value = value + 10;
    return value;
}).then(value => {
    value = value + 20;
    console.log(value);
})

// Handling multiple promises

let pro1 = Promise.resolve(3);
let pro2 = 4;
let pro3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("foo")
    }, 1000);
})

console.log(pro1, 'pro1');
console.log(pro2, 'pro2');
console.log(pro3, 'pro3');

Promise.all([pro1, pro2, pro3]).then(result => {
    console.log(result,'Promise.all');
}).catch(err => {
    console.error(err,"Promise.all");
})

let pro4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "Fulfiled")
})

let pro5 = new Promise((resolve, reject) => {
    setTimeout(reject, 500, "Error")
})

let pro6 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1100, 'Resolved')
})

Promise.any([pro4, pro5, pro6]).then(result => {
    console.log(result, 'Promise.any');
}).catch(err => {
    console.error(err, "Promise.any");
})

Promise.race([pro4, pro5, pro6]).then(result => {
    console.log(result, 'Promise.race');
}).catch(err => {
    console.error(err, "Promise.race");
})

Promise.allSettled([pro4, pro5, pro6]).then(result => {
    console.log(result, 'Promise.allSettled');
}).catch(err => {
    console.error(err, "Promise.allSettled");
})

