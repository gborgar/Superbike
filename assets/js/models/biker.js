class Biker {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 100;
    this.y = 300;
    this.w = 85;
    this.h = 70,
    this.vx = 0;
    this.vy = 2; 
    this.ay = 1;

    this.img = new Image();
    this.img.drawCount = 0;
    this.img.frames = 4;
    this.img.frameIndex = 0;
    this.img.src = 'assets/img/biker1';
  }

  draw() {
    this.img.drawCount++

    //Indico que se dibuje el rectángulo con los parametros indicados.
    this.ctx.drawImage(
      this.img,
      this.img.frameIndex * this.img.width / this.img.frames, 0,
      this.img.width / 4,
      this.img.height,
      this.y,
      this.w,
      this.h
    );
  }

  move() {
    //Para mover al biker primero le sumamos aceleración a la velocidad
    this.vy += this.ay;

    //Luego le sumamos velocidad a la posición
    this.x += this.vx;
    this.y += this.vy;

    //Si tocamos la derecha del canvas
    if (this.x + this.w >= this.ctx.canvas.width) {
      this.x = this.ctx.canvas.width - this.w;
      //this.vx = -this.vx;
    }

    //Si tocamos la izquierda del canvas
    if (this.x <= 0) {
      this.x = 0;
     
    }

    //Si toca el suelo del canvas
    if (this.y + this.h >= this.ctx.canvas.height -30) {
      //this.y = this.ctx.canvas.height - this.h;
      //this.vy = -this.vy;
      this.vy = 0;
    }
    // this.y += this.vy;
    // this.x += this.vx;

    // if (this.y + this.h >= this.ctx.canvas.height - 30) {
    //   this.vx = -2
    //   this.vy = 0;

    //Si toca el techo del canvas
    if (this.y <= 0) {
      this.vy = -this.vy;
    }
  }

  onKeyDown(code) {
    //Le pasamos los eventos 
    if (code === RIGHT_KEY) {
      this.vx = 10;
    }

    if (code === LEFT_KEY) {
      this.vx = -10;
    }

    if (code === TOP_KEY) {
      this.vy = -15;
    }

    if (code === DOWN_KEY) {
      (this.y + this.h) / 2;
    }
  }

  onKeyUp(code) {
    if (code === RIGHT_KEY || code === LEFT_KEY) {
      this.vx = 0;
    }
  }
}