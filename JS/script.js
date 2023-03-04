const pScore = document.getElementById('player-result-box');
const cScore = document.getElementById('pc-result-box');

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
    let playerScore = 0;
    let pcScore = 0;
    playerSelection = playerSelection.toUpperCase();
    const pcImg = document.querySelector('#pc-img');
    const playerImg = document.querySelector('#player-img');
    const resultText = document.querySelector('#result');

    if (playerSelection === 'ROCK') {
        playerImg.src = '../img/rock.png';
        switch(computerSelection) {
            case 'Rock':
                pcImg.src = '../img/rock.png';
                resultText.textContent = `Tie.`;
                resultText.style.color = 'black';
                break;
            case 'Paper':
                pcImg.src = '../img/paper.png';
                resultText.textContent = `You lose! :^)`;
                resultText.style.color = 'red';
                pcScore += 1;
                break;
            case 'Scissors':
                pcImg.src = '../img/scissors.png';
                resultText.textContent = `You win!`;
                resultText.style.color = 'green';
                playerScore += 1;
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
                playerScore += 1;
                break;
            case 'Paper':
                pcImg.src = '../img/paper.png';
                resultText.textContent = `Tie.`;
                resultText.style.color = 'black';
                break;
            case 'Scissors':
                pcImg.src = '../img/scissors.png';
                resultText.textContent = `You lose! :^)`;
                resultText.style.color = 'red';
                pcScore += 1;
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
                pcScore += 1;
                break;
            case 'Paper':
                pcImg.src = '../img/paper.png';
                resultText.textContent = `You win!`;
                resultText.style.color = 'green';
                playerScore += 1;
                break;
            case 'Scissors':
                pcImg.src = '../img/scissors.png';
                resultText.textContent = `Tie.`;
                resultText.style.color = 'black';
                break;
        }
    }

    pScore.textContent = parseInt(pScore.textContent) + playerScore;
    cScore.textContent = parseInt(cScore.textContent) + pcScore;

    if (pScore.textContent == 5) {
        resultText.textContent = 'You win filthy human!';
        resultText.style.cssText = ('color:green; font-size: 5rem');
    }

    else if (cScore.textContent == 5) {
        resultText.textContent = 'I win stupid human!';
        resultText.style.cssText = ('color:red; font-size: 5rem');
    }


}

function game () {
    const btns = document.querySelectorAll('button');
    btns.forEach((btn) => {btn.addEventListener('click', () => {
        playRound(getComputerChoice(), btn.id); 
    });
    }); 
 }  

game();


