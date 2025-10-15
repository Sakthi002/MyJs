// 1. What will be the output of this code snippet and why?
    let day = "Monday";

    switch (day) {
       case "monday":
           console.log("It's the start of the week.");
           break;
       default:
           console.log("It's a normal day.");
    }

    // ANSWER = It's a normal day.


// 2. Build an ATM Cash Withdrawal System
    // Rajan goes to the Axis bank ATM. He enters an amount to withdraw. The ATM only allows multiples of 100. 
    // Print “Withdrawal successful” if valid, otherwise print “Invalid amount”.

    let withdrawAmount = 1200;

    if(withdrawAmount % 100 === 0) {
        console.log("Withdrawal successfull");
    } else {
        console.log("Invalid amount");
    }


// 3. Build a Calculator with switch-case
    // Write a simple calculator that takes an operator (+, -, , /, %) as input, and performs the operation on two numbers. Print the output on the console.

    let operator = "%";

    switch(operator) {

        case "+":
            console.log("Addition::", 10 + 20);
            break;
        case "-":
            console.log("Subtraction::", 100 - 50);
            break;
        case "*":
            console.log("Multiplication::", 10 * 20);
            break;
        case "/":
            console.log("Division::", 1000 / 10);
            break;
        case "%":
            console.log("Reminder::", 12 % 10);
            break;
        default:
            console.log("Nothing performed");
            break;
    }

// 4. Pay for your movie ticket
    // Imagine, the INOX charges ticket prices based on age:

    // Children (<18 years): $3
    // Adults (18 - 60 years): $10
    // Seniors (60+ years): $8
    // Write a program that prints the ticket price based on the person’s age.

    let age = 17;

    if(age < 18) {
        console.log("Ticket price is :: $3 Dollars.");
    } else if(age >= 18 && age <= 60) {
        console.log("Ticket price is :: $10 Dollars.");
    } else {
        console.log("Ticket price is :: $8 Dollars.");
    }

// 5. Horoscope Sign Checker
    // Write a program that prints the zodiac sign(Aries, Taurus, Gemini, etc.) based on a person’s birth month. Make it month bases, not date based. Like March and April borns are Aries, Aplil and May born are Taurus, and so on. Do not use if-else.

    let month = "July";

    switch(month) {

        case "March":
        case "April":
            console.log("Aries");
            break;

        case "May":
        case "June":
            console.log("Taurus");
            break;

        default:
            console.log("Nothing");
    }

// 6. Which Triangle?
    // A triangle has 3 sides. A Triangle type is determined by its sides:

    // All sides equal is called, Equilateral Triangle.
    // Two sides equal is called, Isosceles Triangle.
    // All sides different is called, Scalene Triangle.
    // Take the sides of a triangle as input and write a program to determine the triangle type. Change the inputs everytime manually to see if the output changes correctly.

    let sideA = 10;
    let sideB = 20;
    let sideC = 10;

    if((sideA === sideB) && (sideB === sideC) && (sideA === sideC)) {
        console.log("Equilateral Triangle");
    } else if((sideA === sideB) || (sideB === sideC) || (sideA === sideC)) {
        console.log("Isosceles Triangle");
    } else {
        console.log("Scalene Triangle");
    }