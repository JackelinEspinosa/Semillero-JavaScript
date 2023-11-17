var speed = 120;
var message;

if(speed > 100) {
	message = "You're going too fast!";
} else {
	message = "Under the limit";
}

console.log(message);	// You're going too fast!

var speed =120;

var message = speed > 100 ?"you're goint too fast!" :"under the limit";
console.log(message);  // You're going too fast!