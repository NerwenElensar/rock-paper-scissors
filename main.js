// Weapon constants
const ROCK = "Rock";
const PAPER = "Paper";
const SCISSORS = "Scissors";
const weapons = ["Rock", "Paper", "Scissors"];

// Selectors
const weaponButtons = document.querySelectorAll(".weapon");
const playerPointsUI = document.querySelector(".player-points");
const computerPointsUI = document.querySelector(".computer-points");
const scoreBoardUI = document.querySelector(".score-board");

//Create some Nodes to insert in the DOM later
const textLose = document.createTextNode("You lose.");
const textWin = document.createTextNode("Congratulations. You won!");
const textDraw = document.createTextNode("It is a draw!");

/*Eventlistener*/
weaponButtons.forEach((weapon) => {
  weapon.addEventListener("click", playerPlay);
});

// Game logic

let pointsPC = 0;
let pointsPlayer = 0;
function playerPlay() {
  const computerSelection = computerPlay();
  let winIndicator = determineRoundWinner(computerSelection, this.innerText);

  setUpNewRound();

  if (winIndicator === 0) {
    pointsPC += 1;
    computerPointsUI.innerText = pointsPC;
  } else if (winIndicator === 1) {
    pointsPlayer += 1;
    playerPointsUI.innerText = pointsPlayer;
  }

  if (pointsPlayer === 2 || pointsPC === 2) {
    announceWinner(pointsPC, pointsPlayer);
    disableButtons();
  }
}

function computerPlay() {
  const randomNumber = Math.floor(Math.random() * 3);
  return weapons[randomNumber];
}

function determineRoundWinner(computerSelection, playerSelection) {
  if (
    (computerSelection == ROCK && playerSelection == SCISSORS) ||
    (computerSelection == SCISSORS && playerSelection == PAPER) ||
    (computerSelection == PAPER && playerSelection == ROCK)
  ) {
    return 0;
  } else if (
    (playerSelection == ROCK && computerSelection == SCISSORS) ||
    (playerSelection == SCISSORS && computerSelection == PAPER) ||
    (playerSelection == PAPER && computerSelection == ROCK)
  )
    return 1;
}

/**
 * A helper function to determine and announce the winner of the Rock, Scissors, Paper game
 *
 * @param {Number} pointsPC The points of the PC
 * @param {Number} pointsPlayer The points of the player
 */

function announceWinner(pointsPC, pointsPlayer) {
  if (pointsPC > pointsPlayer) {
    scoreBoardUI.appendChild(textLose);
    console.log(`Sorry, the PC is better than you. Player: ${pointsPlayer} PC: ${pointsPC}`);
  } else if (pointsPC < pointsPlayer) {
    scoreBoardUI.appendChild(textWin);
    console.log(`You are a real champion. Player: ${pointsPlayer} PC: ${pointsPC}`);
  } else {
    scoreBoardUI.appendChild(textDraw);
    console.log(`Well that is a draw. Player: ${pointsPlayer} PC: ${pointsPC}`);
  }
}

function resetGame() {
  pointsPC = 0;
  pointsPlayer = 0;
  computerPointsUI.innerText = pointsPC;
  playerPointsUI.innerText = pointsPlayer;
  enableButtons();
  console.log(scoreBoardUI.lastChild);
  if (scoreBoardUI.lastChild === textWin || scoreBoardUI.lastChild === textLose) {
    scoreBoardUI.removeChild(scoreBoardUI.lastChild);
  }
}

function disableButtons() {
  weaponButtons.forEach((weapon) => {
    weapon.disabled = true;
  });
}

function enableButtons() {
  weaponButtons.forEach((weapon) => {
    weapon.disabled = false;
  });
}
