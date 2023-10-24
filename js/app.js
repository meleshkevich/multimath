class Player {
    formatName() {
        return this.name.toUpperCase();
    }
}
function startGame() {
    let playerName = getInputValue("playername");
    logPlayer(playerName);
    postScore(90, playerName);
    postScore(-90, playerName);
}
function logPlayer(name = "MultiMath Player") {
    console.log(`New game starting for palayer: ${name}`);
}
function getInputValue(elementID) {
    const inputElement = (document.getElementById(elementID));
    if (inputElement.value === "") {
        return undefined;
    }
    else {
        return inputElement.value;
    }
}
function postScore(score, playerName = "MultiMath Player") {
    let logger;
    if (score < 0) {
        logger = logError;
    }
    else {
        logger = logMessage;
    }
    const scoreElement = document.getElementById("postedScores");
    scoreElement.innerText = `${score} - ${playerName}`;
    logger(`${score}`);
}
document.getElementById("startGame").addEventListener("click", startGame);
const logMessage = (message) => console.log(message);
function logError(err) {
    console.error(err);
}
const firstPlayer = new Player();
firstPlayer.name = "Lanier";
console.log(firstPlayer.formatName());
//# sourceMappingURL=app.js.map