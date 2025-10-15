class DiceGame {

    constructor(diceId, resultDivId) {
        this.dice = document.getElementById(diceId);
        this.resultDiv = document.getElementById(resultDivId);
        this.dice.addEventListener('click', () => this.rollDice())
    }

    getResult() {

        return Math.floor(Math.random() * 6) + 1;
    }

    checkWin(value) {

        return value === 6;
    }

    rollDice() {

        let result = this.getResult();

        if(this.checkWin(result)) {
            this.resultDiv.innerText = `You rolled ${result}. You Win!!!!`;
        } else {
            this.resultDiv.innerText = `You rolled ${result}, Try again!!!`
        }
    }
}

new DiceGame('rollBtn','result')