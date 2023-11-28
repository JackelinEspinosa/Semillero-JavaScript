//Event handlers

// window.addEventListener("click", function() {
//   console.log("Hello world!")

// })

//Eventos y nodos del DOM

var button = document.querySelector("button");


// button.addEventListener("click", () => {

//     console.log("Button clicked.")
// });


function once(){
    console.log("click once")
    button.removeEventListener("click", once);


}

button.addEventListener("click", once)