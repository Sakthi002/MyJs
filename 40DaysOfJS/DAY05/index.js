console.log("DAY 05");

for(let i = 1; i <= 5; i++) {
    console.log(i);
}

// SUM OF EVEN NUMBERS FROM 1 to 100

let sum = 0;

for(let i = 1; i <= 100; i++) {

    if(i % 2 === 0) {

        sum += i;
    }
}

console.log(sum);

// PRINT CHARACTERS FROM STRING USING FOR LOOP

let str = "JavaScript";

for(let i = 0; i <= str.length - 1; i++) {
    console.log(str.charAt(i));   
}

// NESTED LOOP

for(let i = 1; i <= 3; i++) {

    for(let j = 1; j <= 3; j++) {

        console.log("Row", i, "Column", j);
        
    }
}

// BREAK

for(let i = 1; i <= 5; i++) {

    if(i === 3) {
        break;
    }

    console.log(i);
    
}

// CONTINUE

for(let i = 1; i <= 5; i++) {

    if(i === 3) {
        continue;
    }

    console.log(i); 
}

// MULTIPLE COUNTERS IN SINGLE FOR LOOP

for(let i = 1, j = 10; i <= 10 && j >= 1; i++, j--) {
    console.log(i,j);
}

// REVERSE NUMBERS FROM 10 to 1

for(let i = 10; i >= 1; i--) {
    console.log(i);
}

// *
// **
// ***
// ****
// *****
let str1 = ''
for(let i = 1;i <= 5; i++) {
    
    str1 = str1 + "*" + " "
    
    console.log(str1);
}

// WHILE

let num1 = 1;

while(num1 <= 5) {
    console.log(num1);
    num1++;
}

// DO...WHILE

let num2 = 1;

do {
    console.log(num2);
    num2++;
} while(num2 <= 5)

console.log("***********************************TASKS 05***************************************");
    