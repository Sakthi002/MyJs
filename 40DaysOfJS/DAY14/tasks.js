console.log("******************** TASKS DAY 14 ******************");

// 1. What will be the output of the following code?
try {
    let r = p + 50;
    console.log(r);
} catch (error) {
    console.log("An error occurred:", error.name);
}
// ReferenceError
// SyntaxError
// TypeError
// No error, it prints 10

// ANS : RefferenceError

// 2. Write a function processPayment(amount) that checks if the amount is positive and not exceeding balance. If any condition fails, throw appropriate errors
function processPayment(amount) {

    try {

        let balance = 1000;

        if(!amount || isNaN(amount) || amount < 0 || amount > balance) {

            throw new Error("Invalid amount. Ampunt should be positive and not exceeding the limit.")
        }

        console.log("Payment processed");
        
    } catch(error) {

        console.error("Error occured, ", error);
        
    }
}
processPayment(1000);

// 3. Implement a custom error handling system for an e-commerce website that categorizes errors as
// UserError
// PaymentError
// ServerError
// EmailError

function UserError(message) {
    this.name = "UserError";
    this.message = message;
    this.stack = (new Error()).stack
}

function PaymentError(message) {
    this.name = "PaymentError";
    this.message = message;
    this.stack = (new Error()).stack
}

function ServerError(message) {
    this.name = "ServerError";
    this.message = message;
    this.stack = (new Error()).stack
}

function EmailError(message) {
    this.name = "EmailError";
    this.message = message;
    this.stack = (new Error()).stack
}


// 4. Simulate an API call function fetchData(url). If the URL does not start with "https", throw an "Invalid URL" error. Handle it using try...catch

function fetchData(url) {

    try {

        if(!url.startsWith('https')) {

            throw new Error("Invalid URL")
            
        }

        console.log("Data fetched");
        

    } catch(error) {

        console.error("Error occured: ", error)
    }
}

fetchData("https://api.com")

// 5. Implement a custom error type ValidationsError using constructor functions to handle form validation errors
// Example:
// const userInput = { username: "", age: -2 };
// validateUser(userInput);
// // Output:
// // ValidationsError: Username cannot be empty
// // ValidationsError: Age must be a positive number

const ValidationsError = function(message) {
    this.name = "ValidationsError";
    this.message = message;
    this.stack = (new Error()).stack;
}

function validateUser(inputValue) {

    try {

        if(!inputValue.username) throw new ValidationsError("Username cannot be empty");

        if(inputValue.age < 0) throw new ValidationsError("Age must be a positive number");

        console.log("User valiated");
        
    } catch (error) {

        console.error(`${error.name}: ${error.message}`)
    }
}

const userInput = { username: "user", age: 2 };
validateUser(userInput);


// 6. Write a function readFile(filePath) that simulates reading a file. If the file does not exist (simulate with a condition), throw a "File not found" error. Handle the error with try...catch. Make sure you have code to handle releasing the IO resources
// Please note, you do not have to implement the actual IO operation here. Just use the console.log to simulate them.

function readFile(filePath) {

    try {
        
        console.log("Opening a file");
        
        if(filePath !=="data.txt") {
            throw new Error("File not found")
        }

        console.log("Reading file contents");
        
        console.log("File readed");
        
    } catch (error) {
        
        console.error("Error reading file:", error);
        
    } finally {

        console.log("Releasing file resources");
    }

}

readFile("datsa.txt")

// 7. Write a function parseJson(str) that takes a JSON string and tries to parse it using JSON.parse(). If parsing fails, catch the error and return "Invalid JSON"

function parseJson(str) {

    try {

        let result = JSON.parse(str);

        console.log(result);
    
    } catch(error) {

        console.error("Invalid JSON", error);
        
    } 
}

parseJson('"name""sakthi"')

// 8. What is the purpose of throw in JavaScript?
// It catches an error
// It stops the execution of a program
// It creates a new error manually
// It prints an error message

// Answer: It creates a new error manually


// 9. What does the finally block do in a try...catch statement?
// Runs only if an error occurs
// Runs only if no error occurs
// Runs regardless of whether an error occurs or not
// Stops the execution of the script

// Answer: Runs regardless of whether an error occurs or not

// 10. Create a table exaplaining the usages of try, catch, throw, rethrow, error object

//==============================================================================================================================
// Keyword / Object |  Purpose / Usage                                 |   Example                                             |
//==============================================================================================================================
// try	            | Wraps code that might throw an error so          | try { riskyCode(); }                                  |
//                  | it can be handled safely.	                       |                                                       |         
//------------------------------------------------------------------------------------------------------------------------------
// catch	        | Handles the error thrown inside a try block.     | catch(error) { console.error(error.message); }        |
//                  | Provides an error object with details.	       |                                                       |
//------------------------------------------------------------------------------------------------------------------------------
// finally	        | Executes the code regardless of try or catch	    | finally { cleaning ... };              |
//------------------------------------------------------------------------------------------------------------------------------
// throw	        | Manually creates/throws a new error.	           | throw new Error("Something went wrong");              |
//------------------------------------------------------------------------------------------------------------------------------
// rethrow	        | Throws an error again inside a catch block       | catch(er) { console.error(err.message); throw err; }  |
//                  | to propagate it further.	                                                                               |
//------------------------------------------------------------------------------------------------------------------------------
// Error object	    | Provides information about the error, including name, message, and stack.                                |
//------------------------------------------------------------------------------------------------------------------------------