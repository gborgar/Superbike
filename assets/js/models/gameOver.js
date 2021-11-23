class GameOver {
  constructor(ctx) {
    this.ctx = ctx;
    
    this.x = 0;
    this.y = 0;

    this.h = this.ctx.canvas.height;
    this.w = this.ctx.canvas.width;

    this.vx = -2;

    this.img = new Image();
    this.img.src = 'assets/img/game-over.jpeg';
  }

  draw() {
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }

  move() {
    this.x += this.vx
  }
}