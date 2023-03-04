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

function playRound(computerSelection, playerSelection)  {
    let result;
    playerSelection = playerSelection.toUpperCase();
    const pcImg = document.querySelector('#pc-img');
    const playerImg = document.querySelector('#player-img');
    const resultText = document.querySelector('#result');

    console.log(playerSelection, computerSelection);

    if (playerSelection === 'ROCK') {
        playerImg.src = '../img/rock.png';
        switch(computerSelection) {
            case 'Rock':
                pcImg.src = '../img/rock.png';
                resultText.textContent = `Tie.`;
                resultText.style.color = 'black';
                result = 1;
                break;
            case 'Paper':
                pcImg.src = '../img/paper.png';
                resultText.textContent = `You lose! :^)`;
                resultText.style.color = 'red';
                result = 0;
                break;
            case 'Scissors':
                pcImg.src = '../img/scissors.png';
                resultText.textContent = `You win!`;
                resultText.style.color = 'green';
                result = 2;
                break;
        }
    }

    else if (playerSelection === 'PAPER') {
        playerImg.src = '../img/paper.png';
        switch(computerSelection) {
            case 'Rock':
                pcImg.src = '../img/rock.png';
                resultText.textContent = `You win!`;
                resultText.style.color = 'green';
                result = 2;
                break;
            case 'Paper':
                pcImg.src = '../img/paper.png';
                resultText.textContent = `Tie.`;
                resultText.style.color = 'black';
                result = 1;
                break;
            case 'Scissors':
                pcImg.src = '../img/scissors.png';
                resultText.textContent = `You lose! :^)`;
                resultText.style.color = 'red';
                result = 0;
                break;
        }
    }

    else if (playerSelection === 'SCISSORS') {
        playerImg.src = '../img/scissors.png';
        switch(computerSelection) {
            case 'Rock':
                pcImg.src = '../img/rock.png';
                resultText.textContent = `You lose! :^)`;
                resultText.style.color = 'red';
                result = 0;
                break;
            case 'Paper':
                pcImg.src = '../img/paper.png';
                resultText.textContent = `You win!`;
                resultText.style.color = 'green';
                result = 2;
                break;
            case 'Scissors':
                pcImg.src = '../img/scissors.png';
                resultText.textContent = `Tie.`;
                resultText.style.color = 'black';
                result = 1;
                break;
        }
    }

    else {
        resultText.textContent ='Please write correct word.';
    }


    return result;
}

function game () {
    const btns = document.querySelectorAll('button');
    btns.forEach((btn) => {btn.addEventListener('click', () => {playRound(getComputerChoice(), btn.id);});
    }); 

    /* if (playerScore > computerScore) {
        resultText.textcontent =(`You win! Your score: ${playerScore}. My Score: ${computerScore}.`);
    }

    else if (playerScore < computerScore) {
        resultText.textcontent =(`You lose! Your score: ${playerScore}. My Score: ${computerScore}.`);
    }

    else if (playerScore === computerScore) {
        resultText.textcontent =(`It's a tie. Your score: ${playerScore}. My Score: ${computerScore}.`);
    } */
 }  

game();


