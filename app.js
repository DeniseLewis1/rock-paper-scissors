const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
}));

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;

    if (randomNumber === 1) {
        computerChoice = "rock";
    }
    if (randomNumber === 2) {
        computerChoice = "paper";
    }
    if (randomNumber === 3) {
        computerChoice = "scissors";
    }

    computerChoiceDisplay.innerHTML = computerChoice;
};

function getResult() {
    if (computerChoice === userChoice) {
        resultDisplay.innerHTML = "It's a draw!";
    }
    if (computerChoice === "rock" && userChoice === "paper" || 
        computerChoice === "paper" && userChoice === "scissors" || 
        computerChoice === "scissors" && userChoice === "rock") {
        resultDisplay.innerHTML = "You win!";
    }
    if (userChoice === "rock" && computerChoice === "paper" || 
        userChoice === "paper" && computerChoice === "scissors" || 
        userChoice === "scissors" && computerChoice === "rock") {
        resultDisplay.innerHTML = "You lose!";
    }
};