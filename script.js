var miVariable=5;

var miTxt= document.getElementById("txt");
var texto="";

function miFuncion(){
    texto = miTxt.value;
    alert(texto);
}

function borrar(){
    miTxt.value="";
}


function cambiarPagina(){
    
    const nuevoColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    
    document.body.style.backgroundColor = nuevoColor;
    
  }