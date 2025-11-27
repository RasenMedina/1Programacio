"use strict";
alert("Rasen programador pro");

/*
Calcula les coordenades entre -5 i +5 de la gràfica de la funció Y = ((X - 2 ) / 5)2 + 4

Els resultats s'han de mostrar amb un decimal i separats amb el caràcter |:
*/

let missatge= "";
let y;

for(let i=-5;i<=5;i+=0.5){
  y = Math.pow(((i-2)/5),2)+4;
  missatge += "(" + i.toFixed(1)+"|"+y.toFixed(1)+")\n";
}
 console.log(missatge);
