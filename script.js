var ArticuloTXT=document.getElementById(ArticuloTXT);
var MontTXT=document.getElementById(MontTXT);

var Articulo='';
var Monto=0;
var Total=0;

var seccionTicket=document.getElementById('ticket');
var totalParrafo=document
function agregar(){
    Monto=parseInt(MontoTXT.value);

    total=Total + Monto;

    var nuevoElemento=document.createElement('p');
    nuevoElemento.innerHTML=Articulo + '..........$' + Monto;

    

    seccionTicket.appendChild(nuevoElemento);
    seccionTicket.insertBefore(nuevoElemento, totalParrafo);

    limpiar();

}

function limpiar(){
    
}
