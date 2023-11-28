// Esta función crea una tabla HTML a partir de un conjunto de datos.
function buildTable(data) {
    // Crea el elemento <table> en el DOM.
    var table = document.createElement("table");
  
    // Obtiene las claves (nombres de columnas) del primer objeto en el conjunto de datos.
    var fields = Object.keys(data[0]);
  
    // Crea la fila de encabezado <tr> de la tabla.
    var headRow = document.createElement("tr");
  
    // Itera sobre las claves (nombres de columnas).
    fields.forEach(function(field) {
      // Crea una celda de encabezado <th> para cada nombre de columna.
      var headCell = document.createElement("th");
  
      // Agrega el nombre de la columna como texto a la celda de encabezado.
      headCell.appendChild(document.createTextNode(field));
  
      // Agrega la celda de encabezado a la fila de encabezado.
      headRow.appendChild(headCell);
    });
  
    // Agrega la fila de encabezado a la tabla.
    table.appendChild(headRow);
  
    // Itera sobre cada objeto en el conjunto de datos.
    data.forEach(function(object) {
      // Crea una fila <tr> para cada objeto.
      var row = document.createElement("tr");
  
      // Itera sobre las claves (nombres de columnas) nuevamente.
      fields.forEach(function(field) {
        // Crea una celda <td> para cada valor de la columna en el objeto.
        var cell = document.createElement("td");
  
        // Agrega el valor como texto a la celda.
        cell.appendChild(document.createTextNode(object[field]));
  
        // Si el valor es de tipo número, alinea el texto a la derecha.
        if (typeof object[field] == "number") {
          cell.style.textAlign = "right";
        }
  
        // Agrega la celda a la fila.
        row.appendChild(cell);
      });
  
      // Agrega la fila a la tabla.
      table.appendChild(row);
    });
  
    // Devuelve la tabla creada.
    return table;
  }
  
  // Obtiene el elemento con el id "mountains" en el DOM y agrega la tabla generada a ese elemento.
  document.getElementById("mountains")
     .appendChild(buildTable(data));