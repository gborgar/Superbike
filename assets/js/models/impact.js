class Impact {
  constructor(ctx, x, y) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    

    this.img = new Image();
    this.img.frames = 1;
    this.img.frameIndex = 0;
    this.img.src = 'assets/img/impact.png';
  }

  draw() {
    //Indicamos los parametros para dibujar los impactos
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    
  }
}