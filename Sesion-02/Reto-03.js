// Inicia un bucle que recorrerá números desde 2 hasta 100
for (var counter = 2; counter <= 100; counter++) {
    // Inicializa una variable para verificar si el número es primo
    var isPrime = true;
  
    // Inicia un bucle interno para verificar si el número es divisible por algún otro número
    for (var i = 2; i <= counter; i++) {
      // Verifica si el número es divisible por 'i' y si 'i' no es igual al número en sí mismo
      if (counter % i === 0 && i !== counter) {
        // Si el número es divisible por algún otro número que no sea 1 o el propio número, no es primo
        isPrime = false;
      }
    }
  
    // Si la variable isPrime es verdadera después de revisar todos los posibles divisores, el número es primo
    if(isPrime) {
      
      console.log(counter);
    }
  }