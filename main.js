let humanScore = 0;
let computerScore = 0;
let humanSelection;
let computerSelection;

function getComputerChoice(){
    let rng = Math.floor(Math.random()*3);

    if (rng === 0){
        return "rock";
    } else if (rng === 1){
        return "paper";
    } else{
        return "scissors";
    }
}

function getHumanChoice(){
    let choice = prompt("Enter your choice")

    if (choice.toLowerCase() === "rock"){
        return "rock";
    } else if (choice.toLowerCase() === "paper"){
        return "paper";
    } else if (choice.toLowerCase() === "scissors"){
        return "scissors";
    } else {
        alert("Please enter a valid choice of rock, paper, or scissors")
    }
}

function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        return "draw";
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        return "win";
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        return "win";
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        return "win";
    } else {
        return "lose";
    }
    
}


function playGame() {

  let numRound = 5;
  for (let i = 0; i < numRound; i++){
      let humanSelection = getHumanChoice();
      let computerSelection = getComputerChoice();
      playRound(humanSelection, computerSelection);
      let result = playRound(humanSelection, computerSelection);

      if (result === "win") {
        console.log("You win!");
         humanScore++;
         console.log(`Your score is: ${humanScore}`);
         console.log(`Your score is: ${computerScore}`);
      } else if (result === "lose") {
        console.log("You lose!");
        computerScore++;
        console.log(`Your score is: ${humanScore}`);
        console.log(`Your score is: ${computerScore}`);
      } else {
        console.log("You tied!");
        console.log(`Your score is: ${humanScore}`);
        console.log(`Your score is: ${computerScore}`);
      }
      console.log("next round");
  }
  
  if (humanScore > computerScore) {
    console.log("Congrats! You win! Refresh the page to try again.");
  } else if (computerScore > humanScore) {
    console.log("Sorry but you lost. Refresh the page to try again.");
  } else {
    console.log("WOW! You managed to tie all 5 times! The odds of that happening is 0.0041%. Refresh the page to try again.");
  }
  return "done";
}

playGame();