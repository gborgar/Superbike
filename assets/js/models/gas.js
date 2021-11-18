class Gas {
  constructor(ctx, x) {
    this.ctx = ctx;
    this.x = this.ctx.canvas.width + 35;
    this.y = this.ctx.canvas.height - 150;
    this.w = 30;
    this.h = 30;
    this.vx = 0;
    this.vy = 0;
    this.ay = 0;

    this.img = new Image();
    this.img.frames = 1;
    this.img.frameIndex = 0;
    this.img.src = 'assets/img/gas.png';
  }

  draw() {
    //Indicamos los parametros para dibujar obstaculos "charcos"
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }

  move() {
    this.y += this.vy;
    this.x += this.vx;

    if (this.y + this.h >= this.ctx.canvas.height - 300) {
      this.vx = -6
      this.vy = 0;
    }
  }
}