function getComputerChoice() {
  let choice = Math.floor(Math.random() * 2);
  return choice;
}

function getPlayersChoice() {
  let choice = prompt("Choose Garfield, dog or lasagna:");
  return choice.toLowerCase();
}
