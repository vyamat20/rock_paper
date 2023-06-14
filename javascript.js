let playerScore = 0
let computerScore = 0
let arr = ["Rock", "Paper", "Scissors"];
let playerChoice 
const buttons = document.querySelectorAll('button');

const player = document.querySelector("#player-score");
player.textContent = `Player Score: ${playerScore}`;

const computer = document.querySelector("#computer-score");
computer.textContent = `Computer Score: ${computerScore}`;

const output = document.querySelector("#gameOutput")

function scorePlayer() {
    ++playerScore;
}

function scoreComputer() {
    ++computerScore;
}

function computerSelection() {
    return (arr[(Math.floor(Math.random() * arr.length))]);
}


function playerSelection() {
    let selection = prompt("Rock, Paper, or Scissors?");
    let selection1 = (selection.charAt(0).toUpperCase() + selection.slice(1).toLowerCase())
    return selection1
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerChoice = button.id;
        if (playerChoice == "rock") {
            playerChoice == "Rock"
        }
        else if (playerChoice == "paper") {
            playerChoice = "Paper"
        }
        else if (playerChoice == "scissors") {
            playerChoice = "Scissors"
        }
        playRound(playerChoice, computerSelection());
        gameOver();
        player.textContent = `Player Score: ${playerScore}`;
        computer.textContent = `Computer Score: ${computerScore}`;
        
    })
})


function playRound(playerChoice, computerSelection) {
    if (playerChoice == computerSelection) {
        output.textContent = "It's a tie!";
        return ("It's a tie!")
    }
    else if (playerChoice == "Rock"  && computerSelection == "Scissors") {
        scorePlayer();
        output.textContent = "You win! Rock beats Scissors";
        return ("You Win! Rock beats Scissor");
        }
    else if (playerChoice == "Rock" && computerSelection == "Paper") {
        scoreComputer();
        output.textContent = "You lose! Paper beats rock";
        return ("You lose! Paper beats rock")  
    }
    else if (playerChoice == "Paper" && computerSelection == "Scissors") {
        scoreComputer();
        output.textContent = "You lose! Scissors beats paper";
        return ("You lose! Scissors beats paper");  
    }
    else if (playerChoice == "Paper" && computerSelection == "Rock") {
        scorePlayer();
        output.textContent = "You win! Paper beats rock";
        return("You win! Paper beats rock");  
    }
    else if (playerChoice == "Scissors" && computerSelection == "Paper") {
        scorePlayer();
        output.textContent = "You win! Scissors beats paper";
        return ("You win! Scissors beats paper");
    }
    else if (playerChoice == "Scissors" && computerSelection == "Rock") {
        scoreComputer()
        output.textContent = "You lose! Rock beats Scissors";
        return ("You lose! Rock beats Scissorts")
   
    }
}


function gameOver() {
    if (playerScore == 5) {
    output.textContent = "You won the game! Congrats!";
    playerScore = 0;
    computerScore = 0;
    }
    if (computerScore == 5) {
        output.textContent = "You lost! Better luck next time.."
        playerScore = 0;
        computerScore = 0;
    }
}