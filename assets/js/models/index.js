const canvas = document.querySelector("canvas");

const game = new Game(canvas);
const startButton = document.querySelector("#start");
const instructionButton = document.querySelector("#instructions");

document.addEventListener("keydown", (event) => {
  game.onKeyDown(event.keyCode);
});

document.addEventListener("keyup", (event) => {
  game.onKeyUp(event.keyCode);
});

startButton.addEventListener("click", (event) => {
  game.start();
  document.querySelector("#game-intro").remove();

});

// instructionButton.addEventListener("click", (event) => {
//   game.showInstructions();
// });