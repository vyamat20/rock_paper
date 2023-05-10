let arr = ["Rock", "Paper", "Scissors"];

function computerSelection() {
    return arr[(Math.floor(Math.random() * arr.length))]
};

function playerSelection()  {
   let selection = prompt("Rock, Paper, or Scissors?");
   return selection.charAt(0).toUpperCase() + selection.slice(1).toLowerCase();
};

