function guessNumber() {

    console.log('Start Guessing Number from 1 to 10 !!!');

    const randomNumber = Math.floor(Math.random() * 10) + 1;

    let attempt = 0;

    let userGuess = null;

    const MIN_NUMBER = 1;
    const MAX_NUMBER = 10;

    while(randomNumber !== userGuess) {

        userGuess = prompt('Guess Number');
        
        userGuess = parseInt(userGuess);

        if(isNaN(userGuess) || userGuess < MIN_NUMBER || userGuess > MAX_NUMBER) {

            console.log('Invalid Guess. Guess number between 1 to 10');  
            
            continue;
        } 

        attempt++;

        if(userGuess < randomNumber) {

            console.log('Too low!!');

        } else if(userGuess > randomNumber) {

            console.log('Too high!!!');

        } else {
            
            console.log(`You did it in ${attempt} attempts !!`);

            break;
        }
    }

    const playAgainPrompt = window.prompt('Do you want to play again? yes/no');

    const playAgain = playAgainPrompt ? playAgainPrompt.toLowerCase() : 'no';

    if(playAgain === 'yes') {
    
        guessNumber();
    
    } else {
    
        console.log('Thanks for playing');
    }
}

guessNumber();