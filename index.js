const ROCK = "Rock";
const PAPER = "Paper";
const SCISSORS = "Scissors";

function computerPlay() {
  const randomNumber = Math.floor(Math.random() * 3 + 1);
  if (randomNumber === 1) {
    return ROCK;
  } else if (randomNumber === 2) {
    return PAPER;
  } else if (randomNumber === 3) {
    return SCISSORS;
  }
}

function playerPlay() {
  const weaponOfChoice = prompt("Choose your weapon(Rock, Paper or Scissors):");
  if (!weaponOfChoice) {
    return "No weapon. 🥺";
  }
  return capitalize(weaponOfChoice);
}

function playRound(computerSelection, playerSelection) {
  if (
    (computerSelection == ROCK && playerSelection == SCISSORS) ||
    (computerSelection == SCISSORS && playerSelection == PAPER) ||
    (computerSelection == PAPER && playerSelection == ROCK)
  ) {
    console.log(`You lose. PC: ${computerSelection} beats Player: ${playerSelection}.`);
    return 0;
  } else if (
    (playerSelection == ROCK && computerSelection == SCISSORS) ||
    (playerSelection == SCISSORS && computerSelection == PAPER) ||
    (playerSelection == PAPER && computerSelection == ROCK)
  ) {
    console.log(`You win. Player: ${playerSelection} beats PC: ${computerSelection}.`);
    return 1;
  } else {
    console.log(
      `That's a draw. You choose the same weapon, no weapon or an invalid weapon. Player: ${playerSelection} PC: ${computerSelection}.`
    );
  }
}

function game() {
  alert(
    "Open the Console in the Dev Tools to see some information about the game progress. 😉 -> cmd + opt + C(Mac) or control + shift + C(Windows)"
  );
  let pointsPC = 0;
  let pointsPlayer = 0;
  for (i = 0; i < 5; i++) {
    const playerSelection = playerPlay();
    const computerSelection = computerPlay();
    let winIndicator = playRound(computerSelection, playerSelection);
    if (winIndicator === 0) {
      pointsPC += 1;
    } else if (winIndicator === 1) {
      pointsPlayer += 1;
    }
  }
  announceWinner(pointsPC, pointsPlayer);
}

/**
 * A helper function to determine and announce the winner of the Rock, Scissors, Paper game
 *
 * @param {Number} pointsPC The points of the PC
 * @param {Number} pointsPlayer The points of the player
 */

function announceWinner(pointsPC, pointsPlayer) {
  if (pointsPC > pointsPlayer) {
    console.log(`Sorry, the PC is better than you. Player: ${pointsPlayer} PC: ${pointsPC}`);
  } else if (pointsPC < pointsPlayer) {
    console.log(`You are a real champion. Player: ${pointsPlayer} PC: ${pointsPC}`);
  } else {
    console.log(`Well that is a draw. Player: ${pointsPlayer} PC: ${pointsPC}`);
  }
}

/**
 * A helper function to capitalize words
 *
 * @param {string} word The word to be capitalized
 * @returns The word capitalized
 */
function capitalize(word) {
  let charCapitalized = word.charAt(0).toUpperCase();
  let wordCapitalized = charCapitalized + word.slice(1).toLowerCase();
  return wordCapitalized;
}

game();
