class Obstacles {
  constructor(ctx, x) {
    this.ctx = ctx;
    this.x = x;
    this.y = -20;
    this.w = 10;
    this.h = 10;
    this.vx = 0;
    this.vy = 2;
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
  }
}