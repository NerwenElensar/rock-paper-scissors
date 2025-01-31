const choices = ["rock", "paper", "scissors"];

let humanScore = 0;
let computerScore = 0;
let roundCounter = 0;

const roundAnnouncement = document.querySelector(".round-announcement");
const scoreboard = document.querySelector(".scoreboard");
const humanChoiceButtons = document.querySelectorAll(".human-choice");
humanChoiceButtons.forEach((button) => button.addEventListener("click", playRound));

function playRound(e) {
  let computerChoice = getComputerChoice();
  let humanChoice = getHumanChoice(e);
  let humanChoiceLowerCase = humanChoice.toLowerCase();

  if (humanChoiceLowerCase === computerChoice) {
    roundAnnouncement.innerText = `It is a tie. ${capitalize(humanChoice)} vs ${capitalize(
      computerChoice
    )}`;
  }

  if (
    (humanChoiceLowerCase === "rock" && computerChoice === "scissors") ||
    (humanChoiceLowerCase === "paper" && computerChoice === "rock") ||
    (humanChoiceLowerCase === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    roundAnnouncement.innerText = `The Human won. ${capitalize(humanChoice)} beats 
    ${capitalize(computerChoice)}.`;
  } else if (
    (computerChoice === "rock" && humanChoiceLowerCase === "scissors") ||
    (computerChoice === "paper" && humanChoiceLowerCase === "rock") ||
    (computerChoice === "scissors" && humanChoiceLowerCase === "paper")
  ) {
    computerScore++;
    roundAnnouncement.innerText = `The Computer won. ${capitalize(
      computerChoice
    )} beats ${capitalize(humanChoice)}`;
  }

  roundCounter++;
  scoreboard.innerText = `Human: ${humanScore} Computer: ${computerScore}`;
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
  return choices[randomNumber];
}

function getHumanChoice(e) {
  let humanChoice = e.target.id;
  return humanChoice;
}
