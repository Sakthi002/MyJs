console.log('DAY 08');

console.log('In Global Execution Context');

var a = 10;

function testMe() {

    console.log('Inside testMe Execution Context');

    var b = 25;

    var user = {
        name: "Sakthi"
    }

    function testAgain() {
        console.log('In testAgain Execution Context');
        console.log('End testAgain Execution Context');
    }

    testAgain();

    console.log('End testMe Execution Context');
}

testMe();

console.log('End of Global Execution Context');

// DAY 08
// In Global Execution Context
// Inside testMe Execution Context
// In testAgain Execution Context
// End testAgain Execution Context
// End testMe Execution Context
// End of Global Execution Context
