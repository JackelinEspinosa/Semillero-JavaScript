function arrayToObject(arr) {
    var obj = {};
  
    for(var i = 0; i < arr.length; i++) {
      obj[arr[i][0]] = arr[i][1]
    }
  
    return obj;
  }
  var arreglo = [['Nombre', 'Jackelin'], ['Edad', 21], ['Ciudad', 'Duitama']];
  var objetoResultado = arrayToObject(arreglo);
  
  console.log(objetoResultado);
    