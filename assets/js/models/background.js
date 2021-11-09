class Background {
  
    constructor(ctx) {
      this.ctx = ctx
  
      this.x = 0
      this.y = 0
  
      this.h = this.ctx.canvas.height
      this.w = this.ctx.canvas.width
  
      this.vx = -2
  
      this.img = new Image()
      this.img.src = 'assets/img/backgroundBeach.jpg';
    }
  
    draw() {
        //TODO añadir parámetros para pintar la imagen (¡ 2 veces !)
        this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
        this.ctx.drawImage(this.img, this.x + this.w, this.y, this.w, this.h);
    }
  
    move() {
      this.x += this.vx
  
      if (this.x <= -this.w) {
        //TODO resetear la posición del background
        this.x = 0;
      }
    }
  }