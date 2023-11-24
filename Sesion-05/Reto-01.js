// Definición de la función constructora Vec
var Vec = function(x, y) {
    // Propiedades del objeto Vec
    this.x = x;
    this.y = y;
  }
  
  // Método para sumar dos vectores
  Vec.prototype.plus = function(other) {
    // Retorna un nuevo objeto Vec con las coordenadas sumadas
    return new Vec(this.x + other.x, this.y + other.y);
  }
  
  // Método para restar dos vectores
  Vec.prototype.minus = function(other) {
    // Retorna un nuevo objeto Vec con las coordenadas restadas
    return new Vec(this.x - other.x, this.y - other.y);
  }
  
  // Método para calcular la longitud del vector usando el teorema de Pitágoras
  Vec.prototype.length = function() {
    // Retorna la raíz cuadrada de la suma de los cuadrados de las coordenadas
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  
  // Creación de dos instancias de Vec
  var vec1 = new Vec(1, 2);
  var vec2 = new Vec(2, 3);
  
  console.log(vec1.plus(vec2)); // Debería imprimir: Vec { x: 3, y: 5 }
  console.log(vec1.minus(vec2)); // Debería imprimir: Vec { x: -1, y: -1 }
  console.log(vec1.length()); // Debería imprimir: 2.23606797749979
  