console.log("DAY 10");

var name = "Sakthivel";

function printName () {
    console.log('In Function', name);
}

printName();

{
    console.log('In block', name);
}

console.log('Outside', name);

function funcScope() {
    let funcVar = "I am defined inside function";
    console.log(funcVar);
}

funcScope();

// console.log(funcVar); // throws error

{
    let blockLet = "block let"
    const blockConst = "block const"
    var blockVar = "block var"

    console.log(blockLet); // accessible
    console.log(blockConst); // accessible
    console.log(blockVar); // accessible
}

console.log(blockVar); // accessible
// console.log(blockLet); // not accessible
// console.log(blockConst); // not accessible

let globalVar = "I am global variable";

function outer() {

    let outerVar = "I am outer variable";

    function inner() {
        
        let innerVar = "I am inner variable";

        console.log(globalVar);
        console.log(outerVar);
        console.log(innerVar);
    }

    inner();
}

outer();

// console.log(outerVar); // not accessible

var count = 10;

function outer1() {
    var count = 20;
    function inner1() {
        var count = 30;
        console.log(count); // 30
    }
    inner1();
    console.log(count); // 20
}

outer1();
console.log(count); // 10

let msg = "Global Msg";

function inn() {

    let msg = "Inner Msg";

    console.log(msg);
}

inn();

console.log(msg);

