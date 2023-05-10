let arr = ["Rock", "Paper", "Scissors"];

function computerSelection() {
    return arr[(Math.floor(Math.random() * arr.length))]
};

function playerSelection()  {
   let selection = prompt("Rock, Paper, or Scissors?");
   return selection.charAt(0).toUpperCase() + selection.slice(1).toLowerCase();
};

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "Rock" && computerSelection == "Rock") {
    console.log("It's a tie! You both picked rock")}
    else if (playerSelection == "Paper" && computerSelection == "Paper") {
    console.log("It's a tie! You both picked paper")}
    else if (playerSelection == "Scissors" && computerSelection == "Scissors") {
    console.log("It's a tie! You both picked scissors")}
    else if (playerSelection == "Rock"  && computerSelection == "Scissors") {
    console.log("You Win! Rock beats Scissor")}
    else if (playerSelection == "Rock" && computerSelection == "Paper") {
    console.log("You lose! Paper beats rock")}
    else if (playerSelection == "Paper" && computerSelection == "Scissors") {
    console.log("You lose! Scissors beats paper")}
    else if (playerSelection == "Paper" && computerSelection == "Rock") {
    console.log("You win! Paper beats rock")}
    else if (playerSelection == "Scissors" && computerSelection == "Paper") {
    console.log("You win! Scissors beats paper")}
    else if (playerSelection == "Scissors" && computerSelection == "Rock") {
    console.log("You lose! Rock beats Scissorts")}
    }