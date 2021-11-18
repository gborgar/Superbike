class Game {
  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.intervalId = null;
    this.running = false;
    this.tick = 0; 
    this.background = new Background(this.ctx);
    this.biker = new Biker(this.ctx, 10);
    this.obstacles = [];
    this.impacts = []
    this.impact = new Impact(this.ctx);
    this.splash = new Splash(this.ctx);
    this.puddlesWater = [];
    this.splashing = [];
    this.gasolineGallons = [];
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
      


      this.splashing = this.splashing.filter(splash => splash.done === false);

      //Dibujamos y movemos los charcos de agua
      this.puddlesWater.forEach(puddle => {
        puddle.draw();
        puddle.move();
      })
      //this.splash.draw()

      // this.splashing.forEach(splash => {
      //   splash.draw();
      // })

      if (this.tick % 500 === 0) {
        this.tick = 0;
        
        //Creamos nuevos obstaculos "charcos" de forma aleatoria desde Y
        const newPuddle = new Water(this.ctx, this.ctx.canvas.height - 25);

        //Pusheamos el nuevo obstaculo "charco" al array de charcos
        this.puddlesWater.push(newPuddle);
      }

      
      
      //Dibujamos y movemos los galónes de gasolina
      this.gasolineGallons.forEach(gallon => {
        gallon.draw();
        gallon.move();
      })

      if (this.tick % 2000 === 0) {
        this.tick = 0;
        
        //Creamos nuevos obstaculos "galónes" de forma aleatoria desde Y
        const newGallon = new Gas(this.ctx, this.ctx.canvas.height - 25);

        //Pusheamos el nuevo obstaculo "galón" al array de galónes
        this.gasolineGallons.push(newGallon);
      }
    


      this.obstacles = this.obstacles.filter(obstacle => obstacle.hitted === false);
      this.impacts = this.impacts.filter(impact => impact.done === false);

      //Dibujamos y movemos los cocos
      this.obstacles.forEach(obstacle => {
        obstacle.draw();
        obstacle.move();
      })

      this.impacts.forEach(impact => {
        impact.draw();
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

      this.splash.draw();

      this.checkCollitions();

      this.checkSplash();

    }, 1000 / 60);
  }
  
  stop() {
    this.running = false;
    clearInterval(this.intervalId);
  }

  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.obstacles = this.obstacles.filter(obstacle => obstacle.x + obstacle.w > 0);
  }

  checkCollitions() {
  
    this.obstacles.forEach(obstacle => {
      if (this.biker.collidesWith(obstacle)) {
        //this.biker.health -=1;
        obstacle.hitted = true;
        // una posicion en x del obstaculo -> obstacle.x
        // una posicion en y del obstaculo -> obstacle.y
        const impact = new Impact(this.ctx, obstacle.x - 10, obstacle.y - 30);
        this.impacts.push(impact);

        setTimeout(() => {
          impact.done = true
        }, 100)

        console.log("health:: "+ this.biker.health);
        // new Impact(this.ctx, x del obstaculo, y la y del obstaculo)
      }
    })
  }

  checkSplash() {
    this.puddlesWater.forEach(puddle => {
      if (this.biker.collidesWith(puddle)) {

        this.splash = new Splash(this.ctx, puddle.x - 15, puddle.y);
        this.splashing.push(splash);
        
        setTimeout(() => {
          splash.done = true
        }, 1000)
        console.log(this.splashing)
        console.log("here");
      }
    })
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