class Background {
  
    constructor(ctx) {
      this.ctx = ctx
  
      this.x = 0
      this.y = 0
  
      this.h = this.ctx.canvas.height
      this.w = this.ctx.canvas.width
  
      this.vx = -2
  
      this.img = new Image()
      this.img.src = 'assets/img/backgroundBeach.jpeg';
    }
  
    draw() {
        //Con esto añadimos los parametros para que la imagen se pinte 2 veces,
        //una seguida de la otra

        this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
        this.ctx.drawImage(this.img, this.x + this.w, this.y, this.w, this.h);
    }
  
    move() {
      this.x += this.vx
  
      if (this.x <= -this.w) {
        //Con esto reseteamos la posición del background
        this.x = 0;
      }
    }
  }