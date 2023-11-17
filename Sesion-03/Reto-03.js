// Función recursiva para obtener el número de Fibonacci en una posición dada
function fibonacci(num) {
    // Caso base: si el número es 0 o 1, devuelve 1
    if (num <= 1) return 1;
    
    // Caso recursivo: devuelve la suma de los dos números anteriores en la serie de Fibonacci
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
  
  // Función que genera y muestra en consola la serie de Fibonacci hasta un límite dado
  function fibonacciSequence(limit) {
    // Verifica que el límite sea mayor que 0
    if (limit < 1) return console.log('Limit must be greater than 0');
    
    // Array para almacenar la serie de Fibonacci
    var sequence = [];
    
    // Bucle para generar la serie hasta el límite dado
    for (var i = 0; i < limit; i++) {
      // Llena el array con los elementos de la serie de Fibonacci
      sequence.push(fibonacci(i));
    }
    
    // Muestra en consola un mensaje y la serie de Fibonacci separada por comas
    console.log('En la serie de Fibonacci:');
    console.log(sequence.join(', '));
  }

  fibonacciSequence(1); // Salida: 1
  fibonacciSequence(2); // Salida: 1, 1
  fibonacciSequence(5); // Salida: 1, 1, 2, 3, 5
  
  