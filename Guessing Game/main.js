const numberToGuess = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    let userGuess = document.getElementById('userGuess').value;
    let feedback = document.getElementById('feedback');
    let attemptsDisplay = document.getElementById('attempts');
    attempts++;
    
    if (userGuess < numberToGuess) {
        feedback.textContent = "Too low! Try again.";
        feedback.style.color = "blue";
    } else if (userGuess > numberToGuess) {
        feedback.textContent = "Too high! Try again.";
        feedback.style.color = "red";
    } else {
        feedback.textContent = `Congratulations! You guessed the number ${numberToGuess} in ${attempts} attempts.`;
        feedback.style.color = "green";
        document.getElementById('userGuess').disabled = true;
    }
    attemptsDisplay.textContent = `Attempts: ${attempts}`;
}