const canvas = document.querySelector("canvas");

const game = new Game(canvas);
const startButton = document.querySelector("#start");

document.addEventListener("keydown", (event) => {
  game.onKeyDown(event.keyCode);
});

document.addEventListener("keyup", (event) => {
  game.onKeyUp(event.keyCode);
});

document.addEventListener("click", (event) => {
  game.start();
  startButton.remove()
});