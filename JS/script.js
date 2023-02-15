function getComputerChoice() {
    let computerChoice;
    let randomNumber;

    randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        computerChoice = 'Rock';
    }

    else if (randomNumber === 1) {
        computerChoice = 'Paper';
    }

    else if (randomNumber === 2) {
        computerChoice = 'Scissors'
    }

    return computerChoice;

}

function playRound(computerSelection)  {
    let playerSelection;
    let result;

    playerSelection = prompt();
    playerSelection = playerSelection.toUpperCase();

    if (playerSelection === 'ROCK') {
        switch(computerSelection) {
            case 'Rock':
                alert(`Tie. You chose ${playerSelection} I chose ${computerSelection}`);
                result = 1;
                break;
            case 'Paper':
                alert(`You lose! :^) You chose ${playerSelection} I chose ${computerSelection}`);
                result = 0;
                break;
            case 'Scissors':
                alert(`You win! :^( You chose ${playerSelection} I chose ${computerSelection}`);
                result = 2;
                break;
        }
    }

    else if (playerSelection === 'PAPER') {
        switch(computerSelection) {
            case 'Rock':
                alert(`You win! :^( You chose ${playerSelection} I chose ${computerSelection}`);
                result = 2;
                break;
            case 'Paper':
                alert(`Tie. You chose ${playerSelection} I chose ${computerSelection}`);
                result = 1;
                break;
            case 'Scissors':
                alert(`You lose! :^) You chose ${playerSelection} I chose ${computerSelection}`);
                result = 0;
                break;
        }
    }

    else if (playerSelection === 'SCISSORS') {
        switch(computerSelection) {
            case 'Rock':
                alert(`You lose! :^) You chose ${playerSelection} I chose ${computerSelection}`);
                result = 0;
                break;
            case 'Paper':
                alert(`You win! :^( You chose ${playerSelection} I chose ${computerSelection}`);
                result = 2;
                break;
            case 'Scissors':
                alert(`Tie. You chose ${playerSelection} I chose ${computerSelection}`);
                result = 1;
                break;
        }
    }

    else {
        alert('Please write correct word.')
    }

    return result;
}


alert('Welcome to RockPaperScissors! Please write "Rock", "Paper" or "Scissors" in the next window');


function game () {
    let playerScore = 0;
    let computerScore = 0;
    let score;

    for (let i = 0; i < 5; i++) {
        score = playRound(getComputerChoice());

        switch (score) {
            case 0:
                computerScore = computerScore + 1;
                break;

            case 1:

                break;

            case 2:
                playerScore = playerScore + 1;
                break;
        }

        if (i < 4){
            alert(`Round ${i+2} out of 5. Your score: ${playerScore}. My Score: ${computerScore}.`)
            }
    }

    if (playerScore > computerScore) {
        alert(`You win! Your score: ${playerScore}. My Score: ${computerScore}.`);
    }

    else if (playerScore < computerScore) {
        alert(`You lose! Your score: ${playerScore}. My Score: ${computerScore}.`);
    }

    else if (playerScore === computerScore) {
        alert(`It's a tie. Your score: ${playerScore}. My Score: ${computerScore}.`);
    }
}

game();