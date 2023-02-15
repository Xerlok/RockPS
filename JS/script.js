function getComputerChoice() {
    let computerChoice;
    let randomNumber;

    randomNumber = Math.floor(Math.random() * 3);
    console.log(randomNumber);

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

    playerSelection = prompt();
    playerSelection = playerSelection.toUpperCase();

    if (playerSelection === 'ROCK') {
        switch(computerSelection) {
            case 'Rock':
                alert(`Tie. You chose ${playerSelection} I chose ${computerSelection}`);
                break;
            case 'Paper':
                alert(`You lose! :^) You chose ${playerSelection} I chose ${computerSelection}`);
                break;
            case 'Scissors':
                alert(`You win! :^( You chose ${playerSelection} I chose ${computerSelection}`);
                break;
        }
    }

    else if (playerSelection === 'PAPER') {
        switch(computerSelection) {
            case 'Rock':
                alert(`You win! :^( You chose ${playerSelection} I chose ${computerSelection}`);
                break;
            case 'Paper':
                alert(`Tie. You chose ${playerSelection} I chose ${computerSelection}`);
                break;
            case 'Scissors':
                alert(`You lose! :^) You chose ${playerSelection} I chose ${computerSelection}`);
                break;
        }
    }

    else if (playerSelection === 'SCISSORS') {
        switch(computerSelection) {
            case 'Rock':
                alert(`You lose! :^) You chose ${playerSelection} I chose ${computerSelection}`);
                break;
            case 'Paper':
                alert(`You win! :^( You chose ${playerSelection} I chose ${computerSelection}`);
                break;
            case 'Scissors':
                alert(`Tie. You chose ${playerSelection} I chose ${computerSelection}`);
                break;
        }
    }

    else {
        alert('Please write correct word.')
    }
}


alert('Welcome to RockPaperScissors! Please write "Rock", "Paper" or "Scissors" in the next window');

playRound(getComputerChoice());