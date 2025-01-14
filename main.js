const choices = ["rock", "paper", "scissors"];

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  console.log(`The Computer chose ${capitalize(choices[randomNumber])}`);
  return choices[randomNumber];
}

function getHumanChoice() {
  let humanChoice = prompt("Type Rock, Paper or Scissors to make your choice!");
  while (!choices.includes(humanChoice.toLowerCase())) {
    console.log(
      humanChoice +
        " is not a valid choice. Please only choose 'Rock', 'Paper' or 'Scissors' Choose again!"
    );
    humanChoice = prompt("Type Rock, Paper or Scissors to make your choice!");
  }
  console.log(`The Human chose ${capitalize(humanChoice)}`);
  return humanChoice;
}

function playRound(humanChoice, computerChoice) {
  console.log(`hey you are in the playRound function. Congrats! HumanChoice: ${humanChoice} `);
  let humanChoiceLowerCase = humanChoice.toLowerCase();

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
      `The Computer won. ${capitalize(computerChoice)} beats ${capitalize(computerChoice)}`
    );
  }

  console.log(`Human: ${humanScore}`);
  console.log(`Computer: ${computerScore}`);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

function capitalize(word) {
  let firstLetter = word.charAt(0).toUpperCase();
  let restOfWord = word.toLowerCase().slice(1);

  return firstLetter + restOfWord;
}
