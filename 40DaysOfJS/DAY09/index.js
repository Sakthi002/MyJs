console.log("DAY 09");

// var - hoisted - initialized with iundefined
console.log('Title is',title); // undefined
var title;
title = "JS";
console.log('Title is',title); // JS

// let - hoisted but not initialized
// console.log(age); // Reference Error
let age;
age = 20;
console.log(age);

// let - hoisted but not initialized
// console.log(role); // Reference Error
const role= "Dev";
console.log(role);

{
    // // TDZ starts here
    //
    // console.log(count);
    //
    //
    //
    let count = 10; // TDZ ends here
    //
    //
    //
}

chase(); // Tom chasing jerry

function chase() {

    console.log('Tom chasing jerry');
    
    caught(); // Jerry caught
}

function caught() {

    console.log('Jerry caught');
    
}

func(); // throws error / func is not a function
var func = function () {
    console.log('expresion');
}


