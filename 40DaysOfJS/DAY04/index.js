console.log("Day 04");

let catchingBus = false;

if(catchingBus) {
    console.log('I will be reach home on time.');
} else {
    console.log("I will be delay");
}

let age = 8;

if(age >= 18) {
    console.log("You are eligible to vote");
} else {
    console.log("You are NOT eligible to vote");
}

let score = 74;

if(score >= 90) {

    console.log("Grade A");

} else if(score >= 80) {

    console.log("Grade B");

} else if(score >= 70) {

    console.log("Grade C");

} else {

    console.log("Failed");
}

let position = 2;

switch(position) {
    case 1: 
    case 2: 
    case 3: 
    case 4: 
        console.log("Position 4");
        break;
    default:
        console.log('Default Position');
        break;
}
