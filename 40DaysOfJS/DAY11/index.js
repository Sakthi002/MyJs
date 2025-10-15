console.log('DAY 11 -  Closure');


function outer() {

    let x = 10;

    return function inner() { // Closed with x value

        console.log(x);
    }
}

const func = outer();

func();

function counterOp() {

    let count = 0;

    return function () { // Closed with count = 0; value

        count ++;

        console.log(count);
    }
}

let retVal = counterOp();
retVal(); // 1
retVal(); // 2

function createBankAccount(initBalance) {

    let balance = initBalance;

    return {

        deposit: (amount) => {

            balance = balance + amount;

            console.log("Deposited", amount,' Current balance is : ', balance);
            
        },

        withdraw: (amount) => {

            if(amount > balance) {
                console.warn("Insufficient balnce");
                return
            }

            balance = balance - amount;

            console.log("Withdrawn", amount,' Current balance is : ', balance);
        },

        checkBalance: () => console.log('Current balance is : ', balance)
    }
}

const myAccount = createBankAccount(100);
console.log(myAccount.deposit(100));
console.log(myAccount.withdraw(10));
console.log(myAccount.withdraw(30));
console.log(myAccount.checkBalance());

function bigDataArrange() {

    let bigData = new Array(100000).fill('*');

    return function () {

        console.log(bigData[4])
    }
    
}

let bigRet = bigDataArrange()
console.log(bigRet()); // bigRet always keeps an reference to bigData - eventhough if not required - it causes memory leaks

function timer() {
    let secs = 0
    return function() {
        secs++
        console.log(secs);
    }
}

let timerInstance = timer();
timerInstance();
timerInstance();
timerInstance();

function setupButton() {

    let clickCounts = 0

    document.getElementById('myBtn').addEventListener('click', function() {
        clickCounts++;
        console.log(clickCounts);
    })
}

setupButton()

