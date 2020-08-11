let playerScore = 0;
let computerScore= 0;
let roundCount = 0;

function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

function getPlayerSelection() {
    let playerInput = prompt('Pick your move: Rock, Paper, or Scissors?');
    if (playerInput === null) {
        console.log('Game cancelled.');
    } else {
        let playerChoice = playerInput.toLowerCase();
        if (playerChoice === 'rock' || playerChoice === 'rocks') {
            return 'rock';
        } else if (playerChoice === 'paper' || playerChoice === 'papers') {
            return 'paper';
        } else if (playerChoice === 'scissors' || playerChoice === 'scissor') {
            return 'scissors';
        } else {
            console.log('Invalid choice.');
            return undefined;
        }
    }
}

function playRound(playerSelection, computerSelection) {                
    playerSelection = getPlayerSelection();
    computerSelection = computerPlay();
    let result = '';

    if (playerSelection === undefined) {
        console.log('Uh oh, something went wrong. Click on the Start Game button to retry.');
    } else {
        console.log('Computer chose: ', computerSelection.toUpperCase());
        console.log('Player chose: ', playerSelection.toUpperCase());
    }
    
    if (playerSelection === computerSelection) {
        result = 'Wow there, same move!';
    } else if (
        ((playerSelection === 'rock') && (computerSelection === 'scissors')) ||
        ((playerSelection === 'paper') && (computerSelection === 'rock')) ||
        ((playerSelection === 'scissors') && (computerSelection === 'paper'))
    ) {
        result = `You won! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}.`;
        playerScore++;
    } else {
        result = `You lost! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}.`;
        computerScore++;
    }
    
    roundCount++;
    let roundScore = `Round ${roundCount} score: Player ${playerScore} vs Computer ${computerScore}`; 
    let roundResult = result + " " + roundScore;
    return roundResult;
}

function game(){
    let i;
    let gameResult;
    let gamePlayerScore;
    let gameComputerScore;

    for (i = 0; i < 5; i++) {
        console.log(playRound());
        gamePlayerScore = playerScore;
        gameComputerScore = computerScore;
    }

    if (gamePlayerScore > gameComputerScore) {
        gameResult = 'Player, you won! Congrats!';
    } else if (gamePlayerScore < gameComputerScore) {
        gameResult = 'Computer is the winner!'
    } else {
        gameResult = 'Seems like it\'s a tie!'
    }

    if (i = 5) {
        let gameEndScore = `Game result: Player ${gamePlayerScore} vs Computer ${gameComputerScore}`;
        console.log(gameResult + " " + gameEndScore);
    }
}