function Punto(x, y) {
    this.x = x;
    this.y = y;
  
    this.suma = function (punto) {
      return new Punto(this.x + punto.x, this.y + punto.y);
    };
  
    this.toString = function () {
      return `(${this.x}, ${this.y})`;
    };
  }
  
  let p1 = new Punto(1, 2);
  let p2 = new Punto(2, 3);
  console.log(p1.suma(p2).toString());
  