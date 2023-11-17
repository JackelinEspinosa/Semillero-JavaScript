// function myFunction(par1, par2){
//      Codigo a ejecutar
//   }
  
//   function - La palabra clave que usamos para definir una función.
  
//   myFunction - Es el nombre que le damos a la función. Puede contener letras, números, guión bajo y el signo de dólar.
  
//   (parameter1, parameter2) - Dentro de los paréntesis colocamos los parámetros de la función separados por coma. 
//   Los parámetros son variables que se van a usar dentro de la función y no es necesario declararlas nuevamente dentro de la función. 
//   Algunas funciones no reciben parámetros, por lo que los paréntesis pueden ir vacios.


function calculateAge(birthYear) {
    var age = 2023 - birthYear;
    return age;
}
var ageJohn = calculateAge(1995);
console. log(ageJohn);


function yearsUntilRetirement(year, name) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    console.log(name + ' retires in ' + retirement + ' years.');
  }
  yearsUntilRetirement(1995, 'John Doe');