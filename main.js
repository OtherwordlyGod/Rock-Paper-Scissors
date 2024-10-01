//declaring variables
let humanScore = 0;
let computerScore = 0;

//This function decides the computer's choice
function getComputerChoice(){
    let rng = Math.floor(Math.random()*3); //This variable uses the math object to pick a random number between 0-2

    //this if statement converts the number into one of the choices
    if (rng === 0){ 
        return "rock";
    } else if (rng === 1){
        return "paper";
    } else{
        return "scissors";
    }
}

//This function prompts the user to input their choice
function getHumanChoice(){
    let choice = prompt("Enter your choice") //This displays a popup prompt that allows the user to type their answer

    //this code makes their answer case insensitive.
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

//This function determines who won based on their choice and returns the answer.
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

//This function runs the game 5 times and logs messages into the console.
function playGame() {

  let numRound = 5; //this variable tells the game to run a certain amount of times.
  
  for (let i = 0; i < numRound; i++){ //this for loop runs the game numRound amount of times.

    //these variables are declared in the for loop so that the functions give us different values from the computer and prompts the user each time.
      let humanSelection = getHumanChoice();
      let computerSelection = getComputerChoice();
      playRound(humanSelection, computerSelection);
      let result = playRound(humanSelection, computerSelection);

      //this if statement logs messages into the console informing the user on the game's progress.
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
  
  //This if statement logs the win, loss, or tie message into the console after the for loop runs.
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