function logName(){
    var name = "John Doe"
    console.log(name);
}

logName();

//convertir esta función en una IIFE
// Como ya fue ejecutada y es anónima, no hay forma de que podamos volver a llamar la función de nuevo.
(function() {
    var name = "John Doe desde una IIFE";
    console.log(name);
})();

// con parametros o argumentos

(function(lastName) {
    var firstName = "John";
    console.log(firstName + ' ' + lastName);
})('Doe desde IIFE con Argumentos o parametros');