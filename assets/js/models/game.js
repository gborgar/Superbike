class Game {
  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.intervalId = null;
    this.running = false;
    this.tick = 0 
    this.background = new Background(this.ctx);
  }

  start() {
    console.log("enter here");
    this.running = true;

    this.intervalId = setInterval(() => {
      this.tick++
      //this.clear();

      this.background.draw();
      this.background.move();
    })
  }
}