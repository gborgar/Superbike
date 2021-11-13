class Game {
  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.intervalId = null;
    this.running = false;
    this.tick = 0; 
    this.background = new Background(this.ctx);
    this.biker = new Biker(this.ctx);
    this.obstacles = [];
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

      this.obstacles.forEach(obstacle => {
        obstacle.draw();
        obstacle.move();
      })

      if (this.tick % 100 === 0) {
        //Reseteamos el tick
        this.tick = 0;

        //Creamos nuevos obstaculos "cocos" de forma aleatoria desde X
        const newObstacle = new Obstacle(this.ctx, Math.ramdom() * this.ctx.canvas.width);

        //Pusheamos el nuevo obstaculo al array de obstáculos
        this.obstacles.push(newObstacle);
      }

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