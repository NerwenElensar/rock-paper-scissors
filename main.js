const choices = ["rock", "paper", "scissors"];

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
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

  for (i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  }

  announceWinner(humanScore, computerScore);
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
