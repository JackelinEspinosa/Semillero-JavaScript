//Este es un ejemplo de código imperativo

var numbers = [1, 2, 3, 4, 5];
var doubles = [];

for(var i = 0; i < numbers.length; i++) {
	doubles.push(numbers[i] * 2);
}

console.log(numbers); // [1, 2, 3, 4, 5]
console.log(doubles); // [2, 4, 6, 8, 10]



//Esta es la forma declarativa del mismo código
var numbersD = [1, 2, 3, 4, 5];

var doublesD = numbersD.map(function(numberD) {
	return numberD * 2;
});

console.log(numbersD); // [1, 2, 3, 4, 5]
console.log(doublesDs); // [2, 4, 6, 8, 10]


//Funcion Pura

function add(a, b) {
	return a + b;
}

add(1, 2) // 3

//Funcion inPura
function randomNumber() {
	return Math.floor(Math.random() * 10);
}