console.log("DAY 14");

// console.log(x); // referenceerror

let obj = null;

// console.log(obj.name); // typeerror
 
// console.log("Hi; // syntaxerror

// let arr = new Array(-1) // rangeerror

try {

    console.log("Code execution starts here");

    abc;

    console.log("Code execution ends here");
    
} catch (err) {

    console.error('Error occured!');

    console.log(err.name);
    console.log(err.message);
    console.log(err.stack);
}

function divideNumbers(a,b) {

    try {

        if(b === 0) {

            throw new Error("Divide by zero not allowed");
        }

        const result = a/b;

        console.log("The result is : ", result);

    } catch(error) {

        console.error("Error Occured ", error);
        
    }
}

divideNumbers(2,0);
divideNumbers(2,3);

let person = {
    name: "tapas",
    address : {
        city: 300
    }
}

function getPostalCode(obj) {

    try {

        console.log(obj.address.country.postalCode);
        
    } catch (err) {

        console.error("Error Occured, ", err);
        
    }
}

getPostalCode(person);

function validateAge(age) {

    try {

        if(isNaN(age)) {

            throw new Error(`Invalid input. Age must be a number. Your input is ${age}`)
        }

        console.log(`Your age is ${age}`);

    } catch (error) {

        console.error("Error occured, ", error.message)
    }
}

validateAge(10)

function divide(a,b) {

    if(b === 0) {

        throw new Error("Division by zero not allowed");
    }

    return a/b;
}

function calcute() {

    try {

        let result = divide(19,0);

        console.log("Result is ", result);

    } catch (error) {

        console.error("Error occured, ",error.message);

        throw error;
    }
}

try {

    calcute();

} catch(err) {

    console.error(err)
}

function processInfo(info) {

    try {
        
        console.log('Processing the information...');
        
        if(!info) throw new Error("No onformation avaliable to process!!!");

        console.log("Information processed");

    } catch (error) {
        
        console.error("Error occured, ", error.message);
        
    } finally {

        console.log("Closing the connection");
    }
}

processInfo("");

// CUSTOM ERROR

function ValidationError(message) {
    this.name = "ValidatonError";
    this.message = message;
}


function checkCitizen(age) {

    if( age < 60 ) {
        throw new ValidationError("You are not a senior citizen");
    }

    return "You are a senior citizen";

}

try {

    let result = checkCitizen(85);

    console.log(result);
    
} catch (err) {

    console.error("Error Occured ::: ", err.name, ":", err.message);
    
}
