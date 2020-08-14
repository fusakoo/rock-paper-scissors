let playerScore = 0;
let computerScore= 0;
let roundCount = 0;

// Variables

const restartButton = document.createElement('button');
restartButton.classList.add('restart');
const buttons = document.querySelectorAll('button');

const displayPlayerScore = document.querySelector('#player-score');
const displayComputerScore = document.querySelector('#computer-score');
const displayRound = document.querySelector('#round');

const roundContainer = document.querySelector('.round-container');
const roundStats = document.querySelector('#round-stats');
const roundResult = document.querySelector('#round-result');

const gameResult = document.createElement('h2');

// Generate computer choice
function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

// Play round of match
function playRound(playerSelection, computerSelection) {       
    // Get player choice by looking at target's id    
    playerSelection = this.getAttribute('id');
    computerSelection = computerPlay();
    roundStats.textContent = `Player chose ${playerSelection.toUpperCase()}, Computer chose ${computerSelection.toUpperCase()}.`;
    
    if (playerSelection === computerSelection) {
        roundResult.textContent = 'Wow there, same move! That\'s a draw!';
    } else if (
        ((playerSelection === 'rock') && (computerSelection === 'scissors')) ||
        ((playerSelection === 'paper') && (computerSelection === 'rock')) ||
        ((playerSelection === 'scissors') && (computerSelection === 'paper'))
    ) {
        roundResult.textContent = `You won! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}.`;
        playerScore++;
    } else {
        roundResult.textContent = `You lost! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}.`;
        computerScore++;
    }
    
    roundCount++;
    displayRound.textContent = roundCount;
    displayPlayerScore.textContent = playerScore;
    displayComputerScore.textContent = computerScore;
    checkScore();
}

// Event listener when player selects the move
buttons.forEach(button => button.addEventListener('click', playRound));
displayPlayerScore.textContent = playerScore;
displayComputerScore.textContent = computerScore;
restartButton.textContent = 'Reset';

// Check current score & compare with the winning condition of '5'
function checkScore() {
    if (playerScore >= 5) {
        gameResult.textContent = 'Player wins!';
        roundContainer.appendChild(gameResult);
        finishGame();
    }

    if (computerScore >= 5) {
        gameResult.textContent = 'Computer wins!';
        roundContainer.appendChild(gameResult);
        finishGame();
    }
}

// Event listener to reset the game
function finishGame(){
    roundContainer.appendChild(restartButton);
    restartButton.addEventListener('click', restartGame);
}

function restartGame(){
    playerScore = 0;
    computerScore = 0;
    roundCount = 0;
    displayPlayerScore.textContent = playerScore;
    displayComputerScore.textContent = computerScore;
    displayRound.textContent = roundCount;
    roundContainer.removeChild(restartButton);
    roundContainer.removeChild(gameResult);
    roundResult.textContent = '';
    roundStats.textContent = '';
}