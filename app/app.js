function startGame() {
    //starting new game
    var playerName = "Audrey";
    logPlayer(playerName);
    var messagesElement = document.getElementById("messages");
    messagesElement.innerText = "Welcome to MultiMath! starting new game...";
}
function logPlayer(name) {
    console.log("New game starting for palayer: ".concat(name));
}
document.getElementById("startGame").addEventListener("click", startGame);
