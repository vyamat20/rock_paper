let playerScore = 0
let computerScore = 0
let arr = ["Rock", "Paper", "Scissors"];
let computerSelection1 = 555
let playerSelection1 = 55



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





function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        console.log("It's a tie!")
        return ("It's a tie!")}
    else if (playerSelection == "Rock"  && computerSelection == "Scissors") {
        scorePlayer();
        console.log("You win! Rock beats Scissors");
        return ("You Win! Rock beats Scissor");
        }
    else if (playerSelection == "Rock" && computerSelection == "Paper") {
        scoreComputer();
        console.log("You lose! Paper beats rock");
        return ("You lose! Paper beats rock")  
    }
    else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        scoreComputer();
        console.log("You lose! Scissors beats paper");
        return ("You lose! Scissors beats paper");  
    }
    else if (playerSelection == "Paper" && computerSelection == "Rock") {
        scorePlayer();
        console.log("You win! Paper beats rock");
        return("You win! Paper beats rock");  
    }
    else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        scorePlayer();
        console.log("You win! Scissors beats paper");
        return ("You win! Scissors beats paper");
    }
    else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        scoreComputer()
        console.log("You lose! Rock beats Scissors");
        return ("You lose! Rock beats Scissorts")
   
    }
    

}


/*
function game() {
   playRound(playerSelection(), computerSelection())
   playRound(playerSelection(), computerSelection())
   playRound(playerSelection(), computerSelection())
   playRound(playerSelection(), computerSelection())
   playRound(playerSelection(), computerSelection())
   if (playerScore > computerScore) {
    console.log(`You win the game!!!! ${playerScore} to ${computerScore}`)
   } else if (playerScore < computerScore) {
    console.log(`You lose the game!!!!! ${playerScore} to ${computerScore}`)
   } else {
    console.log(`It's a tie game!!!!! ${playerScore} to ${computerScore}`)
   }

 }
       

game();

*/