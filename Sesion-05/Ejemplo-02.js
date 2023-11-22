// Herencia
// En términos simples la herencia es cuando un objeto está basado en otro objeto, 
// es decir, un objeto puede acceder a las propiedades y métodos de otro objeto.

//contructor 1 

var Person = function(name) {
    this.name = name;
  }

   var john = new Person ('Jhon');

 //contructor 2   

  var Developer = function(name, skills, yearsOfExperience) {
      Person.call(this, name);
  
      this.skills = skills;
      this.yearsOfExperience = yearsOfExperience;
  }
  
  var Jackelin = new Developer('Jackelin', 'JavaScript', 1);
  
  console.log( Jackelin );