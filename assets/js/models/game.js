class Game {
  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.intervalId = null;
    this.running = false;
    this.tick = 0; 
    this.background = new Background(this.ctx);
    this.biker = new Biker(this.ctx);
    this.obstacles = [];
    this.puddlesWater = [];
  }

  //Iniciamos el juego
  start() {
    this.running = true;

    this.intervalId = setInterval(() => {
      this.tick++
      this.clear();

      //Dibujamos y moveos el background
      this.background.draw();
      this.background.move();
      
      //Dibujamos y movemos los charcos de agua
      this.puddlesWater.forEach(puddle => {
        puddle.draw();
        puddle.move();
      })

      if (this.tick % 500 === 0) {
        this.tick = 0;
        
        //Creamos nuevos obstaculos "charcos" de forma aleatoria desde Y
        const newPuddle = new Water(this.ctx, this.ctx.canvas.height - 25);

        //Pusheamos el nuevo obstaculo "charco" al array de charcos
        this.puddlesWater.push(newPuddle);
      }

      //Dibujamos y movemos los cocos
      this.obstacles.forEach(obstacle => {
        obstacle.draw();
        obstacle.move();
      })

      if (this.tick % 200 === 0) {


        //Creamos nuevos obstaculos "cocos" de forma aleatoria desde X
        const newObstacle = new Obstacle(this.ctx, Math.random() * this.ctx.canvas.width / 2 + this.ctx.canvas.width / 2);

        //Pusheamos el nuevo obstaculo "coco" al array de obstáculos
        this.obstacles.push(newObstacle);
      }

      //Dibujamos y movemos el biker
      this.biker.draw();
      this.biker.move();

    }, 1000 / 60);
  }
  
  stop() {
    this.running = false;
    clearInterval(this.intervalId);
  }

  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
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