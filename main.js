//declaring variables
let humanScore = 0;
let computerScore = 0;
let humanChoice = "";

const div = document.getElementById("container");
const btn1 = document.createElement("button");
const btn2 = document.createElement("button");
const btn3 = document.createElement("button");

btn1.textContent = "Rock";
btn2.textContent = "Paper";
btn3.textContent = "Scissors";

div.appendChild(btn1);
div.appendChild(btn2);
div.appendChild(btn3);

const player = document.getElementById("display-player");
const resultText = document.getElementById("results");
const message = document.getElementById("message");

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

    message.textContent = `Your score is: ${humanScore} The computers score is: ${computerScore}`;

    btn1.addEventListener("click", (event) => {
       humanChoice = "rock";
       player.textContent = `Your choice is ${humanChoice}`
       playRoundAndUpdate();
    });

    btn2.addEventListener("click", (event) => {
        humanChoice = "paper";
        player.textContent = `Your choice is ${humanChoice}`
        playRoundAndUpdate();
     });
     
    btn3.addEventListener("click", (event) => {
        humanChoice = "scissors";
        player.textContent = `Your choice is ${humanChoice}`
        playRoundAndUpdate();
    });


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

function playRoundAndUpdate() {
    if (!humanChoice) return; 
    disableChoiceButtons();

    let computerChoice = getComputerChoice();
    let result = playRound(humanChoice, computerChoice);
    
    if (result === "win") {
        humanScore++;
        resultText.textContent = "You win this round";
    } else if (result === "lose") {
        computerScore++;
        resultText.textContent = "You lose this round";
    } else {
        resultText.textContent = "Its a draw!";
    }
    
    if (humanScore === 5 || computerScore === 5) {
        message.textContent = `Your score is: ${humanScore} The computers score is: ${computerScore}`;
        displayResults();
    } else {
        message.textContent = `Your score is: ${humanScore} The computers score is: ${computerScore}`;
        enableChoiceButtons();
    }
    
};

function displayResults() {
    if (humanScore > computerScore) {
        resultText.textContent = "You win the game! Refresh to start over";
    } else if (humanScore < computerScore) {
        resultText.textContent = "You lose the game! Refresh to start over";
    } else {
        resultText.textContent = "You tied the game! Refresh to start over";
    }
};



// Disables choice buttons
function disableChoiceButtons() {
    btn1.disabled = true;
    btn2.disabled = true;
    btn3.disabled = true;
}

// Re-enable choice buttons (for the next round)
function enableChoiceButtons() {
    btn1.disabled = false;
    btn2.disabled = false;
    btn3.disabled = false;
}