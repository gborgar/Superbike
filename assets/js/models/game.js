class Game {
  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.intervalId = null;
    this.running = false;
    this.tick = 0 
    this.background = new Background(this.ctx);
    this.biker = new Biker(this.ctx);
  }

  start() {
    this.running = true;

    this.intervalId = setInterval(() => {
      this.tick++
      //this.clear();

      this.background.draw();
      this.background.move();

      this.biker.draw();
      this.biker.move();

    }, 1000 / 60);
  }

  onKeyDown(code) {
    //Le pasamos el evento al biker
    this.biker.onKeyDown(code);
  }

  onKeyUp(code) {
    //Le pasamos el evento al biker
    this.biker.onKeyUp(code);
  }
}