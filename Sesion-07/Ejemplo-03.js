function createNode(type, child) {
    var node = document.createElement(type);
    var text = document.createTextNode(child);
  
    node.appendChild(text);
  
    return node;
  }
  
  console.log(createNode('h1', 'Hello World')); 

  //Como anidar nodos con la misma funcionn

  function createNode2(type, child) {
    var node = document.createElement(type);
  
    if(typeof child === "string") {
      var text = document.createTextNode(child);
      node.appendChild(text);
    } else {
      node.appendChild(child);
    }

    return node;
  }

  document.getElementById("quote")
  .appendChild(
    createNode2("footer", createNode2("strong", "- Karl Popper"))
  )
  
  console.log(createNode2('h1', createNode2('strong', 'Hello World')));