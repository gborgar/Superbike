class Splash {
    constructor(ctx, x, y) {
      this.ctx = ctx;
      this.x = x;
      this.y = y;
      this.h = 35;
      this.w = 78;
      
    this.done = false
      this.img = new Image();
      this.img.frames = 1;
      this.img.frameIndex = 0;
      this.img.src = 'assets/img/splash.png';
    }
  
    draw() {
      //Indicamos los parametros para dibujar los splash
      this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
      
    }
  }