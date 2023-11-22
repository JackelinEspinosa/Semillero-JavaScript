var john = {
	firstName: 'John',
	lastName: 'Doe',
	birthYear: 1990,
	calculateAge: function(birthYear) {
		var today = new Date();
		var year = today.getFullYear();

		return year - birthYear;
	}
}
console.log( john.calculateAge(1990) );


///
var john = {
	firstName: 'John',
	lastName: 'Doe',
	birthYear: 1990,
	calculateAge: function() {
		var today = new Date();
		var year = today.getFullYear();

		return year - this.birthYear;
	}
}

john.calculateAge();

console.log( john );
