const canvas = document.querySelector("canvas");

const game = new Game(canvas);
const startButton = document.querySelector("#game-intro");

document.addEventListener("keydown", (event) => {
  game.onKeyDown(event.keyCode);
});

document.addEventListener("keyup", (event) => {
  game.onKeyUp(event.keyCode);
});

startButton.addEventListener("click", (event) => {
  game.start();
  startButton.remove()
});