// Definición de la función power con dos parámetros: base y exponente
function power(base, exponent) {
    // Inicialización de la variable result con el valor 1
    var result = 1;
    
    // Bucle for que se ejecuta desde i = 0 hasta i < exponent
    for(var i = 0; i < exponent; i++) {
        // Multiplicación acumulativa: result = result * base;
        result *= base;
         // result = result * base;
    }
    
    // Devuelve el resultado de la operación de potencia
    return result;
}

// Llamada a la función power con los argumentos 3 y 3, el resultado se almacena en la variable pw
var pw = power(3, 3);

// Imprime en la consola el resultado de la operación de potencia
console.log(pw);