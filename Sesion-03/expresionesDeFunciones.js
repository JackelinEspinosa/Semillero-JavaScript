//declaraciones de funciones 
// function whatDoYouDo(job, name) {
//    // ...
//   }

 // expresión de función o funcion anonima 

 var whatDoYouDo = function(job, name){
    switch (job) {
     case 'developer':
      return name + ' develops cool apps.';
     case 'designer':
      return name + ' designs awesome websites.';
     default:
     return name + ' does something else.'

    }
 }

console.log(whatDoYouDo('developer', 'John Doe'));
console.log(whatDoYouDo('designer', 'Jane Doe'));
console.log(whatDoYouDo('retired', 'Mark Doe'));


var square = function(number) {
	return number * number;
}

var squareOfFour = square(4);

console.log(squareOfFour); // 16

// las expresiones de funciones también pueden tener
//  un nombre para referirse a sí mismas, como en una función recursiva.

var factorial = function fac(number) {
	return number < 2 ? 1 : number * fac(number - 1)
}

console.log(factorial(5)); // 120