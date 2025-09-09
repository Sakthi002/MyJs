const partial = (f,...fixedArgs) => (...args) => f(...fixedArgs, ...args);
const compose = (...fns) => fns.reduceRight((a, b) => (...args) => a(b(...args)));

const displayResult = (element, message) => {
    element.innerText = message;
}
const getRandomRoll = () => Math.floor(Math.random() * 6) + 1;
const checkWin = (roll) => roll === 6; 

const createMessage = (roll) =>{
    console.log(roll)
    return  checkWin(roll) ? `You rolled ${roll}. You Win!!!!` : `You rolled ${roll}. Try again!`;
}
const createDiceGame = (diceId, resultDivId) => {
    
    const resultDiv = document.getElementById(resultDivId);
    const showResult = partial(displayResult, resultDiv);
    const playGame = compose(getRandomRoll,createMessage, showResult);
    
    document.getElementById(diceId).addEventListener('click', playGame)
}

createDiceGame('rollBtn', 'result')