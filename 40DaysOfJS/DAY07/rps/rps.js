/**
 * The Rock 🪨, Paper 🧻, or Scissors ✂️ Game
 * This game will be played between the computer and human. Once Human will select Rock, Paper, or Scissors and in the next turn the computer will select Rock, Paper, or Scissors.
 * The Winner will be selected based on these rules:
 * - Rock can Break Scissors => Rock Wins
 * - Paper can wrap Rock => paper Wins
 * - Scissors can cut Paper => Scissors Wins
 * Ask the input from user and randomly select a computer selection to continue the game.
 */

function rockPaperScissor() {

    console.log('Getting started with RPS Game!!!');

    const userPrompt = window.prompt('Enter Rock or Paper or Scissor');

    const userChoice = userPrompt ? userPrompt.toLowerCase() : '';

    if(!userChoice) return;

    let computerChoice;
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    switch(randomNumber) {

        case 1:
            computerChoice = 'rock';
            break;
        case 2:
            computerChoice = 'paper';
            break;
        case 3:
            computerChoice = 'scissor';
            break;
        default:
            computerChoice = "";
    }

    if(
        (userChoice === 'rock' && computerChoice === 'scissor') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissor' && computerChoice === 'paper') 
    ) {
        console.log('User wins!!!! YAY!!!!'); 
    } else if(userChoice === computerChoice) {
        console.log("Game tie");
    } else if(
        (userChoice === 'scissor' && computerChoice === 'rock') ||
        (userChoice === 'rock' && computerChoice === 'paper') ||
        (userChoice === 'paper' && computerChoice === 'scissor') 
    ) {
        console.log('Computer wins!!!!'); 
    } else {
        console.log('Invalid selection');  
    }

    const playAgainPrompt = window.prompt('Do you want to play again? yes/no');
    const playAgain = playAgainPrompt ? playAgainPrompt : 'no';

    if(playAgain === 'yes') {
        rockPaperScissor();
    } else {
        console.log('Thanks for playing');
    }
}

rockPaperScissor();