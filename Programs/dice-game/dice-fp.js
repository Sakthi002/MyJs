// const createDiceGame = (diceId, resultDivId) => {
//     const dice = document.getElementById(diceId);
//     const resultDiv = document.getElementById(resultDivId);

//     dice.addEventListener('click', () => rollDice(resultDiv))
// }

// const rollDice = (resultDiv) => {
//     const roll = getRandomRoll();
//     if(checkWin(roll)) {
//         resultDiv.innerText = `You rolled ${roll}. You Win!!!!`;
//     } else {
//         resultDiv.innerText = `You rolled ${roll}. Try again!`;
//     }
// }

// const getRandomRoll = () => Math.floor(Math.random() * 6) + 1;
// const checkWin = (roll) => roll === 6; 

// createDiceGame('rollBtn', 'result')

const createDiceGame = (diceId, resultDivId) => {
    const dice = document.getElementById(diceId);
    const resultDiv = document.getElementById(resultDivId);

    dice.addEventListener('click', () => rollDice(resultDiv))
}

const rollDice = (resultDiv) => {
    const roll = getRandomRoll();
    const message = checkWin(roll) ? `You rolled ${roll}. You Win!!!!` : `You rolled ${roll}. Try again!`;
    displayResult(resultDiv,message);
}

const displayResult = (element, message) => {
    element.innerText = message;
}
 
const getRandomRoll = () => Math.floor(Math.random() * 6) + 1;
const checkWin = (roll) => roll === 6; 

createDiceGame('rollBtn', 'result')