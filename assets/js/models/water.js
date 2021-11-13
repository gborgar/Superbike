class Water {
  constructor(ctx, x) {
    this.ctx = ctx;
    this.x = this.ctx.canvas.width + 35;
    this.y = this.ctx.canvas.height - 65;
    this.w = 45;
    this.h = 45;
    this.vx = 0;
    this.vy = 0;
    this.ay = 0;

    this.img = new Image();
    this.img.frames = 1;
    this.img.frameIndex = 0;
    this.img.src = 'assets/img/water.png';
  }

  draw() {
    //Indicamos los parametros para dibujar obstaculos "charcos"
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