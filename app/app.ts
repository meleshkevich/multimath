function startGame() {
  //starting new game
  let playerName: string = "Audrey";
  logPlayer(playerName);

  var messagesElement = document.getElementById("messages");
  messagesElement!.innerText = "Welcome to MultiMath! starting new game...";
}

function logPlayer(name) {
  console.log(`New game starting for palayer: ${name}`);
}

document.getElementById("startGame")!.addEventListener("click", startGame);
