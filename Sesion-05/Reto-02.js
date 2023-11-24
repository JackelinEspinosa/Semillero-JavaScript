// Definición del constructor Group
var Group = function() {
    // Inicializa un arreglo para almacenar los miembros del grupo
    this.members = [];
  }
  
  // Método para agregar un valor al grupo si no existe ya
  Group.prototype.add = function(value) {
    // Verifica si el valor no está presente antes de agregarlo
    if (!this.has(value)) {
      // Agrega el valor al arreglo de miembros del grupo
      this.members.push(value);
    }
  }
  
  // Método para verificar si un valor está presente en el grupo
  Group.prototype.has = function(value) {
    // Utiliza el método includes para determinar si el valor está en el arreglo de miembros
    return this.members.includes(value);
  }
  
  // Método estático para crear un grupo a partir de una colección de valores
  Group.from = function(collection) {
    // Crea una nueva instancia de Group
    var group = new Group();
  
    // Itera sobre la colección y agrega cada valor al grupo
    for (var i = 0; i < collection.length; i++) {
      group.add(collection[i]);
    }
  
    // Retorna el grupo creado a partir de la colección
    return group;
  }
  
  // Crea un grupo a partir de la colección [1, 2, 3, 4, 5]
  var group = Group.from([1, 2, 3, 4, 5]);
  
  // Imprime el grupo creado
  console.log(group); // Debería imprimir: Group { members: [ 1, 2, 3, 4, 5 ] }
  
  // Verifica si el grupo tiene el valor 5 (debería ser true)
  console.log(group.has(5)); // Debería imprimir: true
  
  // Verifica si el grupo tiene el valor 10 (debería ser false)
  console.log(group.has(10)); // Debería imprimir: false
  
  // Agrega el valor 10 al grupo
  group.add(10);
  
  // Verifica nuevamente si el grupo tiene el valor 10 (debería ser true)
  console.log(group.has(10)); // Debería imprimir: true
  