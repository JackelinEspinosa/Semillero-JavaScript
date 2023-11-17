// for(var i = 0; i<=50; i++){
//     // Código a ejecutar en cada ciclo
// }

// for. La sintaxis para el inicio del ciclo. Posteriormente, abrimos paréntesis y dentro habrán 3 valores.
// Inicializador. El primer valor en el cual declaras la variable, incluyendo con cuál número inicia el ciclo.
// Condición. El segundo valor es la condición, lo que tiene que pasar para terminar la iteración.
// Incrementable. El tercer valor es el incrementable. Cada vez que termina todas las sentencias de ejecución, 
// la variable aumenta en 1. Esto se debe al operando ++.

// console.log("Hello World"); x 200 


for(var i = 0; i <= 200; i++ ){
    console.log("Hello World");
}

// Otro ciclo es while, el cual se repite siempre y cuando la condición especificada sea evaluada como true.

// while(condición) {
// 	// Código a ejecutar en cada ciclo
// }

var i = 0;

while(i <= 200){
	console.log("Hello World con while");
    i++;
}