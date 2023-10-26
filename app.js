const userChoiceDisplay = document.createElement("h2");
const computerChoiceDisplay = document.createElement("h2");
const resultDisplay = document.createElement("h2");
const gameGrid = document.getElementById("game");
gameGrid.append(userChoiceDisplay, computerChoiceDisplay, resultDisplay);

const choices = ["rock", "paper", "scissors"];
let userChoice;
let computerChoice;

const handleClick = (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = `User Choice: ${userChoice}`;
    generateComputerChoice();
    getResult();
};

const generateComputerChoice = () => {
    computerChoice = choices[Math.floor(Math.random() * choices.length)];
    computerChoiceDisplay.innerHTML = `Computer Choice: ${computerChoice}`;
}

for (let i = 0; i < choices.length; i++) {
    const button = document.createElement("button");
    button.id = choices[i];
    button.innerHTML = choices[i];
    button.addEventListener("click", handleClick);
    gameGrid.appendChild(button);
}

const getResult = () => {
    switch (userChoice + computerChoice) {
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            resultDisplay.innerHTML = "You lose!";
            break;
        case "paperrock":
        case "scissorspaper":
        case "rockscissors":
            resultDisplay.innerHTML = "You win!";
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            resultDisplay.innerHTML = "It's a draw!";
            break;
    }
};


/************** BEGINNER VERSION **************/
/*
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
*/