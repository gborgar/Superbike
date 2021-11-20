class Obstacle {
  constructor(ctx, x) {
    this.ctx = ctx;
    this.x = x;
    this.y = 120;
    this.w = 22;
    this.h = 22;
    this.vx = 0;
    this.vy = 16;
    this.ay = 0;
    this.hitted = false;
    this.crashSound = new Audio("assets/sounds/impact-sound.mp3");
    this.img = new Image();
    this.img.frames = 1;
    this.img.frameIndex = 0;
    this.img.src = 'assets/img/coconut.png';
  }

  draw() {
    //Indicamos los parametros para dibujar obstaculos "cocos"
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }

  move() {
    this.y += this.vy;
    this.x += this.vx;

    if (this.y + this.h >= this.ctx.canvas.height - 35) {
      this.vx = -2
      this.vy = 0;
    }
  }

  crash() {
    this.hitted = true;
    this.crashSound.play();
  }
}