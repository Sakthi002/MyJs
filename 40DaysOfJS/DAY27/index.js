console.log("DAY 27 - EVENT LOOP");

// function main() {

//     console.log("In");

//     setTimeout(() => {
//         console.log("In timeout");
        
//     }, 0)   
// }

// main()

// function f1() {
//     console.log("f1");
// }

// async function f2() {

//     new Promise((resolve) => {

//         console.log('hi');
        
//         resolve("I am a PROMISE"); // calback

//     }).then(res=> {
        
//         console.log(res);
//     });

//     console.log("f2");
// }

// function main() {

//     console.log('main');

//     setTimeout(f1, 0) // f1 is callback
    
//     f2();
// }

// main();

function f1() {
    console.log("F1");
}

function f2() {
    console.log("F2");
}

function f3() {
    console.log("F3");
}

function main() {

    console.log('Main');
    
    setTimeout(f1, 50);
    
    setTimeout(f3, 30);

    new Promise((resolve, reject) => {

        resolve("I am a Promise, Right after f1 and f3! Really?")
    }).then(res => console.log(res));

    new Promise((resolve, reject) => {

        resolve("I am a Promise, after promise")
    }).then(res => console.log(res));

    f2();
}

main();

// Main
// F2
// I am a Promise, Right after f1 and f3! Really?
// I am a Promise, after promise
// F3
// F1