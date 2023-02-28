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
  const btn = document.querySelectorAll("button");
  console.log(btn);
  btn.forEach((btn) => {
    btn.addEventListener("click", () => {
      playRound(getComputerChoice(), "btn.innerHTML");
    });
  });
}

let playerScore = 0;
let computerScore = 0;

function playRound(computerSelection, playerSelection) {
  if (computerSelection == "garfield" && playerSelection == "dog") {
    playerScore++;
    return "You got a point! Dog beats Garfield.";
  } else if (computerSelection == "dog" && playerSelection == "lasagna") {
    playerScore++;
    return "You got a point! Lasagna poisons dog.";
  } else if (computerSelection == "lasagna" && playerSelection == "garfield") {
    playerScore++;
    return "You got a point! Garfield eats lasagna.";
  } else if (computerSelection == "dog" && playerSelection == "garfield") {
    computerScore++;
    return "You lose! Dog beats Garfield.";
  } else if (computerSelection == "lasagna" && playerSelection == "dog") {
    computerScore++;
    return "You lose! Lasagna poisons dog.";
  } else if (computerSelection == "garfield" && playerSelection == "lasagna") {
    computerScore++;
    return "You lose! Garfield eats lasagna.";
  } else if (computerSelection == playerSelection) {
    return "That's a draw!";
  }
}

getPlayersChoice();

// function game() {
//   for (let i = 0; i < 5; i++) {
//     playRound(getComputerChoice(), getPlayersChoice());
//     console.log(
//       "Player Score: " + playerScore + " Computer Score: " + computerScore
//     );
//     }
// }

// game();
