// Definición de la función que devuelve el número más grande entre dos números
function getLergerInt(number1, number2) {
  // Comprueba si number1 es mayor que number2
  if (number1 > number2) {
    // Si es cierto, devuelve number1
    return number1;
  } else {
    // Si no es cierto (es decir, number2 es mayor o son iguales), devuelve number2
    return number2;
  }
}

// Llamada a la función con los valores 5 y 10, el resultado se almacena en la variable "resultado"
var resultado = getLergerInt(5, 10);

// Imprime el resultado en la consola
console.log(resultado);
