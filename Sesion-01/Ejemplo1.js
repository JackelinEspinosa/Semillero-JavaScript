//typeof

// Numbers
typeof 10;	// "number"
typeof 12.5;	// "number"
typeof 2.5e+6;	// "number"
typeof Infinity;	// "number"
typeof NaN;	// "number"

// Strings
typeof ' ';	// "string" - Espacios en blanco cuentan como caracteres
typeof 'Hello World';	// "string"
typeof '12';	// "string" - Números dentro de comillas son strings

// Booleans
typeof true;	// "boolean"
typeof false;	// "boolean"

// Undefined
typeof undefined;	// "undefined"

var name;
typeof name; // "undefined" - Aún no se asigna un valor

// Null
typeof Null;	// "object"