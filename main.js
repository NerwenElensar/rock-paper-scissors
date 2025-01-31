const choices = ["rock", "paper", "scissors"];

let humanScore = 0;
let computerScore = 0;

const humanChoiceButtons = document.querySelectorAll(".humanChoice");
humanChoiceButtons.forEach((button) => button.addEventListener("click", playRound));

function playRound(e) {
  let computerChoice = getComputerChoice();
  let humanChoice = getHumanChoice(e);
  let humanChoiceLowerCase = humanChoice.toLowerCase();

  console.log(`HUMAN CHOICE IN PLAYROUND: ${humanChoiceLowerCase}`);

  if (humanChoiceLowerCase === computerChoice) {
    console.log(`It is a tie. Human: ${humanScore} Computer: ${computerScore}`);
    return;
  }

  if (
    (humanChoiceLowerCase === "rock" && computerChoice === "scissors") ||
    (humanChoiceLowerCase === "paper" && computerChoice === "rock") ||
    (humanChoiceLowerCase === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    console.log(
      `The Human won. ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}.`
    );
  } else if (
    (computerChoice === "rock" && humanChoiceLowerCase === "scissors") ||
    (computerChoice === "paper" && humanChoiceLowerCase === "rock") ||
    (computerChoice === "scissors" && humanChoiceLowerCase === "paper")
  ) {
    computerScore++;
    console.log(
      `The Computer won. ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}`
    );
  }

  console.log(`Human: ${humanScore}`);
  console.log(`Computer: ${computerScore}`);
}

function announceWinner(humanScore, computerScore) {
  if (humanScore === computerScore) {
    console.log("You both are Winners!");
  } else if (humanScore > computerScore) {
    console.log("The Human has won!!!! 🥇");
  } else {
    console.log("The computer has won! 🤖");
  }

  console.log(`Human: ${humanScore}, Computer: ${computerScore}`);
}

function capitalize(word) {
  let firstLetter = word.charAt(0).toUpperCase();
  let restOfWord = word.toLowerCase().slice(1);

  return firstLetter + restOfWord;
}

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  console.log(`The Computer chose ${capitalize(choices[randomNumber])}`);
  return choices[randomNumber];
}

function getHumanChoice(e) {
  let humanChoice = e.target.id;
  console.log(`The Human chose ${capitalize(humanChoice)}`);
  return humanChoice;
}
