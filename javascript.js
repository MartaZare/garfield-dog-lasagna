function getComputerChoice() {
  let choice = Math.floor(Math.random() * 2);
  if (choice === 0) {
    return "garfield";
  } else if (choice === 1) {
    return "dog";
  } else {
    return "lasagna";
  }
}

function getPlayersChoice() {
  let choice = prompt("Choose Garfield, dog or lasagna:");
  return choice.toLowerCase();
}

function playRound(computerSelection, playerSelection) {
  if (computerSelection == "garfield" && playerSelection == "dog") {
    return "You got a point! Dog beats Garfield.";
  } else if (computerSelection == "dog" && playerSelection == "lasagna") {
    return "You got a point! Lasagna poisons dog.";
  } else if (computerSelection == "lasagna" && playerSelection == "garfield") {
    return "You got a point! Garfield eats lasagna.";
  } else if (computerSelection == "dog" && playerSelection == "garfield") {
    return "You lose! Dog beats Garfield.";
  } else if (computerSelection == "lasagna" && playerSelection == "dog") {
    return "You lose! Lasagna poisons dog.";
  } else if (computerSelection == "garfield" && playerSelection == "lasagna") {
    return "You lose! Garfield eats lasagna.";
  } else if (computerSelection == playerSelection) {
    return "That's a draw!";
  }
}

console.log(playRound(getComputerChoice(), getPlayersChoice()));
