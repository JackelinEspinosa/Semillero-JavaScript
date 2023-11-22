// Definir una función llamada calculateAverage que toma una matriz de números como parámetro y devuelve el promedio.
function calculateAverage(numbers) {
    var sum = 0; // Inicializar la variable sum para almacenar la suma de los números.
  
    // Iterar a través de la matriz de números.
    for (var i = 0; i < numbers.length; i++) {
      sum += numbers[i]; // Sumar cada número al total.
    }
  
    // Calcular el promedio dividiendo la suma total por la cantidad de números en la matriz.
    return sum / numbers.length;
  }
  
  // Crear una matriz de números.
  var numbersArray = [1, 2, 3, 4, 5];
  
  // Calcular el promedio llamando a la función calculateAverage y pasarle la matriz de números como argumento.
  var average = calculateAverage(numbersArray);
  
  // Imprimir el resultado en la consola.
  console.log("El promedio es:", average);
  
  