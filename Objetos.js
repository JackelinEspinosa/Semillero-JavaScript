var john = {
	firstName: 'John',
	lastName: 'Doe',
	birthYear: 1990
}


console.log(john.firstName); // 'John'

john.firstName = 'Jane';

console.log(john.firstName); // 'Jane'

john['firstName'] = 'Joe';

console.log(john.firstName); // 'Joe'

console.log(john['lastName']); // 'Doe'






