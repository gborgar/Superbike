class Plus {
  constructor(ctx, x, y) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.h = 30;
    this.w = 30;
    this.done = false;

    this.img = new Image();
    this.img.frames = 1;
    this.img.frameIndex = 0;
    this.img.src = 'assets/img/plus.png';
  }

  draw() {
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);    
  }
}