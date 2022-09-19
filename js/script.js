
let palabras =["ALURA" , "MAMA","DIBUJO","CELULAR","MORA"];
let palabraSecreta = "";

// function iniciarJuego(){
//     document.getElementById("btn-agregarp").style.display ="none";
// }

let tablero = document.getElementById("areadibujo");
let pincel = tablero.getContext("2d");

function escojerPalabraSecreta(){
     let palabra = palabras[Math.floor(Math.random() * palabras.length)];
     palabraSecreta = palabra;
     console.log(palabraSecreta);
     dibujarCanvas()
     console.log("hola mundo");
     dibujarCanvas();
     dibujar();
}




