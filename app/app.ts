function startGame() {
  //starting new game
  let playerName: string | undefined = getInputValue("playername");
  logPlayer(playerName);

  postScore(90, playerName);
  postScore(-90, playerName);
}

function logPlayer(name: string = "MultiMath Player"): void {
  console.log(`New game starting for palayer: ${name}`);
}
function getInputValue(elementID: string): string | undefined {
  const inputElement: HTMLInputElement = <HTMLInputElement>(
    document.getElementById(elementID)
  );

  if (inputElement.value === "") {
    return undefined;
  } else {
    return inputElement.value;
  }
}

function postScore(
  score: number,
  playerName: string = "MultiMath Player"
): void {
  let logger: (value: string) => void;

  if (score < 0) {
    logger = logError;
  } else {
    logger = logMessage;
  }

  const scoreElement: HTMLElement | null =
    document.getElementById("postedScores");
  scoreElement!.innerText = `${score} - ${playerName}`;

  logger(`${score}`);
}
document.getElementById("startGame")!.addEventListener("click", startGame);

const logMessage = (message: string) => console.log(message);

function logError(err: string): void {
  console.error(err);
}
