class Obstacle {
  constructor(ctx, x) {
    this.ctx = ctx;
    this.x = x;
    this.y = 120;
    this.w = 25;
    this.h = 25;
    this.vx = 0;
    this.vy = 4;
    this.ay = 1;

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

    if (this.y + this.h >= this.ctx.canvas.height - 30) {
      this.vx = -2
      this.vy = 0;
    }
  }
}