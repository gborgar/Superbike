const canvas = document.querySelector("canvas");

const game = new Game(canvas);
const startButton = document.querySelector("#start");

document.addEventListener("click", (event) => {
    game.start();
    startButton.remove()
  });