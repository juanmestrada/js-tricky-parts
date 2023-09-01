function guessingGame() {
    const randomNum = Math.floor(Math.random() * 100);

    let count = 0,
        gameOver = false;

    return function guess(num) {
        // game is already over
        if(gameOver) return "The game is over, you already won!";

        count++;

        // guess is too low
        if (num < randomNum) return `${num} is too low!`;
        // guess is too high
        if (num > randomNum) return `${num} is too high!`;

        // guess is correct
        gameOver = true;

        return `You win! You found ${num} in ${count} ${count > 1 ? "guesses" : "guess"}.`;
    }
}

module.exports = { guessingGame };
